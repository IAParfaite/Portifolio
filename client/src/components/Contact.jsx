// Functional contact form — POSTs to the Express/MongoDB backend with validation + status feedback.
import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCheckCircle, FiXCircle, FiLoader } from "react-icons/fi";
import SectionHeading from "./ui/SectionHeading.jsx";
import Reveal from "./ui/Reveal.jsx";


const inputClass =
  "w-full rounded-xl border border-card bg-base-900/60 px-4 py-3 text-sm text-primary placeholder:text-muted transition-colors focus:border-accent-terracotta focus:outline-none focus:ring-1 focus:ring-accent-terracotta";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // Clear a field's error once the user starts editing it
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim() || form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Please enter a valid email address.";
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = "Please share a few words — at least 10 characters.";
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          name: form.name,
          email: form.email,
          message: form.message,
        }).toString(),
      });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <SectionHeading
          kicker="Contact"
          title="Let's build something together"
          subtitle="Have a project, a role, or just want to say hi? My inbox is always open."
        />

        <Reveal className="mx-auto max-w-2xl">
          <form
            onSubmit={handleSubmit}
            name="contact"
            data-netlify="true"
            netlify-honeypot="bot-field"
            noValidate
            className="card-surface space-y-5 p-6 md:p-8"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden" aria-hidden="true">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-secondary">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`${inputClass} ${errors.name ? "border-rose-500/60" : ""}`}
                />
                {errors.name && (
                  <p role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-rose-400">
                    <FiXCircle aria-hidden="true" /> {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-secondary">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="yourname@email.com"
                  className={`${inputClass} ${errors.email ? "border-rose-500/60" : ""}`}
                />
                {errors.email && (
                  <p role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-rose-400">
                    <FiXCircle aria-hidden="true" /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-secondary">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Share something..."
                className={`${inputClass} resize-none ${errors.message ? "border-rose-500/60" : ""}`}
              />
              {errors.message && (
                <p role="alert" className="mt-1.5 flex items-center gap-1 text-xs text-rose-400">
                  <FiXCircle aria-hidden="true" /> {errors.message}
                </p>
              )}
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === "loading"}
              className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-gradient px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <FiLoader className="animate-spin" aria-hidden="true" /> Sending...
                </>
              ) : (
                <>
                  <FiSend aria-hidden="true" /> Send Message
                </>
              )}
            </motion.button>

            {/* Status feedback */}
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                className="flex items-center gap-2 rounded-xl border border-accent-paper/40 bg-accent-paper/10 px-4 py-3 text-sm text-accent-cream"
              >
                <FiCheckCircle aria-hidden="true" /> Thanks — your message is on its way. I'll get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300"
              >
                <FiXCircle aria-hidden="true" /> Something went wrong sending your message. Please try again.
              </motion.p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;