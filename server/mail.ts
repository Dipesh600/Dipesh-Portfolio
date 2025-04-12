import nodemailer from "nodemailer";
import { type InsertContactMessage } from "@shared/schema";

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

// Get email configuration from environment variables with fallbacks
const emailConfig: EmailConfig = {
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: parseInt(process.env.EMAIL_PORT || "587", 10),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER || "your-email@gmail.com",
    pass: process.env.EMAIL_PASS || "your-email-password",
  },
};

// Get recipient email from environment variables with fallback
const recipientEmail = process.env.RECIPIENT_EMAIL || "happyswaraj@example.com";

// Create reusable transporter
const transporter = nodemailer.createTransport(emailConfig);

export async function sendContactEmail(data: InsertContactMessage): Promise<boolean> {
  try {
    // Create email content
    const emailContent = {
      from: `"Portfolio Contact" <${emailConfig.auth.user}>`,
      to: recipientEmail,
      subject: `New Portfolio Contact: ${data.subject}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Subject: ${data.subject}
        Message: ${data.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #3b82f6; margin-bottom: 20px;">New Contact Message from Your Portfolio</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 5px;">
            <p><strong>Message:</strong></p>
            <p>${data.message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #6b7280;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(emailContent);
    
    console.log(`Contact email sent: ${data.subject} from ${data.email}`);
    return true;
  } catch (error) {
    console.error("Error sending contact email:", error);
    return false;
  }
}
