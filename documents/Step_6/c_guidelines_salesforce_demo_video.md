<!-- SYSTEM-GENERATED ACADEMIC PORTAL HEADER - MANDATORY FOR INTERNSHIP SUBMISSION -->
<div style="border: 3px solid #10b981; padding: 15px; border-radius: 8px; margin-bottom: 25px; background-color: #f0fdf4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1f2937;">
  <div style="text-align: center; font-size: 1.2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #047857; border-bottom: 2px solid #10b981; padding-bottom: 8px; margin-bottom: 12px;">
    Maintenance, Monitoring & Troubleshooting
  </div>
  <div style="text-align: center; font-size: 1.1rem; font-weight: 600; color: #111827; margin-bottom: 15px;">
    Guidelines for Salesforce Demo Video
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

# Demo Video Guidelines

## 1. Objective of the Demo Video
The Salesforce Project Demonstration Video is the primary deliverable for technical evaluation, grading, and business approval. It must prove the functionality of all custom objects, validation rules, automated flows, and Agentforce AI services in a professional 5-minute screencast.

## 2. Recommended Video Structure & Script

### Segment A: Introduction (Duration: 0:00 - 0:45)
- **Visuals**: Show slide with Project Title, Team ID, Date, and Academic Header matching the green box layout.
- **Narrative**: Briefly state the project's background—explaining how AeroGadgets Global automated its customer service desk using Salesforce Service Cloud, Flows, and Agentforce.

### Segment B: Data Schema & Console Workspace (Duration: 0:45 - 1:45)
- **Visuals**: Navigate through the Salesforce Service Console App tabs (Cases, Orders, Products, Dashboards).
- **Narrative**: Show the custom fields on the `Order__c` custom object and explain how orders and cases are linked.

### Segment C: Custom Validation Rules & Queue Triage (Duration: 1:45 - 2:45)
- **Visuals**: Trigger the `Prevent_Warranty_Claim_Without_Order` validation rule by trying to save a warranty claim Case without an associated order lookup. Show the error banner. Then, associate the order and save successfully.
- **Narrative**: Demonstrate how validation rules maintain clean data entry. Show the Case auto-routing Flow assigning the case to the specialized Technical queue.

### Segment D: Automation Flows & Warranty Checker (Duration: 2:45 - 3:45)
- **Visuals**: Trigger the record flow by creating a Case for an order purchased 6 months ago (warranty is valid) and then a Case for an order purchased 3 years ago (warranty is expired). Show how the `Warranty_Valid__c` checkbox auto-computes and checks.
- **Narrative**: Explain the flow logic in Flow Builder (using the `ADDMONTHS` formula resource) and how it eliminates human calculation errors.

### Segment E: Agentforce AI Service Agent & Prompts (Duration: 3:45 - 4:45)
- **Visuals**: Navigate to the Contact/Student record. Click **Draft Support Reply** custom action. Show Einstein Prompt Builder generating a highly contextual response.
- **Narrative**: Explain how Prompt templates merge live CRM fields. Show how the Agentforce assistant drafts emails containing order details, shipping status, and warranty eligibility.

### Segment F: Reports, Dashboards & Conclusion (Duration: 4:45 - 5:00)
- **Visuals**: Open the high-level service Dashboard. Point out CSAT trends, Case Backlog rates, and average resolution speed.
- **Narrative**: Summarize the system's business value (e.g., 70% reduction in response time) and end with professional closing credits.
