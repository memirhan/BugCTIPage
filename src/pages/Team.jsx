import React from 'react';
import { Layers, ShieldCheck, GitPullRequest, ArrowRight, Mail } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

/* ─────────────────────────────────────────────────────────────────────────
 * TEAM DATA
 *
 * photo: a file in `public/team/`. Portrait crop, 4:5, 800×1000 webp —
 *        run it through sharp the same way convert.mjs does. Without a
 *        photo the card falls back to a branded monogram.
 *
 * bio / expertise: optional. Add them and the card grows to fit; leave
 *        them out and it stays a clean name-and-role card.
 *
 * links: set a value to show that icon, leave it null to hide it. When all
 *        three are null the whole row is dropped.
 * ──────────────────────────────────────────────────────────────────────── */
const TEAM = [
    {
        name: 'Muhammet Emirhan Sümer',
        role: 'Co-founder',
        focus: 'Product & Engineering',
        photo: '/team/emirhan.webp',
        links: { linkedin: 'https://www.linkedin.com/in/memirhan/', github: null, email: null },
    },
    {
        name: 'Bengisu Zorlu',
        role: 'Co-founder',
        focus: 'Business Development',
        photo: null,
        links: { linkedin: 'https://www.linkedin.com/in/bengisuzorluu/', github: null, email: null },
    },
    {
        name: 'Mehmet Enes Uzun',
        role: 'Co-founder',
        focus: 'Project Manager',
        photo: '/team/enes.webp',
        links: { linkedin: 'https://www.linkedin.com/in/mehmetenesuzun/', github: null, email: null },
    },
];

const PRINCIPLES = [
    {
        icon: <Layers className="w-4 h-4" />,
        title: 'Evidence, not guesses',
        desc: 'Every dependency we report is resolved from the actual syntax tree and carries a file, a line and a snippet. If we cannot prove it, we label it — we never invent it.',
    },
    {
        icon: <ShieldCheck className="w-4 h-4" />,
        title: 'The human decides',
        desc: 'BugCTI writes patches but never commits them. A person with the right permission approves every change before a single line reaches your repository.',
    },
    {
        icon: <GitPullRequest className="w-4 h-4" />,
        title: 'Signal over noise',
        desc: 'A reviewer who stops reading is worse than no reviewer. Findings pass five filters before they are posted, and we measure how many we hold back.',
    },
];

const STATS = [
    { value: '3', label: 'Platforms supported' },
    { value: '270', label: 'Automated tests' },
    { value: '5', label: 'Languages parsed' },
    { value: '100%', label: 'Human-approved' },
];

// Lucide dropped its brand marks, so these two are inlined rather than adding
// a dependency for a pair of icons.
const LinkedInMark = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
);

const GitHubMark = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3z" />
    </svg>
);

const initialsOf = (name) => {
    const parts = name.trim().split(/\s+/);
    const first = parts[0]?.[0] ?? '';
    const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
    return (first + last).toUpperCase();
};

const Monogram = ({ name }) => (
    <div className="absolute inset-0 flex items-center justify-center bg-[#0b0d16]" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/25 via-brand-purple/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070e] via-transparent to-transparent" />
        <span className="relative text-5xl font-black text-white/35 tracking-tight">
            {initialsOf(name)}
        </span>
    </div>
);

