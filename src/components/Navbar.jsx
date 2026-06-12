import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import logo from '../assets/bugcti-logo.webp';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const links = [
        { to: '/', label: 'Home' },
        { to: '/problem', label: 'Problem' },
        { to: '/solution', label: 'Solution' },
        { to: '/product', label: 'Product' },
        { to: '/status', label: 'Status' },
    ];

    return (
        <nav className={`w-full z-50 py-3.5 sticky top-0 transition-all duration-300 ${
            scrolled
                ? 'bg-[#05070e]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.4)]'
                : 'bg-transparent border-b border-white/[0.04]'
        }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center gap-8">
                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-2.5 group shrink-0">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                        <img src={logo} alt="BugCTI" className="w-full h-full object-cover scale-110" />
                    </div>
                    <span className="font-black text-[17px] text-white tracking-tight">BugCTI</span>
                </NavLink>

                {/* Center links */}
                <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
                    {links.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.to === '/'}
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg text-sm transition-all duration-150 ${
                                    isActive
                                        ? 'text-white font-semibold bg-white/[0.07]'
                                        : 'text-github-muted font-medium hover:text-white hover:bg-white/[0.04]'
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center shrink-0 ml-auto">
                    <a
                        href="mailto:emirhan@bugcti.com"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-indigo text-white text-sm font-semibold hover:bg-indigo-500 transition-colors shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                    >
                        <Zap className="w-3.5 h-3.5" />
                        Get Access
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-github-muted p-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors ml-auto"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#05070e]/95 backdrop-blur-xl border-b border-white/[0.06] z-50 shadow-2xl">
                    <div className="flex flex-col px-6 py-4 gap-0.5">
                        {links.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.to === '/'}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `py-2.5 px-4 rounded-xl text-sm transition-all duration-150 ${
                                        isActive
                                            ? 'text-white font-semibold bg-white/[0.06]'
                                            : 'text-github-muted font-medium hover:text-white hover:bg-white/[0.04]'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                        <div className="mt-3 pt-3 border-t border-white/[0.06]">
                            <a
                                href="mailto:emirhan@bugcti.com"
                                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-brand-indigo text-white text-sm font-semibold"
                            >
                                <Zap className="w-3.5 h-3.5" />
                                Get Access
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
