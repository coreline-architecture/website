"use client";

import { DocLayout } from "@/components/layout/DocLayout";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const IconPlus = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
);

const IconMinus = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
);

function FaqItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div style={{
            borderBottom: "1px solid var(--border-muted)",
            padding: "24px 0",
        }}>
            <button
                onClick={() => setOpen(!open)}
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "16px",
                }}
            >
                <span style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)", fontFamily: "var(--font-poppins), sans-serif" }}>{question}</span>
                <span style={{ color: "var(--text-faint)", flexShrink: 0 }}>{open ? <IconMinus /> : <IconPlus />}</span>
            </button>
            {open && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    style={{ marginTop: "16px", color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.7 }}
                >
                    {answer}
                </motion.div>
            )}
        </div>
    );
}

export default function FaqPage() {
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
                        Clarification
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
                        Frequently <span style={{ color: "var(--text-muted)" }}>Asked Questions</span>
                    </h1>
                    <p style={{
                        fontSize: "1.125rem",
                        lineHeight: 1.75,
                        color: "var(--text-secondary)",
                        maxWidth: "600px",
                    }}>
                        Answers to the most common questions about the Core-Line Architecture standard.
                    </p>
                </motion.div>
            </div>

            <section style={{ marginBottom: "80px" }}>
                <FaqItem
                    question="Is CL-Architecture a framework?"
                    answer="No. It is an architecture standard. You still choose your preferred tools (Express, Fastify, Gin, etc.). CL only controls how your code is structured and how data flows through it."
                />
                <FaqItem
                    question="Can I use CL-Architecture with NestJS?"
                    answer="Technically yes, but it is not recommended. NestJS already enforces its own architecture. CL-Architecture is designed for teams that prefer explicit control over magic and decorators."
                />
                <FaqItem
                    question="Do I have to use the CLI?"
                    answer="You can use CL without the CLI, but it is strongly recommended. The CLI enforces correct structure, prevents rule violations, and saves significant setup time while keeping the team consistent."
                />
                <FaqItem
                    question="Can I customize folder names or layers?"
                    answer="No. CL-Architecture is opinionated by design. Changing names or layers breaks CLI automation, team consistency, and the architectural guarantees that CL provides."
                />
                <FaqItem
                    question="How is this different from Clean Architecture?"
                    answer="Clean Architecture explains principles but leaves implementation details open. CL-Architecture enforces a specific file structure, exact naming, and clear rules, providing a 'floor plan' version of Clean Architecture."
                />
                <FaqItem
                    question="Can I use any database or ORM?"
                    answer="Yes. CL is agnostic to your data storage layer. All DB-specific logic (Prisma, TypeORM, raw SQL) is confined strictly within the Source layer."
                />
                <FaqItem
                    question="Does CL support microservices?"
                    answer="Yes. CL works exceptionally well for both monoliths and microservices. Because every module follows the same rules, services become predictable and easy to interconnect."
                />
            </section>

            <div style={{
                marginTop: "64px",
                paddingTop: "32px",
                borderTop: "1px solid var(--border-muted)",
                textAlign: "center"
            }}>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "16px" }}>Have more questions?</p>
                <a
                    href="https://github.com/coreline-architecture"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        padding: "10px 24px",
                        borderRadius: "8px",
                        background: "var(--bg-elevated)",
                        border: "1px solid var(--border-default)",
                        color: "var(--text-primary)",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        display: "inline-block",
                        transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--text-secondary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-default)")}
                >
                    Visit GitHub Discussions
                </a>
            </div>
        </DocLayout>
    );
}
