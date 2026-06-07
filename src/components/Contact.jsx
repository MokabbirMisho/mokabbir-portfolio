import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "./SectionTitle";
import { personalInfo } from "../data/portfolioData";

// ── EmailJS config ──────────────────────────────────────────────
// Replace these three values after setting up your EmailJS account
const EMAILJS_SERVICE_ID = "service_3sqzorn";
const EMAILJS_TEMPLATE_ID = "template_9undb28";
const EMAILJS_PUBLIC_KEY = "Yy97Qk7cR1ewanmen";
// ───────────────────────────────────────────────────────────────

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-slate-50 dark:bg-slate-900"
    >
      <SectionTitle
        title="Contact"
        subtitle="Have a project, job opportunity, or collaboration idea? Feel free to contact me."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        {/* Info cards */}
        <div className="space-y-5">
          <div className="card flex items-center gap-5 p-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-xl text-sky-600 dark:bg-sky-950 dark:text-sky-300">
              ⌖
            </span>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">
                Location
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {personalInfo.location}
              </p>
            </div>
          </div>

          <div className="card flex items-center gap-5 p-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-xl text-sky-600 dark:bg-sky-950 dark:text-sky-300">
              ✉
            </span>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">
                Email
              </h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="break-all text-sky-500 hover:underline"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          <div className="card flex items-center gap-5 p-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-xl text-sky-600 dark:bg-sky-950 dark:text-sky-300">
              ⏱
            </span>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">
                Response Time
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Usually within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <form ref={formRef} onSubmit={handleSubmit} className="card p-6 sm:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <input
              className="input-field"
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />
            <input
              className="input-field"
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
          </div>

          <input
            className="input-field mt-5"
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            className="input-field mt-5 min-h-40 resize-none"
            name="message"
            placeholder="Message"
            required
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="primary-btn mt-6 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          {status === "success" && (
            <p className="mt-4 text-sm font-medium text-emerald-500">
              ✓ Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm font-medium text-red-500">
              ✕ Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
