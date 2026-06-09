import React from 'react';
import { Target, FlaskConical, Rocket } from 'lucide-react';
import Layout from '../components/Layout';

const Status = () => {
    return (
        <Layout>
            <section className="w-full max-w-5xl mx-auto px-6 py-24 animate-fade-in-up">
                <div className="mb-20 text-center">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-purple">Roadmap</span>.
                    </h1>
                    <p className="text-xl text-github-muted leading-relaxed font-medium max-w-2xl mx-auto">
                        We are currently building our core models and testing them with early design partners.
                        Here is where we stand today.
                    </p>
                </div>

                <div className="relative border-l-2 border-white/10 pl-8 ml-4 space-y-16">

                    {/* Phase 1 — Completed */}
                    <div className="relative">
                        <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-indigo ring-4 ring-[#020408]"></div>
                        <div className="mb-2 flex items-center gap-2 text-brand-indigo font-bold text-sm uppercase tracking-widest">
                            <FlaskConical className="w-4 h-4" /> Phase 1: R&D — Completed
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Proof of Concept</h3>
                        <p className="text-github-muted font-medium">
                            Successfully integrated Gemini 2.5 with our AST parsing engine to detect logical flaws in Python and JavaScript applications.
                        </p>
                    </div>

                    {/* Phase 2 — Current */}
                    <div className="relative">
                        <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-blue-500 ring-4 ring-[#020408] animate-pulse"></div>
                        <div className="mb-2 flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-widest">
                            <Target className="w-4 h-4" /> Phase 2: Closed Beta — Current
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Early Access Program</h3>
                        <p className="text-github-muted font-medium mb-6">
                            We are currently testing BugCTI with select engineering teams. The focus is on reducing false positives to near zero and improving the accuracy of automated PR generation.
                        </p>

                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 max-w-md">
                            <h4 className="text-white font-bold mb-2">Want early access?</h4>
                            <p className="text-sm text-github-muted mb-4">Drop us an email to join the beta waitlist.</p>
                            <a href="mailto:memirhansumer@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:scale-105 transition-transform">
                                <Rocket className="w-4 h-4" /> Request Access
                            </a>
                        </div>
                    </div>

                    {/* Phase 3 — Future */}
                    <div className="relative">
                        <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-white/20 ring-4 ring-[#020408]"></div>
                        <div className="mb-2 flex items-center gap-2 text-github-muted font-bold text-sm uppercase tracking-widest">
                            <Rocket className="w-4 h-4" /> Phase 3: Public Launch — Q3 2026
                        </div>
                        <h3 className="text-2xl font-bold text-white/50 mb-2">General Availability</h3>
                        <p className="text-github-muted/50 font-medium">
                            Self-serve onboarding for any GitHub repository, advanced team permissions, and enterprise SSO features.
                        </p>
                    </div>

                </div>
            </section>
        </Layout>
    );
};

export default Status;
