import { Customer, Product, Order, Case } from "../types";

export const mockCustomers: Customer[] = [
  {
    id: "CUST-001",
    name: "Alice Vance",
    firstName: "Alice",
    lastName: "Vance",
    email: "alice.vance@example.com",
    phone: "+1-555-0192",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: "CUST-002",
    name: "Robert Chen",
    firstName: "Robert",
    lastName: "Chen",
    email: "robert.chen@techmail.com",
    phone: "+86-21-5821029",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: "CUST-003",
    name: "Emily Watson",
    firstName: "Emily",
    lastName: "Watson",
    email: "emily.w@webdomain.org",
    phone: "+44-20-7946-0192",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120"
  }
];

export const mockProducts: Product[] = [
  {
    id: "PROD-101",
    name: "AeroBuds Pro (Active Noise Cancelling)",
    sku: "SKU-AB-PRO-01",
    category: "Audio",
    warrantyMonths: 12,
    price: 199.99
  },
  {
    id: "PROD-102",
    name: "AeroWatch Ultra (GPS + Cellular)",
    sku: "SKU-AW-ULT-02",
    category: "Wearables",
    warrantyMonths: 24,
    price: 499.99
  },
  {
    id: "PROD-103",
    name: "AeroCharge 3-in-1 Wireless Dock",
    sku: "SKU-AC-DOCK-03",
    category: "Power",
    warrantyMonths: 12,
    price: 79.99
  },
  {
    id: "PROD-104",
    name: "AeroScreen Tablet Pro",
    sku: "SKU-AS-TAB-04",
    category: "Computers",
    warrantyMonths: 12,
    price: 899.99
  }
];

// Helper to construct dates relative to today
const getDateDaysAgo = (days: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString().split("T")[0];
};

export const mockOrders: Order[] = [
  {
    id: "ORD-48201",
    customerId: "CUST-001",
    productId: "PROD-101",
    purchaseDate: getDateDaysAgo(180), // 6 months ago (within 12 months warranty)
    shipmentStatus: "Delivered",
    trackingId: "DHL-38102941",
    totalPrice: 199.99
  },
  {
    id: "ORD-39102",
    customerId: "CUST-002",
    productId: "PROD-102",
    purchaseDate: getDateDaysAgo(800), // ~26 months ago (exceeds 24 months warranty)
    shipmentStatus: "Delivered",
    trackingId: "FDX-82019482",
    totalPrice: 499.99
  },
  {
    id: "ORD-28192",
    customerId: "CUST-003",
    productId: "PROD-103",
    purchaseDate: getDateDaysAgo(1), // yesterday
    shipmentStatus: "Processing",
    trackingId: "PENDING_WAREHOUSE",
    totalPrice: 79.99
  }
];

export const mockCases: Case[] = [
  {
    id: "CAS-10821",
    subject: "AeroBuds Pro Bluetooth audio cutting out",
    description: "I purchased these headphones 6 months ago and they have been working great until last week. Now, the Bluetooth connection drops out frequently during calls or while listening to music. I have tried resetting them but the issue persists. Please assist with troubleshooting or return options.",
    status: "New",
    priority: "Medium",
    type: "Technical Issue",
    customerId: "CUST-001",
    relatedOrderId: "ORD-48201",
    createdAt: getDateDaysAgo(2),
    assignedQueue: "Technical Escalations Queue",
    warrantyValid: true,
    aiSentiment: "Neutral",
    aiSuggestedResolution: "Ensure the AeroBuds are disconnected from other devices and carry out a factory reset: hold button on charging case for 15 seconds until amber flashes. If connection fails, draft an RMA return label as purchase falls within the active 12-month warranty window."
  },
  {
    id: "CAS-10822",
    subject: "AeroWatch Ultra screen shattered",
    description: "The screen glass on my AeroWatch shattered after a very light tap against my desk drawer. Since this is an Ultra rugged watch, I expect the glass to handle standard impacts. Can you replace the watch or repair the screen under warranty? This is urgent as I use it daily.",
    status: "New",
    priority: "High",
    type: "Warranty Claim",
    customerId: "CUST-002",
    relatedOrderId: "ORD-39102",
    createdAt: getDateDaysAgo(1),
    assignedQueue: "Warranty Returns Queue",
    warrantyValid: false,
    aiSentiment: "Negative",
    aiSuggestedResolution: "Regretfully inform the customer that their watch was purchased 26 months ago, exceeding the 24-month warranty period. Additionally, screen shattering is classified as accidental physical damage which is excluded from standard warranty terms. Offer a paid repair option for $149 with a complimentary shipping label."
  },
  {
    id: "CAS-10823",
    subject: "My AeroCharge order still hasn't shipped",
    description: "I placed my order for the AeroCharge dock yesterday and the system still says Processing. I selected expedited shipping and expected it to ship immediately. Can you verify if my transaction completed successfully and tell me when it will ship?",
    status: "New",
    priority: "Low",
    type: "Billing",
    customerId: "CUST-003",
    relatedOrderId: "ORD-28192",
    createdAt: getDateDaysAgo(0),
    assignedQueue: "Billing Team Queue",
    warrantyValid: false,
    aiSentiment: "Neutral",
    aiSuggestedResolution: "Reassure the customer that their transaction has successfully completed. Explain that orders are packaged and shipped within 24-48 business hours. Provide carrier details once shipment begins. Apologize for any anxiety caused."
  }
];

export const defaultPromptTemplateText = `You are a highly professional, empathetic customer support expert working at AeroGadgets Global.
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
5. End with a polite closing statement: Best regards, AeroGadgets Global Support Team.`;
