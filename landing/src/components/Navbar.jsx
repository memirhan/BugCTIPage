import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/bugcti-logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { to: '/', label: 'Home' },
        { to: '/problem', label: 'Problem' },
        { to: '/solution', label: 'Solution' },
        { to: '/product', label: 'Product' },
        { to: '/status', label: 'Status' }
    ];

    return (
        <nav className="w-full relative z-50 pt-6 pb-4 border-b border-white/5 bg-[#05070e]/60 backdrop-blur-md sticky top-0">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden border border-white/10 group-hover:scale-105 transition-transform">
                        <img src={logo} alt="BugCTI Logo" className="w-full h-full object-cover scale-110 translate-y-0.5" />
                    </div>
                    <span className="font-black text-xl text-white tracking-tight group-hover:text-brand-indigo transition-colors">BugCTI</span>
                </NavLink>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.to === '/'}
                            className={({ isActive }) =>
                                `text-sm font-bold transition-all ${
                                    isActive
                                    ? 'text-white border-b-2 border-brand-indigo pb-1'
                                    : 'text-github-muted hover:text-white'
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#020408]/95 backdrop-blur-lg border-b border-white/5 z-50">
                    <div className="flex flex-col px-6 py-4 gap-1">
                        {links.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.to === '/'}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `py-3 px-4 rounded-xl text-base font-bold transition-all ${
                                        isActive
                                        ? 'text-white bg-white/5'
                                        : 'text-github-muted hover:text-white hover:bg-white/5'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
