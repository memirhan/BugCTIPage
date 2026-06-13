import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';

const Problem = lazy(() => import('./pages/Problem'));
const Solution = lazy(() => import('./pages/Solution'));
const Status = lazy(() => import('./pages/Status'));
const Product = lazy(() => import('./pages/Product'));

const PageFallback = () => (
    <div style={{ background: '#010409', minHeight: '100vh' }} />
);

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<PageFallback />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/problem" element={<Problem />} />
                    <Route path="/solution" element={<Solution />} />
                    <Route path="/status" element={<Status />} />
                    <Route path="/product" element={<Product />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
