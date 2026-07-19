<!-- SYSTEM-GENERATED ACADEMIC PORTAL HEADER - MANDATORY FOR INTERNSHIP SUBMISSION -->
<div style="border: 3px solid #10b981; padding: 15px; border-radius: 8px; margin-bottom: 25px; background-color: #f0fdf4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1f2937;">
  <div style="text-align: center; font-size: 1.2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #047857; border-bottom: 2px solid #10b981; padding-bottom: 8px; margin-bottom: 12px;">
    Agentforce, Reporting & Deployment
  </div>
  <div style="text-align: center; font-size: 1.1rem; font-weight: 600; color: #111827; margin-bottom: 15px;">
    Deploy Prompt Builder in Student / Contact Object
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

# Deploy Prompt Builder in Student (Customer) Object

## 1. Why Integrate Prompt Builder on the Student/Contact Record Page?
Deploying AI prompt capabilities directly within record detail pages puts the power of automated email generation, resume scanning, or query drafts directly in the support agent's visual workspace. When dealing with standard contacts (often represented in academic contexts as the **Student** custom object), embedding these custom actions eliminates manual copy-pasting.

## 2. Setting Up the Action Button
To deploy the custom prompt template (such as the support email draft template) on the **Student** or Contact object:

### Step A: Create a Custom Quick Action
1. Go to **Setup > Object Manager** and select the **Student__c** (or **Contact**) Object.
2. Click **Buttons, Links, and Actions** in the sidebar.
3. Click **New Action**.
4. Set Action Type as **Lightning Web Component** or **Einstein Prompt Template**. (Alternatively, select *Update a Record* or *Send Email* which utilizes Einstein Prompt layouts).
5. Select the specific prompt template: `Draft_Email_AeroGadgets_Support`.
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
7. Support agents can now click "Draft Support Reply" on any Student page to immediately synthesize custom case emails without manual inputs.
