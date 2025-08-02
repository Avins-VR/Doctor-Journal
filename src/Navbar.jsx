import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const navbarVariants = {
  hidden: { y: -60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 12
    }
  }
};

const logoVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      delay: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.4
    }
  })
};

function Navbar() {
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/philosophy', label: 'Philosophy' },
    { to: '/specialization', label: 'Specialization' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <motion.div
      className="sticky top-0 z-[1000] flex items-center justify-between px-12 py-8 bg-[rgb(3,49,75)] backdrop-blur-[80px] text-white"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-3xl font-bold bg-gradient-to-r from-[#cdddef] via-[#daf8f2] to-[#fad6e5] bg-clip-text text-transparent tracking-wide"
        variants={logoVariants}
      >
        Doctor Journal
      </motion.h1>

      <nav>
        <ul className="flex gap-9 list-none m-0 p-0">
          {navItems.map((item, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.to}
                className="text-white text-lg font-medium px-2 py-1 rounded-[13px] transition-all duration-300 hover:text-[#cacaca] no-underline"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
}

export default Navbar;
