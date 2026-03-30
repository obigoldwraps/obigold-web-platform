import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import GalleryPage from './components/GalleryPage';
import ServicesPage from './components/ServicesPage';

function App() {
  return (
    <BrowserRouter>
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
