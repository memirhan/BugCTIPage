import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Problem from './pages/Problem';
import Solution from './pages/Solution';
import Status from './pages/Status';
import Product from './pages/Product';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/problem" element={<Problem />} />
                <Route path="/solution" element={<Solution />} />
                <Route path="/status" element={<Status />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
