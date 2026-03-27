const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  console.log("📩 Received registration request:", req.body);
  const { name, email, phone, qualification, semester, college } = req.body;

  // Validation
  if (!name || !email || !phone || !qualification || !semester || !college) {
    console.log("❌ Validation failed: Missing fields");
    return res.status(400).json({ message: "Sabhi fields zaroori hain." });
  }

  try {
    // Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to Admin
    await transporter.sendMail({
      from: `"Workshop Registration" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "🎯 New Workshop Registration",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 12px; overflow: hidden;">
          <div style="background: #1e40af; color: white; padding: 24px;">
            <h2 style="margin:0;">📘 New Workshop Registration</h2>
          </div>
          <div style="padding: 24px; background: #f9fafb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Name</td><td style="padding: 8px;">${name}</td></tr>
              <tr style="background:#eff6ff;"><td style="padding: 8px; font-weight: bold; color: #374151;">Email</td><td style="padding: 8px;">${email}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Phone</td><td style="padding: 8px;">${phone}</td></tr>
              <tr style="background:#eff6ff;"><td style="padding: 8px; font-weight: bold; color: #374151;">Qualification</td><td style="padding: 8px;">${qualification}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Semester</td><td style="padding: 8px;">${semester}</td></tr>
              <tr style="background:#eff6ff;"><td style="padding: 8px; font-weight: bold; color: #374151;">College</td><td style="padding: 8px;">${college}</td></tr>
            </table>
          </div>
          <div style="padding: 16px; text-align: center; color: #9ca3af; font-size: 12px;">
            Workshop Registration System
          </div>
        </div>
      `,
    });

    // Confirmation Email to User
    await transporter.sendMail({
      from: `"Workshop Team" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "✅ Registration Confirmed - Workshop",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 12px; overflow: hidden;">
          <div style="background: #16a34a; color: white; padding: 24px;">
            <h2 style="margin:0;">✅ Registration Confirmed!</h2>
          </div>
          <div style="padding: 24px;">
            <p style="color: #374151;">Dear <strong>${name}</strong>,</p>
            <p style="color: #374151;">Aapki workshop registration successfully receive ho gayi hai! 🎉</p>
            <p style="color: #374151;">Hum aapko jald hi workshop ki details share karenge.</p>
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin: 16px 0;">
              <p style="margin: 0; color: #166534; font-weight: bold;">Registration Details:</p>
              <p style="margin: 8px 0; color: #15803d;">College: ${college}</p>
              <p style="margin: 8px 0; color: #15803d;">Qualification: ${qualification}</p>
            </div>
            <p style="color: #6b7280; font-size: 13px;">Agar koi sawaal ho to reply karein.</p>
          </div>
        </div>
      `,
    });

    res.status(200).json({ message: "Registration successful! Email sent." });

  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Email send karne mein error aaya.", error: error.message });
  }
});

module.exports = router;
