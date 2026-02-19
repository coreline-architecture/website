"use client";

import { DocLayout } from "@/components/layout/DocLayout";
import { motion } from "framer-motion";
import { useState } from "react";

/* ============================================================
   ICONS
   ============================================================ */
const IconArrowRight = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

const IconArrowLeft = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7" />
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

/* ============================================================
   CODE BLOCK
   ============================================================ */
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
            padding: "12px 16px",
            borderRadius: "8px",
            background: "var(--bg-surface)",
            border: "1px solid var(--border-muted)",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "0.8125rem",
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-secondary)", overflow: "hidden" }}>
                <span style={{ color: "var(--text-faint)", userSelect: "none", flexShrink: 0 }}>$</span>
                <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{command}</span>
            </div>
            <button
                onClick={handleCopy}
                style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: "28px", height: "28px",
                    borderRadius: "5px",
                    border: "none",
                    background: "transparent",
                    color: copied ? "var(--text-secondary)" : "var(--text-faint)",
                    cursor: "pointer",
                    transition: "color 0.2s ease, background 0.2s ease",
                    flexShrink: 0,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--bg-elevated)"; e.currentTarget.style.color = "var(--text-primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = copied ? "var(--text-secondary)" : "var(--text-faint)"; }}
            >
                {copied ? <IconCheck /> : <IconCopy />}
            </button>
        </div>
    );
}

/* ============================================================
   STEP COMPONENT
   ============================================================ */
function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
    return (
        <div style={{ display: "flex", gap: "20px" }}>
            <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: "var(--bg-elevated)",
                border: "1px solid var(--border-default)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--text-muted)",
                flexShrink: 0,
            }}>
                {number}
            </div>
            <div style={{ flex: 1, paddingTop: "4px" }}>
                <h3 style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "10px",
                }}>
                    {title}
                </h3>
                <div style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--text-muted)" }}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default function QuickStartPage() {
    return (
        <DocLayout>
            {/* Header */}
            <div style={{ marginBottom: "48px" }}>
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div style={{
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: "0.6875rem",
                        fontWeight: 500,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase" as const,
                        color: "var(--text-muted)",
                        marginBottom: "12px",
                    }}>
                        Getting Started
                    </div>
                    <h1 style={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "clamp(2rem, 4vw, 2.75rem)",
                        fontWeight: 700,
                        lineHeight: 1.15,
                        letterSpacing: "-0.02em",
                        color: "var(--text-primary)",
                        marginBottom: "16px",
                    }}>
                        Quick Start Guide
                    </h1>
                    <p style={{
                        fontSize: "1.0625rem",
                        lineHeight: 1.7,
                        color: "var(--text-secondary)",
                        maxWidth: "480px",
                    }}>
                        Get your first Core-Line project running in minutes.
                    </p>
                </motion.div>
            </div>

            {/* Steps */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                style={{ display: "flex", flexDirection: "column", gap: "36px" }}
            >
                <Step number="01" title="Prerequisites">
                    <p>Ensure you have Node.js version 18+ and npm 9+ installed on your system.</p>
                </Step>

                <Step number="02" title="Initialize Project">
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <p>Run the initialization command to set up the core structure:</p>
                        <CodeBlock command="npx cl-architecture init --naming=custom" />
                        <p style={{ fontStyle: "italic", fontSize: "0.8125rem", color: "var(--text-faint)" }}>
                            Choose between <strong style={{ color: "var(--text-muted)" }}>Core-Line Custom</strong> (Port/Flow/Source) or <strong style={{ color: "var(--text-muted)" }}>Industry Standard</strong> (Controller/Service/Repository).
                        </p>
                    </div>
                </Step>

                <Step number="03" title="Generate a Module">
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <p>Create your first functional module with all necessary layers:</p>
                        <CodeBlock command="npx cl-architecture create module user" />
                    </div>
                </Step>

                <Step number="04" title="Follow the Path">
                    <p>
                        Open your newly created module and start implementing logic. Remember the <strong style={{ color: "var(--text-primary)" }}>Core-Line Law</strong>:
                        Request -&gt; Port -&gt; Flow -&gt; Source -&gt; Response.
                    </p>
                </Step>

                {/* What's Next */}
                <div style={{
                    padding: "28px",
                    borderRadius: "12px",
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border-default)",
                    position: "relative",
                    overflow: "hidden",
                }}>
                    <div style={{
                        position: "absolute",
                        top: "-30px",
                        right: "-30px",
                        width: "160px",
                        height: "160px",
                        background: "radial-gradient(circle, rgba(139,148,158,0.06) 0%, transparent 70%)",
                        borderRadius: "50%",
                        filter: "blur(40px)",
                    }} />
                    <h3 style={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "1.125rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        marginBottom: "10px",
                        position: "relative",
                        zIndex: 1,
                    }}>
                        What&apos;s Next?
                    </h3>
                    <p style={{
                        fontSize: "0.875rem",
                        lineHeight: 1.7,
                        color: "var(--text-muted)",
                        marginBottom: "16px",
                        position: "relative",
                        zIndex: 1,
                    }}>
                        Dive deeper into the architecture rules or explore how to isolate external vendors using the Link layer.
                    </p>
                    <a
                        href="/docs/rules"
                        style={{
                            display: "inline-flex", alignItems: "center", gap: "6px",
                            fontSize: "0.8125rem",
                            fontWeight: 600,
                            color: "var(--text-secondary)",
                            textDecoration: "none",
                            transition: "color 0.2s ease",
                            position: "relative",
                            zIndex: 1,
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >
                        Learn about Rules & Guarantees <IconArrowRight />
                    </a>
                </div>

                {/* Footer navigation */}
                <div style={{
                    marginTop: "16px",
                    paddingTop: "24px",
                    borderTop: "1px solid var(--border-muted)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <a
                        href="/docs/standards"
                        style={{
                            display: "inline-flex", alignItems: "center", gap: "6px",
                            fontSize: "0.8125rem",
                            fontWeight: 500,
                            color: "var(--text-muted)",
                            textDecoration: "none",
                            transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                    >
                        <IconArrowLeft /> Standards
                    </a>
                    <a
                        href="/docs/rules"
                        style={{
                            display: "inline-flex", alignItems: "center", gap: "6px",
                            fontSize: "0.8125rem",
                            fontWeight: 600,
                            color: "var(--text-secondary)",
                            textDecoration: "none",
                            transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >
                        Next: Rules <IconArrowRight />
                    </a>
                </div>
            </motion.div>
        </DocLayout>
    );
}
