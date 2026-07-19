<!-- SYSTEM-GENERATED ACADEMIC PORTAL HEADER - MANDATORY FOR INTERNSHIP SUBMISSION -->
<div style="border: 3px solid #10b981; padding: 15px; border-radius: 8px; margin-bottom: 25px; background-color: #f0fdf4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1f2937;">
  <div style="text-align: center; font-size: 1.2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #047857; border-bottom: 2px solid #10b981; padding-bottom: 8px; margin-bottom: 12px;">
    Deployment, Documentation & Maintenance
  </div>
  <div style="text-align: center; font-size: 1.1rem; font-weight: 600; color: #111827; margin-bottom: 15px;">
    Change Management & Deployment Protocols
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

# Deployment, Documentation & Maintenance

## 1. Sandbox Deployment Framework
All metadata alterations, field additions, flow charts, validation triggers, and custom prompt templates must be deployed via safe sandbox pipelines before release to the live Production environment.
- **Source**: Developer Sandbox Org (UAT / Staging).
- **Target**: Production Org.

## 2. Steps to Migrate Salesforce Configurations
To deploy your customer service automation metadata, utilize **Salesforce Change Sets**:

### Step A: Configure Deployment Connections
1. In the target Production Org, navigate to **Setup** and search **Deployment Settings**.
2. Click Edit next to your sandbox connection, check **Allow Inbound Changes**, and click Save.
3. In the source Sandbox Org, confirm that **Allow Outbound Changes** is enabled.

### Step B: Create an Outbound Change Set
1. In the source Sandbox Org, search **Outbound Change Sets** in Setup.
2. Click **New**, name it `AeroSupport_Automation_V1`, and click Save.
3. In the **Change Set Components** section, click **Add**:
   - Add Custom Objects: `Order__c`.
   - Add Custom Fields: `Case.Related_Order__c`, `Case.Warranty_Valid__c`, `Order__c.Purchase_Date__c`, `Order__c.Shipment_Status__c`, etc.
   - Add Validation Rules: `Prevent_Warranty_Claim_Without_Order`, `Prevent_Future_Purchase_Dates`.
   - Add Flows: `Case_Category_Queue_Routing`, `Warranty_Claim_Validity_Calculator`, `Order_Tracking_Helper_Screen_Flow`.
   - Add Custom App: `AeroSupport_Console`.
   - Add Custom Prompt Template: `Draft_Email_AeroGadgets_Support`.
4. Click **Upload** and select the Production Org as the target.

### Step C: Deploy the Inbound Change Set
1. Log into the target Production Org.
2. Search **Inbound Change Sets** in Setup.
3. Select `AeroSupport_Automation_V1` and click **Validate** (running validation tests ensures that all dependencies are resolved without errors).
4. Once validation completes successfully, click **Deploy**.

## 3. Maintenance Protocols
After deployment, configure the following maintenance tasks:
- **System Backups**: Run weekly exports of `Order__c` and `Case` records.
- **Apex / Flow Execution Logs**: Set up email notifications to system administrators for any unhandled Flow run-time faults.
- **AI Token Auditing**: Monitor Prompt Builder token limits monthly to track AI costs and resource usage.
