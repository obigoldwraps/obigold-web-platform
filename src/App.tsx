import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import GalleryPage from './components/GalleryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
