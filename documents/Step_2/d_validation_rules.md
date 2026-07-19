<!-- SYSTEM-GENERATED ACADEMIC PORTAL HEADER - MANDATORY FOR INTERNSHIP SUBMISSION -->
<div style="border: 3px solid #10b981; padding: 15px; border-radius: 8px; margin-bottom: 25px; background-color: #f0fdf4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1f2937;">
  <div style="text-align: center; font-size: 1.2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #047857; border-bottom: 2px solid #10b981; padding-bottom: 8px; margin-bottom: 12px;">
    Backend Development & Configurations
  </div>
  <div style="text-align: center; font-size: 1.1rem; font-weight: 600; color: #111827; margin-bottom: 15px;">
    Salesforce Validation Rules Manual
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

# Validation Rules

## 1. Role of Validation Rules
Validation Rules are custom metadata blocks that verify whether the data entered by users or incoming APIs matches corporate guidelines before records can be saved. If the criteria are violated, Salesforce prevents saving and returns a helpful error string under the field or at the top of the page.

## 2. Active Validation Rule Book

### Rule A: Prevent Warranty Claim Without Associated Order Lookup
- **Object**: `Case`
- **Rule Name**: `Prevent_Warranty_Claim_Without_Order`
- **Error Condition Formula**:
  ```text
  AND(
    ISPICKVAL(Type, "Warranty Claim"),
    ISBLANK(Related_Order__c)
  )
  ```
- **Error Message**: *"You cannot submit or save a Case categorized as a 'Warranty Claim' without linking the related customer purchase Order record. Please search and link the appropriate Order number to continue."*
- **Error Location**: Field-Level on `Related_Order__c`.

### Rule B: Block Purchase Dates in the Future
- **Object**: `Order__c`
- **Rule Name**: `Prevent_Future_Purchase_Dates`
- **Error Condition Formula**:
  ```text
  Purchase_Date__c > TODAY()
  ```
- **Error Message**: *"The Purchase Date cannot be set to a future date. Please enter a valid past or present purchase date representing the transaction day."*
- **Error Location**: Field-Level on `Purchase_Date__c`.

### Rule C: Enforce Standard Order Number Formats
- **Object**: `Order__c`
- **Rule Name**: `Order_Number_Format_Check`
- **Error Condition Formula**:
  ```text
  AND(
    NOT(ISBLANK(Name)),
    NOT(REGEX(Name, "^ORD-[0-9]{5}$"))
  )
  ```
- **Error Message**: *"The Order Name must adhere to the standardized corporate format: 'ORD-XXXXX' where 'X' represents numerical values (e.g., ORD-48201)."*
- **Error Location**: Top of Page.
