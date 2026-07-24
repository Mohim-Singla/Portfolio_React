import React, { useState, useEffect, useRef } from 'react';

export default function Timeline({ timelineData }) {
  const [expandedId, setExpandedId] = useState(null);
  const containerRef = useRef(null);

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setExpandedId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 5 exact points along quadratic sine wave (viewBox: 0 0 1000 450)
  // Wave path: M 0 225 Q 100 130, 200 225 T 400 225 T 600 225 T 800 225 T 1000 225
  // Peak Y (maximum height) = 177.5 at X = 100, 500, 900
  // Trough Y (minimum height) = 272.5 at X = 300, 700
  const points = [
    { x: 100, y: 177.5, isPeak: true },
    { x: 300, y: 272.5, isPeak: false },
    { x: 500, y: 177.5, isPeak: true },
    { x: 700, y: 272.5, isPeak: false },
    { x: 900, y: 177.5, isPeak: true },
  ];

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-t from-[#272525d2] to-[#000] min-h-[calc(100vh-4rem)] flex flex-col justify-center px-4 sm:px-8 py-12 sm:py-16 scroll-mt-16 text-white relative overflow-hidden"
      id="experience"
    >
      {/* Evenly Balanced Ambient Glow Backdrops behind each wave crest & trough */}
      <div className="absolute top-1/4 left-[10%] w-72 h-72 bg-[#efb10a]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 left-[30%] w-72 h-72 bg-[#efb10a]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/4 left-[50%] w-72 h-72 bg-[#efb10a]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 left-[70%] w-72 h-72 bg-[#efb10a]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/4 left-[90%] w-72 h-72 bg-[#efb10a]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

      {/* Full-width continuous central wave backdrop glow */}
      <div className="absolute top-1/2 left-1/2 w-full max-w-7xl h-48 bg-[#efb10a]/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

      {/* Floating Ambient Light Particles spread across full width & height */}
      <div className="absolute inset-0 pointer-events-none opacity-60 overflow-hidden">
        <span className="absolute top-10 left-[8%] w-1.5 h-1.5 bg-[#efb10a] rounded-full blur-[1px] animate-pulse"></span>
        <span className="absolute top-24 left-[18%] w-1 h-1 bg-[#f59e0b] rounded-full blur-[1px] animate-ping duration-1000"></span>
        <span className="absolute bottom-16 left-[25%] w-2 h-2 bg-[#efb10a] rounded-full blur-[1px] animate-pulse delay-75"></span>
        <span className="absolute top-1/3 left-[33%] w-1.5 h-1.5 bg-[#efb10a] rounded-full blur-[1px] animate-pulse delay-300"></span>
        <span className="absolute top-16 left-[45%] w-2 h-2 bg-[#f59e0b] rounded-full blur-[1px] animate-pulse delay-150"></span>
        <span className="absolute bottom-24 left-[52%] w-1 h-1 bg-[#efb10a] rounded-full blur-[1px] animate-ping duration-700"></span>
        <span className="absolute top-28 left-[62%] w-1.5 h-1.5 bg-[#efb10a] rounded-full blur-[1px] animate-pulse delay-500"></span>
        <span className="absolute bottom-20 left-[68%] w-2 h-2 bg-[#efb10a] rounded-full blur-[1px] animate-pulse delay-300"></span>
        <span className="absolute top-12 left-[78%] w-1 h-1 bg-[#f59e0b] rounded-full blur-[1px] animate-pulse delay-100"></span>
        <span className="absolute top-14 left-[88%] w-1.5 h-1.5 bg-[#efb10a] rounded-full blur-[1px] animate-pulse delay-200"></span>
        <span className="absolute bottom-12 left-[94%] w-2 h-2 bg-[#efb10a] rounded-full blur-[1px] animate-pulse delay-700"></span>
        <span className="absolute bottom-32 left-[12%] w-1 h-1 bg-[#efb10a] rounded-full blur-[1px] animate-pulse delay-200"></span>
        <span className="absolute top-1/2 left-[40%] w-1.5 h-1.5 bg-[#f59e0b] rounded-full blur-[1px] animate-pulse delay-400"></span>
        <span className="absolute top-1/2 right-[25%] w-1 h-1 bg-[#efb10a] rounded-full blur-[1px] animate-pulse delay-150"></span>
      </div>

      {/* Title matching existing <My Skills /> format */}
      <h1 className="text-center text-4xl sm:text-5xl text-white mb-4 sm:mb-6 font-cursive pt-2 relative z-10">
        &#60;<span className="text-[#efb10a]">My</span> Experience &#47;&#62;
      </h1>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* DESKTOP WAVE VIEW (lg screens and up) */}
        <div className="hidden lg:block relative h-[520px] w-full my-2">
          <div className="relative w-full h-full">
            {/* SVG Wave Line & Embedded Nodes */}
            <svg
              className="w-full h-full absolute inset-0 overflow-visible"
              viewBox="0 0 1000 450"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#efb10a" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#efb10a" stopOpacity="1" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.6" />
                </linearGradient>
                <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Smooth Quadratic Bezier Wave */}
              <path
                d="M 0 225 Q 100 130, 200 225 T 400 225 T 600 225 T 800 225 T 1000 225"
                fill="none"
                stroke="url(#waveGrad)"
                strokeWidth="5"
                filter="url(#goldGlow)"
              />

              {/* Breakpoint Nodes pinned EXACTLY on the curve coordinates */}
              {timelineData.map((item, index) => {
                const pt = points[index];
                if (!pt) return null;
                const isExpanded = expandedId === item.id;

                return (
                  <g
                    key={`node-${item.id}`}
                    className="cursor-pointer group"
                    onClick={() => toggleExpand(item.id)}
                  >
                    {/* Outer Blinking & Pulsing Halo Ring */}
                    <circle cx={pt.x} cy={pt.y} r="18" fill="#efb10a" opacity="0.4">
                      <animate attributeName="r" values="10;26;10" dur="1.8s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.6;0.0;0.6" dur="1.8s" repeatCount="indefinite" />
                    </circle>

                    {/* Secondary Expanding Wave Ripple */}
                    <circle cx={pt.x} cy={pt.y} r="14" fill="#efb10a" opacity="0.2">
                      <animate attributeName="r" values="8;20;8" dur="1.8s" begin="0.4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.4;0.0;0.4" dur="1.8s" begin="0.4s" repeatCount="indefinite" />
                    </circle>

                    {/* Outer Border Ring with Glow */}
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="9"
                      fill="#121212"
                      stroke={isExpanded ? '#ffffff' : '#efb10a'}
                      strokeWidth="3"
                      filter="url(#goldGlow)"
                    />

                    {/* Core Blinking Golden Dot */}
                    <circle cx={pt.x} cy={pt.y} r="4.5" fill="#efb10a">
                      <animate attributeName="opacity" values="1;0.4;1" dur="1.2s" repeatCount="indefinite" />
                    </circle>

                    {/* Date label with background pill */}
                    <g transform={`translate(${pt.x}, ${pt.isPeak ? pt.y - 20 : pt.y + 24})`}>
                      <rect
                        x="-32"
                        y="-10"
                        width="64"
                        height="20"
                        rx="10"
                        fill="#121212"
                        stroke="#efb10a"
                        strokeWidth="1"
                        opacity="0.9"
                      />
                      <text
                        x="0"
                        y="3.5"
                        textAnchor="middle"
                        fill="#efb10a"
                        fontSize="11"
                        fontWeight="bold"
                      >
                        {item.shortDate}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>

            {/* Positioned Cards Overlay */}
            {timelineData.map((item, index) => {
              const pt = points[index];
              if (!pt) return null;
              const isPeak = pt.isPeak;
              const isExpanded = expandedId === item.id;

              const leftPercent = (pt.x / 1000) * 100;
              const topPercent = (pt.y / 450) * 100;

              return (
                <div
                  key={`card-${item.id}`}
                  style={{
                    left: `${leftPercent}%`,
                    top: `${topPercent}%`,
                    transform: isPeak
                      ? 'translate(-50%, -100%) translateY(-36px)'
                      : 'translate(-50%, 0%) translateY(40px)',
                  }}
                  className="absolute w-52 z-20 transition-all duration-300"
                >
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className={`bg-[#181616]/95 border ${
                      isExpanded
                        ? 'border-[#efb10a] shadow-[0_0_30px_#efb10a60] bg-[#141212] max-h-[240px] overflow-y-auto'
                        : 'border-gray-800 hover:border-[#efb10a]'
                    } rounded-xl p-4 transition-all duration-300 shadow-2xl backdrop-blur-md cursor-pointer text-center group`}
                  >
                    <span className="inline-block text-[11px] font-semibold text-[#efb10a] bg-[#efb10a]/10 px-2 py-0.5 rounded-full mb-1">
                      {item.date}
                    </span>
                    <h3 className="text-xs font-bold text-white group-hover:text-[#efb10a] transition-colors line-clamp-2">
                      {item.role}
                    </h3>
                    <p className="text-[11px] text-gray-300 font-medium mt-0.5">{item.company}</p>

                    <button className="mt-2 text-[10px] text-[#efb10a] font-semibold flex items-center justify-center gap-1 mx-auto hover:underline">
                      {isExpanded ? 'Hide Details -' : 'View Details +'}
                    </button>

                    {/* Collapsible Details */}
                    {isExpanded && (
                      <div className="mt-2 pt-2 border-t border-gray-700/60 text-left text-[11px] text-gray-300 space-y-1 animate-fadeIn">
                        <p className="text-[10px] text-gray-400 italic mb-1">{item.location}</p>
                        <ul className="list-disc list-inside space-y-1">
                          {item.details.map((point, idx) => (
                            <li key={idx} className="leading-relaxed">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET VERTICAL VIEW (screens smaller than lg) */}
        <div className="lg:hidden relative px-2 py-4">
          {/* Vertical Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#efb10a] via-[#efb10a]/60 to-[#f59e0b] -translate-x-1/2 rounded-full shadow-[0_0_10px_#efb10a]"></div>

          <div className="space-y-8 relative z-10">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedId === item.id;

              return (
                <div
                  key={item.id}
                  className={`flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } relative`}
                >
                  {/* Node directly on central vertical line with blinking ping animation */}
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 cursor-pointer group flex items-center justify-center"
                  >
                    <span className="absolute w-8 h-8 bg-[#efb10a]/40 rounded-full animate-ping group-hover:bg-[#efb10a]/60"></span>
                    <span className="w-5 h-5 bg-[#efb10a] rounded-full border-4 border-[#121212] shadow-[0_0_10px_#efb10a] group-hover:scale-125 transition-transform duration-300"></span>
                  </div>

                  {/* Card Container */}
                  <div className="pl-10 sm:pl-0 sm:w-1/2 sm:px-6 w-full max-w-full box-border">
                    <div
                      onClick={() => toggleExpand(item.id)}
                      className={`bg-[#1e1c1c]/90 border ${
                        isExpanded ? 'border-[#efb10a]' : 'border-gray-800'
                      } hover:border-[#efb10a] rounded-xl p-4 sm:p-5 transition-all duration-300 shadow-xl backdrop-blur-md cursor-pointer group w-full box-border`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-semibold text-[#efb10a] bg-[#efb10a]/10 px-2 py-0.5 rounded-full">
                          {item.date}
                        </span>
                        <span className="text-[11px] text-gray-400 shrink-0">{item.location}</span>
                      </div>

                      <h3 className="text-base font-bold text-white group-hover:text-[#efb10a] transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-xs text-gray-300 font-medium mt-0.5">{item.company}</p>

                      <button className="mt-3 text-xs text-[#efb10a] font-semibold flex items-center gap-1 hover:underline">
                        {isExpanded ? 'Hide Details -' : 'View Details +'}
                      </button>

                      {/* Collapsible Details */}
                      {isExpanded && (
                        <div className="mt-3 pt-3 border-t border-gray-700/60 text-xs text-gray-300 space-y-2 animate-fadeIn">
                          <ul className="list-disc list-inside space-y-1.5">
                            {item.details.map((point, idx) => (
                              <li key={idx} className="leading-relaxed">
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
