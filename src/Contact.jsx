import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const cardMotion = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const hoverCard = {
  whileHover: { scale: 1.03, boxShadow: "0 8px 18px rgba(0,0,0,0.15)", cursor: "pointer" },
  whileTap: { scale: 0.97 },
};

function Contact() {
  return (
    <motion.div 
      id="Contact" 
      className=" px-8 py-16 bg-gradient-radial-at-bottom-left"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={container}
    >
      <motion.div className="text-center mb-12" variants={fadeUp}>
        <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-black via-emerald-600 to-pink-500 bg-clip-text text-transparent mb-8 relative after:content-[''] after:block after:w-[200px] after:h-[3px] after:mx-auto after:mt-4 after:bg-gradient-to-r after:from-yellow-400 after:to-transparent">
          Contact Us
        </h1>
        <p className="text-lg text-gray-500 max-w-4xl mx-auto">
          Ready to take the next step in your healthcare journey? We're here to help. Reach out to schedule an appointment or ask any questions about our services.
        </p>
      </motion.div>

      <motion.div  className="grid md:grid-cols-2 gap-20 mb-16 max-w-screen-lg mx-auto px-8" variants={container}>
        {[{
          icon: "bi bi-telephone",
          title: "Phone",
          lines: ["(555) 123-4567", "Emergency: (555) 987-6543"],
        }, {
          icon: "bi bi-envelope",
          title: "Email",
          lines: ["dr.smith@medicalcenter.com", "Response within 24 hours"],
        }, {
          icon: "bi bi-geo-alt",
          title: "Location",
          lines: ["123 Medical Plaza, Suite 500", "Downtown Medical District", "City, State 12345"],
        }, {
          icon: "bi bi-clock",
          title: "Office Hours",
          lines: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Emergency Only"],
        }].map(({ icon, title, lines }, idx) => (
          <motion.div className="bg-white rounded-xl shadow-2xl p-8 w-[400px] text-center transition-transform duration-300" key={idx} variants={cardMotion} {...hoverCard}>
            <i className={`${icon} text-4xl text-yellow-400 mb-4`}></i>
            <div className="mt-4">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h4>
              {lines.map((line, i) => (
                <p key={i} className="text-gray-500 text-lg leading-relaxed">{line}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="flex flex-wrap gap-12 mb-16" variants={fadeUp}>
<div
   className="flex-1.5 max-w-screen-lg max-w-500 w-full bg-white rounded-xl border border-gray-300 p-12"
  style={{ marginLeft: '200px',boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 1)'}}
>
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">Send a Message</h2>
          <form>
            <div className="flex gap-6 mb-6">
              <div className="flex flex-col w-full">
                <label htmlFor="firstName" className='text-lg font-semibold text-gray-700 mb-2'>First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder="John" required className="w-full p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="lastName" className='text-lg font-semibold text-gray-700 mb-2'>Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Doe" required className="w-full p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="email" className='text-lg font-semibold text-gray-700 mb-2'>Email</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" required className="w-full p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="phone" className='text-lg font-semibold text-gray-700 mb-2'>Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" required className="w-full p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="subject" className='text-lg font-semibold text-gray-700 mb-2'>Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Consultation Request" required className="w-full p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="message" className='text-lg font-semibold text-gray-700 mb-2'>Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Please describe your inquiry or medical concerns..." required className="w-full p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white py-4 px-6 rounded-md w-full text-lg font-medium shadow-md hover:bg-blue-700 transition-transform transform hover:-translate-y-1">Send Message</button>
          </form>
          <p className="text-center text-gray-500 mt-6 text-base">We'll respond to your message within 24 hours during business days.</p>
        </div>
      </motion.div>

      <motion.div className="bg-gradient-to-br from-slate-800 to-gray-700 text-white rounded-xl py-12 px-1 mt-16 text-center max-w-[1100px] mx-auto" variants={container}>
        <h3 className="text-4xl font-medium mb-10">Emergency Information</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {[{
            title: "Medical Emergencies",
            description: "For life-threatening emergencies, call 911 immediately or go to your nearest emergency room.",
            buttonText: "Call 911",
          }, {
            title: "After-Hours Care",
            description: "For urgent non-emergency concerns, call our main number. Our answering service is available 24/7.",
            buttonText: "(617) 555-0123",
          }].map(({ title, description, buttonText }, idx) => (
            <motion.div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 text-white max-w-md w-full" key={idx} variants={cardMotion} {...hoverCard}>
              <h4 className="text-2xl mb-2">{title}</h4>
              <p className="text-gray-300 text-lg mb-6">{description}</p>
              <button className="bg-yellow-400 text-white font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 hover:text-black transition">{buttonText}</button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;