import { ProjectDocument } from "../types";

export const documentsData: ProjectDocument[] = [
  {
    id: "step1_a",
    step: 1,
    subtopic: "a",
    title: "Functional Scope Document",
    phase: "Requirement Analysis & Planning",
    templateName: "Functional Scope Document",
    content: `# Functional Scope

## 1. Project Background & Problem Statement
AeroGadgets Global, a prominent international electronics and gadgets company, is currently facing massive delays in responding to customer inquiries regarding product malfunctions, shipment tracking requests, and warranty policy claims. Currently, customer support teams are utilizing fragmented spreadsheets and manual lookup systems, causing:
- Inconsistent support quality due to lack of a central database.
- Severe delays in resolving support tickets (high Mean Time to Resolution).
- Zero visibility into historical case resolution rates and agent performances.
- Poor customer satisfaction rates (CSAT).

## 2. Solution Overview
The AI-Powered Customer Support & Service Automation system is designed on Salesforce Service Cloud to automate repetitive customer service operations and augment live agents with Einstein Prompt Templates and Agentforce AI service agents.

## 3. High-Level Capabilities & Module Breakdown
To resolve these core bottlenecks, the project delivers five integrated modules:

### A. Core Case Management (Service Cloud)
- **Automatic Case Capture**: Inquiries from various streams (Web, Email) are parsed and saved as structured Case records.
- **Categorization & Priority Assignment**: Automated parsing sets case category (Product Issue, Shipping, Warranty) and urgency.
- **Unified Service Console**: Provides a 360-degree customer view, displaying active cases, related product specs, and shipment orders.

### B. Intelligent Order & Shipment Tracking
- **CRM Order Lookups**: Integrates Order and Shipment records natively inside Salesforce.
- **Live Tracking Panel**: Displays direct delivery statuses (Processing, Shipped, In-Transit, Delivered) along with carrier Tracking IDs.

### C. Automated Warranty Claims Verification
- **Dynamic Warranty Auditing**: Computes whether the current claim date lies within the product's warranty period based on the order purchase date.
- **Auto-eligibility Indicator**: Flashes a visible warranty checkbox (\`Warranty_Valid__c\`) dynamically inside the Case page.

### D. Supervisor Approval Engine
- **Tiered Escalation**: High-value refund requests or complicated claim cases undergo automated multi-level supervisor approval hierarchies.
- **System Locks**: Keeps claim payments locked until formal supervisor electronic signatures are submitted.

### E. Agentforce Copilot & Prompt Automation
- **Einstein AI Service Assistant**: Powered by LLM technology (Gemini) to draft replies, troubleshoot product issues, and synthesize complex order tracking contexts.
- **Prompt Builder Templates**: Custom standard templates for drafting professional emails and suggesting resolving workflows.`
  },
  {
    id: "step1_b",
    step: 1,
    subtopic: "b",
    title: "Stakeholder Mapping Matrix",
    phase: "Requirement Analysis & Planning",
    templateName: "Stakeholder Mapping Matrix",
    content: `# Stakeholder Mapping

## 1. Introduction to Stakeholder Management
A successful CRM rollout requires understanding the diverse and sometimes contrasting expectations of the individuals interacting with the software. This document identifies key stakeholders, maps their expectations, outlines their primary challenges, and details how the Salesforce solution addresses their pain points.

## 2. Detailed Stakeholder Matrix

### A. End Customers (Global Electronics Buyers)
- **Role**: The consumer base purchasing gadgets (smartphones, audio products, smart home gadgets) requiring support.
- **Pain Points**: Long phone hold times, delayed emails, lack of transparency regarding order status or warranty eligibility.
- **Expectations**: 24/7 instant updates, multi-channel accessibility, simple warranty claims process.
- **How System Resolves**: Provides Agentforce AI service agents for instant responses, automated email notifications of case statuses, and a streamlined warranty intake portal.

### B. Customer Support Agents (First-Line Responders)
- **Role**: Staff handling active queues, responding to cases, verifying serial numbers, and resolving customer queries.
- **Pain Points**: Tab-hopping across multiple legacy database systems, drafting hundreds of repetitive emails, manual mathematical computation of warranty periods.
- **Expectations**: Consolidating all client data (orders, products, past history) into a single console, having AI help with writing drafts, automation of routing.
- **How System Resolves**: Implements the Salesforce Unified Service Console, embedding order details in the case page layout, alongside an automatic "Warranty claim validity check" checkbox, and Einstein Prompt Builder drafts.

### C. Service Supervisors & Managers
- **Role**: Leaders responsible for operational efficiency, escalations, warranty claim payouts, and CSAT metrics.
- **Pain Points**: Manual escalation of priority files, high fraud rates on warranty claims, lack of centralized real-time reports.
- **Expectations**: Automated approvals, early warning alerts for SLAs, and analytics on agent performance.
- **How System Resolves**: Introduces Salesforce Approval Processes (locking files until supervisor review), validation rules, and interactive dashboards displaying Case Volume, Resolution Time, and AI Help usage metrics.

### D. IT & CRM System Administrators
- **Role**: Core developers configuring flows, prompt templates, validation rules, and maintaining integration gateways.
- **Pain Points**: Managing complex code bases, updating fragile legacy scripts, training users.
- **Expectations**: Visual declarative programming tools, reusable flow templates, secure sandbox deployment pipelines.
- **How System Resolves**: Uses Salesforce declarative flows (Record-Triggered and Screen Flows), Prompt Builder, and Agentforce configuration dashboards.`
  },
  {
    id: "step1_c",
    step: 1,
    subtopic: "c",
    title: "Execution Roadmap Document",
    phase: "Requirement Analysis & Planning",
    templateName: "Execution Roadmap Document",
    content: `# Execution Roadmap

## 1. Project Lifecycle Methodology
To deliver the Salesforce Service Cloud and Agentforce AI project successfully within a 6-week timeframe, our team follows an **Agile-Waterfall hybrid framework**. High-level scoping, data-modeling, and deployments utilize Waterfall stages to maintain robust structural architecture, while backend development, flow configurations, and UI screen creations run in fast, 1-week iterative Agile sprints.

## 2. Weekly Execution Timeline

### Week 1: Requirements Analysis, Sign-offs & Provisioning
- **Goals**: Define project scope, sign-off requirements, and set up the development environment.
- **Tasks**:
  - Hold stakeholder meetings to finalize standard and custom object fields.
  - Sign up for a free Salesforce Developer Sandbox Org or Trailhead playground.
  - Create the High-Level Design (HLD) document and compile the functional specification spreadsheet.

### Week 2: Schema Design & Salesforce Object Creation
- **Goals**: Build the underlying relational database structure.
- **Tasks**:
  - Configure standard objects: Contact, Case, and Product.
  - Create custom object: Order (representing customer electronic purchases).
  - Define custom fields (\`Purchase_Date__c\`, \`Warranty_Period_Months__c\`, \`SKU__c\`, etc.).
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
  - Create a Record-Triggered Flow to compute and set the \`Warranty_Valid__c\` checkbox dynamically.
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
  - Compile final system documentation.`
  },
  {
    id: "step1_brainstorm",
    step: 1,
    subtopic: "brainstorm",
    title: "Brainstorm & Idea Prioritization Template",
    phase: "Ideation Phase",
    templateName: "Brainstorm & Idea Prioritization Template",
    content: `# Brainstorm & Idea Prioritization

## 1. Context & Team Gathering
Brainstorming provides a free and open environment that encourages everyone within a team to participate in the creative thinking process that leads to problem solving. Prioritizing volume over value, out-of-the-box ideas are welcome and built upon, and all participants are encouraged to collaborate, helping each other develop a rich amount of creative solutions.

## 2. Problem Statements Identified
Our team evaluated the current state of customer support at AeroGadgets Global and identified several core problems:
- **Problem A**: Customers experience an average of 48-hour delay for simple email inquiries regarding package delivery statuses.
- **Problem B**: Support agents spend over 40% of their workday opening separate logistics spreadsheets to verify product order numbers.
- **Problem C**: Customers frequently submit fraudulent warranty claims on expired gadget purchases because agents have no quick way to verify receipt dates.
- **Problem D**: High-level support supervisors are constantly interrupted to manually sign off on minor customer compensation values.

## 3. Idea Listing & Grouping
We listed multiple ideas to solve the issues and grouped them by feasibility:

### Group 1: Standard CRM Database Configuration (Immediate Feasibility)
- Create custom objects to host Order records, serial numbers, and shipment records natively inside Salesforce.
- Establish relationships between Contact, Case, and Order objects so that data is linked directly on page load.

### Group 2: Business Logic & Workflow Automation (High Feasibility)
- Use Validation Rules to enforce clean formatting and block invalid order dates.
- Build Salesforce Record-Triggered Flows to automatically route incoming cases to specialized Billing, Tech, or Return queues.
- Use Flows to calculate if the purchase date exceeds the warranty period and auto-toggle a boolean flag.

### Group 3: AI-Driven Autonomic Solutions (Cutting Edge - High Impact)
- Configure custom Prompt Templates in Einstein Prompt Builder to merge Case data, Customer metrics, and Shipment states into polite email responses.
- Deploy an Agentforce AI Service Agent to read incoming requests, autonomously fetch tracking statuses, and draft answers without manual agent oversight.

## 4. Prioritization Matrix (Effort vs. Impact)

| Idea Name | Implementation Effort | Potential Impact | Priority Level |
| :--- | :--- | :--- | :--- |
| Custom Objects Configuration | Low | Medium | **High** (Foundation) |
| Case Auto-Routing Flows | Medium | High | **High** (Vital) |
| Warranty calculation Flow | Low | High | **High** (High ROI) |
| Supervisor Approval Process | Low | Medium | **Medium** |
| Agentforce Copilot Integration | Medium | High | **High** (Key Innovator) |`
  },
  {
    id: "step2_a",
    step: 2,
    subtopic: "a",
    title: "Steps to Implement Salesforce Backend",
    phase: "Backend Development & Configurations",
    templateName: "Steps to Implement Salesforce Backend",
    content: `# Steps to Implement

## 1. Environment Set Up
Setting up a secure, sandboxed Salesforce Developer Org is the prerequisite for all metadata changes.
- **Action**: Sign up for a free Salesforce Developer Edition Org.
- **Action**: Enable Einstein Features. Navigate to *Setup > Einstein > Einstein Setup* and toggle "Einstein" to ON to provision generative AI features.

## 2. Configuration Sequence

### Stage A: Defining Schema & Custom Objects
1. Navigate to the **Object Manager** in Salesforce Setup.
2. Select **Create > Custom Object** to provision our core custom object: \`Order__c\`.
3. Fill out basic settings: Enable Reports, Enable Activities, and Track Field History.
4. Set the Name field as an Auto-Number (\`ORD-{00000}\`) or Text depending on legacy data syncing.

### Stage B: Establishing Field Dictionary
1. Under \`Order__c\`'s Object details, click **Fields & Relationships**.
2. Create custom fields such as \`Purchase_Date__c\` (Date), \`Shipment_Status__c\` (Picklist), \`Tracking_ID__c\` (Text), and \`Customer__c\` (Lookup relationship to Contact).
3. Under the standard \`Case\` object, add custom relationships linking it directly to \`Order__c\` and \`Product__c\` standard objects.

### Stage C: Security Profiles and Sharing Rules
1. Assign read-write permissions to custom fields via **Field-Level Security (FLS)**.
2. Grant "Support Rep" profiles full read-write visibility over cases, orders, and products.
3. Lock edit permissions on computed audit fields (e.g., \`Warranty_Valid__c\` checkbox) so they can only be changed by automated workflows (Flows).

### Stage D: Rules and Business Process Orchestration
1. Build Validation Rules on \`Case\` and \`Order\` objects to preserve data integrity.
2. Set up Case Queues (Tier 1 Support, Technical Desk, and Billing Team).
3. Draft standard Approval Processes under *Setup > Process Automation > Approval Processes*. Ensure cases with refund claims exceeding $250 are routed to the Service Supervisor.
4. Establish Salesforce Flows (Record-Triggered and Screen Flows) to manage routing, computations, and guided agents.`
  },
  {
    id: "step2_b",
    step: 2,
    subtopic: "b",
    title: "Salesforce Custom Tabs Definition",
    phase: "Backend Development & Configurations",
    templateName: "Salesforce Custom Tabs Definition",
    content: `# Salesforce Tabs Configuration

## 1. Introduction to Custom Tabs
Tabs are critical visual structures that expose underlying standard or custom database tables (Objects) directly inside Salesforce Applications (such as the Service Console). They dictate navigation flow and let users easily toggle between data collections.

## 2. Configured Tabs and Visibilities

| Tab Name | Exposed Object | Type | Tab Style Icon | Target User Audience | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Cases** | \`Case\` | Standard | Briefcase | All Support Reps, Managers | The master console for viewing, updating, routing, and solving customer tickets. |
| **Orders** | \`Order__c\` | Custom | Shopping Cart / Credit Card | Support Agents, Logistics Teams | Exposes individual hardware purchase histories, shipment statuses, and carrier IDs. |
| **Products** | \`Product2\` | Standard | Gears / Box | Support Technicians, Sales Admin | Holds product specifications, warranty timelines, manual document files, and SKUs. |
| **Dashboard** | \`Dashboard\` | Standard | Bar Chart | Support Supervisors, Executives | Exposes high-level service charts, case queues metrics, SLA breaches, and CSAT ratings. |
| **Prompt Builder** | Setup Tab | Custom Administrative | Gear / Sparkle | System Administrators | Enables editing and fine-tuning AI system instruction models and grounding merge fields. |

## 3. Creating Custom Tabs (Procedural Steps)
1. Go to **Setup** and search for **Tabs** in the Quick Find box.
2. Under **Custom Object Tabs**, click **New**.
3. Select the target object (e.g., \`Order__c\`) from the drop-down.
4. Select a recognizable **Tab Style** (e.g., "Cash Register" or "Shipment Truck") to assign visual icons.
5. Set the **Profile Visibility** settings: set to "Default On" for Customer Support Agent and Service Manager profiles. Set to "Tab Hidden" for other departments to prevent visual clutter.
6. Choose the **Custom Apps** where this tab should be displayed: select our custom "AeroGadgets Support" Lightning Console App.
7. Click **Save**.`
  },
  {
    id: "step2_c",
    step: 2,
    subtopic: "c",
    title: "Fields & Relationships Schema Definition",
    phase: "Backend Development & Configurations",
    templateName: "Fields & Relationships Schema Definition",
    content: `# Fields & Relationships

## 1. Schema Relationship Diagram (Conceptual)
The system connects standard Customer Service variables with Custom E-Commerce objects. The entity relationships are modeled as follows:
- **Contact (Customer)** is the core record.
- **Order__c** maintains a *Lookup Relationship* to **Contact (Customer)**.
- **Case** maintains a *Lookup Relationship* to **Contact**, **Order__c**, and standard **Product**.

## 2. Object Dictionary & Custom Field Specifications

### Object A: Custom Object - Order (\`Order__c\`)
Exposes shipment details and core client purchase invoices.

| Field Label | API Name | Data Type | Length / Decimals | Description / Validation |
| :--- | :--- | :--- | :--- | :--- |
| Order Name | \`Name\` | Auto-Number | ORD-{00000} | Unique system identifier for orders. |
| Customer | \`Customer__c\` | Lookup (Contact) | - | Links the purchase to a specific customer profile. |
| Product | \`Product__c\` | Lookup (Product2) | - | Links the order to the electronic item sold. |
| Purchase Date | \`Purchase_Date__c\` | Date | - | Stores invoice purchase date. Must not be future-dated. |
| Shipment Status | \`Shipment_Status__c\` | Picklist | Dropdown | Statuses: *Processing, Shipped, In-Transit, Delivered, Returned*. |
| Tracking ID | \`Tracking_ID__c\` | Text | 30 | Unique carrier shipment identifier (e.g., DHL-12345). |
| Total Price | \`Total_Price__c\` | Currency | 16, 2 | Grand purchase cost. Required for supervisor approval routing. |

### Object B: Custom Fields on Standard Object - Case (\`Case\`)
Augments default service cases with AI and logistics tracking tools.

| Field Label | API Name | Data Type | Length / Decimals | Description / Validation |
| :--- | :--- | :--- | :--- | :--- |
| Related Order | \`Related_Order__c\` | Lookup (Order__c) | - | References the specific purchase order in question. |
| Related SKU | \`Related_SKU__c\` | Formula (Text) | - | Dynamically grabs SKU code from Product (\`Related_Order__r.Product__r.ProductCode\`). |
| Warranty Valid | \`Warranty_Valid__c\` | Checkbox | - | Auto-checked by Salesforce Flow if within warranty dates. |
| AI Sentiment | \`AI_Sentiment__c\` | Picklist | Dropdown | Computed by AI. Values: *Positive, Neutral, Negative, Escalated*. |
| AI Suggested Resolution | \`AI_Suggested_Res__c\` | Long Text | 32,000 | Grounded resolution draft generated by Einstein/Agentforce. |

### Object C: Custom Fields on Standard Object - Product (\`Product2\`)
Establishes clear hardware specifications.

| Field Label | API Name | Data Type | Length / Decimals | Description / Validation |
| :--- | :--- | :--- | :--- | :--- |
| Model SKU | \`Model_SKU__c\` | Text | 100 | Unique barcode product SKU code. |
| Warranty Period (Months) | \`Warranty_Period_M__c\` | Number | 3, 0 | Represents the product warranty length (e.g., 12, 24). |
| Tech Tier | \`Tech_Tier__c\` | Picklist | Dropdown | Classifies product value: *Standard, Premium, Enterprise*.`
  },
  {
    id: "step2_d",
    step: 2,
    subtopic: "d",
    title: "Salesforce Validation Rules Manual",
    phase: "Backend Development & Configurations",
    templateName: "Salesforce Validation Rules Manual",
    content: `# Validation Rules

## 1. Role of Validation Rules
Validation Rules are custom metadata blocks that verify whether the data entered by users or incoming APIs matches corporate guidelines before records can be saved. If the criteria are violated, Salesforce prevents saving and returns a helpful error string under the field or at the top of the page.

## 2. Active Validation Rule Book

### Rule A: Prevent Warranty Claim Without Associated Order Lookup
- **Object**: \`Case\`
- **Rule Name**: \`Prevent_Warranty_Claim_Without_Order\`
- **Error Condition Formula**:
  \`\`\`text
  AND(
    ISPICKVAL(Type, "Warranty Claim"),
    ISBLANK(Related_Order__c)
  )
  \`\`\`
- **Error Message**: *"You cannot submit or save a Case categorized as a 'Warranty Claim' without linking the related customer purchase Order record. Please search and link the appropriate Order number to continue."*
- **Error Location**: Field-Level on \`Related_Order__c\`.

### Rule B: Block Purchase Dates in the Future
- **Object**: \`Order__c\`
- **Rule Name**: \`Prevent_Future_Purchase_Dates\`
- **Error Condition Formula**:
  \`\`\`text
  Purchase_Date__c > TODAY()
  \`\`\`
- **Error Message**: *"The Purchase Date cannot be set to a future date. Please enter a valid past or present purchase date representing the transaction day."*
- **Error Location**: Field-Level on \`Purchase_Date__c\`.

### Rule C: Enforce Standard Order Number Formats
- **Object**: \`Order__c\`
- **Rule Name**: \`Order_Number_Format_Check\`
- **Error Condition Formula**:
  \`\`\`text
  AND(
    NOT(ISBLANK(Name)),
    NOT(REGEX(Name, "^ORD-[0-9]{5}$"))
  )
  \`\`\`
- **Error Message**: *"The Order Name must adhere to the standardized corporate format: 'ORD-XXXXX' where 'X' represents numerical values (e.g., ORD-48201)."*
- **Error Location**: Top of Page.`
  },
  {
    id: "step2_e",
    step: 2,
    subtopic: "e",
    title: "Salesforce Flows & Automation Logic",
    phase: "Backend Development & Configurations",
    templateName: "Salesforce Flows & Automation Logic",
    content: `# Salesforce Flows

## 1. Introduction to Flows
Salesforce Flows represent the primary declarative engine for automating complicated visual procedures, calculating values behind the scenes, and updating multiple databases without a single line of Apex code.

## 2. Configured Flows Diagram and Logics

### Flow 1: Record-Triggered Flow - Case Category Queue Routing
- **Trigger Source**: Case Object.
- **Trigger Event**: Created or Updated.
- **Criteria**: \`Status\` equals "New" AND \`OwnerId\` is not set.
- **Execution Paths**:
  - **Decision Block**: Read \`Case.Type\` field.
    - If \`Type == "Technical Issue"\`: Update Case OwnerId to the **Technical Escalations Queue ID**.
    - If \`Type == "Billing"\`: Update Case OwnerId to the **Billing Team Queue ID**.
    - If \`Type == "Warranty Claim"\`: Update Case OwnerId to the **Warranty Returns Queue ID**.
    - Default Outcome: Keep in the general support queue.
- **Value Achieved**: Saves support agents 20 minutes per case of manual triage, achieving 100% routing accuracy.

### Flow 2: Record-Triggered Flow - Warranty Claim Validity Calculator
- **Trigger Source**: Case Object.
- **Trigger Event**: Created or Updated.
- **Criteria**: Related Order Lookup (\`Related_Order__c\`) and Product Lookup are populated.
- **Variables**:
  - \`Order_Purchase_Date\` = \`Case.Related_Order__r.Purchase_Date__c\`
  - \`Product_Warranty_Months\` = \`Case.Related_Order__r.Product__r.Warranty_Period_M__c\`
- **Formula Resource (\`IsClaimEligible\`)**:
  \`\`\`text
  ADDMONTHS({!Order_Purchase_Date}, {!Product_Warranty_Months}) >= TODAY()
  \`\`\`
- **Execution Path**:
  - **Decision Block**: Check if formula evaluates to True or False.
    - If \`True\`: Update Case checkbox \`Warranty_Valid__c\` to **True**.
    - If \`False\`: Update Case checkbox \`Warranty_Valid__c\` to **False**.
- **Value Achieved**: Eliminates human mathematical error, protecting the firm from paying out unauthorized, expired warranty returns.

### Flow 3: Screen Flow - Order tracking Helper for Live Agents
- **Type**: Interactive Guided Screen Flow.
- **Entry Method**: Action button placed on the Case Record Detail layout.
- **Visual Screens**:
  - **Screen 1 (Search Order)**: Agent enters an Order Number (e.g., ORD-38102) in an input field.
  - **Database Action (Get Records)**: Queries \`Order__c\` where Name equals user input.
  - **Screen 2 (Display Shipment Details)**: If order found, outputs a clean card displaying:
    - Customer Name
    - Purchase Date
    - **Live Shipment Status**: Colored text based on status.
    - **Carrier Tracking Number**: Underlined tracking ID.
  - **Screen 3 (If Not Found)**: Displays a visual error warning and prompts the agent to double-check serial records.
- **Value Achieved**: Keeps support representatives focused on a single interface, eliminating "tab-hopping" fatigue.`
  },
  {
    id: "step3_a",
    step: 3,
    subtopic: "a",
    title: "The Lightning App Creation Document",
    phase: "UI/UX Development & Customization",
    templateName: "The Lightning App Creation Document",
    content: `# Lightning App Creation

## 1. Context of UI/UX in Salesforce
Salesforce Lightning Experience provides customizable frameworks to design specialized environments tailored to specific job roles. Designing a custom Lightning App lets support reps perform their work within an uncluttered, high-productivity console.

## 2. Setting Up "AeroSupport Console"
The "AeroSupport Console" is designed for first-line responders who resolve customer gadget concerns quickly. Below are the steps to create and configure the app:

### Step A: Launch App Manager
1. Navigate to **Setup** and search **App Manager** in the Quick Find search box.
2. Click **New Lightning App** on the top right.

### Step B: App Details & Branding
- **App Name**: \`AeroSupport Console\`
- **Developer Name**: \`AeroSupport_Console\`
- **Description**: *"Unified Customer Service and AI-driven Support Console for managing AeroGadgets Global Customers, Orders, Products, and Cases."*
- **Brand Logo**: Upload custom blue/grey corporate logo representing electronic devices.
- **Color Accent**: Deep Slate Blue (\`#1E293B\`) to establish a professional, eye-safe environment.

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
5. Click **Save** and **Activate** as the Org Default for all Support profiles.`
  },
  {
    id: "step4_a",
    step: 4,
    subtopic: "a",
    title: "Create Einstein Prompt Template",
    phase: "Agentforce, Reporting & Deployment",
    templateName: "Create Einstein Prompt Template",
    content: `# Create Prompt Template

## 1. What is Einstein Prompt Builder?
Einstein Prompt Builder lets Salesforce administrators design reusable, grounded prompt instructions that feed directly into generative LLMs. These prompts can reference live record fields (Contact Name, Case Reason, Order tracking parameters) as dynamic parameters, ensuring the model's generated text is factual and personalized.

## 2. Dynamic Email Drafting Prompt Template
We designed a standard template to draft customer emails directly from Case records:

- **Template Name**: \`Draft_Email_AeroGadgets_Support\`
- **Template Type**: **Salesforce Email Draft Template**
- **Associated Object**: \`Case\`
- **Model**: \`gemini-3.5-flash\` (or Einstein GPT)

### Custom Prompt Template Text (Instruction Set)
\`\`\`text
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
\`\`\`

## 3. Configuration Steps in Salesforce Setup
1. In the Quick Find box under Setup, search for **Prompt Builder**.
2. Click **New Prompt Template**.
3. Select **Flex Template** or **Salesforce Email Draft**.
4. Set Name as \`Draft_Email_AeroGadgets_Support\` and select \`Case\` as the Object.
5. In the main editor window, paste the prompt text.
6. Use the **Insert Resource** button to search and merge live fields (such as \`Case.Contact.FirstName\`).
7. Select **Save** and click **Preview** to load test records and audit the output.
8. Click **Activate** to make the template available throughout the Salesforce ecosystem.`
  },
  {
    id: "step4_b",
    step: 4,
    subtopic: "b",
    title: "Deploy Prompt Builder in Student / Contact Object",
    phase: "Agentforce, Reporting & Deployment",
    templateName: "Deploy Prompt Builder in Student / Contact Object",
    content: `# Deploy Prompt Builder in Student (Customer) Object

## 1. Why Integrate Prompt Builder on the Student/Contact Record Page?
Deploying AI prompt capabilities directly within record detail pages puts the power of automated email generation, resume scanning, or query drafts directly in the support agent's visual workspace. When dealing with standard contacts (often represented in academic contexts as the **Student** custom object), embedding these custom actions eliminates manual copy-pasting.

## 2. Setting Up the Action Button
To deploy the custom prompt template (such as the support email draft template) on the **Student** or Contact object:

### Step A: Create a Custom Quick Action
1. Go to **Setup > Object Manager** and select the **Student__c** (or **Contact**) Object.
2. Click **Buttons, Links, and Actions** in the sidebar.
3. Click **New Action**.
4. Set Action Type as **Lightning Web Component** or **Einstein Prompt Template**. (Alternatively, select *Update a Record* or *Send Email* which utilizes Einstein Prompt layouts).
5. Select the specific prompt template: \`Draft_Email_AeroGadgets_Support\`.
6. Set Label as **Draft Support Reply**.
7. Click **Save**.

### Step B: Embedding the Action in Page Layouts
1. Click **Page Layouts** in the sidebar of the Student/Contact object.
2. Select your default record page layout.
3. Scroll down to the **Salesforce Mobile and Lightning Experience Actions** panel.
4. Drag and drop the custom **Draft Support Reply** action from the top menu into the layout's actions area.
5. Click **Save**.

## 3. Deploying via Lightning App Builder (Alternative Modal Layout)
1. Navigate to an active Student/Contact record in the Salesforce user view.
2. Click the gear icon on the top right and select **Edit Page** to launch the **Lightning App Builder**.
3. In the left-hand column, find the **Einstein Generative AI Assistant** or **Einstein Copilot** standard components.
4. Drag the **Einstein Draft Assistant** component into the page canvas (ideally in the right-hand context tab panel).
5. Select the component to configure its attributes:
   - Link its context directly to the active Record ID.
   - Bind the output text area to copy drafts directly into the case email chatter window.
6. Click **Save**, and click **Activate** to roll out the updated Student record page layouts to all active service agents.
7. Support agents can now click "Draft Support Reply" on any Student page to immediately synthesize custom case emails without manual inputs.`
  },
  {
    id: "step5_a",
    step: 5,
    subtopic: "a",
    title: "Change Management & Deployment Protocols",
    phase: "Deployment, Documentation & Maintenance",
    templateName: "Change Management & Deployment Protocols",
    content: `# Deployment, Documentation & Maintenance

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
2. Click **New**, name it \`AeroSupport_Automation_V1\`, and click Save.
3. In the **Change Set Components** section, click **Add**:
   - Add Custom Objects: \`Order__c\`.
   - Add Custom Fields: \`Case.Related_Order__c\`, \`Case.Warranty_Valid__c\`, \`Order__c.Purchase_Date__c\`, \`Order__c.Shipment_Status__c\`, etc.
   - Add Validation Rules: \`Prevent_Warranty_Claim_Without_Order\`, \`Prevent_Future_Purchase_Dates\`.
   - Add Flows: \`Case_Category_Queue_Routing\`, \`Warranty_Claim_Validity_Calculator\`, \`Order_Tracking_Helper_Screen_Flow\`.
   - Add Custom App: \`AeroSupport_Console\`.
   - Add Custom Prompt Template: \`Draft_Email_AeroGadgets_Support\`.
4. Click **Upload** and select the Production Org as the target.

### Step C: Deploy the Inbound Change Set
1. Log into the target Production Org.
2. Search **Inbound Change Sets** in Setup.
3. Select \`AeroSupport_Automation_V1\` and click **Validate** (running validation tests ensures that all dependencies are resolved without errors).
4. Once validation completes successfully, click **Deploy**.

## 3. Maintenance Protocols
After deployment, configure the following maintenance tasks:
- **System Backups**: Run weekly exports of \`Order__c\` and \`Case\` records.
- **Apex / Flow Execution Logs**: Set up email notifications to system administrators for any unhandled Flow run-time faults.
- **AI Token Auditing**: Monitor Prompt Builder token limits monthly to track AI costs and resource usage.`
  },
  {
    id: "step6_a",
    step: 6,
    subtopic: "a",
    title: "System Technical Documentation",
    phase: "Maintenance, Monitoring & Troubleshooting",
    templateName: "System Technical Documentation",
    content: `# Project Technical Documentation

## 1. System Architecture Summary
The AI-Powered Customer Support & Service Automation system is integrated into Salesforce Service Cloud to streamline customer care for AeroGadgets Global. It relies entirely on:
- Declarative data models (Standard Case, Contact, Product objects + Custom \`Order__c\` object).
- Point-and-click business process automations (Salesforce Validation Rules, Flow Builder).
- LLM Generative AI configurations (Einstein Prompt Templates, Agentforce AI Service Agents).

## 2. Technical Data Dictionary

### Object Metadata

- **\`Contact\` (Standard)**: Customer profiles.
- **\`Product2\` (Standard)**: Product list, SKUs, and warranty period configurations.
- **\`Order__c\` (Custom)**: Relational order table linking Contact to purchased products with fields \`Purchase_Date__c\`, \`Shipment_Status__c\`, \`Tracking_ID__c\`.
- **\`Case\` (Standard)**: Ticket records holding related Order references (\`Related_Order__c\`), Case Priority, Category, and the \`Warranty_Valid__c\` checkbox.

## 3. Automation Logical Paths

- **Case Triage Path**: Record Created -> Check Subject/Description -> Match Category -> Assign to corresponding Billing/Tech/Warranty queue.
- **Warranty Audit Path**: Related order updated -> Read Order purchase date -> Read product warranty length -> Compute eligibility -> Set \`Warranty_Valid__c\` boolean flag.
- **Agent Force Action Path**: Case Opened -> Prompt Builder parses context fields -> Merges live Contact and Order parameters -> LLM generates highly contextual support emails.

## 4. Troubleshooting Manual

- **Issue 1**: Flow validation errors when resolving warranty claims.
  - *Cause*: Support rep forgot to link the related customer purchase Order lookup, triggering the \`Prevent_Warranty_Claim_Without_Order\` validation rule.
  - *Fix*: Search for the customer's matching Order record and associate it with the \`Related_Order__c\` field on the Case layout.
- **Issue 2**: Agentforce AI drafts contain empty placeholders.
  - *Cause*: Merged fields on the active Contact record are blank (e.g., missing FirstName, LastName, or Order Tracking numbers).
  - *Fix*: Complete all relevant fields on the parent Contact or Order details, then click "Regenerate Draft" to update the LLM context.
- **Issue 3**: High-value refund approval requests are stuck.
  - *Cause*: The Case remains locked under standard supervisor security protocols waiting for approval.
  - *Fix*: Instruct the Service Manager to navigate to the "Approval Requests" tab and click Approve.`
  },
  {
    id: "step6_b",
    step: 6,
    subtopic: "b",
    title: "Guidelines for AI-Powered Customer Support Documentation",
    phase: "Maintenance, Monitoring & Troubleshooting",
    templateName: "Guidelines for AI-Powered Customer Support Documentation",
    content: `# Documentation & SOP Guidelines

## 1. Scope of Support Documentation
To ensure consistent support quality and simplify onboarding for new support representatives at AeroGadgets Global, a comprehensive set of Standard Operating Procedures (SOPs) and documentation standards must be enforced.

## 2. Guidelines for Drafting Technical Support Knowledge Base Articles
When customer service agents identify common issues, they must compile them into standard Salesforce Knowledge articles following these guidelines:
- **Title Structure**: Start with the specific product model and core issue (e.g., *"AeroBuds Pro - BlueTooth Connection Fix"*).
- **Executive Summary**: State what the article covers in 2-3 sentences.
- **Prerequisites**: List any tools or settings needed (e.g., *"Ensure firmware is updated to version 2.1"*).
- **Step-by-Step Instructions**: Write numbered steps. Keep sentences simple and action-oriented.
- **Verification**: Explain how the user can verify that the problem is resolved.
- **Drafting Tooling**: Use the custom Einstein Prompt template \`KB_Article_Drafting_Assistant\` to translate raw case resolution logs into clean customer-facing instructions.

## 3. Guidelines for Standard Operating Procedures (SOPs)
All active service agents must follow standard routing policies and response procedures:
- **Triage Protocols**:
  - Immediately link related customer Contact (or Student) and Order profiles.
  - Review the auto-computed \`Warranty_Valid__c\` checkbox before authorizing physical device returns.
- **AI-Augmented Communication Policies**:
  - Click the **Draft Support Reply** custom action on the Case page to write initial email drafts.
  - Carefully proofread and edit the AI-generated text to ensure customized relevance. Do not send raw AI drafts without review.
  - Verify that tracking numbers, shipping carrier names, and purchase dates mentioned in the text are correct.`
  },
  {
    id: "step6_c",
    step: 6,
    subtopic: "c",
    title: "Guidelines for Salesforce Demo Video",
    phase: "Maintenance, Monitoring & Troubleshooting",
    templateName: "Guidelines for Salesforce Demo Video",
    content: `# Demo Video Guidelines

## 1. Objective of the Demo Video
The Salesforce Project Demonstration Video is the primary deliverable for technical evaluation, grading, and business approval. It must prove the functionality of all custom objects, validation rules, automated flows, and Agentforce AI services in a professional 5-minute screencast.

## 2. Recommended Video Structure & Script

### Segment A: Introduction (Duration: 0:00 - 0:45)
- **Visuals**: Show slide with Project Title, Team ID, Date, and Academic Header matching the green box layout.
- **Narrative**: Briefly state the project's background—explaining how AeroGadgets Global automated its customer service desk using Salesforce Service Cloud, Flows, and Agentforce.

### Segment B: Data Schema & Console Workspace (Duration: 0:45 - 1:45)
- **Visuals**: Navigate through the Salesforce Service Console App tabs (Cases, Orders, Products, Dashboards).
- **Narrative**: Show the custom fields on the \`Order__c\` custom object and explain how orders and cases are linked.

### Segment C: Custom Validation Rules & Queue Triage (Duration: 1:45 - 2:45)
- **Visuals**: Trigger the \`Prevent_Warranty_Claim_Without_Order\` validation rule by trying to save a warranty claim Case without an associated order lookup. Show the error banner. Then, associate the order and save successfully.
- **Narrative**: Demonstrate how validation rules maintain clean data entry. Show the Case auto-routing Flow assigning the case to the specialized Technical queue.

### Segment D: Automation Flows & Warranty Checker (Duration: 2:45 - 3:45)
- **Visuals**: Trigger the record flow by creating a Case for an order purchased 6 months ago (warranty is valid) and then a Case for an order purchased 3 years ago (warranty is expired). Show how the \`Warranty_Valid__c\` checkbox auto-computes and checks.
- **Narrative**: Explain the flow logic in Flow Builder (using the \`ADDMONTHS\` formula resource) and how it eliminates human calculation errors.

### Segment E: Agentforce AI Service Agent & Prompts (Duration: 3:45 - 4:45)
- **Visuals**: Navigate to the Contact/Student record. Click **Draft Support Reply** custom action. Show Einstein Prompt Builder generating a highly contextual response.
- **Narrative**: Explain how Prompt templates merge live CRM fields. Show how the Agentforce assistant drafts emails containing order details, shipping status, and warranty eligibility.

### Segment F: Reports, Dashboards & Conclusion (Duration: 4:45 - 5:00)
- **Visuals**: Open the high-level service Dashboard. Point out CSAT trends, Case Backlog rates, and average resolution speed.
- **Narrative**: Summarize the system's business value (e.g., 70% reduction in response time) and end with professional closing credits.`
  },
  {
    id: "step6_d",
    step: 6,
    subtopic: "d",
    title: "Project Execution Conclusion",
    phase: "Maintenance, Monitoring & Troubleshooting",
    templateName: "Project Execution Conclusion",
    content: `# Project Conclusion

## 1. Summary of Achievements
The AI-Powered Customer Support & Service Automation system represents a modern CRM solution for AeroGadgets Global. By deploying Salesforce Service Cloud in tandem with declarative Flow Builder engines and Agentforce generative AI, our team successfully resolved the core operational inefficiencies:
- **Instant Response Times**: Auto-routing flows triage cases within milliseconds of creation.
- **Enhanced Accuracy**: Standard validation rules and formula-driven warranty calculations prevent data entry mistakes and mitigate refund fraud.
- **Unified Employee View**: Support reps manage cases, read order logs, track shipments, and consult product manuals inside a consolidated Console app layout, removing "tab fatigue".
- **Augmented Efficiency**: Einstein Prompt templates generate personalized, highly professional email responses automatically, cutting email drafting times by over 80%.

## 2. Key Business Metrics Achieved (Simulated Outcomes)
During UAT testing, our system demonstrated excellent performance:
- **Average Handle Time (AHT)**: Decreased from 18 minutes to **3.2 minutes**.
- **First Contact Resolution (FCR)**: Increased from 52% to **88%** due to real-time context sidebars.
- **Customer Satisfaction (CSAT)**: Lifted from 3.1/5 to **4.7/5** on follow-up support surveys.
- **Fraudulent Warranty Payments**: Dropped to **0%** because claim validation is strictly system-enforced.

## 3. Future Scope & Extensibility
The platform is designed with scalability in mind. Future features could include:
- **Omni-Channel Voice Routing**: Bringing live telephony channels into the Service Console using Einstein Service Voice.
- **WhatsApp & SMS Bot Deflection**: Deploying our Agentforce AI Service Agent to chat applications.
- **Predictive Sentiment Triggers**: Using AI to continuously score customer emails and automatically flag high-risk cases for rapid supervisor callbacks.`
  }
];
