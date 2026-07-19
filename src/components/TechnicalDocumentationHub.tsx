import React, { useState } from "react";
import { AcademicHeader, ProjectDocument } from "../types";
import { documentsData } from "../data/documentsData";
import { 
  FileText, 
  Settings, 
  Copy, 
  Check, 
  Printer, 
  Search, 
  ChevronRight, 
  BookOpen, 
  Calendar, 
  Hash, 
  Tag, 
  Award 
} from "lucide-react";

export default function TechnicalDocumentationHub() {
  // Global academic credentials state
  const [headerState, setHeaderState] = useState<AcademicHeader>({
    phase: "Ideation & Setup",
    templateName: "Technical Documentation Manual",
    date: "27 June 2026",
    teamId: "",
    projectName: "AI-Powered Customer Support & Service Automation",
    maxMarks: "4 Marks"
  });

  const [activeDocId, setActiveDocId] = useState<string>(documentsData[0]?.id || "");
  const [docSearchQuery, setDocSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);

  const activeDoc = documentsData.find(d => d.id === activeDocId) || documentsData[0];

  const handleCopyMarkdown = () => {
    if (!activeDoc) return;

    // Synthesize Markdown with the custom green box header
    const greenBoxMarkdown = `<!-- SYSTEM-GENERATED ACADEMIC PORTAL HEADER - MANDATORY FOR INTERNSHIP SUBMISSION -->
<div style="border: 3px solid #10b981; padding: 15px; border-radius: 8px; margin-bottom: 25px; background-color: #f0fdf4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1f2937;">
  <div style="text-align: center; font-size: 1.2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #047857; border-bottom: 2px solid #10b981; padding-bottom: 8px; margin-bottom: 12px;">
    ${activeDoc.phase}
  </div>
  <div style="text-align: center; font-size: 1.1rem; font-weight: 600; color: #111827; margin-bottom: 15px;">
    ${activeDoc.templateName}
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
    <tr>
      <td style="border: 1px solid #cbd5e1; padding: 8px 12px; font-weight: bold; background-color: #f8fafc; color: #475569; width: 30%;">Date</td>
      <td style="border: 1px solid #cbd5e1; padding: 8px 12px; color: #0f172a; width: 70%;">${headerState.date}</td>
    </tr>
    <tr>
      <td style="border: 1px solid #cbd5e1; padding: 8px 12px; font-weight: bold; background-color: #f8fafc; color: #475569;">Team ID</td>
      <td style="border: 1px solid #cbd5e1; padding: 8px 12px; color: #0f172a;">${headerState.teamId}</td>
    </tr>
    <tr>
      <td style="border: 1px solid #cbd5e1; padding: 8px 12px; font-weight: bold; background-color: #f8fafc; color: #475569;">Project Name</td>
      <td style="border: 1px solid #cbd5e1; padding: 8px 12px; color: #0f172a;">${headerState.projectName}</td>
    </tr>
    <tr>
      <td style="border: 1px solid #cbd5e1; padding: 8px 12px; font-weight: bold; background-color: #f8fafc; color: #475569;">Marks</td>
      <td style="border: 1px solid #cbd5e1; padding: 8px 12px; color: #0f172a;">${headerState.maxMarks}</td>
    </tr>
  </table>
</div>
<!-- END ACADEMIC PORTAL HEADER -->

${activeDoc.content}`;

    navigator.clipboard.writeText(greenBoxMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  // Group documents by Step
  const stepGrouping = [
    { num: 1, title: "Step 1: Requirements & Planning" },
    { num: 2, title: "Step 2: Backend Configs" },
    { num: 3, title: "Step 3: UI/UX Console App" },
    { num: 4, title: "Step 4: Einstein Prompt Templates" },
    { num: 5, title: "Step 5: Sandbox Deployment" },
    { num: 6, title: "Step 6: Maintenance & SOPs" }
  ];

  const filteredDocs = documentsData.filter(doc =>
    doc.title.toLowerCase().includes(docSearchQuery.toLowerCase()) ||
    doc.content.toLowerCase().includes(docSearchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 items-stretch h-[calc(100vh-220px)]">
      
      {/* Sidebar: Document Tree and Academic Parameters */}
      <div className="xl:col-span-1 flex flex-col gap-5 h-full overflow-hidden print:hidden">
        
        {/* Academic Settings card */}
        <div className="bg-slate-900/40 border border-slate-900 rounded-xl p-4 shadow-xl space-y-3 flex-shrink-0">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200 uppercase tracking-wider pb-1.5 border-b border-slate-850">
            <Settings className="w-4 h-4 text-emerald-400 animate-spin-slow" />
            <span>Academic Portal Config</span>
          </div>
          
          <div className="space-y-2 text-xs">
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                Submission Date
              </label>
              <input
                type="text"
                value={headerState.date}
                onChange={e => setHeaderState(prev => ({ ...prev, date: e.target.value }))}
                className="w-full mt-1 bg-slate-950 border border-slate-800 rounded px-2.5 py-1 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium text-slate-200"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <Hash className="w-3.5 h-3.5 text-slate-500" />
                Team ID Code
              </label>
              <input
                type="text"
                value={headerState.teamId}
                onChange={e => setHeaderState(prev => ({ ...prev, teamId: e.target.value }))}
                className="w-full mt-1 bg-slate-950 border border-slate-800 rounded px-2.5 py-1 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-mono font-bold text-slate-200"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-slate-500" />
                Project Name
              </label>
              <input
                type="text"
                value={headerState.projectName}
                onChange={e => setHeaderState(prev => ({ ...prev, projectName: e.target.value }))}
                className="w-full mt-1 bg-slate-950 border border-slate-800 rounded px-2.5 py-1 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-bold text-slate-200 text-[11px]"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-slate-500" />
                Marks
              </label>
              <input
                type="text"
                value={headerState.maxMarks}
                onChange={e => setHeaderState(prev => ({ ...prev, maxMarks: e.target.value }))}
                className="w-full mt-1 bg-slate-950 border border-slate-800 rounded px-2.5 py-1 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium text-slate-200"
              />
            </div>
          </div>
        </div>

        {/* Navigation selection */}
        <div className="bg-slate-900/40 border border-slate-900 rounded-xl flex-1 flex flex-col overflow-hidden shadow-xl">
          <div className="p-3 border-b border-slate-850 bg-slate-950/40 flex-shrink-0">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-500" />
              <input
                type="text"
                placeholder="Search manual chapters..."
                value={docSearchQuery}
                onChange={e => setDocSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:ring-1 focus:ring-emerald-500 focus:outline-none placeholder:text-slate-500"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-4">
            {stepGrouping.map(group => {
              const groupDocs = filteredDocs.filter(d => d.step === group.num);
              if (groupDocs.length === 0) return null;
              
              return (
                <div key={group.num} className="space-y-1">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider pl-1">{group.title}</span>
                  <div className="space-y-0.5 mt-1 border-l border-slate-800 pl-1.5">
                    {groupDocs.map(doc => (
                      <button
                        key={doc.id}
                        onClick={() => setActiveDocId(doc.id)}
                        className={`w-full text-left p-1.5 rounded text-[11px] font-bold transition flex items-center justify-between ${
                          activeDocId === doc.id ? "bg-emerald-500/10 text-emerald-400" : "text-slate-400 hover:bg-slate-900/40"
                        }`}
                      >
                        <span className="truncate pr-2">{doc.title}</span>
                        <ChevronRight className="w-3 h-3 flex-shrink-0 opacity-40" />
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Main Document Viewer (Right Panel) */}
      <div className="xl:col-span-3 bg-slate-900/40 border border-slate-900 rounded-xl shadow-xl flex flex-col h-full overflow-hidden print:border-none print:shadow-none">
        
        {/* Controls header */}
        <div className="p-4 border-b border-slate-900 bg-slate-950/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 print:hidden">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-400" />
            <div>
              <h3 className="font-black text-slate-100 text-sm uppercase tracking-wide">{activeDoc?.title}</h3>
              <p className="text-[10px] text-slate-500 mt-0.5 font-medium">Academic Step {activeDoc?.step} Report Chapter</p>
            </div>
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={handleCopyMarkdown}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1.5 rounded-lg text-xs font-bold transition shadow"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Markdown Copied" : "Copy Full Markdown"}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider shadow-md transition"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Rendered Area */}
        <div className="flex-1 p-6 overflow-y-auto print:p-0 bg-slate-950/10">
          
          {/* Dynamic Render of the Mandated Green Academic Header */}
          {activeDoc && (
            <div id="academic-print-header" className="border-2 border-emerald-500 p-5 rounded-lg mb-6 bg-slate-950/80 font-sans text-slate-200">
              <div className="text-center text-sm font-black uppercase tracking-widest text-emerald-400 border-b border-slate-800 pb-2 mb-3">
                {activeDoc.phase}
              </div>
              <div className="text-center text-base font-black text-slate-100 mb-4 uppercase tracking-wide">
                {activeDoc.templateName}
              </div>
              <table className="w-full border-collapse text-xs">
                <tbody>
                  <tr>
                    <td className="border border-slate-800 p-2 font-bold bg-slate-900/60 text-slate-400 w-1/3">Date</td>
                    <td className="border border-slate-800 p-2 text-slate-100 font-bold w-2/3">{headerState.date}</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-800 p-2 font-bold bg-slate-900/60 text-slate-400">Team ID</td>
                    <td className="border border-slate-800 p-2 text-slate-100 font-mono font-bold">{headerState.teamId}</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-800 p-2 font-bold bg-slate-900/60 text-slate-400">Project Name</td>
                    <td className="border border-slate-800 p-2 text-slate-100 font-bold">{headerState.projectName}</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-800 p-2 font-bold bg-slate-900/60 text-slate-400">Marks</td>
                    <td className="border border-slate-800 p-2 text-slate-100 font-bold">{headerState.maxMarks}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Formatted Markdown Content Body */}
          {activeDoc && (
            <article className="prose prose-slate max-w-none text-slate-300 font-sans space-y-4">
              {activeDoc.content.split("\n\n").map((chunk, i) => {
                const trimmed = chunk.trim();
                
                // Headings
                if (trimmed.startsWith("# ")) {
                  return <h1 key={i} className="text-xl font-black text-slate-100 border-b border-slate-800 pb-2 mt-4 uppercase tracking-wide">{trimmed.replace("# ", "")}</h1>;
                }
                if (trimmed.startsWith("## ")) {
                  return <h2 key={i} className="text-base font-bold text-emerald-400 mt-3 border-b border-slate-850/50 pb-1 uppercase tracking-wide">{trimmed.replace("## ", "")}</h2>;
                }
                if (trimmed.startsWith("### ")) {
                  return <h3 key={i} className="text-sm font-bold text-slate-200 mt-2">{trimmed.replace("### ", "")}</h3>;
                }

                // Table Render
                if (trimmed.startsWith("|")) {
                  const rows = trimmed.split("\n");
                  const tableRows = rows.map((row, rIdx) => {
                    const cols = row.split("|").map(col => col.trim()).filter((_, colIdx, arr) => colIdx > 0 && colIdx < arr.length - 1);
                    const isHeader = rIdx === 0;
                    const isSeparator = row.includes("---");
                    if (isSeparator) return null;
                    return (
                      <tr key={rIdx} className={isHeader ? "bg-slate-950/60 border-b border-slate-800 font-bold text-emerald-400" : "border-b border-slate-850/60 text-slate-300"}>
                        {cols.map((col, cIdx) => (
                          <td 
                            key={cIdx} 
                            className={`p-2 text-[11px] ${isHeader ? "font-bold" : "font-medium"}`}
                            style={{ border: "1px solid #1e293b" }}
                          >
                            {col}
                          </td>
                        ))}
                      </tr>
                    );
                  }).filter(Boolean);

                  return (
                    <div key={i} className="my-4 overflow-x-auto">
                      <table className="w-full text-left border-collapse" style={{ border: "1px solid #1e293b" }}>
                        <tbody>{tableRows}</tbody>
                      </table>
                    </div>
                  );
                }

                // List Items
                if (trimmed.startsWith("- ")) {
                  const listItems = trimmed.split("\n").map((li, liIdx) => (
                    <li key={liIdx} className="ml-4 list-disc text-xs text-slate-300 leading-relaxed my-1 font-medium">
                      {li.replace("- ", "")}
                    </li>
                  ));
                  return <ul key={i} className="my-2">{listItems}</ul>;
                }

                // Code Blocks
                if (trimmed.startsWith("```")) {
                  const cleanCode = trimmed.replace(/```[a-z]*\n?/g, "").replace(/```/g, "");
                  return (
                    <pre key={i} className="bg-slate-950 border border-slate-850 rounded-lg p-3 font-mono text-[10px] text-slate-200 leading-relaxed overflow-x-auto whitespace-pre-wrap my-3">
                      {cleanCode}
                    </pre>
                  );
                }

                // Simple Paragraphs
                return (
                  <p key={i} className="text-xs text-slate-300 leading-relaxed my-2 font-medium">
                    {trimmed}
                  </p>
                );
              })}
            </article>
          )}

        </div>

      </div>

    </div>
  );
}
