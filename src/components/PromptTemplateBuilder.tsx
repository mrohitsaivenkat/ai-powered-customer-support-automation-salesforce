import React, { useState, useEffect } from "react";
import { Case, Order, Product, Customer } from "../types";
import { defaultPromptTemplateText } from "../data/mockCrmData";
import { Sparkles, Code, Play, RefreshCw, AlertCircle, Copy, Check } from "lucide-react";

interface PromptTemplateBuilderProps {
  initialCase: Case;
  initialOrder: Order;
  initialProduct: Product;
  initialCustomer: Customer;
}

export default function PromptTemplateBuilder({
  initialCase,
  initialOrder,
  initialProduct,
  initialCustomer
}: PromptTemplateBuilderProps) {
  // Playground state
  const [templateText, setTemplateText] = useState(defaultPromptTemplateText);
  const [groundedPrompt, setGroundedPrompt] = useState("");
  const [generatedDraft, setGeneratedDraft] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Re-verify calculations based on dynamic input
  const warrantyText = initialCase.warrantyValid 
    ? "Active & Eligible for free replacement" 
    : "Expired, but we can offer a 20% loyalty repair discount";

  // Ground prompt template: Replace merge tokens with live customer details
  const groundTemplate = () => {
    let text = templateText;
    text = text.replace(/\{\!\$Input:Case\.Contact\.FirstName\}/g, initialCustomer.firstName);
    text = text.replace(/\{\!\$Input:Case\.Contact\.LastName\}/g, initialCustomer.lastName);
    text = text.replace(/\{\!\$Input:Case\.Subject\}/g, initialCase.subject);
    text = text.replace(/\{\!\$Input:Case\.Description\}/g, initialCase.description);
    text = text.replace(/\{\!\$Input:Case\.Related_Order__r\.Product__r\.Name\}/g, initialProduct.name);
    text = text.replace(/\{\!\$Input:Case\.Related_Order__r\.Name\}/g, initialOrder.id);
    text = text.replace(/\{\!\$Input:Case\.Related_Order__r\.Purchase_Date__c\}/g, initialOrder.purchaseDate);
    text = text.replace(/\{\!\$Input:Case\.Related_Order__r\.Shipment_Status__c\}/g, initialOrder.shipmentStatus);
    text = text.replace(/\{\!\$Input:Case\.Related_Order__r\.Tracking_ID__c\}/g, initialOrder.trackingId || "PENDING");
    text = text.replace(/\{\!\$Input:Case\.Warranty_Valid__c\}/g, String(initialCase.warrantyValid));
    text = text.replace(/\{\!IF\(\$Input:Case\.Warranty_Valid__c,\s*'[^']+',\s*'[^']+'\)\}/g, warrantyText);
    
    setGroundedPrompt(text);
  };

  // Re-ground whenever variables or template text changes
  useEffect(() => {
    groundTemplate();
  }, [templateText, initialCase, initialOrder, initialProduct, initialCustomer]);

  // Execute Gemini AI Generation using the grounded instructions
  const handleGenerateDraft = async () => {
    setIsLoading(true);
    setApiError(null);
    try {
      const response = await fetch("/api/agentforce/prompt-template", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: groundedPrompt
        })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Generation failed. Verify server is running.");
      }

      const data = await response.json();
      setGeneratedDraft(data.text);
    } catch (err: any) {
      console.error(err);
      setApiError(err.message || "Could not reach Gemini service. Set GEMINI_API_KEY.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 h-[calc(100vh-220px)] overflow-y-auto pr-1">
      {/* Left panel: Prompt Instructions & Grounding */}
      <div className="bg-slate-900/40 border border-slate-900 rounded-xl shadow-xl flex flex-col h-full overflow-hidden">
        <div className="p-4 border-b border-slate-900 bg-slate-950/40">
          <div className="flex items-center gap-2 mb-1">
            <Code className="w-5 h-5 text-emerald-400" />
            <h3 className="font-black text-slate-100 text-sm uppercase tracking-wide">Einstein Prompt Builder Workstation</h3>
          </div>
          <p className="text-slate-400 text-[10px] font-medium">Create standard template instruction nodes and bind dynamic Salesforce merge parameters.</p>
        </div>

        {/* Input variables display info bar */}
        <div className="px-4 py-2 bg-emerald-500/5 border-b border-slate-900 flex flex-wrap gap-2 items-center text-[10px] text-slate-300 font-medium">
          <span className="font-bold text-slate-400 uppercase tracking-wider text-[9px]">Active Context:</span>
          <span className="bg-slate-950 border border-slate-850 px-1.5 py-0.5 rounded font-mono text-slate-200">{initialCase.id}</span>
          <span className="font-bold text-slate-400 uppercase tracking-wider text-[9px]">Contact:</span>
          <span className="bg-slate-950 border border-slate-850 px-1.5 py-0.5 rounded text-slate-200">{initialCustomer.name}</span>
          <span className="font-bold text-slate-400 uppercase tracking-wider text-[9px]">Order:</span>
          <span className="bg-slate-950 border border-slate-850 px-1.5 py-0.5 rounded font-mono text-slate-200">{initialOrder.id}</span>
          <span className="font-bold text-slate-400 uppercase tracking-wider text-[9px]">Warranty:</span>
          <span className={`px-1.5 py-0.5 rounded font-bold uppercase tracking-wider text-[9px] border ${initialCase.warrantyValid ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-red-500/10 text-red-400 border-red-500/20"}`}>
            {initialCase.warrantyValid ? "Valid" : "Expired"}
          </span>
        </div>

        <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto bg-slate-950/10">
          {/* Instructions Box */}
          <div className="flex-1 flex flex-col gap-1.5">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Template Instructions (Edit raw text below)</label>
            <textarea
              value={templateText}
              onChange={e => setTemplateText(e.target.value)}
              className="flex-1 w-full p-3 font-mono text-[11px] bg-slate-950 border border-slate-850 rounded-lg text-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 leading-relaxed resize-none h-[220px]"
            />
          </div>

          {/* Grounded preview */}
          <div className="bg-slate-950/60 rounded-lg p-3 border border-slate-900">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Grounded Preview (Evaluated Salesforce Context)</span>
            <div className="bg-slate-950 p-2.5 rounded border border-slate-850 font-mono text-[10px] text-slate-300 max-h-[160px] overflow-y-auto leading-relaxed whitespace-pre-wrap">
              {groundedPrompt}
            </div>
          </div>
        </div>

        {/* Footer controls */}
        <div className="p-3 border-t border-slate-900 bg-slate-950/40 flex justify-end">
          <button
            onClick={handleGenerateDraft}
            disabled={isLoading}
            className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black uppercase tracking-wider text-xs px-4 py-2 rounded-lg shadow-md transition flex items-center gap-1.5 disabled:opacity-50"
          >
            {isLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            <span>Preview Grounded Draft</span>
          </button>
        </div>
      </div>

      {/* Right panel: LLM Completed Draft response */}
      <div className="bg-slate-950/20 border border-slate-900 rounded-xl shadow-xl flex flex-col h-full overflow-hidden">
        <div className="p-4 border-b border-slate-900 bg-slate-950/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <h3 className="font-black text-slate-100 text-sm uppercase tracking-wider">Einstein Generated Result</h3>
            </div>
            {generatedDraft && (
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 px-2.5 py-1 rounded text-[11px] font-bold transition shadow"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy Draft"}</span>
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          {isLoading ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-3">
              <RefreshCw className="w-8 h-8 text-emerald-400 animate-spin" />
              <p className="text-xs font-bold text-slate-300">Running prompt grounding on Gemini models...</p>
              <p className="text-[10px] text-slate-500 max-w-xs font-medium">Einstein is injecting Contact variables, calculating warranty formulas, and drafting your reply letter.</p>
            </div>
          ) : apiError ? (
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-start gap-3 text-red-300 shadow-xl">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div className="text-xs leading-relaxed space-y-1.5">
                <h5 className="font-black text-red-400 uppercase tracking-wider">Gemini Secret Key Needed</h5>
                <p className="font-medium">{apiError}</p>
                <div className="text-[10px] text-red-300 bg-red-950/40 p-2.5 rounded border border-red-900 mt-2 font-mono leading-relaxed">
                  1. Go to <strong>Settings &gt; Secrets</strong> top menu.<br />
                  2. Add your secret key as <code>GEMINI_API_KEY</code>.<br />
                  3. We run all prompt resolutions on the server-side proxy safely!
                </div>
              </div>
            </div>
          ) : generatedDraft ? (
            <div className="bg-slate-900 border border-slate-850 rounded-xl p-5 shadow-inner min-h-full whitespace-pre-wrap font-sans text-xs text-slate-200 leading-relaxed">
              {generatedDraft}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-3 p-8">
              <Sparkles className="w-12 h-12 text-slate-700" />
              <h4 className="font-bold text-slate-400 text-sm uppercase tracking-wide">Ready to Draft</h4>
              <p className="text-xs text-slate-500 max-w-xs leading-relaxed font-medium">Click "Preview Grounded Draft" to execute the template. The system will merge variables from standard objects and construct responses automatically.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
