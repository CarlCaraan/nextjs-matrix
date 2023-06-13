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
        subject: "New contact form submission - MATRIX SOFTWARE SOLUTION",
        text: `
          You have a new client inquiry! 

          Client Details:
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
      };
      const mailOptionsToSender = {
        from: "bannedefused3@gmail.com",
        to: email, // Replace with the recipient's email address
        subject: "Email Sent AT - MATRIX SOFTWARE SOLUTION",
        text: `
          We are delighted to receive your inquiry! Our web development business is ready to assist you in bringing your digital ideas to life. 
          Get ready to embark on an exciting journey of creating a stunning and functional website tailored to your unique needs.


          Your Message: ${message}



          NOTE: Kindly note that the process may take approximately 1-3 business days. We kindly request you to prepare for a scheduled meeting, which can be conducted online or in person, as per your convenience.

          Thank you for reaching out to us!
        `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(mailOptionsToSender);

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
