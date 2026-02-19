"use client";

import { DocLayout } from "@/components/layout/DocLayout";
import { motion } from "framer-motion";

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

/* ============================================================
   DATA
   ============================================================ */
const solidPrinciples = [
    { letter: "S", title: "Single Responsibility", detail: "Every layer has exactly one job (Port, Flow, Source)." },
    { letter: "O", title: "Open/Closed", detail: "Add features by creating new Flows, not modifying existing logic." },
    { letter: "L", title: "Liskov Substitution", detail: "Interfaces in Source/Link layers allow seamless mocking/swapping." },
    { letter: "I", title: "Interface Segregation", detail: "Modules are self-contained and context-specific." },
    { letter: "D", title: "Dependency Inversion", detail: "Business logic never depends on technical details (DB/SDK)." },
];

const dryItems = [
    "Global Async Handler Rule for error management",
    "Universal Response Shape across all modules",
    "Centralized Validation Layer (Rule)",
];

export default function StandardsPage() {
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
                        Architecture
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
                        Internalized Standards
                    </h1>
                    <p style={{
                        fontSize: "1.0625rem",
                        lineHeight: 1.7,
                        color: "var(--text-secondary)",
                        maxWidth: "480px",
                    }}>
                        The science behind CL-Architecture.
                    </p>
                </motion.div>
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                style={{ display: "flex", flexDirection: "column", gap: "48px" }}
            >
                {/* SOLID Principles */}
                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                        <div style={{
                            width: "32px", height: "32px",
                            borderRadius: "8px",
                            background: "var(--bg-elevated)",
                            border: "1px solid var(--border-default)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontFamily: "Georgia, serif",
                            fontStyle: "italic",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                            color: "var(--text-secondary)",
                        }}>
                            S
                        </div>
                        <h2 style={{
                            fontFamily: "var(--font-poppins), sans-serif",
                            fontSize: "1.5rem",
                            fontWeight: 600,
                            color: "var(--text-primary)",
                            letterSpacing: "-0.01em",
                        }}>
                            SOLID Principles
                        </h2>
                    </div>
                    <p style={{
                        fontSize: "0.875rem",
                        lineHeight: 1.7,
                        color: "var(--text-muted)",
                        marginBottom: "20px",
                    }}>
                        CL-Architecture is a SOLID-enforcement engine.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {solidPrinciples.map((item, i) => (
                            <div key={i} style={{
                                padding: "16px 18px",
                                borderRadius: "10px",
                                background: "var(--bg-surface)",
                                border: "1px solid var(--border-muted)",
                                transition: "border-color 0.2s ease",
                            }}
                                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-default)")}
                                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-muted)")}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                                    <span style={{
                                        fontFamily: "var(--font-jetbrains-mono), monospace",
                                        fontSize: "0.6875rem",
                                        fontWeight: 600,
                                        color: "var(--text-faint)",
                                        width: "18px",
                                        textAlign: "center" as const,
                                    }}>{item.letter}</span>
                                    <span style={{
                                        fontSize: "0.875rem",
                                        fontWeight: 600,
                                        color: "var(--text-primary)",
                                    }}>{item.title}</span>
                                </div>
                                <p style={{
                                    fontSize: "0.8125rem",
                                    lineHeight: 1.6,
                                    color: "var(--text-muted)",
                                    paddingLeft: "28px",
                                }}>{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* DRY */}
                <div>
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
                        marginBottom: "10px",
                        letterSpacing: "-0.01em",
                    }}>
                        DRY (Don&apos;t Repeat Yourself)
                    </h2>
                    <p style={{
                        fontSize: "0.875rem",
                        lineHeight: 1.7,
                        color: "var(--text-muted)",
                        marginBottom: "16px",
                    }}>
                        Eliminate boilerplate noise with standardized handlers:
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        {dryItems.map((item, i) => (
                            <div key={i} style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "10px 14px",
                                borderRadius: "6px",
                                fontSize: "0.8125rem",
                                color: "var(--text-secondary)",
                            }}>
                                <div style={{
                                    width: "4px", height: "4px",
                                    borderRadius: "50%",
                                    background: "var(--text-faint)",
                                    flexShrink: 0,
                                }} />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 12-Factor */}
                <div>
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
                        12-Factor App Compatibility
                    </h2>

                    <div style={{
                        padding: "24px",
                        borderRadius: "12px",
                        background: "var(--bg-surface)",
                        border: "1px solid var(--border-muted)",
                        position: "relative",
                        overflow: "hidden",
                    }}>
                        <div style={{
                            position: "absolute",
                            top: "-20px",
                            right: "-20px",
                            width: "120px",
                            height: "120px",
                            background: "radial-gradient(circle, rgba(139,148,158,0.08) 0%, transparent 70%)",
                            borderRadius: "50%",
                            filter: "blur(30px)",
                        }} />
                        <p style={{
                            fontSize: "0.875rem",
                            lineHeight: 1.8,
                            color: "var(--text-muted)",
                            position: "relative",
                            zIndex: 1,
                        }}>
                            CL provides the structure for modern, cloud-native apps by enforcing config management via Orbit,
                            treating services as attached resources, and encouraging stateless logic.
                        </p>
                    </div>
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
                        href="/docs"
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
                        <IconArrowLeft /> Introduction
                    </a>
                    <a
                        href="/docs/quick-start"
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
                        Next: Quick Start <IconArrowRight />
                    </a>
                </div>
            </motion.div>
        </DocLayout>
    );
}
