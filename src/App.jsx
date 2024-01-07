import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import First from './pages/first/First';
import Second from './pages/second/Second';
import Navbar from './pages/second/components/Navbar';
import Project from './pages/Project/Project';
import Contact from './pages/Contact/Contact';

import './app.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/About" element={<Second />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
