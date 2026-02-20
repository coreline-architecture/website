"use client";

import { DocLayout } from "@/components/layout/DocLayout";
import { motion } from "framer-motion";
import Link from "next/link";

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

function StandardItem({ title, badge, children }: { title: string; badge: string; children: React.ReactNode }) {
    return (
        <div style={{
            padding: "32px",
            borderRadius: "16px",
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid var(--border-muted)",
            marginBottom: "24px",
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <h3 style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                }}>
                    {title}
                </h3>
                <span style={{
                    padding: "2px 8px",
                    borderRadius: "4px",
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    background: "rgba(139, 148, 158, 0.1)",
                    border: "1px solid rgba(139, 148, 158, 0.2)",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                }}>
                    {badge}
                </span>
            </div>
            <div style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.7 }}>
                {children}
            </div>
        </div>
    );
}

export default function StandardsPage() {
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
                        Philosophy
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
                        Scientific <span style={{ color: "var(--text-muted)" }}>Standards</span>
                    </h1>
                    <p style={{
                        fontSize: "1.125rem",
                        lineHeight: 1.75,
                        color: "var(--text-secondary)",
                        maxWidth: "600px",
                    }}>
                        CL-Architecture is not a new theory; it is a strict implementation of proven software engineering principles designed to remove human error.
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
                    SOLID Enforcement
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {[
                        { s: "S", title: "Single Responsibility", desc: "Every layer has exactly one job. Port handles I/O, Flow handles logic, Source handles data." },
                        { s: "O", title: "Open/Closed", desc: "Features are added by creating new Flows. Logic is open for extension but closed for modification." },
                        { s: "L", title: "Liskov Substitution", desc: "Source interfaces allow any implementation (Mock, DB, API) to be swapped without breaking the Flow." },
                        { s: "I", title: "Interface Segregation", desc: "Modules are self-contained. Interfaces are scoped to business contexts, preventing dependency leakage." },
                        { s: "D", title: "Dependency Inversion", desc: "The Core-Line law ensures business logic (Flow) never depends on technical details (DB/SDK)." },
                    ].map((item, i) => (
                        <div key={i} style={{ display: "flex", gap: "24px", padding: "20px", borderRadius: "12px", border: "1px solid var(--border-muted)", background: "rgba(255,255,255,0.01)" }}>
                            <div style={{
                                width: "40px", height: "40px", borderRadius: "8px", background: "var(--bg-elevated)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontFamily: "var(--font-jetbrains-mono), monospace", fontWeight: 700, color: "var(--text-primary)",
                                border: "1px solid var(--border-muted)", flexShrink: 0
                            }}>
                                {item.s}
                            </div>
                            <div>
                                <h4 style={{ color: "var(--text-primary)", fontSize: "0.9375rem", fontWeight: 600, marginBottom: "4px" }}>{item.title}</h4>
                                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.6 }}>{item.desc}</p>
                            </div>
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
                    Cloud Native & 12-Factor
                </h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "32px", lineHeight: "1.8" }}>
                    Core-Line internalizes the 12-Factor App methodology to ensure deployment readiness and scalability.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
                    <StandardItem title="Orbit Layer" badge="Config (III)">
                        Configuration and environment variables are centralized, protecting your core logic from infrastructure details.
                    </StandardItem>
                    <StandardItem title="Source/Link" badge="Backing Services (IV)">
                        Treats databases and external APIs as replaceable attachments via strict interface abstraction.
                    </StandardItem>
                    <StandardItem title="Pulse Layer" badge="Logs (XI)">
                        Handles logging as continuous event streams, ensuring observability across every module.
                    </StandardItem>
                    <StandardItem title="Flow Layer" badge="Statelessness (VI)">
                        Encourages pure logic and state-free flows for trivial horizontal scaling and serverless compatibility.
                    </StandardItem>
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
                    Engineering Guardrails
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {[
                        { title: "CQRS Native", desc: "By treating every feature as an independent Flow, CL separates Commands from Queries naturally." },
                        { title: "Zero-Trust Delivery", desc: "Strict atomic commits and machine-readable Git history enforced by automation." },
                        { title: "Boilerplate Elimination", desc: "Eliminates redundant try/catch blocks and duplicate validation logic via centralized handlers." },
                        { title: "Mental Mapping", desc: "The Core-Line acts as a floor-plan that signals when logic is becoming too complex for maintenance." }
                    ].map((item, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0" }}>
                            <div style={{ color: "var(--text-muted)" }}><IconCheck /></div>
                            <div>
                                <span style={{ fontWeight: 600, color: "var(--text-secondary)", fontSize: "0.9375rem" }}>{item.title}: </span>
                                <span style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>{item.desc}</span>
                            </div>
                        </div>
                    ))}
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
                    href="/docs"
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
                    Previous: Introduction
                </Link>
                <Link
                    href="/docs/ecosystem"
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
                    Next: Ecosystem
                    <IconArrowRight />
                </Link>
            </div>
        </DocLayout>
    );
}
