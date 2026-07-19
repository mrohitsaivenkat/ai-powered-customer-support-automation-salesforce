import React, { useState, useRef, useEffect } from "react";
import { Case, ChatMessage } from "../types";
import { mockCases, mockOrders, mockProducts, mockCustomers } from "../data/mockCrmData";
import { Sparkles, Send, Bot, RefreshCw, AlertCircle, HelpCircle } from "lucide-react";

export default function AgentforceChat() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(mockCases[0]?.id || "");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-msg",
      role: "model",
      text: "Hello! I am **AeroAgent**, your autonomous Agentforce AI Service Agent representing **AeroGadgets Global**. I have parsed the live customer case details and related order variables from Salesforce Service Cloud.\n\nHow can I help you resolve this case or answer customer inquiries today?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Retrieve active case variables
  const activeCase = mockCases.find(c => c.id === selectedCaseId) || mockCases[0];
  const relatedCustomer = mockCustomers.find(cu => cu.id === activeCase?.customerId);
  const relatedOrder = mockOrders.find(ord => ord.id === activeCase?.relatedOrderId);
  const relatedProduct = relatedOrder ? mockProducts.find(p => p.id === relatedOrder.productId) : null;

  // Sync scroll on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle case context change
  const handleCaseChange = (caseId: string) => {
    setSelectedCaseId(caseId);
    setApiError(null);
    const newCase = mockCases.find(c => c.id === caseId) || mockCases[0];
    const customer = mockCustomers.find(cu => cu.id === newCase?.customerId);
    
    setMessages([
      {
        id: "welcome-new-context",
        role: "model",
        text: `Active Salesforce Case Context switched to **${newCase.id}** (${customer ? customer.name : "Anonymous"}). I have loaded their purchase history and calculated warranty validity.\n\nHow should I assist you with drafting an resolution response or analyzing troubleshooting logs?`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      }
    ]);
  };

  // Submit message to the Express server-side Gemini proxy
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    setApiError(null);
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Build context structure for the server
      const contextPayload = {
        customer: relatedCustomer ? `${relatedCustomer.name} (Email: ${relatedCustomer.email}, Phone: ${relatedCustomer.phone})` : "Anonymous",
        product: relatedProduct ? { name: relatedProduct.name, sku: relatedProduct.sku, warrantyPeriod: `${relatedProduct.warrantyMonths} months` } : "None",
        orders: relatedOrder ? [
          { orderId: relatedOrder.id, purchaseDate: relatedOrder.purchaseDate, shipmentStatus: relatedOrder.shipmentStatus, trackingId: relatedOrder.trackingId, price: `$${relatedOrder.totalPrice}` }
        ] : [],
        case: { id: activeCase.id, subject: activeCase.subject, description: activeCase.description, priority: activeCase.priority, queue: activeCase.assignedQueue, warrantyValid: activeCase.warrantyValid }
      };

      const response = await fetch("/api/agentforce/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage.text,
          history: messages.slice(1), // omit welcome message from context to save tokens, or pass it
          context: contextPayload
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to retrieve AI response. Verify API keys.");
      }

      const data = await response.json();
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: "model",
        text: data.text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (err: any) {
      console.error(err);
      setApiError(err.message || "An unexpected error occurred connecting to server.");
    } finally {
      setIsLoading(false);
    }
  };

  // Format markdown-like bullet points and bold tags
  const renderMessageText = (text: string) => {
    return text.split("\n").map((para, i) => {
      // Check for bullet points
      const isBullet = para.trim().startsWith("-") || para.trim().startsWith("*");
      let cleanText = para;
      if (isBullet) {
        cleanText = para.replace(/^[-*]\s+/, "");
      }

      // Replace bold markdown like **text**
      const parts = cleanText.split(/(\*\*[^*]+\*\*)/g);
      const renderedParts = parts.map((part, idx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={idx} className="font-bold text-emerald-400">{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      if (isBullet) {
        return (
          <li key={i} className="ml-4 list-disc text-slate-300 text-xs my-0.5 leading-relaxed font-medium">
            {renderedParts}
          </li>
        );
      }
      return (
        <p key={i} className="text-slate-300 text-xs my-1 leading-relaxed whitespace-pre-wrap font-medium">
          {renderedParts}
        </p>
      );
    });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-220px)] bg-slate-900/40 border border-slate-900 rounded-xl overflow-hidden shadow-xl">
      
      {/* Top Banner Context Selector */}
      <div className="bg-slate-950/40 border-b border-slate-900 p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-500/10 border border-emerald-500/25 rounded-lg p-2 text-emerald-400 shadow-sm">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-black text-slate-100 text-sm flex items-center gap-1.5 uppercase tracking-wide">
              <span>Agentforce AI Service Agent</span>
              <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded-full text-[9px] flex items-center gap-0.5 animate-pulse">
                <Sparkles className="w-2.5 h-2.5" />
                Live Simulator
              </span>
            </h3>
            <p className="text-slate-400 text-[10px] mt-0.5 font-medium">Autonomous resolution suggestions backed by Google Gemini</p>
          </div>
        </div>

        {/* Load Salesforce record context */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">Loaded Record Context:</span>
          <select
            value={selectedCaseId}
            onChange={e => handleCaseChange(e.target.value)}
            className="text-xs bg-slate-950 border border-slate-850 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-mono text-slate-200 w-full md:w-auto"
          >
            {mockCases.map(c => (
              <option key={c.id} value={c.id}>
                {c.id} - {c.subject.substring(0, 30)}...
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Chat Messages Log */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/20">
        {messages.map((msg, i) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            {/* Avatar */}
            <div className={`p-1.5 rounded-lg flex-shrink-0 border ${
              msg.role === "user" 
                ? "bg-slate-800 border-slate-700 text-slate-200" 
                : "bg-emerald-500/10 border-emerald-500/25 text-emerald-400"
            }`}>
              {msg.role === "user" ? <HelpCircle className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            {/* Bubble */}
            <div className={`max-w-[80%] rounded-xl px-4 py-3 border ${
              msg.role === "user" 
                ? "bg-slate-900 border-slate-850 rounded-tr-none shadow-md text-slate-100" 
                : "bg-emerald-500/5 border-emerald-500/15 rounded-tl-none shadow-sm"
            }`}>
              <div className="text-xs">
                {renderMessageText(msg.text)}
              </div>
              <span className="block text-[9px] text-slate-500 mt-1.5 text-right font-mono">{msg.timestamp}</span>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-start gap-2.5">
            <div className="bg-emerald-500/10 border border-emerald-500/25 p-1.5 rounded-lg text-emerald-400 flex-shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-xl rounded-tl-none px-4 py-3 flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
              <span className="text-xs text-slate-400 font-bold">AeroAgent is scanning order databases and drafting response...</span>
            </div>
          </div>
        )}

        {/* API missing error view */}
        {apiError && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-start gap-3 text-red-300 shadow-xl">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed space-y-1.5">
              <h5 className="font-black text-red-400 uppercase tracking-wider">Gemini Secret Key Required</h5>
              <p className="font-medium">{apiError}</p>
              <div className="text-[10px] text-red-300 bg-red-950/40 p-2 rounded border border-red-900 mt-2 font-mono leading-relaxed">
                1. Navigate to <strong>Settings &gt; Secrets</strong> panel in the top menu.<br />
                2. Add <code>GEMINI_API_KEY</code> with your real key from Google AI Studio.<br />
                3. Key is stored safely on the server and never exposed in the browser!
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form Bar */}
      <form onSubmit={handleSendMessage} className="bg-slate-950 border-t border-slate-900 p-3 flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder={`Ask AeroAgent about case ${activeCase.id} order details, warranty calculations, or help drafting replies...`}
          disabled={isLoading}
          className="flex-1 bg-slate-900 border border-slate-850 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 disabled:opacity-50 text-slate-100 placeholder:text-slate-600"
        />
        <button
          type="submit"
          disabled={isLoading || !inputValue.trim()}
          className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-lg px-3.5 py-2 flex items-center gap-1.5 transition shadow-md disabled:opacity-40 font-black uppercase tracking-wider"
        >
          <Send className="w-3.5 h-3.5" />
          <span className="text-xs">Send</span>
        </button>
      </form>
    </div>
  );
}
