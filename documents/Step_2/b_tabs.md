<!-- SYSTEM-GENERATED ACADEMIC PORTAL HEADER - MANDATORY FOR INTERNSHIP SUBMISSION -->
<div style="border: 3px solid #10b981; padding: 15px; border-radius: 8px; margin-bottom: 25px; background-color: #f0fdf4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1f2937;">
  <div style="text-align: center; font-size: 1.2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #047857; border-bottom: 2px solid #10b981; padding-bottom: 8px; margin-bottom: 12px;">
    Backend Development & Configurations
  </div>
  <div style="text-align: center; font-size: 1.1rem; font-weight: 600; color: #111827; margin-bottom: 15px;">
    Salesforce Custom Tabs Definition
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

# Salesforce Tabs Configuration

## 1. Introduction to Custom Tabs
Tabs are critical visual structures that expose underlying standard or custom database tables (Objects) directly inside Salesforce Applications (such as the Service Console). They dictate navigation flow and let users easily toggle between data collections.

## 2. Configured Tabs and Visibilities

| Tab Name | Exposed Object | Type | Tab Style Icon | Target User Audience | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Cases** | `Case` | Standard | Briefcase | All Support Reps, Managers | The master console for viewing, updating, routing, and solving customer tickets. |
| **Orders** | `Order__c` | Custom | Shopping Cart / Credit Card | Support Agents, Logistics Teams | Exposes individual hardware purchase histories, shipment statuses, and carrier IDs. |
| **Products** | `Product2` | Standard | Gears / Box | Support Technicians, Sales Admin | Holds product specifications, warranty timelines, manual document files, and SKUs. |
| **Dashboard** | `Dashboard` | Standard | Bar Chart | Support Supervisors, Executives | Exposes high-level service charts, case queues metrics, SLA breaches, and CSAT ratings. |
| **Prompt Builder** | Setup Tab | Custom Administrative | Gear / Sparkle | System Administrators | Enables editing and fine-tuning AI system instruction models and grounding merge fields. |

## 3. Creating Custom Tabs (Procedural Steps)
1. Go to **Setup** and search for **Tabs** in the Quick Find box.
2. Under **Custom Object Tabs**, click **New**.
3. Select the target object (e.g., `Order__c`) from the drop-down.
4. Select a recognizable **Tab Style** (e.g., "Cash Register" or "Shipment Truck") to assign visual icons.
5. Set the **Profile Visibility** settings: set to "Default On" for Customer Support Agent and Service Manager profiles. Set to "Tab Hidden" for other departments to prevent visual clutter.
6. Choose the **Custom Apps** where this tab should be displayed: select our custom "AeroGadgets Support" Lightning Console App.
7. Click **Save**.
