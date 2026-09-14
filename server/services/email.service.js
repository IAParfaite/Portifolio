import nodemailer from "nodemailer";

// DRY — email logic isolated so it can be reused and stays out of controllers.
// Configure SMTP in server/.env; silently no-ops when not set up.
export const sendContactNotification = async ({ name, email, message }) => {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.EMAIL_TO) return;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_TO}>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });
};