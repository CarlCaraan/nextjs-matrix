"use client";

import { Fragment, useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "") {
      setError("Email field is required");
      return;
    }
    if (name === "") {
      setError("Name field is required");
      return;
    }
    if (message === "") {
      setError("Message field is required");
      return;
    }

    setIsPending(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSuccess(true);
        setIsPending(false);
        setName("");
        setEmail("");
        setMessage("");
        setError("");
      } else {
        const data = await response.json();
        setError(data.error);
        setIsPending(false);
      }
    } catch (error) {
      console.error(error);
      setError(
        "An error occurred while sending the email. Please try again later."
      );
      setIsPending(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Start All Validation */}
        {success && (
          <div className="font-sansMedium text-green-500 text-sm leading-none">
            Email sent successfully!
          </div>
        )}
        {error && (
          <div className="font-sansMedium text-red-500 text-sm leading-none">
            {error}
          </div>
        )}
        {/* End All Validation */}

        <label className="flex flex-col mt-4">
          <span className="font-sansMedium text-soft">Email</span>
          <input
            className={`${
              error === "Email field is required" ? "border border-red-600" : ""
            } border py-1 px-2`}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
        </label>
        <label className="flex flex-col mt-4">
          <span className="font-sansMedium text-soft">Name</span>
          <input
            className={`${
              error === "Name field is required" ? "border border-red-600" : ""
            } border py-1 px-2`}
            type="text"
            placeholder="First name, MI. Last name"
            onChange={(e) => setName(e.target.value)}
            id="name"
          />
        </label>
        <label className="flex flex-col mt-4">
          <span className="font-sansMedium text-soft">Message</span>
          <textarea
            className={`${
              error === "Message field is required"
                ? "border border-red-600"
                : ""
            } border py-1 px-2`}
            placeholder="Your inquiries here"
            rows="3"
            onChange={(e) => setMessage(e.target.value)}
            id="message"
          />
        </label>

        {/* Button */}
        {!isPending && (
          <button
            className="border mt-2 px-3 py-1 shadow-sm float-right"
            type="submit"
          >
            Submit
          </button>
        )}
        {isPending && (
          <Fragment>
            <button
              className="border mt-2 px-3 py-1 shadow-sm float-right"
              type="submit"
            >
              Sending
            </button>
            <button
              className="border mt-2 px-3 py-1 shadow-sm float-right"
              type="submit"
              disabled
            >
              <div role="status">
                <div
                  className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            </button>
          </Fragment>
        )}
      </form>
    </>
  );
}

export default ContactForm;
