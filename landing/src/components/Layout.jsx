import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-[#05070e] text-[#c9d1d9] font-sans selection:bg-brand-indigo/30 selection:text-white relative">
            
            {/* Ambient Background Glows */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

                <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-brand-indigo/10 blur-[150px] rounded-full mix-blend-screen"></div>
                <div className="absolute top-[10%] -right-[10%] w-[60%] h-[60%] bg-brand-purple/10 blur-[150px] rounded-full mix-blend-screen"></div>
                <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen"></div>
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
