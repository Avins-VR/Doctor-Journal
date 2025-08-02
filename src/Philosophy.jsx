import React from 'react';
import { motion } from 'framer-motion';

const PhilosophyData = [
  {
    icon: "bi bi-suit-heart",
    title: "Compassionate Care",
    SD: "Every patient interaction is guided by empathy, understanding, and genuine concern for their wellbeing.",
    LD: "I believe that healing begins with human connection. When patients feel heard, understood, and cared for, their bodies respond more positively to treatment."
  },
  {
    icon: "bi bi-graph-up",
    title: "Evidence-Based Medicine",
    SD: "All treatment decisions are grounded in the latest scientific research and proven clinical outcomes.",
    LD: "Medicine is constantly evolving, and I stay current with the latest research to ensure my patients receive treatments backed by solid scientific evidence and proven effectiveness."
  },
  {
    icon: "bi bi-people-fill",
    title: "Collaborative Approach",
    SD: "Healthcare is a team effort involving patients, families, and multidisciplinary medical professionals.",
    LD: "The best outcomes occur when patients are active participants in their care, working alongside specialists, nurses, and other healthcare providers as partners in the healing process."
  },
  {
    icon: "bi bi-shield-check",
    title: "Preventive Focus",
    SD: "Emphasizing prevention and early intervention to maintain health rather than just treating illness.",
    LD: "Prevention is always better than cure. I work with patients to identify risk factors early and develop personalized strategies to maintain optimal health and prevent disease."
  }
];

const CareData = [
  {
    number: "15-30",
    description: "Minutes per consultation to ensure thorough discussion"
  },
  {
    number: "24/7",
    description: "Emergency consultation availability for urgent medical concerns"
  },
  {
    number: "100%",
    description: "Patient satisfaction rate with personalized treatment plans"
  }
];

const ApproachData = [
  {
    number: "1",
    title: "Listen",
    description: "Comprehensive patient history and active listening"
  },
  {
    number: "2",
    title: "Analyze",
    description: "Thorough examination and evidence-based diagnosis"
  },
  {
    number: "3",
    title: "Collaborate",
    description: "Develop personalized treatment plan with patient input"
  },
  {
    number: "4",
    title: "Monitor",
    description: "Continuous follow-up and treatment adjustment as needed"
  }
];

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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const hoverTapEffect = {
  whileHover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,255,170,0.3)", cursor: "pointer" },
  whileTap: { scale: 0.95 }
};

function Philosophy() {
  return (
    <div className="bg-gradient-radial-at-bottom-left px-[140px] ">
      <motion.div
        className="py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h1 className="text-6xl font-bold text-center bg-gradient-to-r from-black via-emerald-600 to-pink-500 bg-clip-text text-transparent mb-8 relative after:content-[''] after:block after:w-[300px] after:h-[3px] after:mx-auto after:mt-4 after:bg-gradient-to-r after:from-yellow-400 after:to-transparent" variants={fadeSlideUp}>
          Medical Philosophy
        </motion.h1>
        <motion.p className="text-xl text-center max-w-4xl mx-auto text-gray-600 mt-10 mb-5" variants={fadeSlideUp}>
          My approach to medicine is built on four fundamental pillars that guide every decision, every interaction, and every treatment plan I develop for my patients.
        </motion.p>
        <motion.p className="italic text-2xl px-6 py-10 rounded-xl mx-auto max-w-4xl leading-relaxed relative text-gray-800 before:content-['\201C'] before:text-4xl before:absolute before:-top-2 before:-left-2 before:text-yellow-400 after:content-['\201D'] after:text-4xl after:absolute after:-bottom-2 after:-right-2 after:text-yellow-400" variants={fadeSlideUp}>
          True healing encompasses not just the physical body, but the emotional, mental, and spiritual wellbeing of each individual. As physicians, we have the privilege and responsibility to treat the whole person, not just the symptoms they present.
        </motion.p>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10" variants={containerVariants}>
          {PhilosophyData.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-10 shadow-lg flex items-start gap-10 hover:-translate-y-4 transition-transform"
              variants={cardVariants}
              {...hoverTapEffect}
            >
              <i className={`${item.icon} text-4xl text-orange-500 bg-orange-100 p-3 rounded-full shrink-0`}></i>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-lg font-medium text-gray-600 mt-4">{item.SD}</p>
                <p className="text-sm text-gray-500 mt-4">{item.LD}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-indigo-950 via-purple-700 to-indigo-900 text-white py-16 rounded-xl my-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h3 className="text-center text-4xl mb-10" variants={fadeSlideUp}>Patient-Centered Care</motion.h3>
        <motion.div className="flex justify-around flex-wrap gap-6" variants={containerVariants}>
          {CareData.map((care, i) => (
            <motion.div
              key={i}
              className="text-center max-w-xs"
              variants={cardVariants}
              {...hoverTapEffect}
            >
              <h3 className="text-5xl font-bold text-white mb-2">{care.number}</h3>
              <p className="text-lg text-blue-100">{care.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h3 className="text-center text-4xl font-semibold text-gray-900 mb-12" variants={fadeSlideUp}>My Treatment Approach</motion.h3>
        <motion.div className="flex justify-center flex-wrap gap-24" variants={containerVariants}>
          {ApproachData.map((step, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center max-w-xs"
              variants={cardVariants}
              {...hoverTapEffect}
            >
              <div className="bg-orange-500 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold shadow-md mb-4">
                <h3>{step.number}</h3>
              </div>
              <h4 className="text-2xl text-indigo-900 font-semibold mb-2">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Philosophy;