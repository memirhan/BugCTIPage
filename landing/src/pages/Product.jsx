import React, { useState } from 'react';
import { Sparkles, Maximize2 } from 'lucide-react';
import Layout from '../components/Layout';

const Product = () => {
    // 3D Tilt Effect State
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseMove = (e, index) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
        const rotateY = ((x - centerX) / centerX) * 10;
        
        setMousePos({ rotateX, rotateY });
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setMousePos({ rotateX: 0, rotateY: 0 });
        setHoveredIndex(null);
    };

    const screenshots = [
        {
            title: "Command Center Dashboard",
            desc: "Track all your security metrics, active scans, and repository status in real-time from a single pane of glass.",
            img: "/dashboard.png",
            tag: "Dashboard"
        },
        {
            title: "Security Scan Details",
            desc: "In-depth analysis of discovered vulnerabilities. Instantly see which file, which line, and what level of risk you are dealing with.",
            img: "/security-scan.png",
            tag: "Vulnerability Engine"
        },
        {
            title: "Automated PR Review History",
            desc: "Browse a complete audit log of all Pull Requests analyzed by BugCTI, including the automated fix PRs it generates.",
            img: "/review-history.png",
            tag: "Audit Log"
        }
    ];

    return (
        <Layout>
            <section className="w-full max-w-7xl mx-auto px-6 py-24 animate-fade-in-up">
                <div className="mb-20 text-center">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
                        Inside the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-purple">Engine</span>.
                    </h1>
                    <p className="text-xl text-github-muted leading-relaxed font-medium max-w-3xl mx-auto">
                        An intuitive interface built by engineers, for engineers. Designed with the elegance of dark mode and the power of AI.
                    </p>
                </div>

                <div className="space-y-32">
                    {screenshots.map((item, index) => {
                        const isHovered = hoveredIndex === index;
                        
                        return (
                            <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
                                
                                {/* 3D Image Container */}
                                <div className="w-full lg:w-3/5" style={{ perspective: '2000px' }}>
                                    <div 
                                        className="relative w-full rounded-2xl transition-all duration-300 ease-out cursor-pointer group"
                                        style={{
                                            transform: isHovered 
                                                ? `rotateX(${mousePos.rotateX}deg) rotateY(${mousePos.rotateY}deg) scale3d(1.02, 1.02, 1.02)` 
                                                : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                                            transformStyle: 'preserve-3d',
                                        }}
                                        onMouseMove={(e) => handleMouseMove(e, index)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {/* Outer Glow */}
                                        <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-indigo to-brand-purple opacity-0 blur-2xl transition-opacity duration-500 ${isHovered ? 'opacity-30' : ''}`} style={{ transform: 'translateZ(-50px)' }}></div>
                                        
                                        {/* Browser Chrome / Window */}
                                        <div className="relative rounded-2xl bg-[#0d1117] border border-white/10 shadow-2xl overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
                                            
                                            {/* Window Header */}
                                            <div className="h-8 bg-[#010409] border-b border-white/5 flex items-center px-4 gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                            </div>

                                            {/* Actual Image */}
                                            {/* Not: Geçici olarak placeholder kullanılıyor. Gerçek projede img src'yi sizin görsellerinizle değiştirmelisiniz. (Örn: src/assets/dashboard.png) */}
                                            <div className="relative aspect-[16/9] w-full bg-[#0d1117] flex items-center justify-center">
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#020408]/50 to-transparent z-10 pointer-events-none"></div>
                                                <img 
                                                    src={item.img} 
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.target.onerror = null; 
                                                        e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80"; // Fallback placeholder
                                                    }}
                                                />
                                                <div className={`absolute inset-0 bg-brand-indigo/10 opacity-0 transition-opacity duration-300 z-20 flex items-center justify-center ${isHovered ? 'opacity-100' : ''}`}>
                                                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                                                        <Maximize2 className="w-6 h-6" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="w-full lg:w-2/5 space-y-6">
                                    <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-github-muted text-sm font-semibold tracking-wider">
                                        {item.tag}
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-black text-white">{item.title}</h2>
                                    <p className="text-lg text-github-muted leading-relaxed font-medium">
                                        {item.desc}
                                    </p>
                                    
                                    <div className="pt-4">
                                        <div className="h-1 w-12 bg-gradient-to-r from-brand-indigo to-brand-purple rounded-full"></div>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </section>
        </Layout>
    );
};

export default Product;
