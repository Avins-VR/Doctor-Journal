import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const hoverTapEffect = {
  whileHover: { scale: 1.03, boxShadow: "0 8px 18px rgba(0,0,0,0.15)", cursor: "pointer" },
  whileTap: { scale: 0.95 }
};

const Specialisation = [
  {
    icon: "bi bi-suit-heart",
    title: "Cardiovascular Medicine",
    SD: "Comprehensive care for heart conditions including hypertension, coronary artery disease, and heart failure.",
    ST: "Areas of Expertise:",
    list: ["Cardiac Risk Assessment,Cholesterol Disorders,Hypertension Management,Heart Disease Prevention"]
  },
  {
    icon: "bi bi-droplet",
    title: "Diabetes & Endocrinology",
    SD: "Expert management of diabetes, thyroid disorders, and hormonal imbalances for optimal metabolic health.",
    ST: "Areas of Expertise:",
    list: ["Type 1 & Type 2 Diabetes,Thyroid Disorders,Hormone Replacement Therapy,Metabolic Syndrome"]
  },
  {
    icon: "bi bi-shield-plus",
    title: "Preventive Medicine",
    SD: "Proactive healthcare focused on disease prevention, health screening, and wellness optimization.",
    ST: "Areas of Expertise:",
    list: ["Health Screenings,Vaccination Programs,Lifestyle Counseling,Risk Factor Management"]
  },
  {
    icon: "bi bi-person-walking",
    title: "Geriatric Medicine",
    SD: "Specialized care for older adults addressing age-related health concerns and quality of life.",
    ST: "Areas of Expertise:",
    list: ["Age-Related Conditions,Medication Management,Cognitive Health,Mobility & Independence"]
  }
];

const Procedures = [
  { title: "Advanced Cardiac Assessment" },
  { title: "Diabetic Care Planning" },
  { title: "Comprehensive Health Evaluations" },
  { title: "Chronic Disease Management" },
  { title: "Preventive Care Protocols" },
  { title: "Medication Optimization" }
];

const Credentials = [
  {
    icon: "bi bi-capsule",
    title: "Internal Medicine",
    description: "American Board of Internal Medicine",
    certified: "Certified 2009"
  },
  {
    icon: "bi bi-capsule",
    title: "Geriatric Medicine",
    description: "American Board of Internal Medicine",
    certified: "Certified 2012"
  },
  {
    icon: "bi bi-capsule",
    title: "Diabetes Education",
    description: "Certification Board for Diabetes Care",
    certified: "Certified 2015"
  },
  {
    icon: "bi bi-capsule",
    title: "Cardiovascular Disease",
    description: "American College of Cardiology",
    certified: "Certified 2018"
  }
];

function Expertise() {
  return (
    <div className="bg-gradient-radial-at-bottom-left px-[140px] py-16">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
        <motion.h1 className="text-6xl font-bold text-center bg-gradient-to-r from-black via-emerald-600 to-pink-500 bg-clip-text text-transparent mb-8 relative after:content-[''] after:block after:w-[300px] after:h-[3px] after:mx-auto after:mt-4 after:bg-gradient-to-r after:from-yellow-400 after:to-transparent" variants={fadeSlideUp}>
          Medical <span>Specialisations</span>
        </motion.h1>
        <motion.p className="text-center max-w-4xl mx-auto text-lg text-gray-600 mb-12" variants={fadeSlideUp}>
          Dedicated expertise across multiple medical disciplines, ensuring comprehensive and specialized care for every patient's unique health needs.
        </motion.p>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        {Specialisation.map((spec, index) => (
          <motion.div key={index} className="bg-white border border-gray-200 rounded-xl p-10 shadow-xl flex flex-col" variants={cardVariants} {...hoverTapEffect}>
            <div className="flex items-center mb-4">
              <i className={`${spec.icon} text-4xl text-yellow-500 bg-yellow-100 border border-yellow-300 w-14 h-14 flex items-center justify-center rounded-full mr-5`}></i>
              <h3 className="text-2xl font-semibold text-gray-800 m-0">{spec.title}</h3>
            </div>
            <p className="text-gray-600 mb-4 text-base leading-relaxed">{spec.SD}</p>
            <div className="px-4">
              <p className="font-bold text-lg text-gray-800 mb-4">{spec.ST}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {spec.list[0].split(',').map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-sm text-gray-600 gap-2">
                    <i className="bi bi-check-lg text-yellow-500 text-base"></i> {item.trim()}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
        <motion.h2 className="text-3xl font-semibold text-center text-gray-900 mb-4" variants={fadeSlideUp}>Procedures & Services</motion.h2>
        <motion.p className="text-center text-gray-600 mb-10" variants={fadeSlideUp}>Comprehensive medical services delivered with precision and care</motion.p>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16" variants={containerVariants}>
          {Procedures.map((proc, index) => (
            <motion.div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-xl flex flex-col items-center hover:-translate-y-3 transition duration-300 ease-in-out" variants={cardVariants} {...hoverTapEffect}>
              <i className="bi bi-clipboard2-pulse text-4xl text-yellow-500 mb-4"></i>
              <p className="text-gray-800 font-medium text-center text-sm">{proc.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
        <motion.h2 className="text-3xl font-semibold text-center text-gray-900 mb-10" variants={fadeSlideUp}>Board Certifications & Credentials</motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10" variants={containerVariants}>
          {Credentials.map((cred, index) => (
            <motion.div key={index} className="bg-white border border-gray-200 rounded-xl p-8 text-center mt-10 shadow-xl flex flex-col items-center hover:-translate-y-3 transition duration-300 ease-in-out" variants={cardVariants} {...hoverTapEffect}>
              <i className={`${cred.icon} text-4xl text-yellow-500 bg-yellow-100 border border-yellow-300 w-14 h-14 flex items-center justify-center rounded-full mb-5`}></i>
              <h3 className="text-lg font-bold text-gray-800 mb-1">{cred.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{cred.description}</p>
              <p className="text-xs text-blue-600 bg-blue-100 px-3 py-1 rounded mt-2 inline-block">{cred.certified}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Expertise;