import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendMail = (e) => {
    e.preventDefault();
    send(
      "service_d1q4rc2",
      "template_28mzq54",
      { name, email, message },
      "a4VdtKUiqcIJ19Mmr"
    )
      .then((res) => {
        console.log("Message sent successfully", res.status, res.text);
      })
      .catch((err) => {
        console.log("Message failed to send", err);
      });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="pt-36 pb-32 dark:bg-darkMode">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary dark:text-white">
              Contact
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
              Contact Me
            </h2>
            <p className="text-md font-medium text-second dark:text-white md:text-lg">
              If you want to communicate with me or want to send me a message,
              please fill out the form below.
            </p>
          </div>
        </div>

        <form onSubmit={sendMail}>
          <div className="w-full lg:mx-auto lg:w-2/3">
            <div className="mb-8 w-full px-4">
              <label
                htmlFor="name"
                className="text-base font-bold text-primary"
              >
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Please enter yout name"
                value={name}
                onChange={handleName}
                id="name"
                className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:ring-opacity-50"
              />
            </div>
            <div className="mb-8 w-full px-4">
              <label
                htmlFor="email"
                className="text-base font-bold text-primary"
              >
                Email
              </label>
              <input
                type="email"
                required
                placeholder="Please enter your email"
                value={email}
                onChange={handleEmail}
                id="email"
                className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:ring-opacity-50"
              />
            </div>
            <div className="mb-8 w-full px-4">
              <label
                htmlFor="message"
                className="text-base font-bold text-primary"
              >
                Message
              </label>
              <textarea
                type="text"
                required
                placeholder="Please enter your message"
                value={message}
                onChange={handleMessage}
                id="message"
                className="h-32 w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:ring-opacity-50"
              ></textarea>
            </div>
            <div className="w-full px-4">
              <button className="w-full rounded-full bg-dark py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
