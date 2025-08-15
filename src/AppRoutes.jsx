// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import your page components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services.jsx';
import Clients from './pages/Clients.jsx';
import Careers from './pages/Careers.jsx';
import Contact from './pages/Contact';
import Layout from './components/Layout.jsx';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/clients" element={<Clients />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
