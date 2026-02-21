"use client";

import { DocLayout } from "@/components/layout/DocLayout";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const IconArrowRight = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

const IconCopy = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
);

const IconCheck = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
    </svg>
);

function CodeBlock({ command }: { command: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            padding: "14px 20px",
            borderRadius: "12px",
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid var(--border-muted)",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "0.875rem",
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-primary)", overflow: "hidden" }}>
                <span style={{ color: "var(--text-faint)", userSelect: "none", flexShrink: 0 }}>$</span>
                <span style={{ whiteSpace: "nowrap" }}>{command}</span>
            </div>
            <button
                onClick={handleCopy}
                style={{
                    padding: "4px",
                    border: "none",
                    background: "transparent",
                    color: copied ? "var(--text-secondary)" : "var(--text-faint)",
                    cursor: "pointer",
                    flexShrink: 0,
                }}
            >
                {copied ? <IconCheck /> : <IconCopy />}
            </button>
        </div>
    );
}

function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
    return (
        <div style={{ display: "flex", gap: "36px", marginBottom: "52px" }}>
            <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: "var(--bg-elevated)",
                border: "1px solid var(--border-default)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "0.875rem",
                fontWeight: 700,
                color: "var(--text-muted)",
                flexShrink: 0,
            }}>
                {number}
            </div>
            <div style={{ flex: 1 }}>
                <h3 style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "18px",
                }}>
                    {title}
                </h3>
                <div style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "var(--text-muted)" }}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default function QuickStartPage() {
    return (
        <DocLayout>
            <div style={{ marginBottom: "72px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        letterSpacing: "0.15rem",
                        textTransform: "uppercase" as const,
                        color: "var(--text-muted)",
                        marginBottom: "12px",
                    }}>
                        Getting Started
                    </div>
                    <h1 style={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                        fontWeight: 700,
                        lineHeight: 1.1,
                        letterSpacing: "-0.03em",
                        color: "var(--text-primary)",
                        marginBottom: "24px",
                    }}>
                        Quick <span style={{ color: "var(--text-muted)" }}>Start Guide</span>
                    </h1>
                    <p style={{
                        fontSize: "1.125rem",
                        lineHeight: 1.75,
                        color: "var(--text-secondary)",
                        maxWidth: "600px",
                    }}>
                        Learn how to install the Core-Line CLI and initialize your first scientifically structured project.
                    </p>
                </motion.div>
            </div>

            <section style={{ marginBottom: "80px" }}>
                <Step number="01" title="System Check">
                    <p style={{ marginBottom: "20px" }}>Core-Line requires a modern environment to ensure stability and performance.</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                        <div style={{ padding: "16px", borderRadius: "12px", background: "rgba(255,255,255,0.01)", border: "1px solid var(--border-muted)" }}>
                            <div style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.8125rem", marginBottom: "4px" }}>Runtime</div>
                            <div style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>Node.js 18.x or higher</div>
                        </div>
                        <div style={{ padding: "16px", borderRadius: "12px", background: "rgba(255,255,255,0.01)", border: "1px solid var(--border-muted)" }}>
                            <div style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.8125rem", marginBottom: "4px" }}>Package Manager</div>
                            <div style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>npm 9+ or Yarn 1.22+</div>
                        </div>
                    </div>
                </Step>

                <Step number="02" title="Installation Methods">
                    <p style={{ marginBottom: "20px" }}>Choose the installation method that fits your workflow. <strong>npx</strong> is recommended for most users.</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <div>
                            <div style={{ fontSize: "0.75rem", color: "var(--text-faint)", fontWeight: 600, marginBottom: "8px", textTransform: "uppercase" }}>Option 1: npx (No Install)</div>
                            <CodeBlock command="npx cl-architecture init" />
                        </div>
                        <div>
                            <div style={{ fontSize: "0.75rem", color: "var(--text-faint)", fontWeight: 600, marginBottom: "8px", textTransform: "uppercase" }}>Option 2: Global Installation</div>
                            <CodeBlock command="npm install -g cl-architecture" />
                        </div>
                    </div>
                </Step>

                <Step number="03" title="Initialize & Name">
                    <p style={{ marginBottom: "20px" }}>During initialization, you will be asked to choose a naming style. This handles the automated folder generation.</p>
                    <div style={{ padding: "24px", borderRadius: "16px", background: "var(--bg-elevated)", border: "1px solid var(--border-muted)" }}>
                        <div style={{ display: "flex", gap: "24px" }}>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" }}>Core-Line Terminology</div>
                                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-jetbrains-mono), monospace" }}>port/, flow/, source/</div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "4px" }}>Industry Standard</div>
                                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-jetbrains-mono), monospace" }}>controller/, service/, repository/</div>
                            </div>
                        </div>
                    </div>
                </Step>

                <Step number="04" title="Verify Structure">
                    <p style={{ marginBottom: "20px" }}>After running <code>init</code>, your project will have the following verified base structure:</p>
                    <div style={{
                        padding: "20px",
                        borderRadius: "12px",
                        background: "#0d1117",
                        border: "1px solid var(--border-muted)",
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: "0.8125rem",
                        color: "#8b949e"
                    }}>
                        <div>modules/ <span style={{ color: "#444" }}># Self-contained logic</span></div>
                        <div>orbit/ <span style={{ color: "#444" }}># Environment & Config</span></div>
                        <div>pulse/ <span style={{ color: "#444" }}># Logging & Heartbeat</span></div>
                        <div>gateway/ <span style={{ color: "#444" }}># Response standardization</span></div>
                    </div>
                </Step>
            </section>

            <div style={{
                marginTop: "64px",
                paddingTop: "32px",
                borderTop: "1px solid var(--border-muted)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Link
                    href="/docs/ecosystem"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        color: "var(--text-muted)",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        padding: "10px 20px",
                        borderRadius: "100px",
                        transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-primary)"; e.currentTarget.style.transform = "translateX(-4px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.transform = "translateX(0)"; }}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "rotate(180deg)" }}>
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    Previous: Ecosystem
                </Link>
                <Link
                    href="/docs/rules"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        color: "var(--text-primary)",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        padding: "10px 20px",
                        borderRadius: "100px",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid var(--border-muted)",
                        transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "translateX(0)"; }}
                >
                    Next: Rules
                    <IconArrowRight />
                </Link>
            </div>
        </DocLayout>
    );
}
