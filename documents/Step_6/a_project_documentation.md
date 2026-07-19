<!-- SYSTEM-GENERATED ACADEMIC PORTAL HEADER - MANDATORY FOR INTERNSHIP SUBMISSION -->
<div style="border: 3px solid #10b981; padding: 15px; border-radius: 8px; margin-bottom: 25px; background-color: #f0fdf4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1f2937;">
  <div style="text-align: center; font-size: 1.2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #047857; border-bottom: 2px solid #10b981; padding-bottom: 8px; margin-bottom: 12px;">
    Maintenance, Monitoring & Troubleshooting
  </div>
  <div style="text-align: center; font-size: 1.1rem; font-weight: 600; color: #111827; margin-bottom: 15px;">
    System Technical Documentation
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

# Project Technical Documentation

## 1. System Architecture Summary
The AI-Powered Customer Support & Service Automation system is integrated into Salesforce Service Cloud to streamline customer care for AeroGadgets Global. It relies entirely on:
- Declarative data models (Standard Case, Contact, Product objects + Custom `Order__c` object).
- Point-and-click business process automations (Salesforce Validation Rules, Flow Builder).
- LLM Generative AI configurations (Einstein Prompt Templates, Agentforce AI Service Agents).

## 2. Technical Data Dictionary

### Object Metadata

- **`Contact` (Standard)**: Customer profiles.
- **`Product2` (Standard)**: Product list, SKUs, and warranty period configurations.
- **`Order__c` (Custom)**: Relational order table linking Contact to purchased products with fields `Purchase_Date__c`, `Shipment_Status__c`, `Tracking_ID__c`.
- **`Case` (Standard)**: Ticket records holding related Order references (`Related_Order__c`), Case Priority, Category, and the `Warranty_Valid__c` checkbox.

## 3. Automation Logical Paths

- **Case Triage Path**: Record Created -> Check Subject/Description -> Match Category -> Assign to corresponding Billing/Tech/Warranty queue.
- **Warranty Audit Path**: Related order updated -> Read Order purchase date -> Read product warranty length -> Compute eligibility -> Set `Warranty_Valid__c` boolean flag.
- **Agent Force Action Path**: Case Opened -> Prompt Builder parses context fields -> Merges live Contact and Order parameters -> LLM generates highly contextual support emails.

## 4. Troubleshooting Manual

- **Issue 1**: Flow validation errors when resolving warranty claims.
  - *Cause*: Support rep forgot to link the related customer purchase Order lookup, triggering the `Prevent_Warranty_Claim_Without_Order` validation rule.
  - *Fix*: Search for the customer's matching Order record and associate it with the `Related_Order__c` field on the Case layout.
- **Issue 2**: Agentforce AI drafts contain empty placeholders.
  - *Cause*: Merged fields on the active Contact record are blank (e.g., missing FirstName, LastName, or Order Tracking numbers).
  - *Fix*: Complete all relevant fields on the parent Contact or Order details, then click "Regenerate Draft" to update the LLM context.
- **Issue 3**: High-value refund approval requests are stuck.
  - *Cause*: The Case remains locked under standard supervisor security protocols waiting for approval.
  - *Fix*: Instruct the Service Manager to navigate to the "Approval Requests" tab and click Approve.
