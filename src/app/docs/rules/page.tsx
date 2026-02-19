"use client";

import { DocLayout } from "@/components/layout/DocLayout";
import { motion } from "framer-motion";


const IconArrowLeft = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
);


function Badge({ label }: { label: string }) {
    const colors: Record<string, { bg: string; border: string; text: string }> = {
        MANDATORY: { bg: "rgba(139,148,158,0.1)", border: "rgba(139,148,158,0.2)", text: "var(--text-secondary)" },
        STRICT: { bg: "rgba(139,148,158,0.08)", border: "rgba(139,148,158,0.15)", text: "var(--text-muted)" },
        DRY: { bg: "rgba(139,148,158,0.06)", border: "rgba(139,148,158,0.12)", text: "var(--text-muted)" },
        PROTECTED: { bg: "rgba(139,148,158,0.08)", border: "rgba(139,148,158,0.15)", text: "var(--text-muted)" },
        CONVENTION: { bg: "rgba(139,148,158,0.06)", border: "rgba(139,148,158,0.1)", text: "var(--text-faint)" },
    };

    const style = colors[label] ?? colors.CONVENTION;

    return (
        <span style={{
            padding: "2px 8px",
            borderRadius: "100px",
            fontSize: "0.625rem",
            fontWeight: 600,
            fontFamily: "var(--font-jetbrains-mono), monospace",
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            background: style.bg,
            border: `1px solid ${style.border}`,
            color: style.text,
        }}>
            {label}
        </span>
    );
}


const rules = [
    {
        number: "01",
        title: "Unidirectional Flow",
        badge: "MANDATORY",
        details: [
            "Every HTTP/gRPC/event-driven request follows one direction: Route → Port → Flow → Source.",
            "No backward calls. No skipping layers. No circular dependencies.",
        ],
    },
    {
        number: "02",
        title: "Layer Responsibility",
        badge: "STRICT",
        details: [
            "Port: Handles request/response parsing. No business logic.",
            "Flow: Contains all business logic, orchestration, and validations.",
            "Source: Manages external I/O — databases, caches, third-party APIs.",
        ],
    },
    {
        number: "03",
        title: "DTO Contracts",
        badge: "STRICT",
        details: [
            "Every inter-layer communication uses typed DTOs.",
            "No raw objects, no untyped maps, no ambient data.",
        ],
    },
    {
        number: "04",
        title: "Global Async Handler",
        badge: "DRY",
        details: [
            "A centralized error handler wraps all async operations.",
            "No try/catch blocks in individual layers except for domain-specific recovery.",
        ],
    },
    {
        number: "05",
        title: "Universal Response Shape",
        badge: "DRY",
        details: [
            "All API responses follow the same envelope: { success, data, error, meta }.",
            "Consistency across the entire service boundary.",
        ],
    },
    {
        number: "06",
        title: "Source Isolation",
        badge: "PROTECTED",
        details: [
            "Source implementations are never imported directly by Flow.",
            "Use interfaces/abstractions so sources can be swapped without touching business logic.",
        ],
    },
    {
        number: "07",
        title: "Logging Discipline",
        badge: "CONVENTION",
        details: [
            "Structured logging at every layer boundary.",
            "Request correlation IDs propagated through the entire call chain.",
        ],
    },
    {
        number: "08",
        title: "Commit Discipline",
        badge: "CONVENTION",
        details: [
            "Atomic commits following the conventional commit standard.",
            "Format: type(scope): description — e.g., feat(user): add registration flow.",
        ],
    },
];

export default function RulesPage() {
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
                        Rules & Guarantees
                    </h1>
                    <p style={{
                        fontSize: "1.0625rem",
                        lineHeight: 1.7,
                        color: "var(--text-secondary)",
                        maxWidth: "480px",
                    }}>
                        The non-negotiable rules that keep your codebase sane.
                    </p>
                </motion.div>
            </div>


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ marginBottom: "40px" }}
            >
                <div style={{
                    padding: "20px 24px",
                    borderRadius: "10px",
                    background: "var(--bg-surface)",
                    borderLeft: "3px solid var(--border-strong)",
                    fontStyle: "italic",
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                    color: "var(--text-secondary)",
                }}>
                    These rules are not suggestions. They are the contract between your code and your team.
                </div>
            </motion.div>


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
                {rules.map((rule, i) => (
                    <div
                        key={i}
                        style={{
                            padding: "20px 22px",
                            borderRadius: "10px",
                            background: "var(--bg-surface)",
                            border: "1px solid var(--border-muted)",
                            transition: "border-color 0.2s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-default)")}
                        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-muted)")}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                            <span style={{
                                fontFamily: "var(--font-jetbrains-mono), monospace",
                                fontSize: "0.6875rem",
                                fontWeight: 600,
                                color: "var(--text-faint)",
                                letterSpacing: "0.05em",
                            }}>
                                {rule.number}
                            </span>
                            <h3 style={{
                                fontFamily: "var(--font-poppins), sans-serif",
                                fontSize: "1rem",
                                fontWeight: 600,
                                color: "var(--text-primary)",
                                flex: 1,
                            }}>
                                {rule.title}
                            </h3>
                            <Badge label={rule.badge} />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingLeft: "30px" }}>
                            {rule.details.map((detail, j) => (
                                <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                                    <div style={{
                                        width: "4px", height: "4px",
                                        borderRadius: "50%",
                                        background: "var(--text-faint)",
                                        flexShrink: 0,
                                        marginTop: "8px",
                                    }} />
                                    <span style={{
                                        fontSize: "0.8125rem",
                                        lineHeight: 1.6,
                                        color: "var(--text-muted)",
                                    }}>
                                        {detail}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}


                <div style={{
                    marginTop: "32px",
                    paddingTop: "24px",
                    borderTop: "1px solid var(--border-muted)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <a
                        href="/docs/quick-start"
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
                        <IconArrowLeft /> Quick Start
                    </a>
                    <span style={{
                        fontSize: "0.75rem",
                        color: "var(--text-faint)",
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                    }}>
                        Last updated: February 2026
                    </span>
                </div>
            </motion.div>
        </DocLayout>
    );
}
