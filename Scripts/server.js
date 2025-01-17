// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Set up the email transporter using Gmail (you can change it to other services)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", // Your email
    pass: "your-email-password", // Your email password (or app password)
  },
});

// API endpoint to handle contact form submission
app.post("/contact", (req, res) => {
  const { email, message, coffeeStatus } = req.body;

  // Validate input
  if (!email || !message || !coffeeStatus) {
    return res.status(400).send("All fields are required");
  }

  // Compose the email
  const mailOptions = {
    from: email,
    to: "your-email@gmail.com", // Your email where the contact form will be sent
    subject: "New Contact Form Submission",
    text: `
      You have received a new message from your portfolio contact form:

      Email: ${email}
      Coffee Status: ${coffeeStatus}
      
      Message:
      ${message}
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error sending email: " + error);
    }
    res.status(200).send("Email sent successfully");
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
