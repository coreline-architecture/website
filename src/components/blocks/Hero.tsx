"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Terminal } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
                <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-primary rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[20%] w-72 h-72 bg-secondary rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-card-border/50 border border-card-border text-xs font-semibold text-primary mb-6">
                        Introducing Core-Line v1.0
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 leading-tight">
                        Standardizing the <br />
                        Science of <span className="text-primary italic">Backends</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-muted mb-10 leading-relaxed">
                        A discipline-first backend architecture designed to eliminate technical debt,
                        enforce linear execution, and guarantee industrial-grade performance.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <Link
                        href="/docs"
                        className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-white/90 transition-all flex items-center justify-center gap-2 group"
                    >
                        Start Building
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/cli"
                        className="w-full sm:w-auto px-8 py-4 rounded-xl glass font-bold hover:bg-card-border transition-all flex items-center justify-center gap-2"
                    >
                        <Terminal size={18} />
                        View CLI documentation
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative max-w-4xl mx-auto p-8 rounded-3xl border border-card-border bg-card/50 backdrop-blur-sm"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2 hidden md:block opacity-20" />

                        <PathNode label="Route" delay={0.1} />
                        <PathNode label="Port" sub="Controller" delay={0.2} active />
                        <PathNode label="Flow" sub="Service" delay={0.3} active />
                        <PathNode label="Source" sub="Repository" delay={0.4} active />
                        <PathNode label="Flow" sub="Service" delay={0.5} />
                        <PathNode label="Response" delay={0.6} variant="success" />
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                            <CheckCircle2 className="text-primary mb-2" size={20} />
                            <h4 className="font-bold text-sm mb-1">Linear Execution</h4>
                            <p className="text-xs text-muted">Every request follows one clear, non-negotiable path.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/10">
                            <CheckCircle2 className="text-secondary mb-2" size={20} />
                            <h4 className="font-bold text-sm mb-1">Zero Logic Leaks</h4>
                            <p className="text-xs text-muted">Strict separation between business logic and infra.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                            <CheckCircle2 className="text-accent mb-2" size={20} />
                            <h4 className="font-bold text-sm mb-1">Vendor Neutral</h4>
                            <p className="text-xs text-muted">Isolate third-party SDKs in the Bridge layer.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function PathNode({ label, sub, delay, active, variant }: { label: string, sub?: string, delay: number, active?: boolean, variant?: "success" }) {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay }}
            className="relative z-10 flex flex-col items-center"
        >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors duration-500 bg-background ${variant === "success"
                    ? "border-accent text-accent"
                    : active
                        ? "border-primary text-primary"
                        : "border-card-border text-muted"
                }`}>
                <div className={`w-2 h-2 rounded-full ${variant === "success"
                        ? "bg-accent"
                        : active
                            ? "bg-primary"
                            : "bg-card-border"
                    }`} />
            </div>
            <span className="mt-2 text-xs font-bold uppercase tracking-widest">{label}</span>
            {sub && <span className="text-[10px] text-muted font-medium">{sub}</span>}
        </motion.div>
    );
}
