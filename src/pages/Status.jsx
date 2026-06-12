import React from 'react';
import { CheckCircle2, Loader, Circle, ArrowRight, FlaskConical, Target, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const phases = [
    {
        number: '01',
        status: 'done',
        label: 'Completed',
        icon: <CheckCircle2 className="w-4 h-4" />,
        title: 'Proof of Concept',
        date: 'Q4 2025',
        desc: 'Integrated Gemini 2.5 with our AST parsing engine. Validated detection accuracy across Python and JavaScript codebases.',
        items: ['AST-based code analysis', 'Gemini 2.5 integration', 'Vulnerability classification'],
    },
    {
        number: '02',
        status: 'active',
        label: 'In Progress',
        icon: <Loader className="w-4 h-4" />,
        title: 'Closed Beta',
        date: 'Q2–Q3 2026',
        desc: 'Testing with select engineering teams. Focus on reducing false positives to near zero and hardening the auto-fix PR generation.',
        items: ['Early access partners', 'False positive reduction', 'Auto-fix PR generation', 'GitHub App polish'],
    },
    {
        number: '03',
        status: 'upcoming',
        label: 'Upcoming',
        icon: <Circle className="w-4 h-4" />,
        title: 'Public Launch',
        date: 'Q3 2026',
        desc: 'Self-serve onboarding for any GitHub repo. Advanced team permissions, usage analytics, and enterprise SSO.',
        items: ['Self-serve onboarding', 'Team permissions', 'Usage analytics', 'Enterprise SSO'],
    },
];

const statusStyles = {
    done: {
        card: 'border-green-500/15 bg-green-500/[0.025]',
        badge: 'bg-green-500/10 border-green-500/20 text-green-400',
        dot: 'bg-green-500',
        number: 'text-green-500/20',
        item: 'text-green-400/60',
    },
    active: {
        card: 'border-brand-indigo/25 bg-brand-indigo/[0.04] shadow-[0_0_40px_rgba(99,102,241,0.06)]',
        badge: 'bg-brand-indigo/10 border-brand-indigo/25 text-brand-indigo',
        dot: 'bg-brand-indigo animate-pulse',
        number: 'text-brand-indigo/15',
        item: 'text-brand-indigo/70',
    },
    upcoming: {
        card: 'border-white/[0.05] bg-white/[0.01] opacity-60',
        badge: 'bg-white/5 border-white/10 text-github-muted',
        dot: 'bg-white/20',
        number: 'text-white/5',
        item: 'text-github-muted/40',
    },
};

const Status = () => {
    return (
        <Layout>
            <SEO
                title="Roadmap — Where BugCTI is Headed | BugCTI"
                description="BugCTI is in closed beta. See our development roadmap and request early access to join engineering teams already securing their PRs with AI."
                canonical="https://bugcti.com/status"
            />
            <section className="w-full max-w-4xl mx-auto px-6 py-24 animate-fade-in-up">

                {/* Header */}
                <div className="mb-16 max-w-xl">
                    <p className="text-brand-indigo text-sm font-semibold uppercase tracking-widest mb-5">Roadmap</p>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.05]">
                        Where we're headed.
                    </h1>
                    <p className="text-lg text-github-muted leading-relaxed">
                        We're building in the open. Here's exactly where we stand and what's coming next.
                    </p>
                </div>

                {/* Current status pill */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-indigo/25 bg-brand-indigo/[0.06] text-brand-indigo text-sm font-semibold mb-14">
                    <div className="w-2 h-2 rounded-full bg-brand-indigo animate-pulse" />
                    Currently in Closed Beta — Q2 2026
                </div>

                {/* Phase cards */}
                <div className="space-y-5 mb-20">
                    {phases.map((phase) => {
                        const s = statusStyles[phase.status];
                        return (
                            <div key={phase.number} className={`relative p-8 rounded-2xl border transition-all ${s.card}`}>
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">

                                    {/* Left */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-bold uppercase tracking-wide ${s.badge}`}>
                                                <div className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                                                {phase.label}
                                            </span>
                                            <span className="text-xs text-github-muted/50">{phase.date}</span>
                                        </div>

                                        <h3 className="text-2xl font-black text-white mb-3 tracking-tight">{phase.title}</h3>
                                        <p className="text-sm text-github-muted leading-relaxed mb-5 max-w-xl">{phase.desc}</p>

                                        <ul className="flex flex-wrap gap-2">
                                            {phase.items.map((item) => (
                                                <li key={item} className={`text-xs px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] ${s.item}`}>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Phase number */}
                                    <div className={`text-7xl font-black select-none shrink-0 leading-none ${s.number}`}>
                                        {phase.number}
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="relative p-10 rounded-2xl border border-brand-indigo/20 bg-brand-indigo/[0.04] overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,_rgba(99,102,241,0.08)_0%,_transparent_60%)] pointer-events-none" />
                    <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl font-black text-white mb-2">Want early access?</h3>
                            <p className="text-sm text-github-muted max-w-sm">
                                We're onboarding a limited number of engineering teams. Drop us a line to get on the list.
                            </p>
                        </div>
                        <a
                            href="mailto:emirhan@bugcti.com"
                            className="group shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-100 active:scale-95 transition-all"
                        >
                            Request Access
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </div>
                </div>

            </section>
        </Layout>
    );
};

export default Status;
