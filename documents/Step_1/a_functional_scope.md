<!-- SYSTEM-GENERATED ACADEMIC PORTAL HEADER - MANDATORY FOR INTERNSHIP SUBMISSION -->
<div style="border: 3px solid #10b981; padding: 15px; border-radius: 8px; margin-bottom: 25px; background-color: #f0fdf4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1f2937;">
  <div style="text-align: center; font-size: 1.2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #047857; border-bottom: 2px solid #10b981; padding-bottom: 8px; margin-bottom: 12px;">
    Requirement Analysis & Planning
  </div>
  <div style="text-align: center; font-size: 1.1rem; font-weight: 600; color: #111827; margin-bottom: 15px;">
    Functional Scope Document
  </div>
  <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
    <tr>
      <td style="border: 1px solid #cbd5e1; padding: 8px 12px; font-weight: bold; background-color: #f8fafc; color: #475569; width: 30%;">Date</td>
      <td style="border: 1px solid #cbd5e1; padding: 8px 12px; color: #0f172a; width: 70%;">31 January 2025</td>
    </tr>
    <tr>
      <td style="border: 1px solid #cbd5e1; padding: 8px 12px; font-weight: bold; background-color: #f8fafc; color: #475569;">Team ID</td>
      <td style="border: 1px solid #cbd5e1; padding: 8px 12px; color: #0f172a;">MVGR-SF-042</td>
    </tr>
    <tr>
      <td style="border: 1px solid #cbd5e1; padding: 8px 12px; font-weight: bold; background-color: #f8fafc; color: #475569;">Project Name</td>
      <td style="border: 1px solid #cbd5e1; padding: 8px 12px; color: #0f172a;">AI-Powered Customer Support & Service Automation</td>
    </tr>
    <tr>
      <td style="border: 1px solid #cbd5e1; padding: 8px 12px; font-weight: bold; background-color: #f8fafc; color: #475569;">Maximum Marks</td>
      <td style="border: 1px solid #cbd5e1; padding: 8px 12px; color: #0f172a;">4 Marks</td>
    </tr>
  </table>
</div>
<!-- END ACADEMIC PORTAL HEADER -->

# Functional Scope

## 1. Project Background & Problem Statement
AeroGadgets Global, a prominent international electronics and gadgets company, is currently facing massive delays in responding to customer inquiries regarding product malfunctions, shipment tracking requests, and warranty policy claims. Currently, customer support teams are utilizing fragmented spreadsheets and manual lookup systems, causing:
- Inconsistent support quality due to lack of a central database.
- Severe delays in resolving support tickets (high Mean Time to Resolution).
- Zero visibility into historical case resolution rates and agent performances.
- Poor customer satisfaction rates (CSAT).

## 2. Solution Overview
The AI-Powered Customer Support & Service Automation system is designed on Salesforce Service Cloud to automate repetitive customer service operations and augment live agents with Einstein Prompt Templates and Agentforce AI service agents.

## 3. High-Level Capabilities & Module Breakdown
To resolve these core bottlenecks, the project delivers five integrated modules:

### A. Core Case Management (Service Cloud)
- **Automatic Case Capture**: Inquiries from various streams (Web, Email) are parsed and saved as structured Case records.
- **Categorization & Priority Assignment**: Automated parsing sets case category (Product Issue, Shipping, Warranty) and urgency.
- **Unified Service Console**: Provides a 360-degree customer view, displaying active cases, related product specs, and shipment orders.

### B. Intelligent Order & Shipment Tracking
- **CRM Order Lookups**: Integrates Order and Shipment records natively inside Salesforce.
- **Live Tracking Panel**: Displays direct delivery statuses (Processing, Shipped, In-Transit, Delivered) along with carrier Tracking IDs.

### C. Automated Warranty Claims Verification
- **Dynamic Warranty Auditing**: Computes whether the current claim date lies within the product's warranty period based on the order purchase date.
- **Auto-eligibility Indicator**: Flashes a visible warranty checkbox (`Warranty_Valid__c`) dynamically inside the Case page.

### D. Supervisor Approval Engine
- **Tiered Escalation**: High-value refund requests or complicated claim cases undergo automated multi-level supervisor approval hierarchies.
- **System Locks**: Keeps claim payments locked until formal supervisor electronic signatures are submitted.

### E. Agentforce Copilot & Prompt Automation
- **Einstein AI Service Assistant**: Powered by LLM technology (Gemini) to draft replies, troubleshoot product issues, and synthesize complex order tracking contexts.
- **Prompt Builder Templates**: Custom standard templates for drafting professional emails and suggesting resolving workflows.
