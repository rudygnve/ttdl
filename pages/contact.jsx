import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookMessenger, FaTelegramPlane } from "react-icons/fa";
import { sendMessage } from "@/lib/functions";
import axios from "axios";
const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisbaled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState([]);
  const [showMsg, setShowMsg] = useState("");

  useEffect(() => {
    if (name && email && message) {
      setIsDisbaled(false);
    } else {
      setIsDisbaled(true);
    }
  }, [name, email, message]);

  useEffect(() => {
    if (name && email && message) {
      setData({
        name: name,
        email: email,
        phone: phone,
        message: message,
      });
    }
  }, [name, email, message]);

  const handleSubmitMessage = async (e) => {
    e.preventDefault();
    setIsDisbaled(true);
    try {
      setIsSubmitting(true);
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "applcation/json",
        },
      });
      setIsSubmitting(false);
      setShowMsg("Message Successfully Submitted!");
      setTimeout(() => {
        setShowMsg("");
      }, 4000);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      setIsSubmitting(false);
      setShowMsg("An Error Happened! Try Again");
      setTimeout(() => {
        setShowMsg("");
      }, 4000);
    }
  };

  console.log(data);

  return (
    <main className="w-full max-w-5xl mx-auto px-3 text-slate-800">
      <Navbar />
      <div className="w-full min-h-screen h-full flex md:flex-row flex-col gap-5 py-6 sm:py-10">
        <div className="flex-1 flex flex-col">
          <span className="text-slate-600 text-sm sm:text-base font-light mb-1 italic">
            Contact Us
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-800 mb-5">
            We’d love to hear from you.
          </h1>
          <p className="text-slate-700 leading-[170%] mb-5">
            Don't hesitate to contact us for any website inquiries or
            downloading help. Your experience matters, and we're here to make
            using our TikTok Video Downloader seamless and enjoyable.
          </p>
          <div className="flex gap-4 items-center mb-5 justify-center md:justify-start">
            <Link
              href="mailto:help@ttdl.app"
              className="h-12 px-3 flex items-center gap-1 justify-between text-white font-medium bg-slate-800"
            >
              <HiOutlineMail className="text-xl" />
              <span className="text-xs">help@ttdl.app</span>
            </Link>
            <div className="w-12 h-12 bg-slate-800 text-2xl text-white flex items-center justify-center">
              <FaFacebookMessenger />
            </div>
            <div className="w-12 h-12 bg-slate-800 text-2xl text-white flex items-center justify-center">
              <FaTelegramPlane />
            </div>
          </div>
          <p className="text-slate-700 leading-[170%]">
            At TTDL, you're central to our mission. Your experience, questions,
            and feedback matter. Our Contact Us page connects you directly to
            our dedicated support for seamless platform interactions.
          </p>
        </div>
        <div className="flex-1">
          <form
            onSubmit={handleSubmitMessage}
            className="w-full border p-6 flex flex-col"
          >
            <h2 className="mb-5 text-xl font-semibold text-slate-800">
              Let Us Know!
            </h2>
            {showMsg && (
              <span className="w-full flex items-center justify-center text-center text-white py-4 bg-green-700 mb-5 px-3 text-sm">
                {showMsg}
              </span>
            )}
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="w-full h-12 bg-gray-100 px-3 text-slate-800 mb-4"
              placeholder="Your Full Name *"
              required
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="w-full h-12 bg-gray-100 px-3 text-slate-800 mb-4"
              placeholder="Your Email Address *"
              required
            />
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="text"
              className="w-full h-12 bg-gray-100 px-3 text-slate-800 mb-4"
              placeholder="Your Phone Number (Optional)"
            />
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="w-full h-36 p-3 bg-gray-100 text-slate-800 mb-4 resize-none"
              placeholder="Type your message *"
              required
            />
            <button
              disabled={isDisabled}
              className="w-full h-12 bg-slate-800 text-white font-semibold disabled:opacity-60"
            >
              {!isSubmitting ? "Submit" : "Submitting..."}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage;
