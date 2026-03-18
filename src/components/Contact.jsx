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

  return (
    <div id="contact" className="relative py-24 min-h-screen flex items-center justify-center">
      <div className="max-w-[85%] mx-auto font-outfit relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-neon-cyan mb-4">Transmission_Port</h2>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Let's <span className="text-neon-orange">Connect</span>
              </h1>
            </div>

            <div className="grid gap-6">
              {[
                { icon: <FaLocationDot/>, label: "Base_Location", value: "Theni, India" },
                { icon: <FaPhoneAlt/>, label: "Comms_Line", value: "8248724588" },
                { icon: <FaEnvelope/>, label: "Binary_Drop", value: "vijayakashm08@gmail.com" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-6 glass rounded-2xl border border-white/5 hover:border-neon-cyan/50 transition-all group cursor-pointer"
                >
                   <div className="text-2xl text-neon-cyan group-hover:scale-125 transition-transform">{item.icon}</div>
                   <div>
                      <p className="text-[10px] uppercase font-black text-gray-500 tracking-widest">{item.label}</p>
                      <p className="text-lg font-bold text-white uppercase tracking-tighter">{item.value}</p>
                   </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-6 mt-8">
               <motion.a 
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="https://github.com/Vijayakash-588" 
                className="p-4 glass rounded-xl text-white hover:text-neon-cyan hover:shadow-neon-cyan/20 transition-all"
               >
                  <FaGithub size={24}/>
               </motion.a>
               <motion.a 
                whileHover={{ scale: 1.1, rotate: -5 }}
                href="https://www.linkedin.com/in/vijay-akash-978069295/" 
                className="p-4 glass rounded-xl text-white hover:text-neon-cyan hover:shadow-neon-cyan/20 transition-all"
               >
                  <FaLinkedin size={24}/>
               </motion.a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-10 rounded-[2rem] border border-white/10 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/10 blur-3xl rounded-full"></div>
             
             <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest ml-1">Access_Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="IDENTIFY YOURSELF"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest ml-1">Return_Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="CORE@SYSTEM.COM"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest ml-1">Payload_Data</label>
                  <textarea
                    name="message"
                    placeholder="ENTER MESSAGE ENCRYPTION..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all h-32 resize-none"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-neon-orange text-white font-black uppercase tracking-[0.2em] rounded-xl transition-all disabled:opacity-50 shadow-xl shadow-neon-orange/20"
                >
                  {isSubmitting ? "UPLOADING..." : "INITIATE TRANSFER"}
                </motion.button>

                {success === true && (
                  <p className="text-neon-emerald text-center font-bold text-sm tracking-widest animate-pulse">
                    TRANSFER_SUCCESSFUL_ACCESS_GRANTED
                  </p>
                )}
                {success === false && (
                  <p className="text-red-500 text-center font-bold text-sm tracking-widest">
                    SYSTEM_ERROR_TRANSFER_FAILED
                  </p>
                )}
             </form>

             {/* HUD Decoration */}
             <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-white/20"></div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
