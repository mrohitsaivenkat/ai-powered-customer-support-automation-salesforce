import React, { useState } from "react";
import { Case, Order, Product, Customer } from "../types";
import { mockCases, mockOrders, mockProducts, mockCustomers } from "../data/mockCrmData";
import { 
  Briefcase, 
  User, 
  CreditCard, 
  Package, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Search, 
  Check, 
  X,
  FileText
} from "lucide-react";

interface CrmServiceConsoleProps {
  onSelectPromptTemplate: (selectedCase: Case, relatedOrder: Order, product: Product, customer: Customer) => void;
}

export default function CrmServiceConsole({ onSelectPromptTemplate }: CrmServiceConsoleProps) {
  const [cases, setCases] = useState<Case[]>(mockCases);
  const [activeCaseId, setActiveCaseId] = useState<string>(cases[0]?.id || "");
  const [searchQuery, setSearchQuery] = useState("");

  // Flow Wizard State
  const [flowStep, setFlowStep] = useState(1);
  const [flowOrderInput, setFlowOrderInput] = useState("");
  const [flowOrderResult, setFlowOrderResult] = useState<Order | null>(null);
  const [flowProductResult, setFlowProductResult] = useState<Product | null>(null);
  const [flowWarrantyChecked, setFlowWarrantyChecked] = useState<boolean | null>(null);
  const [flowErrorMessage, setFlowErrorMessage] = useState("");

  const activeCase = cases.find(c => c.id === activeCaseId) || cases[0];
  const relatedCustomer = mockCustomers.find(cust => cust.id === activeCase?.customerId);
  const relatedOrder = mockOrders.find(ord => ord.id === activeCase?.relatedOrderId);
  const relatedProduct = relatedOrder ? mockProducts.find(p => p.id === relatedOrder.productId) : null;

  // Handle case filter
  const filteredCases = cases.filter(c => 
    c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Flow Runner: Simulate Screen Flow 3 (Order Tracking & Warranty Claim Intaker)
  const handleFlowSearch = () => {
    setFlowErrorMessage("");
    const trimmedInput = flowOrderInput.trim().toUpperCase();
    
    // Validation: Match REGEX like ORD-XXXXX
    if (!trimmedInput.match(/^ORD-[0-9]{5}$/)) {
      setFlowErrorMessage("Validation Error: Order ID must follow corporate format 'ORD-XXXXX' (e.g., ORD-48201).");
      return;
    }

    const order = mockOrders.find(o => o.id === trimmedInput);
    if (!order) {
      setFlowErrorMessage(`System Error: Order ${trimmedInput} not found in Salesforce database.`);
      return;
    }

    const product = mockProducts.find(p => p.id === order.productId) || null;
    setFlowOrderResult(order);
    setFlowProductResult(product);
    
    if (order && product) {
      // Flow 2 Calculation: Compute ADDMONTHS
      const purchaseDate = new Date(order.purchaseDate);
      const warrantyEndDate = new Date(purchaseDate);
      warrantyEndDate.setMonth(warrantyEndDate.getMonth() + product.warrantyMonths);
      
      const isEligible = warrantyEndDate >= new Date();
      setFlowWarrantyChecked(isEligible);
    }
    
    setFlowStep(2);
  };

  // Run auto-calculation on Active Case warranty
  const handleAutoVerifyWarranty = (caseId: string) => {
    setCases(prev => prev.map(c => {
      if (c.id === caseId && c.relatedOrderId) {
        const order = mockOrders.find(o => o.id === c.relatedOrderId);
        const product = order ? mockProducts.find(p => p.id === order.productId) : null;
        if (order && product) {
          const purchaseDate = new Date(order.purchaseDate);
          const warrantyEndDate = new Date(purchaseDate);
          warrantyEndDate.setMonth(warrantyEndDate.getMonth() + product.warrantyMonths);
          const isEligible = warrantyEndDate >= new Date();
          return { ...c, warrantyValid: isEligible };
        }
      }
      return c;
    }));
  };

  // Simulate Supervisor Approvals
  const handleSupervisorApproval = (caseId: string, approve: boolean) => {
    setCases(prev => prev.map(c => {
      if (c.id === caseId) {
        return {
          ...c,
          status: approve ? "Working" : "Closed",
          description: c.description + `\n\n[SUPERVISOR AUDIT LOG - ${new Date().toLocaleDateString()}]: ${approve ? "Approved return authorization." : "Rejected warranty return as expired. Locked payments."}`
        };
      }
      return c;
    }));
  };

  const resetFlowWizard = () => {
    setFlowStep(1);
    setFlowOrderInput("");
    setFlowOrderResult(null);
    setFlowProductResult(null);
    setFlowWarrantyChecked(null);
    setFlowErrorMessage("");
  };

  const getPriorityBadgeColor = (prio: string) => {
    switch (prio) {
      case "Critical": return "bg-red-500/10 text-red-400 border-red-500/30";
      case "High": return "bg-orange-500/10 text-orange-400 border-orange-500/30";
      case "Medium": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/30";
      default: return "bg-blue-500/10 text-blue-400 border-blue-500/30";
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Closed": return "bg-slate-800 text-slate-300 border-slate-700";
      case "Working": return "bg-indigo-500/10 text-indigo-400 border-indigo-500/30";
      case "Escalated": return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      default: return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full items-stretch">
      {/* 1. Case Sidebar (Triage Queue View) */}
      <div className="lg:col-span-1 bg-slate-900/40 border border-slate-900 rounded-xl flex flex-col h-[calc(100vh-220px)] overflow-hidden">
        <div className="p-4 border-b border-slate-900 bg-slate-950/40">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="w-4 h-4 text-slate-400" />
            <h3 className="font-bold text-slate-200 text-xs uppercase tracking-wider">Active Case Queues</h3>
          </div>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search active cases..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto divide-y divide-slate-900/60">
          {filteredCases.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-xs">No active cases found.</div>
          ) : (
            filteredCases.map(c => {
              const cust = mockCustomers.find(cu => cu.id === c.customerId);
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveCaseId(c.id);
                    resetFlowWizard();
                  }}
                  className={`w-full p-3 text-left transition hover:bg-slate-900/40 flex flex-col gap-1.5 ${activeCaseId === c.id ? "bg-slate-900/80 border-l-4 border-emerald-500 pl-2" : ""}`}
                >
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="font-mono font-bold text-slate-400">{c.id}</span>
                    <span className="text-slate-500">{c.createdAt}</span>
                  </div>
                  <h4 className="font-bold text-xs text-slate-100 line-clamp-1">{c.subject}</h4>
                  <div className="flex gap-1.5 flex-wrap mt-1">
                    <span className={`px-1.5 py-0.5 rounded text-[9px] border ${getPriorityBadgeColor(c.priority)}`}>
                      {c.priority}
                    </span>
                    <span className="bg-slate-850 text-slate-400 border border-slate-800 px-1.5 py-0.5 rounded text-[9px]">
                      {c.type}
                    </span>
                  </div>
                  {cust && (
                    <div className="flex items-center gap-1.5 mt-2 text-[10px] text-slate-400">
                      <img src={cust.avatar} alt="" className="w-4 h-4 rounded-full border border-slate-800" />
                      <span>{cust.name}</span>
                    </div>
                  )}
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* 2. Main Case details Workspace */}
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-220px)] overflow-y-auto pr-2">
        
        {/* Case detail sheet (Middle Column) */}
        <div className="md:col-span-2 space-y-6">
          {activeCase ? (
            <div className="bg-slate-900/40 border border-slate-900 rounded-xl p-6 space-y-6 shadow-xl">
              
              {/* Record Header */}
              <div className="flex justify-between items-start border-b border-slate-850 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono font-bold text-xs text-emerald-400">{activeCase.id}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getStatusBadgeColor(activeCase.status)}`}>
                      {activeCase.status}
                    </span>
                  </div>
                  <h2 className="text-xl font-black text-slate-100 tracking-tight uppercase">{activeCase.subject}</h2>
                </div>
                
                {/* Custom Action Template Runner */}
                {relatedCustomer && relatedOrder && relatedProduct && (
                  <button
                    onClick={() => onSelectPromptTemplate(activeCase, relatedOrder, relatedProduct, relatedCustomer)}
                    className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-3.5 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition shadow-md"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Draft Support Reply</span>
                  </button>
                )}
              </div>

              {/* CRM Context Fields Grid */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Case Origin:</span>
                  <p className="text-slate-200 font-bold mt-1">Email-to-Case</p>
                </div>
                <div>
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Assigned Queue:</span>
                  <p className="text-slate-200 font-bold mt-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    {activeCase.assignedQueue || "General Support"}
                  </p>
                </div>
                <div>
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Related Order Lookup:</span>
                  <p className="font-mono text-slate-200 mt-1 font-bold">{activeCase.relatedOrderId || "NoneLinked"}</p>
                </div>
                <div>
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Warranty Checker Audit:</span>
                  <div className="mt-1 flex items-center gap-1.5">
                    {activeCase.warrantyValid === undefined ? (
                      <button
                        onClick={() => handleAutoVerifyWarranty(activeCase.id)}
                        className="bg-slate-800 hover:bg-slate-750 border border-slate-700 px-2 py-0.5 rounded text-[10px] font-bold text-slate-200 transition"
                      >
                        Calculate Validity
                      </button>
                    ) : activeCase.warrantyValid ? (
                      <span className="flex items-center gap-1 text-emerald-400 font-bold text-[10px] bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded uppercase tracking-wider">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                        Valid Claims Window
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-red-400 font-bold text-[10px] bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded uppercase tracking-wider">
                        <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                        Warranty Expired
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Case Problem Description */}
              <div className="bg-slate-950/60 border border-slate-900 rounded-lg p-4">
                <span className="text-[9px] uppercase tracking-widest font-black text-slate-500">Customer Issue Description</span>
                <p className="text-slate-300 text-xs mt-2.5 leading-relaxed whitespace-pre-wrap font-medium">{activeCase.description}</p>
              </div>

              {/* Case History Auditing Activity */}
              <div className="border-t border-slate-850 pt-4">
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">Salesforce Activity Timeline</span>
                <div className="mt-3 relative pl-4 border-l-2 border-slate-850 space-y-4">
                  <div className="relative">
                    <div className="absolute -left-[21px] top-0 bg-emerald-500 rounded-full p-0.5 text-slate-950">
                      <CheckCircle className="w-2.5 h-2.5" />
                    </div>
                    <div className="text-xs">
                      <span className="font-bold text-slate-200">Case Created Auto-Triage Flow</span>
                      <p className="text-[11px] text-slate-400 mt-0.5">Automated queue routing completed successfully.</p>
                    </div>
                  </div>
                  {activeCase.status === "Working" && (
                    <div className="relative">
                      <div className="absolute -left-[21px] top-0 bg-indigo-500 rounded-full p-0.5 text-white">
                        <Clock className="w-2.5 h-2.5" />
                      </div>
                      <div className="text-xs">
                        <span className="font-bold text-slate-200">Supervisor RMA Approved</span>
                        <p className="text-[11px] text-slate-400 mt-0.5">Case marked as active Working replacement process.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          ) : (
            <div className="bg-slate-900/40 border border-slate-900 rounded-xl p-8 text-center text-slate-400 font-bold text-sm">
              Select a case from the triage queue to see details.
            </div>
          )}
        </div>

        {/* Sidebar panels (Right Column) */}
        <div className="space-y-6">
          {/* Customer 360 Card */}
          {relatedCustomer && (
            <div className="bg-slate-900/40 border border-slate-900 rounded-xl p-4 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 border-b border-slate-850 pb-2">
                <User className="w-4 h-4 text-emerald-400" />
                <h4 className="font-bold text-slate-200 text-xs uppercase tracking-wider">Customer 360° View</h4>
              </div>
              <div className="flex items-center gap-3">
                <img src={relatedCustomer.avatar} alt="" className="w-10 h-10 rounded-full object-cover border border-slate-800" />
                <div className="text-xs">
                  <h5 className="font-bold text-slate-200">{relatedCustomer.name}</h5>
                  <p className="text-slate-400 text-[11px] mt-0.5">{relatedCustomer.email}</p>
                  <p className="text-slate-400 text-[11px] font-mono">{relatedCustomer.phone}</p>
                </div>
              </div>
            </div>
          )}

          {/* Logistics Order Card */}
          {relatedOrder && (
            <div className="bg-slate-900/40 border border-slate-900 rounded-xl p-4 space-y-3 shadow-xl">
              <div className="flex items-center gap-2 border-b border-slate-850 pb-2">
                <CreditCard className="w-4 h-4 text-emerald-400" />
                <h4 className="font-bold text-slate-200 text-xs uppercase tracking-wider">Related Order Lookup</h4>
              </div>
              <div className="text-xs space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Order ID:</span>
                  <span className="font-mono font-bold text-slate-200">{relatedOrder.id}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Product Code:</span>
                  <span className="font-mono text-slate-200 font-bold">
                    {relatedProduct ? relatedProduct.sku : "N/A"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Purchase Date:</span>
                  <span className="text-slate-200 font-bold">{relatedOrder.purchaseDate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Total Price:</span>
                  <span className="text-emerald-400 font-black">${relatedOrder.totalPrice}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-850">
                  <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Shipment:</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 border ${
                    relatedOrder.shipmentStatus === "Delivered" 
                      ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/10" 
                      : "text-amber-400 border-amber-500/20 bg-amber-500/10"
                  }`}>
                    <Package className="w-3 h-3" />
                    {relatedOrder.shipmentStatus}
                  </span>
                </div>
                {relatedOrder.trackingId && (
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Tracking ID:</span>
                    <span className="font-mono text-emerald-400 underline text-[11px] font-bold">{relatedOrder.trackingId}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Salesforce Screen Flow Runner Component */}
          <div className="bg-slate-900/40 border border-slate-900 rounded-xl p-4 space-y-3 shadow-xl">
            <div className="flex items-center gap-1.5 border-b border-slate-850 pb-2">
              <FileText className="w-4 h-4 text-emerald-400" />
              <h4 className="font-bold text-slate-200 text-xs flex items-center justify-between w-full uppercase tracking-wider">
                <span>Salesforce Screen Flow</span>
                <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1 rounded uppercase tracking-wider font-bold">Active</span>
              </h4>
            </div>

            {flowStep === 1 ? (
              <div className="text-xs space-y-3">
                <div className="bg-slate-950/60 p-2 border border-slate-850 rounded text-[11px] text-slate-400 leading-relaxed font-medium">
                  <strong>Guided Flow:</strong> Order Tracking & Warranty Intake Screen wizard. Enter Order ID to verify shipment tracking and compute warranty validation.
                </div>
                {flowErrorMessage && (
                  <div className="text-[10px] text-red-400 bg-red-500/10 p-2 rounded border border-red-500/20 leading-relaxed font-mono">
                    {flowErrorMessage}
                  </div>
                )}
                <div>
                  <label className="block text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">Enter Order Number (ORD-XXXXX)</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g., ORD-48201"
                      value={flowOrderInput}
                      onChange={e => setFlowOrderInput(e.target.value)}
                      className="w-full text-xs pl-2.5 pr-10 py-1.5 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 font-mono text-slate-200 placeholder:text-slate-600"
                    />
                    <button
                      onClick={handleFlowSearch}
                      className="absolute right-1 top-1 bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded p-1 transition"
                    >
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-xs space-y-3">
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded text-slate-200 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-black uppercase tracking-wider border-b border-emerald-500/10 pb-1 mb-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Flow Execution Successful</span>
                  </div>
                  <p className="text-[10px]">Order: <strong className="font-mono text-emerald-300 font-bold">{flowOrderResult?.id}</strong></p>
                  <p className="text-[10px]">Product: <strong className="text-slate-100">{flowProductResult?.name}</strong></p>
                  <p className="text-[10px]">Shipment Status: <strong className="text-emerald-400">{flowOrderResult?.shipmentStatus}</strong></p>
                  <p className="text-[10px] flex items-center gap-1">
                    Warranty Eligible: 
                    {flowWarrantyChecked ? (
                      <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1 border border-emerald-500/20 rounded text-[9px]">YES</span>
                    ) : (
                      <span className="text-red-400 font-bold bg-red-500/10 px-1 border border-red-500/20 rounded text-[9px]">EXPIRED</span>
                    )}
                  </p>
                </div>
                <button
                  onClick={resetFlowWizard}
                  className="w-full text-center bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider transition"
                >
                  Restart guided flow
                </button>
              </div>
            )}
          </div>

          {/* Einstein Approvals Matrix Widget */}
          {activeCase && activeCase.priority === "High" && (
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 space-y-3 shadow-xl">
              <div className="flex items-center gap-1.5 border-b border-amber-500/15 pb-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <h4 className="font-bold text-amber-400 text-xs uppercase tracking-wider">Supervisor Approval Needed</h4>
              </div>
              <p className="text-[11px] text-amber-200/80 leading-relaxed font-medium">
                This Case represents high-value product damage or a specialized warranty claim above standard thresholds. System requires Service Supervisor review to unlock refunds.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleSupervisorApproval(activeCase.id, true)}
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-[10px] font-black uppercase py-1.5 rounded transition flex items-center justify-center gap-1 shadow"
                >
                  <Check className="w-3 h-3" />
                  Approve RMA
                </button>
                <button
                  onClick={() => handleSupervisorApproval(activeCase.id, false)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white text-[10px] font-bold uppercase py-1.5 rounded transition flex items-center justify-center gap-1 shadow"
                >
                  <X className="w-3 h-3" />
                  Deny Claim
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
