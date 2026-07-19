<!-- SYSTEM-GENERATED ACADEMIC PORTAL HEADER - MANDATORY FOR INTERNSHIP SUBMISSION -->
<div style="border: 3px solid #10b981; padding: 15px; border-radius: 8px; margin-bottom: 25px; background-color: #f0fdf4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1f2937;">
  <div style="text-align: center; font-size: 1.2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #047857; border-bottom: 2px solid #10b981; padding-bottom: 8px; margin-bottom: 12px;">
    Maintenance, Monitoring & Troubleshooting
  </div>
  <div style="text-align: center; font-size: 1.1rem; font-weight: 600; color: #111827; margin-bottom: 15px;">
    Guidelines for AI-Powered Customer Support Documentation
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

# Documentation & SOP Guidelines

## 1. Scope of Support Documentation
To ensure consistent support quality and simplify onboarding for new support representatives at AeroGadgets Global, a comprehensive set of Standard Operating Procedures (SOPs) and documentation standards must be enforced.

## 2. Guidelines for Drafting Technical Support Knowledge Base Articles
When customer service agents identify common issues, they must compile them into standard Salesforce Knowledge articles following these guidelines:
- **Title Structure**: Start with the specific product model and core issue (e.g., *"AeroBuds Pro - BlueTooth Connection Fix"*).
- **Executive Summary**: State what the article covers in 2-3 sentences.
- **Prerequisites**: List any tools or settings needed (e.g., *"Ensure firmware is updated to version 2.1"*).
- **Step-by-Step Instructions**: Write numbered steps. Keep sentences simple and action-oriented.
- **Verification**: Explain how the user can verify that the problem is resolved.
- **Drafting Tooling**: Use the custom Einstein Prompt template `KB_Article_Drafting_Assistant` to translate raw case resolution logs into clean customer-facing instructions.

## 3. Guidelines for Standard Operating Procedures (SOPs)
All active service agents must follow standard routing policies and response procedures:
- **Triage Protocols**:
  - Immediately link related customer Contact (or Student) and Order profiles.
  - Review the auto-computed `Warranty_Valid__c` checkbox before authorizing physical device returns.
- **AI-Augmented Communication Policies**:
  - Click the **Draft Support Reply** custom action on the Case page to write initial email drafts.
  - Carefully proofread and edit the AI-generated text to ensure customized relevance. Do not send raw AI drafts without review.
  - Verify that tracking numbers, shipping carrier names, and purchase dates mentioned in the text are correct.
