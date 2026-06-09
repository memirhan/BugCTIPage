import React, { useState, useEffect } from 'react';

const ComparisonDiagram = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % 3);
    }, 1500); 
    return () => clearInterval(interval);
  }, []);

  const pillars = ["Speed", "Security", "Trust"];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-[2rem] border border-white/10 overflow-hidden bg-[#0a0c10] shadow-2xl text-left">
        
        {/* LEFT: Without BugCTI */}
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 relative flex flex-col">
          <div className="flex justify-between items-center mb-16 uppercase tracking-widest text-xs font-bold text-github-muted">
            <span>Traditional Process</span>
            <span>Fragmented</span>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-start mt-4">
            <div className="w-full flex justify-between px-4 mb-8">
              <div className="px-4 py-2 rounded-lg border border-red-500/30 bg-red-500/5 text-red-400/70 font-mono text-xs opacity-70">Speed</div>
              <div className="px-4 py-2 rounded-lg border border-orange-500/30 bg-orange-500/5 text-orange-400/70 font-mono text-xs mt-12 opacity-70">Security</div>
              <div className="px-4 py-2 rounded-lg border border-yellow-500/30 bg-yellow-500/5 text-yellow-400/70 font-mono text-xs opacity-70">Trust</div>
            </div>
            
            <div className="relative w-full h-24 flex items-center justify-center">
              {/* Chaotic disconnected lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                <line x1="15%" y1="0" x2="35%" y2="100%" stroke="#30363d" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50%" y1="40%" x2="65%" y2="100%" stroke="#30363d" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="85%" y1="0" x2="45%" y2="100%" stroke="#30363d" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
              <div className="w-20 h-20 rounded-full border border-white/10 bg-[#161b22] flex items-center justify-center z-10 text-xs font-mono text-github-muted/50">
                Friction
              </div>
            </div>

            <div className="mt-12 text-[#8b949e] font-mono text-sm tracking-tight">
              trade-offs & chaos
            </div>
          </div>

          <p className="text-sm text-github-muted mt-16 leading-relaxed">
            In traditional engineering, you have to choose: move fast and break things, or move slow and stay secure. Teams are fragmented, and trust is lost in the process.
          </p>
        </div>

        {/* RIGHT: With BugCTI */}
        <div className="p-8 md:p-12 relative flex flex-col bg-gradient-to-b from-brand-indigo/10 to-transparent">
          <div className="flex justify-between items-center mb-16 uppercase tracking-widest text-xs font-bold text-brand-indigo">
            <span>With BugCTI</span>
            <span>Unified Convergence</span>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-start mt-4 relative">
            
            {/* Top Nodes */}
            <div className="w-5/6 flex justify-between relative z-10">
              {pillars.map((pillar, i) => {
                const isActive = i === activeIndex;
                return (
                  <div key={i} className={`px-4 py-2 rounded-lg border ${isActive ? 'border-brand-indigo shadow-[0_0_15px_rgba(99,102,241,0.5)] bg-brand-indigo/20 text-white scale-110' : 'border-brand-indigo/30 bg-[#161b22] text-brand-indigo/70'} font-mono text-xs transition-all duration-500`}>
                      {pillar}
                  </div>
                )
              })}
            </div>
            
            {/* SVG Converging Lines */}
            <div className="w-full h-24 relative flex justify-center">
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="15%" y1="0" x2="50%" y2="100%" stroke={activeIndex === 0 ? "#818cf8" : "#3730a3"} strokeWidth={activeIndex === 0 ? "3" : "1"} className="transition-all duration-500" />
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke={activeIndex === 1 ? "#818cf8" : "#3730a3"} strokeWidth={activeIndex === 1 ? "3" : "1"} className="transition-all duration-500" />
                <line x1="85%" y1="0" x2="50%" y2="100%" stroke={activeIndex === 2 ? "#818cf8" : "#3730a3"} strokeWidth={activeIndex === 2 ? "3" : "1"} className="transition-all duration-500" />
              </svg>
            </div>
            
            {/* Central Hub */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="px-8 py-3 rounded-xl border border-brand-indigo bg-brand-indigo/20 text-white font-black tracking-widest text-sm shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                BUGCTI CORE
              </div>
              <div className="w-px h-6 bg-brand-indigo"></div>
              <div className="w-3 h-3 rounded-full border-2 border-brand-indigo bg-white shadow-[0_0_15px_#fff] animate-pulse"></div>
            </div>

            <div className="mt-8 text-brand-indigo font-mono text-sm tracking-tight">
              everything in one place
            </div>
          </div>

          <p className="text-sm text-[#8b949e] mt-16 leading-relaxed">
            BugCTI eliminates the trade-offs. Speed, Security, and Trust converge into a single AI-powered layer, allowing your teams to ship faster with 100% confidence.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ComparisonDiagram;
