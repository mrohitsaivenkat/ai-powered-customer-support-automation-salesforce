<!-- SYSTEM-GENERATED ACADEMIC PORTAL HEADER - MANDATORY FOR INTERNSHIP SUBMISSION -->
<div style="border: 3px solid #10b981; padding: 15px; border-radius: 8px; margin-bottom: 25px; background-color: #f0fdf4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1f2937;">
  <div style="text-align: center; font-size: 1.2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #047857; border-bottom: 2px solid #10b981; padding-bottom: 8px; margin-bottom: 12px;">
    Requirement Analysis & Planning
  </div>
  <div style="text-align: center; font-size: 1.1rem; font-weight: 600; color: #111827; margin-bottom: 15px;">
    Execution Roadmap Document
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

# Execution Roadmap

## 1. Project Lifecycle Methodology
To deliver the Salesforce Service Cloud and Agentforce AI project successfully within a 6-week timeframe, our team follows an **Agile-Waterfall hybrid framework**. High-level scoping, data-modeling, and deployments utilize Waterfall stages to maintain robust structural architecture, while backend development, flow configurations, and UI screen creations run in fast, 1-week iterative Agile sprints.

## 2. Weekly Execution Timeline

### Week 1: Requirements Analysis, Sign-offs & Provisioning
- **Goals**: Define project scope, sign-off requirements, and set up the development environment.
- **Tasks**:
  - Hold stakeholder meetings to finalize standard and custom object fields.
  - Sign up for a Salesforce Developer Sandbox Org or Trailhead playground.
  - Create the High-Level Design (HLD) document and compile the functional specification spreadsheet.

### Week 2: Schema Design & Salesforce Object Creation
- **Goals**: Build the underlying relational database structure.
- **Tasks**:
  - Configure standard objects: Contact, Case, and Product.
  - Create custom object: Order (representing customer electronic purchases).
  - Define custom fields (`Purchase_Date__c`, `Warranty_Period_Months__c`, `SKU__c`, etc.).
  - Establish relationships (Lookup filters, Master-Detail relationships).

### Week 3: Security, Validation Rules, and Approval Matrices
- **Goals**: Secure data entry, enforce operational business logic, and construct approval routing.
- **Tasks**:
  - Build active Validation Rules (e.g., preventing future-dated purchases or warranty claims without corresponding order lookups).
  - Configure Salesforce Queues (Tier 1 Support Queue, Technical Escalations Queue, Billing Queue).
  - Design the Customer Service Supervisor Approval process for high-value claims.

### Week 4: Business Process Automation (Salesforce Flows)
- **Goals**: Automate case routing, warranty computations, and agent wizards.
- **Tasks**:
  - Build a Record-Triggered Flow to auto-assign incoming Cases to corresponding Queues based on Category.
  - Create a Record-Triggered Flow to compute and set the `Warranty_Valid__c` checkbox dynamically.
  - Build an interactive Screen Flow to guide agents through order package tracking and live status updates.

### Week 5: Prompt Engineering, Agentforce, & Lightning Customization
- **Goals**: Deploy generative AI capabilities and tailor the workspace layout.
- **Tasks**:
  - Build a custom Lightning Service Console App.
  - Set up Einstein Prompt Templates (Email drafting, troubleshooting assistant).
  - Ground prompt templates with live Merge fields representing Case, Contact, and Order objects.
  - Configure Agentforce AI Service Agents with action logs and system access.

### Week 6: Testing, Reporting, Video Recording, and Handover
- **Goals**: Quality assurance, metrics compilation, and project completion.
- **Tasks**:
  - Run end-to-end user acceptance testing (UAT).
  - Create Salesforce Reports and Dashboards (KPIs: CSAT, Case Backlogs, AI deflection rate).
  - Record a 5-minute technical demo video explaining the system.
  - Compile final system documentation.