const SocialLink = ({ href, label, children }) => {
    if (!href) return null;
    const external = !href.startsWith('mailto:');
    return (
        <a
            href={href}
            aria-label={label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-github-muted hover:text-white hover:bg-white/[0.08] hover:border-white/15 transition-all"
        >
            {children}
        </a>
    );
};

const MemberCard = ({ member }) => {
    const { name, role, focus, bio, expertise, photo, links } = member;
    const hasLinks = Boolean(links && (links.linkedin || links.github || links.email));
    return (
        <div className="group flex flex-col h-full rounded-2xl border border-white/[0.05] bg-white/[0.01] overflow-hidden transition-all hover:border-brand-indigo/25 hover:bg-brand-indigo/[0.02]">
            <div className="relative aspect-[4/5] overflow-hidden">
                {photo ? (
                    <img
                        src={photo}
                        alt={name}
                        loading="lazy"
                        width="800"
                        height="1000"
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                ) : (
                    <Monogram name={name} />
                )}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#05070e] to-transparent pointer-events-none" />
            </div>

            <div className="flex flex-col flex-grow p-6 pt-5">
                <span className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full border border-brand-indigo/25 bg-brand-indigo/10 text-brand-indigo text-[11px] font-bold uppercase tracking-wide mb-4">
                    {role}
                </span>

                <h3 className="text-xl font-black text-white mb-1 tracking-tight">{name}</h3>
                <p className="text-sm text-white/55">{focus}</p>

                {bio && (
                    <p className="text-sm text-github-muted leading-relaxed mt-4">{bio}</p>
                )}

                {expertise?.length > 0 && (
                    <ul className="flex flex-wrap gap-2 mt-5">
                        {expertise.map((tag, i) => (
                            <li
                                key={`${tag}-${i}`}
                                className="text-xs px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] text-github-muted"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                )}

                {hasLinks && (
                    <div className="flex items-center gap-2 mt-auto pt-5 border-t border-white/[0.05]">
                        <SocialLink href={links.linkedin} label={`${name} on LinkedIn`}>
                            <LinkedInMark className="w-3.5 h-3.5" />
                        </SocialLink>
                        <SocialLink href={links.github} label={`${name} on GitHub`}>
                            <GitHubMark className="w-3.5 h-3.5" />
                        </SocialLink>
                        <SocialLink href={links.email ? `mailto:${links.email}` : null} label={`Email ${name}`}>
                            <Mail className="w-3.5 h-3.5" />
                        </SocialLink>
                    </div>
                )}
            </div>
        </div>
    );
};

const Team = () => {
    return (
        <Layout>
            <SEO
                title="Team — The People Building BugCTI | BugCTI"
                description="Meet the team behind BugCTI: a small group building AI security review grounded in a real dependency graph, with human approval on every fix."
                canonical="https://bugcti.com/team"
            />

            <section className="w-full max-w-5xl mx-auto px-6 py-24 animate-fade-in-up">

                {/* Header */}
                <div className="mb-16 max-w-xl">
                    <p className="text-brand-indigo text-sm font-semibold uppercase tracking-widest mb-5">Team</p>
                    <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.05]">
                        A small team with one narrow obsession.
                    </h1>
                    <p className="text-lg text-github-muted leading-relaxed">
                        We build the security reviewer we wanted on our own pull requests: one that
                        reads the whole codebase before it comments, and stays quiet when it has
                        nothing useful to say.
                    </p>
                </div>

                {/* Members */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
                    {TEAM.map((member) => (
                        <MemberCard key={member.name} member={member} />
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
                    {STATS.map((s) => (
                        <div
                            key={s.label}
                            className="p-6 rounded-2xl border border-white/[0.05] bg-white/[0.01] text-center"
                        >
                            <div className="text-3xl font-black text-white tracking-tight mb-2">{s.value}</div>
                            <div className="text-[11px] text-github-muted/70 font-bold uppercase tracking-wide">
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Principles */}
                <div className="mb-14 max-w-xl">
                    <p className="text-brand-indigo text-sm font-semibold uppercase tracking-widest mb-5">How we work</p>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                        Three rules we do not bend.
                    </h2>
                    <p className="text-lg text-github-muted leading-relaxed">
                        They shape every technical decision in the product — and they are the reason
                        teams keep reading our comments after the first week.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-5 mb-24">
                    {PRINCIPLES.map((p) => (
                        <div key={p.title} className="p-8 rounded-2xl border border-white/[0.05] bg-white/[0.01]">
                            <div className="w-9 h-9 rounded-lg bg-brand-indigo/10 border border-brand-indigo/25 flex items-center justify-center text-brand-indigo mb-5">
                                {p.icon}
                            </div>
                            <h3 className="text-lg font-black text-white mb-3 tracking-tight">{p.title}</h3>
                            <p className="text-sm text-github-muted leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="p-10 rounded-2xl border border-brand-indigo/25 bg-brand-indigo/[0.04] shadow-[0_0_40px_rgba(99,102,241,0.06)]">
                    <h2 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">
                        We are still hiring.
                    </h2>
                    <p className="text-sm text-github-muted leading-relaxed max-w-lg mb-7">
                        If reading this page made you want to argue with one of the three rules
                        above, that is a good sign. Tell us why.
                    </p>
                    <a
                        href="mailto:emirhan@bugcti.com"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-indigo text-white text-sm font-semibold hover:bg-indigo-500 transition-colors shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                    >
                        Get in touch
                        <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                </div>

            </section>
        </Layout>
    );
};

export default Team;
