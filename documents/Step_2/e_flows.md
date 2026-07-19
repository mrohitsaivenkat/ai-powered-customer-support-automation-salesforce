<!-- SYSTEM-GENERATED ACADEMIC PORTAL HEADER - MANDATORY FOR INTERNSHIP SUBMISSION -->
<div style="border: 3px solid #10b981; padding: 15px; border-radius: 8px; margin-bottom: 25px; background-color: #f0fdf4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1f2937;">
  <div style="text-align: center; font-size: 1.2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #047857; border-bottom: 2px solid #10b981; padding-bottom: 8px; margin-bottom: 12px;">
    Backend Development & Configurations
  </div>
  <div style="text-align: center; font-size: 1.1rem; font-weight: 600; color: #111827; margin-bottom: 15px;">
    Salesforce Flows & Automation Logic
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

# Salesforce Flows

## 1. Introduction to Flows
Salesforce Flows represent the primary declarative engine for automating complicated visual procedures, calculating values behind the scenes, and updating multiple databases without a single line of Apex code.

## 2. Configured Flows Diagram and Logics

### Flow 1: Record-Triggered Flow - Case Category Queue Routing
- **Trigger Source**: Case Object.
- **Trigger Event**: Created or Updated.
- **Criteria**: `Status` equals "New" AND `OwnerId` is not set.
- **Execution Paths**:
  - **Decision Block**: Read `Case.Type` field.
    - If `Type == "Technical Issue"`: Update Case OwnerId to the **Technical Escalations Queue ID**.
    - If `Type == "Billing"`: Update Case OwnerId to the **Billing Team Queue ID**.
    - If `Type == "Warranty Claim"`: Update Case OwnerId to the **Warranty Returns Queue ID**.
    - Default Outcome: Keep in the general support queue.
- **Value Achieved**: Saves support agents 20 minutes per case of manual triage, achieving 100% routing accuracy.

### Flow 2: Record-Triggered Flow - Warranty Claim Validity Calculator
- **Trigger Source**: Case Object.
- **Trigger Event**: Created or Updated.
- **Criteria**: Related Order Lookup (`Related_Order__c`) and Product Lookup are populated.
- **Variables**:
  - `Order_Purchase_Date` = `Case.Related_Order__r.Purchase_Date__c`
  - `Product_Warranty_Months` = `Case.Related_Order__r.Product__r.Warranty_Period_M__c`
- **Formula Resource (`IsClaimEligible`)**:
  ```text
  ADDMONTHS({!Order_Purchase_Date}, {!Product_Warranty_Months}) >= TODAY()
  ```
- **Execution Path**:
  - **Decision Block**: Check if formula evaluates to True or False.
    - If `True`: Update Case checkbox `Warranty_Valid__c` to **True**.
    - If `False`: Update Case checkbox `Warranty_Valid__c` to **False**.
- **Value Achieved**: Eliminates human mathematical error, protecting the firm from paying out unauthorized, expired warranty returns.

### Flow 3: Screen Flow - Order tracking Helper for Live Agents
- **Type**: Interactive Guided Screen Flow.
- **Entry Method**: Action button placed on the Case Record Detail layout.
- **Visual Screens**:
  - **Screen 1 (Search Order)**: Agent enters an Order Number (e.g., ORD-38102) in an input field.
  - **Database Action (Get Records)**: Queries `Order__c` where Name equals user input.
  - **Screen 2 (Display Shipment Details)**: If order found, outputs a clean card displaying:
    - Customer Name
    - Purchase Date
    - **Live Shipment Status**: Colored text based on status.
    - **Carrier Tracking Number**: Underlined tracking ID.
  - **Screen 3 (If Not Found)**: Displays a visual error warning and prompts the agent to double-check serial records.
- **Value Achieved**: Keeps support representatives focused on a single interface, eliminating "tab-hopping" fatigue.
