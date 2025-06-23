import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";  

import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/SignUp";
import Login from "./landing_page/login/Login"; 
import AboutPage from "./landing_page/about/AboutPage";
import NotFound from "./landing_page/NotFound";
import ProductPage from "./landing_page/product/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";

import AppLayout from "./landing_page/AppLayout";  // layout with Navbar + Footer

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
    <Routes>
      <Route path="/" element={<AppLayout><HomePage /></AppLayout>} />
      <Route path="/signup" element={<AppLayout><Signup /></AppLayout>} />   
      <Route path="/login" element={<AppLayout><Login /></AppLayout>} />  
      <Route path="/about" element={<AppLayout><AboutPage /></AppLayout>} />
      <Route path="/product" element={<AppLayout><ProductPage /></AppLayout>} />
      <Route path="/pricing" element={<AppLayout><PricingPage /></AppLayout>} />
      <Route path="/support" element={<AppLayout><SupportPage /></AppLayout>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
