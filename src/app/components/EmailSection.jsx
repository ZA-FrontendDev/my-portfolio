"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { PaperAirplaneIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = "service_kz09dae";
    const templateId = "template_whgv3db";
    const userId = "Al78hgmGQ5Xo8CAcP";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.fullname,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        userId
      );
      setEmailSubmitted(true);
    } catch (error) {
      console.error("Email sending failed:", error);
    } finally {
      setIsSending(false);
    }
  };

  const inputClasses =
    "w-full bg-white/[0.03] border border-white/10 placeholder-[#6b7280] text-gray-100 text-sm rounded-xl block w-full p-3.5 transition-all duration-300 focus:outline-none focus:border-pink-custom/60 focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgba(218,43,124,0.1)] hover:border-white/20";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-28 scroll-mt-24"
    >
      <div className="pointer-events-none absolute -top-20 right-0 w-72 h-72 bg-pink-custom/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 bg-purple-custom/10 rounded-full blur-3xl" />

      <div className="relative grid md:grid-cols-2 gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-pink-custom font-mono text-sm">04.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-custom to-purple-custom">
              Get in Touch
            </h2>
          </div>

          <h5 className="text-xl sm:text-2xl font-semibold text-white mb-3">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-8 max-w-md leading-relaxed">
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-3">
            <motion.div whileHover={{ y: -3, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://github.com/ZA-FrontendDev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 hover:border-pink-custom/50 hover:bg-pink-custom/10 transition-all"
                aria-label="GitHub"
              >
                <Image src={GithubIcon} alt="Github" className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -3, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://linkedin.com/in/za-mern"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-custom/50 hover:bg-purple-custom/10 transition-all"
                aria-label="LinkedIn"
              >
                <Image src={LinkedinIcon} alt="LinkedIn" className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm"
        >
          {emailSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center text-center py-10"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center mb-5">
                <CheckCircleIcon className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Message sent!
              </h3>
              <p className="text-emerald-400 text-sm max-w-xs">
                Thank you for reaching out. I&apos;ll get back to you as soon as
                possible.
              </p>
            </motion.div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="fullname"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your Name
                </label>
                <input
                  name="fullname"
                  type="text"
                  id="fullname"
                  required
                  value={formData.fullname}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Jacob"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="jacob@google.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Just saying hi"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`${inputClasses} resize-none`}
                  placeholder="Let's talk about..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-custom to-purple-custom shadow-lg shadow-pink-custom/30 hover:shadow-pink-custom/50 disabled:opacity-70 transition-all mt-2 overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-custom to-pink-custom opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {isSending ? (
                  <span className="relative flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="relative flex items-center gap-2">
                    Send Message
                    <PaperAirplaneIcon className="w-4 h-4 -rotate-12 group-hover:rotate-0 transition-transform" />
                  </span>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSection;
