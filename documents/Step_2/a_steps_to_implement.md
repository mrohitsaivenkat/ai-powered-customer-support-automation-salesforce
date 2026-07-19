<!-- SYSTEM-GENERATED ACADEMIC PORTAL HEADER - MANDATORY FOR INTERNSHIP SUBMISSION -->
<div style="border: 3px solid #10b981; padding: 15px; border-radius: 8px; margin-bottom: 25px; background-color: #f0fdf4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1f2937;">
  <div style="text-align: center; font-size: 1.2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #047857; border-bottom: 2px solid #10b981; padding-bottom: 8px; margin-bottom: 12px;">
    Backend Development & Configurations
  </div>
  <div style="text-align: center; font-size: 1.1rem; font-weight: 600; color: #111827; margin-bottom: 15px;">
    Steps to Implement Salesforce Backend
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

# Steps to Implement

## 1. Environment Set Up
Setting up a secure, sandboxed Salesforce Developer Org is the prerequisite for all metadata changes.
- **Action**: Sign up for a free Salesforce Developer Edition Org.
- **Action**: Enable Einstein Features. Navigate to *Setup > Einstein > Einstein Setup* and toggle "Einstein" to ON to provision generative AI features.

## 2. Configuration Sequence

### Stage A: Defining Schema & Custom Objects
1. Navigate to the **Object Manager** in Salesforce Setup.
2. Select **Create > Custom Object** to provision our core custom object: `Order__c`.
3. Fill out basic settings: Enable Reports, Enable Activities, and Track Field History.
4. Set the Name field as an Auto-Number (`ORD-{00000}`) or Text depending on legacy data syncing.

### Stage B: Establishing Field Dictionary
1. Under `Order__c`'s Object details, click **Fields & Relationships**.
2. Create custom fields such as `Purchase_Date__c` (Date), `Shipment_Status__c` (Picklist), `Tracking_ID__c` (Text), and `Customer__c` (Lookup relationship to Contact).
3. Under the standard `Case` object, add custom relationships linking it directly to `Order__c` and `Product__c` standard objects.

### Stage C: Security Profiles and Sharing Rules
1. Assign read-write permissions to custom fields via **Field-Level Security (FLS)**.
2. Grant "Support Rep" profiles full read-write visibility over cases, orders, and products.
3. Lock edit permissions on computed audit fields (e.g., `Warranty_Valid__c` checkbox) so they can only be changed by automated workflows (Flows).

### Stage D: Rules and Business Process Orchestration
1. Build Validation Rules on `Case` and `Order` objects to preserve data integrity.
2. Set up Case Queues (Tier 1 Support, Technical Desk, and Billing Team).
3. Draft standard Approval Processes under *Setup > Process Automation > Approval Processes*. Ensure cases with refund claims exceeding $250 are routed to the Service Supervisor.
4. Establish Salesforce Flows (Record-Triggered and Screen Flows) to manage routing, computations, and guided agents.
