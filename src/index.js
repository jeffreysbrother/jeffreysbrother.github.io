import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './pages/Homepage';
import Acoustics from './pages/Acoustics';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('main-container'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="acoustics" element={<Acoustics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);