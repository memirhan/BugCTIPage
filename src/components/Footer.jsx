import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Shield, Globe, MessageSquare } from 'lucide-react';
import logo from '../assets/bugcti-logo.webp';

const Footer = () => {
    return (
        <footer className="w-full relative z-10 border-t border-white/[0.05] mt-auto">
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden border border-white/10">
                                <img src={logo} alt="BugCTI" className="w-full h-full object-cover scale-110" />
                            </div>
                            <span className="font-black text-[17px] text-white tracking-tight">BugCTI</span>
                        </div>
                        <p className="text-github-muted text-sm leading-relaxed max-w-xs mb-6">
                            AI-powered security analysis that catches vulnerabilities and performance issues before they ever reach production.
                        </p>
                        <div className="flex items-center gap-2.5">
                            {[
                                { icon: <Globe className="w-4 h-4" />, href: '#' },
                                { icon: <MessageSquare className="w-4 h-4" />, href: '#' },
                                { icon: <Mail className="w-4 h-4" />, href: 'mailto:emirhan@bugcti.com' },
                            ].map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-github-muted hover:text-white hover:bg-white/[0.08] hover:border-white/15 transition-all"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product links */}
                    <div>
                        <h4 className="text-white text-sm font-semibold mb-5">Product</h4>
                        <ul className="space-y-3">
                            {[
                                { to: '/problem', label: 'The Problem' },
                                { to: '/solution', label: 'Our Solution' },
                                { to: '/product', label: 'Platform' },
                                { to: '/status', label: 'Roadmap' },
                            ].map((l) => (
                                <li key={l.to}>
                                    <Link to={l.to} className="text-sm text-github-muted hover:text-white transition-colors">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white text-sm font-semibold mb-5">Contact</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:emirhan@bugcti.com" className="flex items-center gap-2 text-sm text-github-muted hover:text-white transition-colors">
                                    <Mail className="w-3.5 h-3.5 opacity-50" />
                                    emirhan@bugcti.com
                                </a>
                            </li>
                            <li>
                                <a href="mailto:emirhan@bugcti.com" className="text-sm text-github-muted hover:text-white transition-colors">
                                    Request a demo
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-github-muted text-xs">
                        <Shield className="w-3.5 h-3.5 opacity-40" />
                        © 2026 BugCTI. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6 text-xs text-github-muted">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
