<!-- SYSTEM-GENERATED ACADEMIC PORTAL HEADER - MANDATORY FOR INTERNSHIP SUBMISSION -->
<div style="border: 3px solid #10b981; padding: 15px; border-radius: 8px; margin-bottom: 25px; background-color: #f0fdf4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1f2937;">
  <div style="text-align: center; font-size: 1.2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #047857; border-bottom: 2px solid #10b981; padding-bottom: 8px; margin-bottom: 12px;">
    Agentforce, Reporting & Deployment
  </div>
  <div style="text-align: center; font-size: 1.1rem; font-weight: 600; color: #111827; margin-bottom: 15px;">
    Create Einstein Prompt Template
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

# Create Prompt Template

## 1. What is Einstein Prompt Builder?
Einstein Prompt Builder lets Salesforce administrators design reusable, grounded prompt instructions that feed directly into generative LLMs. These prompts can reference live record fields (Contact Name, Case Reason, Order tracking parameters) as dynamic parameters, ensuring the model's generated text is factual and personalized.

## 2. Dynamic Email Drafting Prompt Template
We designed a standard template to draft customer emails directly from Case records:

- **Template Name**: `Draft_Email_AeroGadgets_Support`
- **Template Type**: **Salesforce Email Draft Template**
- **Associated Object**: `Case`
- **Model**: `gemini-3.5-flash` (or Einstein GPT)

### Custom Prompt Template Text (Instruction Set)
```text
You are a highly professional, empathetic customer support expert working at AeroGadgets Global.
Draft a personalized email response addressing the customer's active issue described in the Case details.

Use the following real-time Salesforce record fields to ground your response:
Customer Name: {!$Input:Case.Contact.FirstName} {!$Input:Case.Contact.LastName}
Case Issue: {!$Input:Case.Subject}
Detailed Problem: {!$Input:Case.Description}
Related Product: {!$Input:Case.Related_Order__r.Product__r.Name}
Order Number: {!$Input:Case.Related_Order__r.Name}
Purchase Date: {!$Input:Case.Related_Order__r.Purchase_Date__c}
Shipment Status: {!$Input:Case.Related_Order__r.Shipment_Status__c}
Carrier Tracking Number: {!$Input:Case.Related_Order__r.Tracking_ID__c}
Is Warranty Active: {!$Input:Case.Warranty_Valid__c}

Guidelines:
1. Address the customer by name: Dear {!$Input:Case.Contact.FirstName}.
2. Express genuine empathy for their concern (e.g., product malfunctions, package delays).
3. Ground the email facts strictly on the record variables:
   - If Shipment Status is 'Shipped' or 'In-Transit', explicitly provide Tracking Number {!$Input:Case.Related_Order__r.Tracking_ID__c}.
   - If the issue is a return/claim: mention that based on purchase date {!$Input:Case.Related_Order__r.Purchase_Date__c}, their Warranty is {!IF($Input:Case.Warranty_Valid__c, 'Active & Eligible for free replacement', 'Expired, but we can offer a 20% loyalty repair discount')}.
4. Provide structured, clear troubleshooting bullet points if a technical product malfunction is indicated.
5. End with a polite closing statement: Best regards, AeroGadgets Global Support Team.
```

## 3. Configuration Steps in Salesforce Setup
1. In the Quick Find box under Setup, search for **Prompt Builder**.
2. Click **New Prompt Template**.
3. Select **Flex Template** or **Salesforce Email Draft**.
4. Set Name as `Draft_Email_AeroGadgets_Support` and select `Case` as the Object.
5. In the main editor window, paste the prompt text.
6. Use the **Insert Resource** button to search and merge live fields (such as `Case.Contact.FirstName`).
7. Select **Save** and click **Preview** to load test records and audit the output.
8. Click **Activate** to make the template available throughout the Salesforce ecosystem.
