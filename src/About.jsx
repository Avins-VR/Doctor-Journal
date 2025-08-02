import React from 'react';
import { motion } from 'framer-motion';
import Doctor from './assets/Doctor.jpg';
import { Link } from 'react-router-dom';


const achievement = [
  { icon: 'bi bi-rocket-takeoff', number: '15+', word: 'Years Experience' },
  { icon: 'bi bi-person-fill-check', number: '5000+', word: 'Patients Treated' },
  { icon: 'bi bi-award-fill', number: '25+', word: 'Awards Received' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const buttonHoverTap = {
  whileHover: { scale: 1.05, backgroundColor: "#00ffaa", color: "#000" },
  whileTap: { scale: 0.95 }
};

function About() {
  return (
    <motion.div
      className="bg-gradient-radial-at-bottom-left px-[140px] py-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="flex gap-[70px] rounded-[20px] p-10 -mr-10" variants={containerVariants}>

        <motion.div className="flex-[2] -ml-20" variants={containerVariants}>
          <motion.header className="mb-[30px]" variants={fadeUp}>
            <motion.h1
              className="text-[70px] font-bold bg-gradient-to-r from-[#0c0c0d] via-[#02906a] to-[#ff106c] bg-clip-text text-transparent mb-5"
              variants={fadeUp}
            >
              Dr. Sarah Mitchell
            </motion.h1>
            <motion.h3
              className="text-[28px] text-[#55555592] font-light relative pb-4 mb-10 after:content-[''] after:absolute after:left-[31%] after:bottom-0 after:-translate-x-1/2 after:w-[400px] after:h-[3px] after:bg-gradient-to-r after:from-[#ffeb3b] after:to-transparent after:rounded"
              variants={fadeUp}
            >
              Board-Certified Internal Medicine Physician
            </motion.h3>
          </motion.header>

          <motion.div className="text-[#4d4d4d] text-[20px] leading-relaxed space-y-5" variants={fadeUp}>
            <motion.p variants={fadeUp}>
             With over 15 years of dedicated service in internal medicine, Dr. Sarah Mitchell has established herself as a compassionate healer and innovative medical practitioner. Her journey in medicine began with a simple yet profound belief: every patient deserves personalized, comprehensive care that treats not just symptoms, but the whole person.
            </motion.p>
            <motion.p variants={fadeUp}>
             Born and raised in Boston, Dr. Mitchell developed her passion for medicine early, inspired by her grandmother's battle with chronic illness and the dedicated physicians who provided both medical expertise and emotional support during challenging times.
            </motion.p>
          </motion.div>

          <motion.div className="flex justify-between gap-1 my-10 -ml-[100px]" variants={containerVariants}>
            {achievement.map((achieve, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-5 flex-1"
                variants={fadeInScale}
                whileHover={{ scale: 1.1, color: "#00ffaa", cursor: "pointer" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <i className={`${achieve.icon} text-[40px] text-[#ffc107] mb-3 bg-[rgb(250,238,238)] px-[20px] py-[11px] rounded-full`} />
                <h3 className="text-[33px] font-bold text-[#333]">{achieve.number}</h3>
                <p className="text-[18px] text-[#888] mt-1">{achieve.word}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="mt-[30px] flex gap-[60px]" variants={fadeUp}>
            <Link to="/contact">
            <motion.button
              className="bg-[#ffc107] text-[#1c1c1c] font-semibold text-[18px] px-[25px] py-[12px] rounded-[10px]"
              {...buttonHoverTap}
              variants={fadeInScale}
            >
              Schedule Consultation
            </motion.button>
            </Link>
            <Link to="/Specialization">
            <motion.button
              className="bg-transparent border border-black text-[#212121] font-semibold text-[18px] px-[25px] py-[12px] rounded-[10px]"
              {...buttonHoverTap}
              variants={fadeInScale}
            >
              View Credentials
            </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 relative"
          variants={fadeInScale}
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mt-[20px] w-[450px] h-[550px] relative overflow-hidden rounded-[15px] bg-[#0bb991] mb-[20px]">
            <img
              src={Doctor}
              alt="Dr. Sarah Mitchell"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-full w-[450px] object-cover rounded-[15px]"
            />
          </div>
        </motion.div>

      </motion.div>

      <motion.div className="text-center mt-[80px] p-[40px]" variants={fadeUp}>
        <motion.p
          className="text-[1.5rem] text-[#555] italic leading-relaxed max-w-[800px] mx-auto mb-[20px] relative before:content-['“'] before:text-[3rem] before:text-[#ffc107] before:absolute before:-top-5 before:-left-10 after:content-['”'] after:text-[3rem] after:text-[#ffc107] after:absolute after:-bottom-5 after:-right-10"
          variants={fadeUp}
        >
          Medicine is not just about treating diseases; it's about understanding the person behind
          the symptoms, building trust, and walking alongside patients on their journey to health
          and healing.
        </motion.p>
        <motion.p className="text-[1rem] text-[#636363] font-medium" variants={fadeUp}>
          — Dr. Sarah Mitchell
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default About;