import React from 'react';
import { Link } from 'react-router-dom';
import { GitMerge, Zap, ShieldCheck, ArrowRight, GitPullRequest, CheckCircle2, AlertTriangle } from 'lucide-react';
import Layout from '../components/Layout';
import ComparisonDiagram from '../components/ComparisonDiagram';
import SEO from '../components/SEO';

const PRMockup = () => (
    <div className="relative w-full">
        <div className="absolute -inset-6 bg-brand-indigo/10 blur-[80px] rounded-full pointer-events-none" />
        <div className="relative rounded-2xl border border-white/10 bg-[#0d1117] shadow-[0_32px_80px_rgba(0,0,0,0.7)] overflow-hidden text-xs font-mono">
            {/* Window chrome */}
            <div className="h-9 bg-[#161b22] border-b border-white/[0.06] flex items-center px-4 gap-3 shrink-0">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 h-5 bg-[#0d1117]/80 rounded border border-white/[0.06] flex items-center px-2.5 gap-1.5 text-[10px] text-github-muted">
                    <GitPullRequest className="w-3 h-3 opacity-50 shrink-0" />
                    <span className="truncate">github.com / acme / api — pull / 47</span>
                </div>
            </div>

            {/* PR title bar */}
            <div className="px-5 py-3 border-b border-white/[0.05] flex items-center gap-3">
                <span className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-[10px] font-bold uppercase tracking-wide shrink-0">Open</span>
                <span className="text-white text-[13px] font-semibold truncate">feat: add JWT authentication middleware</span>
            </div>

            {/* Code diff */}
            <div className="px-5 py-3.5 border-b border-white/[0.05]">
                <div className="text-[10px] text-github-muted/50 mb-2.5 flex items-center gap-2">
                    <span className="text-brand-indigo/60">src/middleware/auth.ts</span>
                    <span className="text-green-500/50">+18</span>
                    <span className="text-red-500/50">-2</span>
                </div>
                <div className="space-y-0.5 text-[11px]">
                    <div className="flex gap-3 text-github-muted/50">
                        <span className="w-5 text-right select-none opacity-40">13</span>
                        <span>const secret = process.env.JWT_SECRET</span>
                    </div>
                    <div className="flex gap-3 bg-red-500/[0.07] -mx-1 px-1 rounded border-l-2 border-red-500/60">
                        <span className="w-5 text-right select-none text-red-500/50">14</span>
                        <span className="text-red-300/80">jwt.verify(token, <span className="bg-red-500/25 px-0.5 rounded">'hardcoded_secret_123'</span>)</span>
                    </div>
                    <div className="flex gap-3 text-github-muted/50">
                        <span className="w-5 text-right select-none opacity-40">15</span>
                        <span>return next()</span>
                    </div>
                </div>
            </div>

            {/* BugCTI comment */}
            <div className="px-5 py-4 border-l-[3px] border-red-500/60 bg-red-500/[0.03]">
                <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-indigo to-brand-purple flex items-center justify-center shrink-0">
                        <span className="text-[9px] text-white font-black">B</span>
                    </div>
                    <span className="text-white font-bold text-[12px]">BugCTI</span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-red-500/15 border border-red-500/25 text-red-400 rounded font-semibold uppercase tracking-wide">Critical</span>
                    <span className="ml-auto text-github-muted/40 text-[10px]">8.3s ago</span>
                </div>
                <p className="text-github-muted text-[11px] leading-relaxed mb-2.5">
                    <span className="text-red-400 font-semibold">Hardcoded secret on line 14.</span> JWT secret is a string literal. Anyone with source access owns your auth layer.
                </p>
                <div className="bg-[#161b22] rounded-lg px-3 py-2 text-[11px] border border-white/[0.05]">
                    <span className="text-green-400/80">fix: </span>
                    <span className="text-github-muted">jwt.verify(token, process.env.JWT_SECRET)</span>
                </div>
            </div>

            {/* Status bar */}
            <div className="h-9 px-5 bg-[#161b22]/50 border-t border-white/[0.05] flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] text-github-muted/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-indigo animate-pulse" />
                    847 lines scanned in 8.3s
                </div>
                <div className="flex gap-1.5">
                    <span className="text-[10px] px-2 py-0.5 bg-red-500/10 border border-red-500/15 text-red-400 rounded">1 critical</span>
                    <span className="text-[10px] px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/15 text-yellow-400 rounded">3 warnings</span>
                </div>
            </div>
        </div>
    </div>
);

const Home = () => {
    return (
        <Layout>
            <SEO
                title="BugCTI — AI-Powered Code Security"
                description="BugCTI scans every GitHub Pull Request for security vulnerabilities, performance bottlenecks, and logic errors in under 10 seconds."
                canonical="https://bugcti.com/"
            />
            {/* Hero */}
            <section className="w-full max-w-7xl mx-auto px-6 pt-14 pb-20 relative">
                <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-brand-indigo/6 blur-[130px] rounded-full pointer-events-none -z-10" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-purple/4 blur-[120px] rounded-full pointer-events-none -z-10" />

                <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
                    {/* Left */}
                    <div className="animate-fade-in-up">
                        <h1 className="text-5xl md:text-6xl xl:text-[4.25rem] font-black text-white leading-[1.05] tracking-tight mb-6">
                            Security bugs caught{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-[#818cf8] to-brand-purple">before</span>{' '}
                            they reach prod.
                        </h1>

                        <p className="text-[1.1rem] text-github-muted leading-relaxed mb-10 max-w-md font-normal">
                            BugCTI hooks into GitHub and automatically scans every Pull Request for vulnerabilities, logic errors, and performance issues — in under 10 seconds.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-3">
                            <Link
                                to="/solution"
                                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-bold text-[15px] hover:bg-gray-100 active:scale-95 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.07)]"
                            >
                                Get Early Access
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/product"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 text-github-muted font-semibold text-[15px] hover:text-white hover:border-white/20 hover:bg-white/[0.03] transition-all duration-200"
                            >
                                <GitMerge className="w-4 h-4" />
                                See the platform
                            </Link>
                        </div>
                    </div>

                    {/* Right — PR Mockup */}
                    <div className="animate-fade-in" style={{ animationDelay: '180ms' }}>
                        <PRMockup />
                    </div>
                </div>
            </section>

            {/* Stats strip */}
            <section className="w-full border-y border-white/[0.05] bg-white/[0.008] py-8">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {[
                        { value: '~9s', label: 'Avg. scan time' },
                        { value: '99%', label: 'Detection accuracy' },
                        { value: '0', label: 'Target prod bugs' },
                        { value: '4', label: 'Scan dimensions' },
                    ].map((s) => (
                        <div key={s.label} className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-white mb-1 tabular-nums">{s.value}</div>
                            <div className="text-sm text-github-muted">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works */}
            <section className="w-full py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(99,102,241,0.05)_0%,_transparent_65%)] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="mb-16">
                        <p className="text-brand-indigo text-sm font-semibold uppercase tracking-widest mb-4">How it works</p>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight max-w-xl leading-tight">
                            From push to<br />secure merge in seconds.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5 relative">
    
                        {[
                            {
                                step: '01',
                                icon: <GitMerge className="w-4.5 h-4.5" />,
                                iconClass: 'bg-white/5 border-white/10 text-github-muted',
                                cardClass: 'border-white/[0.06] bg-white/[0.015]',
                                title: 'Connect your repo',
                                desc: 'Install the BugCTI GitHub App in under 60 seconds. Works with any repo, any stack — zero pipeline changes needed.',
                            },
                            {
                                step: '02',
                                icon: <Zap className="w-4.5 h-4.5 text-brand-indigo" />,
                                iconClass: 'bg-brand-indigo/10 border-brand-indigo/30 shadow-[0_0_20px_rgba(99,102,241,0.2)]',
                                cardClass: 'border-brand-indigo/20 bg-brand-indigo/[0.04]',
                                title: 'AI scans every PR',
                                desc: 'Gemini 2.5 Pro reviews every pull request across security, performance, logic, and best practices.',
                            },
                            {
                                step: '03',
                                icon: <CheckCircle2 className="w-4.5 h-4.5 text-green-400" />,
                                iconClass: 'bg-green-500/10 border-green-500/25',
                                cardClass: 'border-white/[0.06] bg-white/[0.015]',
                                title: 'Merge with confidence',
                                desc: 'Inline comments with severity scores and auto-fix suggestions. No more "LGTM" gambling.',
                            },
                        ].map((item) => (
                            <div key={item.step} className={`relative p-8 rounded-2xl border ${item.cardClass} hover:bg-white/[0.04] transition-colors group`}>
                                <div className="flex items-start justify-between mb-7">
                                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${item.iconClass}`}>
                                        {item.icon}
                                    </div>
                                    <span className="text-5xl font-black text-white/[0.04] select-none group-hover:text-white/[0.07] transition-colors">{item.step}</span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-sm text-github-muted leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Diagram */}
            <section className="w-full pb-28 relative z-20">
                <ComparisonDiagram />
            </section>

            {/* Bottom CTA */}
            <section className="w-full py-28 border-t border-white/[0.05]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 mb-8">
                        <AlertTriangle className="w-7 h-7 text-red-400" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">
                        Stop shipping vulnerable code.
                    </h2>
                    <p className="text-lg text-github-muted mb-10 max-w-xl mx-auto leading-relaxed">
                        A bug caught in review costs $80 to fix. The same bug in production costs $10,000+.
                    </p>
                    <Link
                        to="/solution"
                        className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-brand-indigo text-white font-bold text-[16px] hover:bg-indigo-500 transition-all duration-200 shadow-[0_0_40px_rgba(99,102,241,0.25)] hover:shadow-[0_0_60px_rgba(99,102,241,0.35)]"
                    >
                        Start protecting your PRs
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
