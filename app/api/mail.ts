import nodemailer from "nodemailer";

interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

const config: EmailConfig = {
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
};

export async function sendEmail(data: ContactMessage) {
  const transporter = nodemailer.createTransport(config);

  const mailOptions = {
    from: config.auth.user,
    to: config.auth.user,
    subject: `New Contact Form Submission from ${data.name}`,
    text: `
Name: ${data.name}
Email: ${data.email}
Message: ${data.message}
    `,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
