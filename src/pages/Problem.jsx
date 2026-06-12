import React from 'react';
import { ShieldAlert, Activity, GitPullRequest, Clock, TrendingUp } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Problem = () => {
    return (
        <Layout>
            <SEO
                title="The Problem — Why Manual Code Review Fails at Scale | BugCTI"
                description="Cybercrime costs are projected to hit $12.2 trillion by 2031. A single data breach costs $4.44M on average (IBM 2025). Manual PR review can't protect you."
                canonical="https://bugcti.com/problem"
            />
            <section className="w-full max-w-5xl mx-auto px-6 py-24 animate-fade-in-up">

                <div className="mb-20 max-w-2xl">
                    <p className="text-github-muted text-sm font-semibold uppercase tracking-widest mb-5">The Problem</p>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.05]">
                        Insecure code is<br />getting expensive.
                    </h1>
                    <p className="text-lg text-github-muted leading-relaxed">
                        Cyber threats can't be handled after the fact. The data shows how urgent the shift to proactive security has become.
                    </p>
                </div>

                {/* Key stats */}
                <div className="mb-6 grid md:grid-cols-2 gap-px rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.04]">
                    <div className="bg-[#010409] px-8 py-10">
                        <div className="text-[4rem] font-black text-white leading-none mb-3 tabular-nums">$12.2T</div>
                        <p className="text-github-muted text-sm leading-relaxed">
                            Projected global cost of cybercrime{' '}
                            <span className="text-white font-semibold">by 2031</span>.
                        </p>
                    </div>
                    <div className="bg-[#010409] px-8 py-10 border-t md:border-t-0 md:border-l border-white/[0.06]">
                        <div className="text-[4rem] font-black text-white leading-none mb-3 tabular-nums">$4.44M</div>
                        <p className="text-github-muted text-sm leading-relaxed">
                            Average cost of a single data breach{' '}
                            <span className="text-white font-semibold">per company</span>, IBM 2025.
                        </p>
                    </div>
                </div>
                <p className="text-xs text-github-muted/40 mb-16 text-right">
                    Sources: Cybersecurity Ventures (2024), IBM Cost of a Data Breach Report 2025
                </p>

                {/* Problem cards */}
                <div className="grid md:grid-cols-2 gap-4 mb-20">
                    {[
                        {
                            icon: <ShieldAlert className="w-5 h-5 text-red-400" />,
                            bg: 'bg-red-500/8 border-red-500/15',
                            title: 'Vulnerabilities slip through',
                            desc: 'Critical security issues get missed in rushed reviews. One overlooked bug can expose millions of users.',
                        },
                        {
                            icon: <Activity className="w-5 h-5 text-orange-400" />,
                            bg: 'bg-orange-500/8 border-orange-500/15',
                            title: 'Perf issues explode in prod',
                            desc: 'N+1 queries and memory leaks look fine in review. They only surface under real traffic, when fixing costs 10× more.',
                        },
                        {
                            icon: <Clock className="w-5 h-5 text-yellow-400" />,
                            bg: 'bg-yellow-500/8 border-yellow-500/15',
                            title: 'Senior devs become bottlenecks',
                            desc: 'Your best engineers spend hours reading code instead of building. PR queues block entire teams.',
                        },
                        {
                            icon: <GitPullRequest className="w-5 h-5 text-brand-indigo" />,
                            bg: 'bg-brand-indigo/8 border-brand-indigo/15',
                            title: 'Review quality drops at scale',
                            desc: "As teams grow, PR volume explodes and reviewer fatigue sets in. 'LGTM' becomes the default for risky changes.",
                        },
                    ].map((item, i) => (
                        <div key={i} className="p-7 rounded-2xl border border-white/[0.05] bg-white/[0.015] flex gap-5 items-start hover:bg-white/[0.03] transition-colors">
                            <div className={`w-10 h-10 shrink-0 rounded-xl border flex items-center justify-center mt-0.5 ${item.bg}`}>
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-[15px] font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-github-muted leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Callout */}
                <div className="relative p-10 md:p-14 rounded-2xl overflow-hidden border border-red-500/15">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-950/60 via-[#07030a] to-orange-950/30" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,_rgba(239,68,68,0.07)_0%,_transparent_55%)]" />
                    <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className="w-12 h-12 shrink-0 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-red-400" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                                Reactive security is no longer enough.
                            </h2>
                            <p className="text-github-muted leading-relaxed max-w-2xl">
                                The critical shift is from responding after an attack to{' '}
                                <span className="text-white font-semibold">detecting threats before they're deployed</span>.
                                BugCTI does exactly that — on every PR, every time.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </Layout>
    );
};

export default Problem;
