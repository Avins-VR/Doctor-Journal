import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const contents = [
  { icon: "bi bi-suit-heart", chapter: "Chapter I", content: "About Dr. Mitchell", link: "/About"  },
  { icon: "bi bi-lightbulb", chapter: "Chapter II", content: "Medical Philosophy", link: "/philosophy" },
  { icon: "bi bi-award", chapter: "Chapter III", content: "Specialisation", link: "/Specialization" },
  { icon: "bi bi-people", chapter: "Chapter IV", content: "Patient Service", link: "/Services" },
  { icon: "bi bi-telephone", chapter: "Chapter VII", content: "Contact", link: "/contact" }
];

const achievement = [
  { icon: "bi bi-rocket-takeoff", number: "15+", word: "Years Experience" },
  { icon: "bi bi-person-fill-check", number: "5000+", word: "Patients Treated" },
  { icon: "bi bi-award-fill", number: "25+", word: "Awards Received" },
  { icon: "bi bi-journals", number: "45", word: "Research Publications" }
];

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const buttonHoverTap = {
  whileHover: { scale: 1.05, backgroundColor: "#00ffaa", color: "#000" },
  whileTap: { scale: 0.95 }
};

function Home() {
  return (
    <div className="bg-gradient-radial-at-bottom-left px-[140px]">
      <motion.div
        className="text-center px-5 py-10"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="inline-block bg-yellow-100 text-yellow-600 text-sm font-medium px-4 py-1 rounded-full mb-5" variants={fadeSlideUp}>
          Digital Medical Journal
        </motion.p>
        <motion.h1 className="text-[70px] font-bold bg-gradient-to-r from-black via-green-900 to-pink-400 bg-clip-text text-transparent mb-4" variants={fadeSlideUp}>
          Dr. Sarah Mitchell
        </motion.h1>
        <motion.h3 className="text-2xl text-gray-600 font-light relative pb-4 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-36 after:h-1 after:bg-gradient-to-r after:from-yellow-300 after:to-transparent after:rounded" variants={fadeSlideUp}>
          Internal Medicine Physician
        </motion.h3>
        <motion.p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mt-8" variants={fadeSlideUp}>
          "Dedicated to providing exceptional, personalized healthcare that treats not just symptoms, but the whole person with compassion, expertise, and evidence-based medicine."
        </motion.p>
        <motion.div className="flex justify-center gap-10 mt-10 flex-wrap" variants={containerVariant}>
        <Link to="/About">
          <motion.button className="bg-yellow-400 text-gray-800 font-semibold px-8 py-3 rounded-lg shadow-md" variants={fadeScale} {...buttonHoverTap}>
            Begin Reading &rarr;
          </motion.button>
        </Link>
        <Link to="/contact">
          <motion.button className="bg-white text-gray-800 font-semibold px-8 py-3 border border-gray-300 rounded-lg shadow-md" variants={fadeScale} {...buttonHoverTap}>
            Schedule Consultation
          </motion.button>
         </Link>
        </motion.div>
      </motion.div>

      <motion.div className="text-center px-5 py-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <motion.h2 className="text-4xl font-bold text-gray-800 mb-5" variants={fadeSlideUp}>Journal Contents</motion.h2>
        <motion.p className="text-lg text-gray-600 mb-12" variants={fadeSlideUp}>
          Explore the chapters of medical expertise and patient care
        </motion.p>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto" variants={containerVariant}>
          {contents.map((content, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300"
              variants={fadeScale}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`${content.icon} text-4xl text-yellow-500 bg-yellow-50 p-4 rounded-full mb-6`}></i>
              <h3 className="text-gray-500 font-medium text-lg mb-2">{content.chapter}</h3>
              <p className="text-xl font-semibold text-gray-800 mb-4">{content.content}</p>
              <Link
                to={content.link}
                className="text-blue-600 font-medium flex items-center gap-1 hover:text-blue-800 transition-colors"
              >
              Read Chapter &rarr;
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="bg-gradient-to-r from-[#170056] via-[#4c2f87] to-[#1e2150] text-white px-5 py-16 rounded-2xl max-w-6xl mx-auto shadow-xl mt-10 text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <motion.div className="flex flex-wrap justify-around gap-8" variants={containerVariant}>
          {achievement.map((achieve, index) => (
            <motion.div
              key={index}
              className="text-center min-w-[180px] flex-1"
              variants={fadeSlideUp}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`${achieve.icon} text-5xl text-teal-100`}></i>
              <h3 className="text-4xl font-bold mt-6 mb-1">{achieve.number}</h3>
              <p className="text-white/85 text-lg">{achieve.word}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="text-center px-5 py-16 max-w-3xl mx-auto" variants={fadeScale} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <motion.h2 className="text-3xl font-bold text-gray-800 mb-6" variants={fadeSlideUp}>Your Health Journey Starts Here</motion.h2>
        <motion.p className="text-lg text-gray-600 leading-relaxed mb-8" variants={fadeSlideUp}>
          Experience personalized healthcare that puts you first. Schedule a consultation and discover the difference comprehensive, compassionate care can make.
        </motion.p>
        <Link to="/contact">
          <motion.button className="bg-yellow-400 text-gray-800 font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-yellow-300 transition-colors" variants={fadeScale} {...buttonHoverTap}>
          Schedule Your Consultation
        </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;
