"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const layerData = [
    { id: "01", label: "PORT", sub: "I/O Handler", color: "#4f8eff" },
    { id: "02", label: "FLOW", sub: "Business Logic", color: "#e8ff47" },
    { id: "03", label: "SOURCE", sub: "Data Access", color: "#9b6dff" },
    { id: "04", label: "BRIDGE", sub: "DTO Mapping", color: "#ff6b6b" },
];

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen grid-bg overflow-hidden flex flex-col">
            <div className="scan-line" />
            <div className="noise-overlay" />

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] rounded-full bg-[#e8ff47]/3 blur-[120px]" />
                <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] rounded-full bg-[#4f8eff]/4 blur-[100px]" />
            </div>

            <motion.div style={{ y, opacity }} className="relative z-10 flex-1 flex flex-col">
                <div className="max-w-[1400px] mx-auto px-8 pt-36 pb-20 w-full flex-1 flex flex-col">

                    <div className="flex items-start justify-between mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-2 h-2 rounded-full bg-[#e8ff47] animate-pulse-glow" />
                            <span className="font-mono-custom text-xs text-[#666] tracking-[0.3em] uppercase">
                                Core-Line Architecture — v1.0
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="hidden lg:flex items-center gap-6 text-[#333] font-mono-custom text-xs"
                        >
                            <span>EST. 2026</span>
                            <span className="w-8 h-px bg-[#333]" />
                            <span>BACKEND STANDARD</span>
                        </motion.div>
                    </div>

                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                className="text-[clamp(52px,8vw,120px)] font-bold leading-[0.9] tracking-tight mb-8"
                            >
                                <span className="block text-[#f0f0f0]">THE</span>
                                <span className="block text-[#f0f0f0]">SCIENCE</span>
                                <span className="block text-gradient-accent">OF ORDER.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="max-w-lg text-[#666] text-lg leading-relaxed mb-12 font-light"
                            >
                                A discipline-first backend architecture that eliminates ambiguity.
                                One path. One rule. Every request follows the{" "}
                                <span className="text-[#e8ff47] font-medium">Core-Line</span>.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex flex-wrap items-center gap-4"
                            >
                                <Link
                                    href="/docs"
                                    className="clip-corner bg-[#e8ff47] text-[#080808] px-8 py-4 font-mono-custom font-bold text-sm uppercase tracking-[0.15em] hover:bg-white transition-colors duration-200 accent-glow"
                                >
                                    Read the Standard
                                </Link>
                                <Link
                                    href="/docs/quick-start"
                                    className="flex items-center gap-3 text-[#666] hover:text-[#f0f0f0] transition-colors duration-200 font-mono-custom text-sm uppercase tracking-[0.15em] group"
                                >
                                    <span className="w-8 h-px bg-[#333] group-hover:w-12 group-hover:bg-[#666] transition-all duration-300" />
                                    Quick Start
                                </Link>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="hidden lg:flex flex-col gap-2 w-[280px]"
                        >
                            {layerData.map((layer, i) => (
                                <motion.div
                                    key={layer.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="group relative border border-[#1a1a1a] bg-[#0f0f0f] p-4 hover:border-[#2a2a2a] transition-all duration-300 clip-corner-sm"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-mono-custom text-[10px] text-[#333] tracking-[0.3em]">{layer.id}</span>
                                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: layer.color }} />
                                    </div>
                                    <div className="font-mono-custom font-bold text-sm tracking-[0.2em]" style={{ color: layer.color }}>
                                        {layer.label}
                                    </div>
                                    <div className="text-[#444] text-xs mt-1">{layer.sub}</div>
                                    {i < layerData.length - 1 && (
                                        <div className="absolute -bottom-[9px] left-6 w-px h-[9px] bg-[#222]" />
                                    )}
                                </motion.div>
                            ))}
                            <div className="mt-2 p-3 border border-dashed border-[#1a1a1a] text-center">
                                <span className="font-mono-custom text-[10px] text-[#333] tracking-[0.3em]">→ RESPONSE</span>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="mt-16 pt-8 border-t border-[#1a1a1a] flex flex-wrap items-center gap-8"
                    >
                        {[
                            { value: "15", label: "Non-Negotiable Rules" },
                            { value: "4", label: "Core Layers" },
                            { value: "∞", label: "Languages Supported" },
                            { value: "0", label: "Magic. Just Structure." },
                        ].map((stat) => (
                            <div key={stat.label} className="flex items-baseline gap-3">
                                <span className="font-mono-custom font-bold text-2xl text-[#e8ff47]">{stat.value}</span>
                                <span className="text-[#444] text-xs uppercase tracking-[0.15em]">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
