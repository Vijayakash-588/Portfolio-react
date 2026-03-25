import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3_FORM_API,
          ...formData,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess(false);
      }
    } catch (error) {
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <FaLocationDot />, label: "Location", value: "Theni, India" },
    { icon: <FaPhoneAlt />, label: "Phone", value: "8248724588" },
    { icon: <FaEnvelope />, label: "Email", value: "vijayakashm08@gmail.com" },
  ];

  return (
    <div id="contact" className="relative py-28 min-h-screen flex items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aurora-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[85%] mx-auto font-outfit relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-aurora-royal text-xs font-grotesk font-bold uppercase tracking-[0.3em] block mb-4">Contact</span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Let's{" "}
            <span className="aurora-text">Connect</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 8 }}
                className="flex items-center gap-5 p-5 glass rounded-2xl border border-white/5 hover:border-aurora-indigo/20 transition-all duration-500 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-aurora-indigo/10 border border-aurora-indigo/20 flex items-center justify-center text-aurora-indigo group-hover:bg-aurora-indigo/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase font-grotesk font-bold text-gray-500 tracking-widest">{item.label}</p>
                  <p className="text-white font-semibold">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              <motion.a
                whileHover={{ y: -3, scale: 1.05 }}
                href="https://github.com/Vijayakash-588"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-aurora-primary hover:border-aurora-primary/30 border border-white/5 transition-all"
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, scale: 1.05 }}
                href="https://www.linkedin.com/in/vijay-akash-978069295/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-aurora-primary hover:border-aurora-primary/30 border border-white/5 transition-all"
              >
                <FaLinkedin size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8 md:p-10 border border-white/5 relative overflow-hidden"
          >
            {/* Decorative corner glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-aurora-indigo/10 blur-[60px] rounded-full pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-grotesk font-bold text-gray-500 tracking-wider uppercase ml-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-aurora-indigo/50 focus:ring-1 focus:ring-aurora-indigo/30 transition-all font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-grotesk font-bold text-gray-500 tracking-wider uppercase ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-aurora-indigo/50 focus:ring-1 focus:ring-aurora-indigo/30 transition-all font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-grotesk font-bold text-gray-500 tracking-wider uppercase ml-1">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-aurora-primary/50 focus:ring-1 focus:ring-aurora-primary/30 transition-all h-32 resize-none font-medium"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-aurora-primary hover:bg-aurora-royal text-white font-bold uppercase tracking-wider rounded-xl transition-all duration-500 disabled:opacity-50 shadow-lg shadow-aurora-primary/20 hover:shadow-aurora-royal/30 text-sm"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

              {success === true && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center font-medium text-sm"
                >
                  ✓ Message sent successfully!
                </motion.p>
              )}
              {success === false && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center font-medium text-sm"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
