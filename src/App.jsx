import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Philosophy from './Philosophy';
import Service from './Services';
import Expertise from './Expertise';
import Contact from './Contact';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/Services" element={<Service />} />
        <Route path="/Specialization" element={<Expertise />} />
      </Routes>
    </>
  );
}

export default App;