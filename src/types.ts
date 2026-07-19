export interface Customer {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  warrantyMonths: number;
  price: number;
}

export interface Order {
  id: string; // ORD-XXXXX
  customerId: string;
  productId: string;
  purchaseDate: string; // YYYY-MM-DD
  shipmentStatus: "Processing" | "Shipped" | "In-Transit" | "Delivered" | "Returned";
  trackingId: string;
  totalPrice: number;
}

export interface Case {
  id: string; // CAS-XXXXX
  subject: string;
  description: string;
  status: "New" | "Working" | "Escalated" | "Closed";
  priority: "Low" | "Medium" | "High" | "Critical";
  type: "Technical Issue" | "Billing" | "Warranty Claim" | "General Support";
  customerId: string;
  relatedOrderId?: string;
  assignedQueue?: string;
  warrantyValid?: boolean;
  aiSentiment?: "Positive" | "Neutral" | "Negative" | "Escalated";
  aiSuggestedResolution?: string;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: string;
}

export interface AcademicHeader {
  phase: string;
  templateName: string;
  date: string;
  teamId: string;
  projectName: string;
  maxMarks: string;
}

export interface ProjectDocument {
  id: string;
  step: number;
  subtopic: string;
  title: string;
  phase: string;
  templateName: string;
  content: string;
}
