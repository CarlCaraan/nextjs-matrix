"use client";
import nodemailer from "nodemailer";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Your emailer configuration here (e.g., SMTP server, credentials)
    });

    // Prepare the email message
    const mailOptions = {
      from: email,
      to: "bannedefused3@gmail.com", // Change this to your own email address
      subject: "New contact form submission",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError(
        "An error occurred while sending the email. Please try again later."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="flex flex-col mt-4">
        <span className="font-sansMedium text-soft">Email</span>
        <input
          className="border py-1 px-2"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="flex flex-col mt-4">
        <span className="font-sansMedium text-soft">Name</span>
        <input
          className="border py-1 px-2"
          type="text"
          placeholder="First name, MI. Last name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="flex flex-col mt-4">
        <span className="font-sansMedium text-soft">Message</span>
        <textarea
          className="border py-1 px-2"
          placeholder="Your inquiries here"
          rows="3"
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button className="border mt-2 px-3 py-1 shadow-sm float-right">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
