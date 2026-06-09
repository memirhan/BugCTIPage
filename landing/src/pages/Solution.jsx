import React from 'react';
import { Cpu, Zap, CheckCircle2, ShieldCheck, Activity, BrainCircuit, Code2 } from 'lucide-react';
import Layout from '../components/Layout';

const Solution = () => {
    return (
        <Layout>
            <section className="w-full max-w-6xl mx-auto px-6 py-24 animate-fade-in-up">

                {/* --- SOLUTION --- */}
                <div className="mb-32">
                    <div className="mb-20 text-center">
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
                            Analyzed in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-purple">Seconds</span>. Not Days.
                        </h1>
                        <p className="text-xl md:text-2xl text-github-muted leading-relaxed font-medium max-w-4xl mx-auto">
                            With AI-powered analysis, every Pull Request is reviewed instantly. BugCTI automatically scans every code change across 4 critical dimensions and produces risk scores with <strong className="text-white">~99% accuracy</strong>.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <ShieldCheck />, title: "Security Vulnerabilities", desc: "Detects OWASP issues, injection attacks, and critical auth bugs automatically." },
                            { icon: <Activity />, title: "Performance Bottlenecks", desc: "Catches performance issues that would slow your system before they hit production." },
                            { icon: <BrainCircuit />, title: "Logic Errors", desc: "Identifies structural flaws that contradict your application's business logic." },
                            { icon: <Code2 />, title: "Best Practice Violations", desc: "Flags code quality issues to keep your codebase clean and maintainable." }
                        ].map((feature, i) => (
                            <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all flex flex-col items-center text-center group">
                                <div className="w-14 h-14 rounded-2xl bg-brand-indigo/10 flex items-center justify-center mb-6 text-brand-indigo group-hover:scale-110 transition-transform">
                                    {React.cloneElement(feature.icon, { className: "w-7 h-7" })}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-sm text-github-muted font-medium">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- WHAT WE DO --- */}
                <div>
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight max-w-4xl">
                            Pre-production Security Intelligence Engine
                        </h2>
                        <p className="text-xl text-github-muted leading-relaxed font-medium max-w-3xl">
                            BugCTI is an AI-powered security engine that integrates directly into your CI/CD pipeline. We eliminate the "deploy before secure" risk entirely.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                        <div className="space-y-6">
                            {[
                                "We analyze Pull Requests in real-time",
                                "We simulate code behavior with AI",
                                "We catch security vulnerabilities before they reach production",
                                "We deliver clear, actionable reports to developers",
                                "We eliminate the \u201cdeploy before secure\u201d risk"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 shrink-0 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                                    </div>
                                    <p className="text-lg text-white font-medium">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-brand-indigo/20 to-brand-purple/20 border border-brand-indigo/30 text-center flex flex-col justify-center min-h-[200px]">
                                <div className="text-5xl font-black text-white mb-2">~9<span className="text-3xl text-brand-indigo/80">s</span></div>
                                <div className="text-brand-indigo font-bold uppercase tracking-widest text-sm">Avg. Analysis Time</div>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 text-center flex flex-col justify-center min-h-[200px]">
                                <div className="text-5xl font-black text-white mb-2">0</div>
                                <div className="text-green-400 font-bold uppercase tracking-widest text-sm">Target Critical Bugs</div>
                                <div className="text-xs text-green-400/70 mt-2">Reaching Production</div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </Layout>
    );
};

export default Solution;
