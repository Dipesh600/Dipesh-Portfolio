import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./mail";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store message in database
      const savedMessage = await storage.createContactMessage({
        ...validatedData,
      });
      
      // Send email notification
      await sendContactEmail({
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
      });
      
      res.status(200).json({
        message: "Contact message sent successfully",
        id: savedMessage.id,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.message 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          message: "Failed to send contact message",
          error: (error as Error).message
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
