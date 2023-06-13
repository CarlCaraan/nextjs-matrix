import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        // Your emailer configuration here (e.g., SMTP server, credentials)
        host: "smtp.gmail.com", // Replace with your SMTP server hostname
        port: 465, // Replace with the port number of your SMTP server
        secure: true, // Set to true if your SMTP server requires a secure connection
        auth: {
          user: "bannedefused3@gmail.com", // Replace with your email address
          pass: "ttcslbcqckqvduvj", // Replace with your email password
        },
      });

      // Prepare the email message
      const mailOptions = {
        from: email,
        to: "bannedefused3@gmail.com", // Replace with the recipient's email address
        subject: "New contact form submission",
        text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while sending the email." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
