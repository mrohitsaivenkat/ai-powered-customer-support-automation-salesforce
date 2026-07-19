<!-- SYSTEM-GENERATED ACADEMIC PORTAL HEADER - MANDATORY FOR INTERNSHIP SUBMISSION -->
<div style="border: 3px solid #10b981; padding: 15px; border-radius: 8px; margin-bottom: 25px; background-color: #f0fdf4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1f2937;">
  <div style="text-align: center; font-size: 1.2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #047857; border-bottom: 2px solid #10b981; padding-bottom: 8px; margin-bottom: 12px;">
    Requirement Analysis & Planning
  </div>
  <div style="text-align: center; font-size: 1.1rem; font-weight: 600; color: #111827; margin-bottom: 15px;">
    Stakeholder Mapping Matrix
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

# Stakeholder Mapping

## 1. Introduction to Stakeholder Management
A successful CRM rollout requires understanding the diverse and sometimes contrasting expectations of the individuals interacting with the software. This document identifies key stakeholders, maps their expectations, outlines their primary challenges, and details how the Salesforce solution addresses their pain points.

## 2. Detailed Stakeholder Matrix

### A. End Customers (Global Electronics Buyers)
- **Role**: The consumer base purchasing gadgets (smartphones, audio products, smart home gadgets) requiring support.
- **Pain Points**: Long phone hold times, delayed emails, lack of transparency regarding order status or warranty eligibility.
- **Expectations**: 24/7 instant updates, multi-channel accessibility, simple warranty claims process.
- **How System Resolves**: Provides Agentforce AI service agents for instant responses, automated email notifications of case statuses, and a streamlined warranty intake portal.

### B. Customer Support Agents (First-Line Responders)
- **Role**: Staff handling active queues, responding to cases, verifying serial numbers, and resolving customer queries.
- **Pain Points**: Tab-hopping across multiple legacy database systems, drafting hundreds of repetitive emails, manual mathematical computation of warranty periods.
- **Expectations**: Consolidating all client data (orders, products, past history) into a single console, having AI help with writing drafts, automation of routing.
- **How System Resolves**: Implements the Salesforce Unified Service Console, embedding order details in the case page layout, alongside an automatic "Warranty claim validity check" checkbox, and Einstein Prompt Builder drafts.

### C. Service Supervisors & Managers
- **Role**: Leaders responsible for operational efficiency, escalations, warranty claim payouts, and CSAT metrics.
- **Pain Points**: Manual escalation of priority files, high fraud rates on warranty claims, lack of centralized real-time reports.
- **Expectations**: Automated approvals, early warning alerts for SLAs, and analytics on agent performance.
- **How System Resolves**: Introduces Salesforce Approval Processes (locking files until supervisor review), validation rules, and interactive dashboards displaying Case Volume, Resolution Time, and AI Help usage metrics.

### D. IT & CRM System Administrators
- **Role**: Core developers configuring flows, prompt templates, validation rules, and maintaining integration gateways.
- **Pain Points**: Managing complex code bases, updating fragile legacy scripts, training users.
- **Expectations**: Visual declarative programming tools, reusable flow templates, secure sandbox deployment pipelines.
- **How System Resolves**: Uses Salesforce declarative flows (Record-Triggered and Screen Flows), Prompt Builder, and Agentforce configuration dashboards.
