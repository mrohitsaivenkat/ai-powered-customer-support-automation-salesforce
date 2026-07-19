<!-- SYSTEM-GENERATED ACADEMIC PORTAL HEADER - MANDATORY FOR INTERNSHIP SUBMISSION -->
<div style="border: 3px solid #10b981; padding: 15px; border-radius: 8px; margin-bottom: 25px; background-color: #f0fdf4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1f2937;">
  <div style="text-align: center; font-size: 1.2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #047857; border-bottom: 2px solid #10b981; padding-bottom: 8px; margin-bottom: 12px;">
    UI/UX Development & Customization
  </div>
  <div style="text-align: center; font-size: 1.1rem; font-weight: 600; color: #111827; margin-bottom: 15px;">
    The Lightning App Creation Document
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

# Lightning App Creation

## 1. Context of UI/UX in Salesforce
Salesforce Lightning Experience provides customizable frameworks to design specialized environments tailored to specific job roles. Designing a custom Lightning App lets support reps perform their work within an uncluttered, high-productivity console.

## 2. Setting Up "AeroSupport Console"
The "AeroSupport Console" is designed for first-line responders who resolve customer gadget concerns quickly. Below are the steps to create and configure the app:

### Step A: Launch App Manager
1. Navigate to **Setup** and search **App Manager** in the Quick Find search box.
2. Click **New Lightning App** on the top right.

### Step B: App Details & Branding
- **App Name**: `AeroSupport Console`
- **Developer Name**: `AeroSupport_Console`
- **Description**: *"Unified Customer Service and AI-driven Support Console for managing AeroGadgets Global Customers, Orders, Products, and Cases."*
- **Brand Logo**: Upload custom blue/grey corporate logo representing electronic devices.
- **Color Accent**: Deep Slate Blue (`#1E293B`) to establish a professional, eye-safe environment.

### Step C: App Navigation Style
- **Navigation Style**: Select **Console Navigation**. (Console layouts open records as sub-tabs inside parent workspace tabs, which is highly suited for service agents who must work on multiple customer tickets at once).
- **Supported Form Factors**: Select **Desktop and Phone** to ensure responsive accessibility.

### Step D: Utility Items Configuration
The Utility Bar is a persistent footer docked at the bottom of the screen.
1. Click **Add Utility Item**.
2. Add **History** (lets agents rapidly navigate back to recently viewed orders).
3. Add **Notes** (for quick drafts during live phone inquiries).
4. Add **Macro** (for batch-updating statuses).

### Step E: Navigation Items selection
Select the available tabs for this Console App:
- Cases
- Orders__c
- Products (Product2)
- Dashboards
- Contacts

### Step F: Record Page Layout Enhancements (Lightning App Builder)
1. Open any Case record.
2. Select **Setup > Edit Page** to open the **Lightning App Builder**.
3. Create a **Three-Column Responsive Layout**:
   - **Left Column**: Standard record details and case attributes.
   - **Center Column**: Case Chatter feed and interactive Case Timeline.
   - **Right Column (Context Sidebar)**: Related Customer Contacts lookup + Custom Related Order detail card + Einstein Prompt Builder Draft Component.
4. Add the custom Screen Flow "Order Tracking Helper" to the Right Sidebar as a prominent Action Card.
5. Click **Save** and **Activate** as the Org Default for all Support profiles.
