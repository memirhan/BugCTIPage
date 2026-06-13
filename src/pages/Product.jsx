import React, { useState } from 'react';
import { LayoutDashboard, ShieldAlert, GitPullRequest, Zap, Eye, Lock, Activity, Code2 } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const screenshots = [
    {
        tag: 'Dashboard',
        title: 'Everything at a glance.',
        desc: 'Track active scans, risk scores, and repository health across all your repos in real-time.',
        img: '/dashboard.webp',
        features: ['Live scan status', 'Risk score trends', 'Repo overview'],
    },
    {
        tag: 'Vulnerability Engine',
        title: 'Know exactly what broke.',
        desc: 'See the exact file, line, and severity of every issue — with a fix suggestion ready to apply.',
        img: '/security-scan.webp',
        features: ['File + line precision', 'CVSS severity score', 'One-click fix PR'],
    },
    {
        tag: 'Audit Log',
        title: 'Full PR history, zero gaps.',
        desc: "Every PR BugCTI has ever analyzed, with its findings and generated fixes, permanently logged.",
        img: '/review-history.webp',
        features: ['Searchable audit trail', 'Fix PR links', 'Team activity'],
    },
];

const Product = () => {
    const [mousePos, setMousePos] = useState({ rotateX: 0, rotateY: 0 });
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseMove = (e, index) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        setMousePos({
            rotateX: ((e.clientY - rect.top - cy) / cy) * -8,
            rotateY: ((e.clientX - rect.left - cx) / cx) * 8,
        });
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setMousePos({ rotateX: 0, rotateY: 0 });
        setHoveredIndex(null);
    };

    return (
        <Layout>
            <SEO
                title="Platform — Inside the BugCTI Security Engine | BugCTI"
                description="Explore BugCTI's dashboard, vulnerability scanner, and automated PR review history. Built by engineers, for engineers."
                canonical="https://bugcti.com/product"
            />
            <section className="w-full max-w-7xl mx-auto px-6 py-24 animate-fade-in-up">

                {/* Header */}
                <div className="mb-6 max-w-2xl">
                    <p className="text-brand-indigo text-sm font-semibold uppercase tracking-widest mb-5">The Platform</p>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.05]">
                        Built for developers<br />who care about quality.
                    </h1>
                    <p className="text-lg text-github-muted leading-relaxed">
                        A focused interface — no noise, no bloat. Just the security signal you need, exactly when you need it.
                    </p>
                </div>

                {/* Quick feature strip */}
                <div className="mb-24 grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                        { icon: <ShieldAlert className="w-4 h-4" />, label: 'OWASP detection' },
                        { icon: <Zap className="w-4 h-4" />, label: 'Sub-10s analysis' },
                        { icon: <Code2 className="w-4 h-4" />, label: 'Auto-fix PRs' },
                        { icon: <Lock className="w-4 h-4" />, label: 'Zero false positives' },
                    ].map((f) => (
                        <div key={f.label} className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-github-muted text-sm">
                            <span className="text-brand-indigo/80">{f.icon}</span>
                            {f.label}
                        </div>
                    ))}
                </div>

                {/* Screenshots */}
                <div className="space-y-28">
                    {screenshots.map((item, index) => {
                        const isHovered = hoveredIndex === index;
                        const reversed = index % 2 !== 0;

                        return (
                            <div key={index} className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 xl:gap-20`}>

                                {/* 3D image */}
                                <div className="w-full lg:w-[58%]" style={{ perspective: '2000px' }}>
                                    <div
                                        className="relative w-full rounded-2xl transition-all duration-300 ease-out cursor-default"
                                        style={{
                                            transform: isHovered
                                                ? `rotateX(${mousePos.rotateX}deg) rotateY(${mousePos.rotateY}deg) scale3d(1.02,1.02,1.02)`
                                                : 'rotateX(0) rotateY(0) scale3d(1,1,1)',
                                            transformStyle: 'preserve-3d',
                                        }}
                                        onMouseMove={(e) => handleMouseMove(e, index)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {/* Glow */}
                                        <div
                                            className={`absolute -inset-2 rounded-3xl bg-gradient-to-r from-brand-indigo to-brand-purple blur-2xl transition-opacity duration-500 ${isHovered ? 'opacity-20' : 'opacity-0'}`}
                                            style={{ transform: 'translateZ(-40px)' }}
                                        />
                                        {/* Window */}
                                        <div className="relative rounded-2xl bg-[#0d1117] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.6)] overflow-hidden" style={{ transform: 'translateZ(16px)' }}>
                                            <div className="h-8 bg-[#010409] border-b border-white/[0.05] flex items-center px-4 gap-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                                            </div>
                                            <div className="relative aspect-[16/9] w-full bg-[#0d1117]">
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#020408]/40 to-transparent z-10 pointer-events-none" />
                                                <img
                                                    src={item.img}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                    decoding="async"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80';
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="w-full lg:w-[42%] space-y-5">
                                    <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-brand-indigo/80 border border-brand-indigo/20 bg-brand-indigo/5 px-3 py-1 rounded-full">
                                        {item.tag}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">{item.title}</h2>
                                    <p className="text-[15px] text-github-muted leading-relaxed">{item.desc}</p>
                                    <ul className="space-y-2.5 pt-2">
                                        {item.features.map((f) => (
                                            <li key={f} className="flex items-center gap-3 text-sm text-github-text">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-indigo/60 shrink-0" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
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
