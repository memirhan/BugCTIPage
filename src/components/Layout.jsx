import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-[#05070e] text-[#c9d1d9] font-sans selection:bg-brand-indigo/30 selection:text-white relative">
            
            {/* Ambient Background Glows */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-brand-indigo/8 blur-[80px] rounded-full"></div>
                <div className="absolute top-[10%] -right-[10%] w-[45%] h-[45%] bg-brand-purple/8 blur-[80px] rounded-full"></div>
                <div className="absolute -bottom-[20%] left-[20%] w-[45%] h-[45%] bg-blue-900/8 blur-[80px] rounded-full"></div>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen w-full">
                <Navbar />
                <main className="flex-grow flex flex-col items-center w-full">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
