import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-loaded Gemini Client with safe validation
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is not configured. Please add it in the Secrets panel (Settings > Secrets) to enable AI-Powered responses.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// 1. AI-Powered Agentforce Simulator Endpoint
app.post("/api/agentforce/chat", async (req, res) => {
  try {
    const { message, history, context } = req.body;
    const ai = getGeminiClient();

    // Prepare a descriptive system instruction representing the Agentforce Service Agent
    const systemInstruction = `You are "AeroAgent", the advanced Agentforce AI Service Agent representing AeroGadgets Global, a premium international electronics & gadgets manufacturer.
Your role is to autonomously assist customers and support agents with product issues, order tracking, warranty claims, and technical support in a friendly, polite, clear, and highly professional manner.

You have access to the following live Salesforce context:
- Customer / User Details: ${context?.customer || "Not specified"}
- Product Catalog: ${JSON.stringify(context?.product || "Not specified")}
- Customer Orders: ${JSON.stringify(context?.orders || "None found")}
- Active Case Status: ${JSON.stringify(context?.case || "None")}

Rules for engagement:
1. Ground your answers strictly in the provided order and product details. Do not make up order numbers or shipment dates.
2. If order status is "Shipped", provide the Tracking ID. If "Processing", explain that it's being packed in the warehouse.
3. For Warranty claims: Verify if the product's purchase date falls within the product's Warranty Period (e.g. 12 months, 24 months). If the claim is valid, guide them through initiating a return. If expired, explain politely and offer paid repair options.
4. Keep answers relatively concise and highly structured (use bullet points where appropriate).
5. Address the user with empathy and respect. Maintain a helpful AeroGadgets brand tone.`;

    // Reconstruct the message format for GoogleGenAI SDK
    // Since GoogleGenAI has chat and generateContent, let's use generateContent with the systemInstruction
    const contents = [];
    
    // Add past history if available
    if (history && Array.isArray(history)) {
      for (const msg of history) {
        contents.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.text }],
        });
      }
    }
    
    // Add the current message
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error in /api/agentforce/chat:", error);
    res.status(500).json({ error: error.message || "An error occurred while generating response." });
  }
});

// 2. Prompt Template Builder & Tester Endpoint
app.post("/api/agentforce/prompt-template", async (req, res) => {
  try {
    const { templateText, variables, prompt } = req.body;
    const ai = getGeminiClient();

    let mergedPrompt = "";
    
    if (prompt) {
      mergedPrompt = prompt;
    } else if (templateText) {
      // Merge template text with variables (Salesforce style prompt merging)
      mergedPrompt = templateText;
      if (variables) {
        for (const key of Object.keys(variables)) {
          const placeholder = `{!$Input:${key}}`;
          mergedPrompt = mergedPrompt.replace(new RegExp(placeholder, "g"), variables[key]);
        }
      }
    } else {
      throw new Error("Missing 'prompt' or 'templateText' parameter in request body.");
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: mergedPrompt,
      config: {
        systemInstruction: "You are an advanced Salesforce Einstein Prompt Builder and Agentforce runner. Execute the merged prompt exactly as structured and output a highly polished customer service artifact.",
        temperature: 0.3,
      },
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error in /api/agentforce/prompt-template:", error);
    res.status(500).json({ error: error.message || "An error occurred while running prompt template." });
  }
});

// Serve Vite dev server or static assets
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
