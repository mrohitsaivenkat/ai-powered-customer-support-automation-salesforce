import React, { useState } from "react";
import CrmServiceConsole from "./components/CrmServiceConsole";
import AgentforceChat from "./components/AgentforceChat";
import PromptTemplateBuilder from "./components/PromptTemplateBuilder";
import TechnicalDocumentationHub from "./components/TechnicalDocumentationHub";
import { Case, Order, Product, Customer } from "./types";
import { mockCases, mockOrders, mockProducts, mockCustomers } from "./data/mockCrmData";
import { 
  Cpu, 
  Briefcase, 
  Sparkles, 
  BookOpen, 
  Settings, 
  Server,
  CloudLightning,
  Activity,
  CheckCircle,
  Clock,
  ShieldAlert
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<"console" | "chat" | "prompt" | "docs">("console");
  
  // Prompt builder parameters (selected context record values)
  const [selectedCase, setSelectedCase] = useState<Case>(mockCases[0]);
  const [selectedOrder, setSelectedOrder] = useState<Order>(mockOrders[0]);
  const [selectedProduct, setSelectedProduct] = useState<Product>(mockProducts[0]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>(mockCustomers[0]);

  // Transition from Case console to Einstein prompt templates seamlessly
  const handleSelectPromptTemplate = (
    c: Case, 
    o: Order, 
    p: Product, 
    cust: Customer
  ) => {
    setSelectedCase(c);
    setSelectedOrder(o);
    setSelectedProduct(p);
    setSelectedCustomer(cust);
    setActiveTab("prompt");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans antialiased text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300 relative overflow-x-hidden">
      
      {/* Mandatory Project Header "Green Box" Ribbon */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500 transform rotate-45 translate-x-24 -translate-y-24 flex items-end justify-center pb-5 shadow-2xl z-50 pointer-events-none print:hidden">
        <span className="transform -rotate-45 font-black text-slate-950 text-[11px] tracking-tighter uppercase">DEPLOYED v1.4</span>
      </div>

      {/* Global Application Header */}
      <header className="bg-slate-950 border-b border-slate-900 flex-shrink-0 print:hidden pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Category Line Accent */}
          <div className="flex items-center gap-3 mb-3">
            <div className="h-1 w-16 bg-emerald-500"></div>
            <span className="text-emerald-500 font-mono text-xs tracking-widest uppercase">Salesforce Service Cloud & Agentforce Automation</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-white leading-none">
                AI-POWERED<br/>
                <span className="text-emerald-500">CUSTOMER SUPPORT</span><br/>
                AUTOMATION
              </h1>
              <p className="text-slate-400 text-sm mt-3 max-w-2xl font-medium leading-relaxed">
                Streamlining global electronics inquiries through Salesforce Service Cloud & Agentforce AI Service Agents.
              </p>
            </div>

            {/* Right Status metrics indicators */}
            <div className="flex flex-wrap items-center gap-3 text-[10px] text-slate-400 font-mono">
              <div className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-800/80 px-2.5 py-1 rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Active Server: Cloud Run Sandbox</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-800/80 px-2.5 py-1 rounded">
                <Cpu className="w-3 h-3 text-slate-400" />
                <span>LLM Engine: Gemini-3.5</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-800/80 px-2.5 py-1 rounded">
                <Activity className="w-3 h-3 text-emerald-400" />
                <span>UAT Stream: Active</span>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Primary Tab Navigation & Layout */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 flex flex-col gap-6">
        
        {/* Navigation Selector Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900/40 border border-slate-900 p-2 rounded-xl print:hidden">
          <nav className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("console")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-[11px] font-black tracking-wider uppercase transition ${
                activeTab === "console" 
                  ? "bg-emerald-500 text-slate-950 shadow-sm" 
                  : "text-slate-400 hover:bg-slate-900 hover:text-slate-100"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Service Console</span>
            </button>

            <button
              onClick={() => setActiveTab("chat")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-[11px] font-black tracking-wider uppercase transition ${
                activeTab === "chat" 
                  ? "bg-emerald-500 text-slate-950 shadow-sm" 
                  : "text-slate-400 hover:bg-slate-900 hover:text-slate-100"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Agentforce Assistant</span>
            </button>

            <button
              onClick={() => setActiveTab("prompt")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-[11px] font-black tracking-wider uppercase transition ${
                activeTab === "prompt" 
                  ? "bg-emerald-500 text-slate-950 shadow-sm" 
                  : "text-slate-400 hover:bg-slate-900 hover:text-slate-100"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Einstein Prompt Builder</span>
            </button>

            <button
              onClick={() => setActiveTab("docs")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-[11px] font-black tracking-wider uppercase transition ${
                activeTab === "docs" 
                  ? "bg-emerald-500 text-slate-950 shadow-sm" 
                  : "text-slate-400 hover:bg-slate-900 hover:text-slate-100"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Technical Manual Hub</span>
            </button>
          </nav>

          {/* Quick Informational Toast */}
          <div className="hidden lg:flex items-center gap-2 text-[10px] text-slate-500 font-mono tracking-wider uppercase">
            <Server className="w-3.5 h-3.5 text-slate-600" />
            <span>Salesforce Integration Simulator</span>
          </div>
        </div>

        {/* Workspace Display Area */}
        <main className="flex-1">
          {activeTab === "console" && (
            <CrmServiceConsole onSelectPromptTemplate={handleSelectPromptTemplate} />
          )}

          {activeTab === "chat" && (
            <AgentforceChat />
          )}

          {activeTab === "prompt" && (
            <PromptTemplateBuilder 
              initialCase={selectedCase}
              initialOrder={selectedOrder}
              initialProduct={selectedProduct}
              initialCustomer={selectedCustomer}
            />
          )}

          {activeTab === "docs" && (
            <TechnicalDocumentationHub />
          )}
        </main>

      </div>
    </div>
  );
}
