import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';

const ComparisonDiagram = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % 3);
        }, 1600);
        return () => clearInterval(interval);
    }, []);

    const pillars = ['Speed', 'Security', 'Trust'];

    const withoutRows = [
        { label: 'Review speed', value: 'Days', bad: true },
        { label: 'Coverage', value: 'Partial', bad: true },
        { label: 'Senior time spent', value: '3.7h/PR', bad: true },
        { label: 'Prod incidents', value: 'Frequent', bad: true },
    ];

    const withRows = [
        { label: 'Review speed', value: '~9s', bad: false },
        { label: 'Coverage', value: '100% PRs', bad: false },
        { label: 'Senior time spent', value: 'Near zero', bad: false },
        { label: 'Prod incidents', value: 'Eliminated', bad: false },
    ];

    return (
        <div className="w-full max-w-6xl mx-auto px-6 mb-20">
            <div className="mb-12 text-center">
                <p className="text-github-muted text-sm font-semibold uppercase tracking-widest mb-4">The difference</p>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Before vs. after BugCTI</h2>
            </div>

            <div className="grid md:grid-cols-2 rounded-2xl border border-white/[0.07] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)]">

                {/* Without */}
                <div className="bg-[#080b10] p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/[0.06]">
                    <div className="flex items-center justify-between mb-8">
                        <span className="text-xs font-bold text-github-muted uppercase tracking-widest">Without BugCTI</span>
                        <div className="w-6 h-6 rounded-full bg-red-500/15 border border-red-500/25 flex items-center justify-center">
                            <X className="w-3.5 h-3.5 text-red-400" />
                        </div>
                    </div>

                    {/* Fragmented pillars */}
                    <div className="mb-8">
                        <div className="flex justify-around mb-2">
                            {pillars.map((p) => (
                                <div key={p} className="px-3.5 py-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] text-github-muted/60 text-xs font-mono">
                                    {p}
                                </div>
                            ))}
                        </div>
                        <div className="relative h-16 w-full">
                            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                <line x1="16%" y1="0" x2="30%" y2="100%" stroke="#30363d" strokeWidth="1.5" strokeDasharray="5 4" />
                                <line x1="50%" y1="30%" x2="68%" y2="100%" stroke="#30363d" strokeWidth="1.5" strokeDasharray="5 4" />
                                <line x1="84%" y1="0" x2="42%" y2="100%" stroke="#30363d" strokeWidth="1.5" strokeDasharray="5 4" />
                            </svg>
                        </div>
                        <div className="text-center">
                            <div className="inline-block px-4 py-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] text-github-muted/40 text-xs font-mono">
                                friction &amp; tradeoffs
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2.5">
                        {withoutRows.map((row) => (
                            <div key={row.label} className="flex items-center justify-between py-2.5 border-b border-white/[0.04] last:border-0">
                                <span className="text-sm text-github-muted/60">{row.label}</span>
                                <span className="text-sm font-semibold text-red-400/80">{row.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* With BugCTI */}
                <div className="bg-[#05080e] p-8 md:p-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(99,102,241,0.06)_0%,_transparent_65%)] pointer-events-none" />

                    <div className="flex items-center justify-between mb-8 relative">
                        <span className="text-xs font-bold text-brand-indigo uppercase tracking-widest">With BugCTI</span>
                        <div className="w-6 h-6 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-green-400" />
                        </div>
                    </div>

                    {/* Converging pillars */}
                    <div className="mb-8 relative">
                        <div className="flex justify-around mb-2">
                            {pillars.map((p, i) => {
                                const isActive = i === activeIndex;
                                return (
                                    <div
                                        key={p}
                                        className={`px-3.5 py-1.5 rounded-lg border text-xs font-mono transition-all duration-500 ${
                                            isActive
                                                ? 'border-brand-indigo/50 bg-brand-indigo/15 text-white shadow-[0_0_12px_rgba(99,102,241,0.3)] scale-105'
                                                : 'border-brand-indigo/15 bg-brand-indigo/[0.04] text-brand-indigo/50'
                                        }`}
                                    >
                                        {p}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="relative h-16 w-full">
                            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                {[0, 1, 2].map((i) => (
                                    <line
                                        key={i}
                                        x1={`${16 + i * 34}%`} y1="0"
                                        x2="50%" y2="100%"
                                        stroke={activeIndex === i ? '#818cf8' : '#3730a3'}
                                        strokeWidth={activeIndex === i ? '2' : '1'}
                                        className="transition-all duration-500"
                                    />
                                ))}
                            </svg>
                        </div>
                        <div className="text-center">
                            <div className="inline-block px-4 py-1.5 rounded-lg border border-brand-indigo/30 bg-brand-indigo/10 text-brand-indigo text-xs font-mono font-bold shadow-[0_0_16px_rgba(99,102,241,0.2)]">
                                BugCTI Core
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2.5 relative">
                        {withRows.map((row) => (
                            <div key={row.label} className="flex items-center justify-between py-2.5 border-b border-white/[0.04] last:border-0">
                                <span className="text-sm text-github-muted/60">{row.label}</span>
                                <span className="text-sm font-semibold text-green-400">{row.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ComparisonDiagram;
