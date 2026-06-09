import React from 'react';
import { ShieldAlert, Activity, GitPullRequest, Clock } from 'lucide-react';
import Layout from '../components/Layout';

const Problem = () => {
    return (
        <Layout>
            <section className="w-full max-w-5xl mx-auto px-6 py-24 animate-fade-in-up">
                <div className="mb-20">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
                        The Heavy Cost of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-purple">Manual Reviews</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-github-muted leading-relaxed font-medium">
                        Today, software teams are forced to manually review thousands of Pull Requests and code changes before shipping to production.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex gap-6 items-start">
                        <div className="w-12 h-12 shrink-0 rounded-xl bg-red-500/10 flex items-center justify-center">
                            <ShieldAlert className="text-red-400 w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Security Vulnerabilities Slip Through</h3>
                            <p className="text-github-muted font-medium leading-relaxed">
                                Critical security vulnerabilities get missed. Human error in manual reviews is inevitable.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex gap-6 items-start">
                        <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-500/10 flex items-center justify-center">
                            <Activity className="text-orange-400 w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Performance Issues Explode in Production</h3>
                            <p className="text-github-muted font-medium leading-relaxed">
                                Hidden performance bottlenecks only surface in production — when it's already too late.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex gap-6 items-start">
                        <div className="w-12 h-12 shrink-0 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                            <GitPullRequest className="text-yellow-400 w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Code Review Becomes a Bottleneck</h3>
                            <p className="text-github-muted font-medium leading-relaxed">
                                Code review processes slow down significantly. Shipping new code can take weeks instead of days.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex gap-6 items-start">
                        <div className="w-12 h-12 shrink-0 rounded-xl bg-brand-indigo/10 flex items-center justify-center">
                            <Clock className="text-brand-indigo w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Senior Engineers Waste Time</h3>
                            <p className="text-github-muted font-medium leading-relaxed">
                                Experienced engineers and senior developers lose valuable hours to repetitive code reading.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-10 md:p-16 rounded-[2rem] bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">The Result</h2>
                        <p className="text-2xl md:text-4xl font-bold text-red-400/90 leading-tight">
                            Bugs are caught late, costs grow, and risk skyrockets.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Problem;
