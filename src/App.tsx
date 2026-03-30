import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import Home from './components/Home';
import GalleryPage from './components/GalleryPage';
import ServicesPage from './components/ServicesPage';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Place it here, above your Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
