import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const service = [
  {
    icon: "bi bi-calendar2-check",
    title: "Flexible Scheduling",
    description: "Extended hours including early morning, evening, and weekend appointments to accommodate your busy lifestyle.",
    list: ["Same-day appointments", "Online scheduling", "Reminder notifications", "Telehealth options"]
  },
  {
    icon: "bi bi-telephone",
    title: "24/7 Support",
    description: "Round-the-clock access to medical guidance and emergency consultation for urgent health concerns.",
    list: ["Emergency hotline", "After-hours consultation", "Medical advice line", "Urgent care coordination"]
  },
  {
    icon: "bi bi-person-heart",
    title: "Personalized Care",
    description: "Individualized treatment plans tailored to your unique health profile, lifestyle, and medical history.",
    list: ["Custom treatment plans", "Personal health coaching", "Lifestyle recommendations", "Family health history analysis"]
  },
  {
    icon: "bi bi-shield-check",
    title: "Preventive Focus",
    description: "Proactive healthcare approach emphasizing early detection and prevention to maintain optimal health.",
    list: ["Regular health screenings", "Vaccination programs", "Risk assessment", "Wellness planning"]
  }
];

const Promises = [
  { promise: "You will be seen within 15 minutes of your scheduled appointment time" },
  { promise: "Your questions will be answered thoroughly and in language you understand" },
  { promise: "You will receive a personalized treatment plan tailored to your specific needs" },
  { promise: "Your medical records and personal information will be kept completely confidential" },
  { promise: "You will have 24/7 access to emergency medical consultation when needed" },
  { promise: "Your care will be coordinated seamlessly with specialists and other healthcare providers" }
];

function Service() {
  return (
    <div className="px-[140px]  py-16  bg-gradient-radial-at-bottom-left">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="text-6xl font-bold text-center bg-gradient-to-r from-black via-emerald-600 to-pink-500 bg-clip-text text-transparent mb-8 relative after:content-[''] after:block after:w-[300px] after:h-[3px] after:mx-auto after:mt-4 after:bg-gradient-to-r after:from-yellow-400 after:to-transparent"
        >
          Patient Services
        </motion.h1>
        <motion.p variants={fadeUp} className="text-center max-w-4xl mx-auto text-lg text-gray-600 mt-6">
          Exceptional patient care that goes beyond traditional medicine, focusing on your comfort, convenience, and comprehensive wellbeing throughout your healthcare journey.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid gap-20 mt-16 md:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {service.map((item, index) => (
          <motion.div
            key={index}
            variants={cardMotion}
            {...hoverCard}
            className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200 transition-transform duration-300 hover:-translate-y-4"
          >
            <i className={`${item.icon} text-4xl text-yellow-500 bg-yellow-100 w-[60px] h-[60px] flex items-center justify-center rounded-full mx-auto mb-4`}></i>
            <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
            <p className="text-gray-600 mb-4 text-base">{item.description}</p>
            <ul className="list-none text-left max-w-[80%] mx-auto">
              {item.list.map((listItem, i) => (
                <li key={i} className="text-gray-600 text-base relative pl-5 mb-2 before:content-['•'] before:text-yellow-400 before:absolute before:left-0 before:text-xl before:leading-[1]">
                  {listItem.trim()}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-[#0d012e] via-[#261a40] to-[#0c0e2e] rounded-2xl text-white px-10 py-16 my-24"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Patient Promise
        </motion.h2>
        <motion.p variants={fadeUp} className="text-center text-gray-300 text-lg max-w-3xl mx-auto mb-10">
          These commitments guide every interaction and ensure your healthcare experience exceeds expectations
        </motion.p>
        <motion.div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto" variants={container}>
          {Promises.map((item, index) => (
            <motion.div
              key={index}
              variants={cardMotion}
              {...hoverCard}
              className="bg-[#232e3b] rounded-2xl p-6 flex items-start gap-4"
            >
              <i className="bi bi-stop-circle-fill text-yellow-500 text-xl"></i>
              <p className="text-gray-300 text-base">{item.promise}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-28 mt-16"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={cardMotion} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div className="flex items-center mb-10">
            <i className="bi bi-clock text-2xl text-yellow-500 mr-6"></i>
            <h3 className="text-2xl font-semibold">Office Hours</h3>
          </div>
          <div className="space-y-10">
            <div className="flex justify-between">
              <p className="text-gray-600">Monday - Wednesday</p><p>7:00 AM - 6:00 PM</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Thursday - Friday</p><p>8:00 AM - 5:00 PM</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Saturday</p><p>9:00 AM - 2:00 PM</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Sunday</p><p>Emergency calls only</p>
            </div>
          </div>
          <p className="mt-12 text-center italic text-sm bg-gray-100 p-4 rounded-md">
            After-hours emergencies: Call main number for 24/7 answering service
          </p>
        </motion.div>

        <motion.div variants={cardMotion} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-semibold mb-6">Quick Patient Actions</h3>
          <motion.button
            {...hoverCard}
            className="w-full flex items-center gap-4 bg-yellow-100 border border-yellow-400 text-gray-800 p-4 rounded-md mb-4 shadow-sm hover:bg-yellow-200 transition"
          >
            <i className="bi bi-calendar-check text-yellow-500 text-xl"></i>
            <div className="flex flex-col items-start">
              <span className="font-semibold text-lg">Schedule Appointment</span>
              <span className="text-sm text-gray-600">Book your next visit online</span>
            </div>
          </motion.button>
          <motion.button
            {...hoverCard}
            className="w-full flex items-center gap-4 bg-gray-50 p-4 rounded-md mb-4 shadow-sm hover:bg-gray-100 transition"
          >
            <i className="bi bi-telephone-fill text-yellow-500 text-xl"></i>
            <div className="flex flex-col items-start">
              <span className="font-semibold text-lg">Contact Office</span>
              <span className="text-sm text-gray-600">Speak with our team</span>
            </div>
          </motion.button>
          <motion.button
            {...hoverCard}
            className="w-full flex items-center gap-4 bg-gray-50 p-4 rounded-md mb-4 shadow-sm hover:bg-gray-100 transition"
          >
            <i className="bi bi-person-check text-yellow-500 text-xl"></i>
            <div className="flex flex-col items-start">
              <span className="font-semibold text-lg">Patient Portal</span>
              <span className="text-sm text-gray-600">Access your health records</span>
            </div>
          </motion.button>

          <motion.div {...hoverCard} className="bg-yellow-50 rounded-md p-5 mt-6">
            <span className="font-semibold text-lg block mb-2">New Patient?</span>
            <p className="text-sm text-gray-600 mb-4">
              Welcome! We're accepting new patients and would be honored to be your healthcare partner.
            </p>
            <Link to="/Contact">
            <button className="w-full bg-yellow-400 text-gray-900 font-bold py-3 rounded-md hover:bg-yellow-500 transition">
              Patient Registration
            </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Service;