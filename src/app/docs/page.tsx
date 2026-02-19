"use client";

import { DocLayout } from "@/components/layout/DocLayout";
import { motion } from "framer-motion";


const IconArrowRight = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

export default function DocsPage() {
    return (
        <DocLayout>

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
                        Introduction
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
                        What is Core-Line?
                    </h1>
                    <p style={{
                        fontSize: "1.0625rem",
                        lineHeight: 1.7,
                        color: "var(--text-secondary)",
                        maxWidth: "580px",
                    }}>
                        The universal standard for high-performance backend engineering.
                    </p>
                </motion.div>
            </div>


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                style={{ display: "flex", flexDirection: "column", gap: "32px" }}
            >
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "var(--text-secondary)" }}>
                    <strong style={{ color: "var(--text-primary)" }}>CL-Architecture (Core-Line Architecture)</strong> is a
                    strict backend architecture standard designed to control complexity as applications grow.
                </p>


                <div style={{
                    padding: "20px 24px",
                    borderRadius: "10px",
                    background: "var(--bg-surface)",
                    borderLeft: "3px solid var(--border-strong)",
                    fontStyle: "italic",
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    color: "var(--text-secondary)",
                }}>
                    &quot;Every request must follow one clear, linear path.&quot;
                </div>

                <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "var(--text-secondary)" }}>
                    It is not a framework. It does not hide logic. It does not add magic.
                    Instead, it defines clear rules for how backend code must be organized and
                    how data must flow through the system.
                </p>


                <div style={{ marginTop: "16px" }}>
                    <div style={{
                        height: "1px",
                        background: "linear-gradient(90deg, var(--border-default), transparent)",
                        marginBottom: "32px",
                    }} />
                    <h2 style={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        marginBottom: "16px",
                        letterSpacing: "-0.01em",
                    }}>
                        The Core Concept
                    </h2>
                    <p style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "20px" }}>
                        At the heart of CL-Architecture is a simple rule: No skipping layers. No calling Source from Controller.
                        No calling Controller logic from Flow.
                    </p>


                    <div style={{
                        background: "var(--bg-surface)",
                        border: "1px solid var(--border-muted)",
                        borderRadius: "10px",
                        padding: "20px 24px",
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: "0.8125rem",
                        lineHeight: 2,
                        color: "var(--text-secondary)",
                    }}>
                        {["Route", "Controller (Port)", "Flow (Business Logic)", "Source (DB / External APIs)", "Flow", "Response"].map((step, i, arr) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                {i > 0 && <span style={{ color: "var(--text-faint)", marginRight: "4px" }}>-&gt;</span>}
                                <span style={{
                                    color: i === 0 || i === arr.length - 1 ? "var(--text-muted)" : "var(--text-primary)",
                                }}>{step}</span>
                            </div>
                        ))}
                    </div>
                </div>


                <div style={{ marginTop: "16px" }}>
                    <div style={{
                        height: "1px",
                        background: "linear-gradient(90deg, var(--border-default), transparent)",
                        marginBottom: "32px",
                    }} />
                    <h2 style={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        marginBottom: "20px",
                        letterSpacing: "-0.01em",
                    }}>
                        Why CL-Architecture?
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        {[
                            { title: "Predictable behavior", desc: "Always know where a request starts and ends." },
                            { title: "Easier debugging", desc: "Linear execution makes tracing bugs trivial." },
                            { title: "Clear ownership", desc: "Every layer has one responsibility." },
                            { title: "Safer refactoring", desc: "Decoupled layers mean low blast radius for changes." },
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "12px",
                                padding: "14px 16px",
                                borderRadius: "8px",
                                background: "var(--bg-surface)",
                                border: "1px solid var(--border-muted)",
                                transition: "border-color 0.2s ease",
                            }}
                                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-default)")}
                                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-muted)")}
                            >
                                <div style={{
                                    width: "6px", height: "6px",
                                    borderRadius: "50%",
                                    background: "var(--text-faint)",
                                    flexShrink: 0,
                                    marginTop: "8px",
                                }} />
                                <div>
                                    <span style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.875rem" }}>{item.title}: </span>
                                    <span style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>{item.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div style={{
                    marginTop: "32px",
                    paddingTop: "24px",
                    borderTop: "1px solid var(--border-muted)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <span style={{
                        fontSize: "0.75rem",
                        color: "var(--text-faint)",
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                    }}>
                        Last updated: February 2026
                    </span>
                    <a
                        href="/docs/standards"
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
                        Next: Standards <IconArrowRight />
                    </a>
                </div>
            </motion.div>
        </DocLayout>
    );
}
