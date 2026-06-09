import React from 'react';
import { Rocket, GitMerge, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import ComparisonDiagram from '../components/ComparisonDiagram';

const Home = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="w-full max-w-7xl mx-auto px-6 text-center pt-20 pb-32 animate-fade-in-up">
                <div>
                    <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black text-white mb-20 tracking-tighter md:tracking-[-0.05em] leading-[0.9] max-w-5xl mx-auto">
                        Secure code <br />
                        starts <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-indigo to-brand-purple">before</span> deployment.
                    </h1>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
                        <a href="/solution" className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-black font-black text-lg hover:bg-gray-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95 duration-300 flex items-center justify-center gap-2 group">
                            Explore Solution <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="/product" className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/10 text-white font-bold text-lg hover:bg-white/5 transition-colors duration-300">
                            See the Platform
                        </a>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="w-full border-t border-white/5 py-32 relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-purple/5 blur-[100px] rounded-full pointer-events-none"></div>
                
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">How BugCTI Works</h2>
                        <p className="text-xl text-github-muted font-medium max-w-2xl mx-auto">
                            Three simple steps to eliminate the "deploy before secure" risk from your engineering lifecycle.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-white/0 via-brand-indigo/30 to-white/0"></div>

                        <div className="relative p-8 rounded-3xl bg-[#020408] border border-white/5 hover:border-brand-indigo/30 transition-all group">
                            <div className="w-16 h-16 rounded-2xl bg-[#0d1117] border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform">
                                <GitMerge className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">1. Connect GitHub</h3>
                            <p className="text-github-muted font-medium leading-relaxed">
                                Install the BugCTI app to your repository with a single click. No complex pipelines to configure.
                            </p>
                        </div>

                        <div className="relative p-8 rounded-3xl bg-[#020408] border border-white/5 hover:border-brand-indigo/30 transition-all group">
                            <div className="w-16 h-16 rounded-2xl bg-[#0d1117] border border-brand-indigo/30 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                                <Zap className="w-8 h-8 text-brand-indigo" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">2. AI Analyzes PRs</h3>
                            <p className="text-github-muted font-medium leading-relaxed">
                                Every Pull Request is instantly scanned by Gemini 2.5 for security vulnerabilities and performance bottlenecks.
                            </p>
                        </div>

                        <div className="relative p-8 rounded-3xl bg-[#020408] border border-white/5 hover:border-green-500/30 transition-all group">
                            <div className="w-16 h-16 rounded-2xl bg-[#0d1117] border border-green-500/30 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                                <ShieldCheck className="w-8 h-8 text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">3. Merge Securely</h3>
                            <p className="text-github-muted font-medium leading-relaxed">
                                Review the automated fixes generated by BugCTI and merge with 100% confidence. Zero critical bugs in production.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture Diagram Section */}
            <section className="w-full pb-32 pt-16 relative z-20 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <ComparisonDiagram />
            </section>
        </Layout>
    );
};

export default Home;
