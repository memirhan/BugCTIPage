import React from 'react';
import { Mail, Shield, Globe, MessageSquare, Terminal } from 'lucide-react';
import logo from '../assets/bugcti-logo.png';

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10 relative z-10 border-t border-white/5 mt-auto bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden border border-white/10">
                                <img src={logo} alt="BugCTI Logo" className="w-full h-full object-cover scale-110" />
                            </div>
                            <span className="font-black text-xl text-white tracking-tight">BugCTI</span>
                        </div>
                        <p className="text-github-muted font-medium mb-6 max-w-sm leading-relaxed">
                            The AI-powered security layer that catches vulnerabilities and performance bottlenecks before they ever reach production.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-github-muted hover:text-white hover:bg-white/10 transition-all"><Globe className="w-5 h-5" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-github-muted hover:text-white hover:bg-white/10 transition-all"><MessageSquare className="w-5 h-5" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-github-muted hover:text-white hover:bg-white/10 transition-all"><Terminal className="w-5 h-5" /></a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-github-muted font-medium">
                            <li><a href="/problem" className="hover:text-brand-indigo transition-colors">The Problem</a></li>
                            <li><a href="/solution" className="hover:text-brand-indigo transition-colors">Our Solution</a></li>
                            <li><a href="/product" className="hover:text-brand-indigo transition-colors">Platform</a></li>
                            <li><a href="/status" className="hover:text-brand-indigo transition-colors">Roadmap</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-github-muted font-medium">
                            <li><a href="mailto:memirhansumer@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail className="w-4 h-4" /> memirhansumer@gmail.com</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-white transition-colors">Request Demo</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-github-muted font-medium text-sm">
                        <Shield className="w-4 h-4 opacity-50" />
                        © 2026 BugCTI. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6 text-sm text-github-muted font-medium">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
