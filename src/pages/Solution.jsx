import React from 'react';
import { ShieldCheck, Activity, BrainCircuit, Code2, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const dimensions = [
    {
        icon: <ShieldCheck className="w-5 h-5" />,
        color: 'text-red-400',
        bg: 'bg-red-500/8 border-red-500/15',
        tag: 'Security',
        title: 'Vulnerability detection',
        desc: 'Catches OWASP top-10 issues, injection attacks, hardcoded secrets, and auth flaws automatically on every PR.',
    },
    {
        icon: <Activity className="w-5 h-5" />,
        color: 'text-orange-400',
        bg: 'bg-orange-500/8 border-orange-500/15',
        tag: 'Performance',
        title: 'Bottleneck analysis',
        desc: 'Identifies N+1 queries, inefficient loops, and memory leaks before they hit production and impact real users.',
    },
    {
        icon: <BrainCircuit className="w-5 h-5" />,
        color: 'text-brand-indigo',
        bg: 'bg-brand-indigo/8 border-brand-indigo/15',
        tag: 'Logic',
        title: 'Semantic reasoning',
        desc: "Simulates code behavior to find structural flaws that contradict your app's intended business logic.",
    },
    {
        icon: <Code2 className="w-5 h-5" />,
        color: 'text-green-400',
        bg: 'bg-green-500/8 border-green-500/15',
        tag: 'Quality',
        title: 'Best practices',
        desc: 'Flags code quality issues, deprecated patterns, and maintainability debt before they accumulate.',
    },
];

const Solution = () => {
    return (
        <Layout>
            <SEO
                title="Our Solution — AI Code Review in Under 10 Seconds | BugCTI"
                description="BugCTI analyzes every Pull Request across 4 dimensions: security, performance, logic, and best practices. ~99% accuracy, auto-fix suggestions, zero pipeline changes required."
                canonical="https://bugcti.com/solution"
            />
            <section className="w-full max-w-6xl mx-auto px-6 py-24 animate-fade-in-up">

                {/* Header */}
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <p className="text-brand-indigo text-sm font-semibold uppercase tracking-widest mb-5">The Solution</p>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-7 tracking-tight leading-[1.05]">
                        Analyzed in seconds.<br />Not skipped in haste.
                    </h1>
                    <p className="text-lg text-github-muted leading-relaxed">
                        BugCTI reviews every Pull Request across 4 dimensions instantly — with the depth of a senior security engineer, at the speed of a CI check.
                    </p>
                </div>

                {/* 4 dimensions */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-28">
                    {dimensions.map((d, i) => (
                        <div key={i} className="group p-7 rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.03] transition-colors flex flex-col">
                            <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-5 ${d.bg} ${d.color}`}>
                                {d.icon}
                            </div>
                            <span className={`text-[11px] font-bold uppercase tracking-widest mb-3 ${d.color}`}>{d.tag}</span>
                            <h3 className="text-[15px] font-bold text-white mb-3 leading-snug">{d.title}</h3>
                            <p className="text-sm text-github-muted leading-relaxed mt-auto">{d.desc}</p>
                        </div>
                    ))}
                </div>

                {/* What we do */}
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                            Pre-production security. Built into your flow.
                        </h2>
                        <p className="text-github-muted leading-relaxed mb-10">
                            BugCTI plugs directly into your GitHub workflow. No new tools to learn, no separate dashboard to monitor. Just secure PRs, automatically.
                        </p>

                        <div className="space-y-4">
                            {[
                                'Analyzes Pull Requests in real-time as they open',
                                'Simulates code behavior to catch edge-case bugs',
                                'Posts inline comments with severity scores',
                                'Generates fix suggestions for detected issues',
                                'Zero false positives from day one',
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3.5">
                                    <div className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                                    </div>
                                    <p className="text-[15px] text-github-text leading-snug">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats + CTA */}
                    <div className="space-y-5">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-indigo/15 to-brand-purple/10 border border-brand-indigo/20 text-center">
                                <div className="text-5xl font-black text-white mb-1.5 tabular-nums">~9<span className="text-2xl text-brand-indigo/70">s</span></div>
                                <div className="text-brand-indigo text-xs font-bold uppercase tracking-widest">Avg. analysis time</div>
                            </div>
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/15 to-emerald-500/10 border border-green-500/20 text-center">
                                <div className="text-5xl font-black text-white mb-1.5 tabular-nums">0</div>
                                <div className="text-green-400 text-xs font-bold uppercase tracking-widest">Critical bugs<br />to production</div>
                            </div>
                        </div>

                        <div className="p-7 rounded-2xl border border-white/[0.06] bg-white/[0.015]">
                            <h4 className="text-white font-bold mb-2">Ready to secure your PRs?</h4>
                            <p className="text-sm text-github-muted mb-5 leading-relaxed">
                                Join the early access program. We're onboarding engineering teams now.
                            </p>
                            <Link
                                to="/status"
                                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black text-sm font-bold hover:bg-gray-100 transition-colors"
                            >
                                Request access
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

            </section>
        </Layout>
    );
};

export default Solution;
