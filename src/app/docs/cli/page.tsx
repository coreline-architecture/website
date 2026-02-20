"use client";

import { DocLayout } from "@/components/layout/DocLayout";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const IconTerminal = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
);

const IconCopy = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
);

const IconCheck = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const IconArrowRight = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

function CodeBlock({ code }: { code: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{
            position: "relative",
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid var(--border-muted)",
            borderRadius: "12px",
            padding: "16px 20px",
            marginBottom: "24px",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "0.875rem",
            color: "var(--text-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        }}>
            <code>{code}</code>
            <button
                onClick={handleCopy}
                style={{
                    background: "none",
                    border: "none",
                    color: copied ? "var(--text-secondary)" : "var(--text-faint)",
                    cursor: "pointer",
                    padding: "4px",
                    display: "flex",
                    alignItems: "center",
                    transition: "color 0.2s ease",
                }}
            >
                {copied ? <IconCheck /> : <IconCopy />}
            </button>
        </div>
    );
}

export default function CliPage() {
    return (
        <DocLayout>
            <div style={{ marginBottom: "64px" }}>
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
                        Tooling
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
                        CLI <span style={{ color: "var(--text-muted)" }}>Reference</span>
                    </h1>
                    <p style={{
                        fontSize: "1.125rem",
                        lineHeight: 1.75,
                        color: "var(--text-secondary)",
                        maxWidth: "600px",
                    }}>
                        The CL CLI is an opinionated automation tool designed to enforce architecture rules and eliminate manual setup.
                    </p>
                </motion.div>
            </div>

            <section style={{ marginBottom: "80px" }}>
                <h2 style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    marginBottom: "24px",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-poppins), sans-serif",
                }}>
                    Philosophy
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "32px" }}>
                    {[
                        { title: "Convention over Config", text: "Defaults follow world-class best practices out of the box." },
                        { title: "Zero Manual Wiring", text: "Automates DI, routing, and layer linking correctly every time." },
                        { title: "Compliance First", text: "If the CLI generates it, it is guaranteed to be CL-compliant." }
                    ].map((item, i) => (
                        <div key={i} style={{ padding: "24px", borderRadius: "12px", border: "1px solid var(--border-muted)", background: "rgba(255,255,255,0.01)" }}>
                            <h4 style={{ color: "var(--text-primary)", fontSize: "0.875rem", fontWeight: 600, marginBottom: "8px" }}>{item.title}</h4>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem", lineHeight: 1.6 }}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ marginBottom: "80px" }}>
                <h2 style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    marginBottom: "24px",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-poppins), sans-serif",
                }}>
                    Core Commands
                </h2>

                <div style={{ marginBottom: "40px" }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "12px", color: "var(--text-secondary)" }}>1. Initialize Project</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "16px" }}>Sets up folder structure, initializes config files, and installs automated Git hooks.</p>
                    <CodeBlock code="npx cl-architecture init" />
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                        <span style={{ fontSize: "0.75rem", color: "var(--text-faint)", background: "rgba(255,255,255,0.05)", padding: "4px 10px", borderRadius: "4px" }}>-n [name]</span>
                        <span style={{ fontSize: "0.75rem", color: "var(--text-faint)", background: "rgba(255,255,255,0.05)", padding: "4px 10px", borderRadius: "4px" }}>-y (skip prompts)</span>
                        <span style={{ fontSize: "0.75rem", color: "var(--text-faint)", background: "rgba(255,255,255,0.05)", padding: "4px 10px", borderRadius: "4px" }}>--naming=[style]</span>
                    </div>
                </div>

                <div style={{ marginBottom: "40px" }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "12px", color: "var(--text-secondary)" }}>2. Create a Module</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "16px" }}>Creates a self-contained module with all layers (Port, Flow, Source, Shape, Bridge, Rule).</p>
                    <CodeBlock code="npx cl-architecture create module user" />
                </div>
            </section>

            <section style={{ marginBottom: "80px" }}>
                <h2 style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    marginBottom: "24px",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-poppins), sans-serif",
                }}>
                    Module Generation
                </h2>
                <div style={{
                    padding: "32px",
                    borderRadius: "16px",
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border-muted)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px"
                }}>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginBottom: "8px" }}>The CLI generates all necessary files and automatically wires them:</p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
                        {[
                            "Routes registration", "DI Binding entry", "Controller implementation",
                            "Flow logic skeletal", "Source interfaces", "Zod/Joi validation",
                            "DTO mapping logic", "Unit test stubs", "Gateway entry"
                        ].map((item, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                                <div style={{ color: "var(--text-faint)" }}><IconCheck /></div>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
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
                    href="/docs/rules"
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
                    Previous: Rules
                </Link>
                <Link
                    href="/docs"
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
                    Back to Start
                    <IconArrowRight />
                </Link>
            </div>
        </DocLayout>
    );
}
