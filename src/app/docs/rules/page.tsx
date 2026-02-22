"use client";

import { DocLayout } from "@/components/layout/DocLayout";
import { motion } from "framer-motion";
import Link from "next/link";

const IconLock = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

const IconAlert = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
);

const IconArrowRight = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

function RuleCard({ title, code, children }: { title: string; code?: string; children: React.ReactNode }) {
    return (
        <div style={{
            padding: "32px",
            borderRadius: "16px",
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid var(--border-muted)",
            marginBottom: "32px",
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <div style={{ color: "var(--text-faint)" }}><IconLock /></div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "var(--text-primary)", fontFamily: "var(--font-poppins), sans-serif" }}>{title}</h3>
                {code && <span style={{ marginLeft: "auto", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "0.625rem", color: "var(--text-faint)", background: "rgba(255,255,255,0.05)", padding: "2px 6px", borderRadius: "4px" }}>{code}</span>}
            </div>
            <div style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.7 }}>
                {children}
            </div>
        </div>
    );
}

export default function RulesPage() {
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
                        Implementation
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
                        Rules & <span style={{ color: "var(--text-muted)" }}>Guarantees</span>
                    </h1>
                    <p style={{
                        fontSize: "1.125rem",
                        lineHeight: 1.75,
                        color: "var(--text-secondary)",
                        maxWidth: "600px",
                    }}>
                        The "Laws of the Core-Line" ensure that every developer on the team writes code that looks, performs, and scales identically.
                    </p>
                </motion.div>
            </div>

            <section style={{ marginBottom: "80px" }}>
                <div style={{
                    padding: "24px",
                    borderRadius: "12px",
                    background: "rgba(235, 87, 87, 0.05)",
                    border: "1px solid rgba(235, 87, 87, 0.2)",
                    color: "rgba(235, 87, 87, 0.9)",
                    display: "flex",
                    gap: "16px",
                    marginBottom: "48px"
                }}>
                    <div style={{ marginTop: "2px" }}><IconAlert /></div>
                    <div style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                        <strong>Golden Rule:</strong> High-level business logic (Flow) must NEVER depend on low-level technical details (Source/Link). All communication with the outside world must be through interfaces.
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <RuleCard title="The Controller 'Async Wrap' Rule" code="LAW-001">
                        Controllers (Ports) must never contain try/catch blocks. Error handling must be delegated to the <strong>Pulse</strong> layer. This ensures that controllers remain lean and solely focused on request parsing.
                    </RuleCard>

                    <RuleCard title="Layer Directionality" code="LAW-002">
                        Data flows in one direction: <strong>Port → Flow → Source/Link</strong>. It is strictly forbidden for a Source to call a Flow, or for a Flow to call a Port.
                    </RuleCard>

                    <RuleCard title="Global Response Shape" code="LAW-003">
                        Every API response must follow the <strong>Gateway</strong> standard. This ensures that the frontend receives a consistent object structure (Success, Data, Error, Meta) regardless of which module or microservice is being called.
                    </RuleCard>

                    <RuleCard title="Validation & Mapping" code="LAW-004">
                        Validation must happen in the <strong>Rule</strong> layer before data enters the logic Flow. Data transformation (Bridge) must happen before data leaves the system, ensuring internal <strong>Shapes</strong> never leak to the client.
                    </RuleCard>

                    <RuleCard title="No Framework Bleeding" code="LAW-005">
                        Business logic (Flow) classes should be pure. They should not import framework-specific decorators, request objects, or database-specific types.
                    </RuleCard>
                </div>
            </section>

            <section style={{ marginBottom: "80px" }}>
                <h2 style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    marginBottom: "32px",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-poppins), sans-serif",
                }}>
                    Development Discipline
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "32px" }}>
                    <div style={{ padding: "32px", borderRadius: "16px", background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--border-muted)" }}>
                        <h4 style={{ color: "var(--text-primary)", fontSize: "1rem", fontWeight: 600, marginBottom: "16px", fontFamily: "var(--font-poppins), sans-serif" }}>Atomic Commits (Rule 13)</h4>
                        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "16px" }}>
                            Every change must be a single, trackable logical unit using the Conventional Commits format.
                        </p>
                        <ul style={{ color: "var(--text-faint)", fontSize: "0.8125rem", paddingLeft: "18px", margin: 0 }}>
                            <li style={{ marginBottom: "8px" }}>Force consistency via automated Git hooks.</li>
                            <li style={{ marginBottom: "8px" }}>Enforce linting and message validation.</li>
                            <li>Enable automated changelog generation.</li>
                        </ul>
                    </div>
                    <div style={{ padding: "32px", borderRadius: "16px", background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--border-muted)" }}>
                        <h4 style={{ color: "var(--text-primary)", fontSize: "1rem", fontWeight: 600, marginBottom: "16px", fontFamily: "var(--font-poppins), sans-serif" }}>Branching Model (Rule 15)</h4>
                        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "16px" }}>
                            A strict hierarchical model to protect production stability and streamline integration.
                        </p>
                        <ul style={{ color: "var(--text-faint)", fontSize: "0.8125rem", paddingLeft: "18px", margin: 0 }}>
                            <li style={{ marginBottom: "8px" }}><strong>main</strong>: Sacred production space.</li>
                            <li style={{ marginBottom: "8px" }}><strong>dev</strong>: Heart of integration & testing.</li>
                            <li><strong>feature/</strong>: Isolated task development.</li>
                        </ul>
                    </div>
                </div>

                <h2 style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    marginBottom: "32px",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-poppins), sans-serif",
                }}>
                    Layer Responsibilities
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
                    {[
                        { title: "Pulse", desc: "The heartbeat. Responsible for global error harvesting, logging, and observability." },
                        { title: "Orbit", desc: "The atmosphere. Responsible for configuration, environment security, and constants." },
                        { title: "Gateway", desc: "The interface. Responsible for standardizing the shape of every outgoing response." },
                        { title: "Shape", desc: "The DNA. Responsible for defining the internal core data models used by the Flow." },
                        { title: "Bridge", desc: "The translator. Responsible for mapping internal Shapes to external DTOs." },
                        { title: "Link", desc: "The tether. Responsible for third-party integrations (Stripe, Twilio, etc.) via strict providers." }
                    ].map((item, i) => (
                        <div key={i} style={{ padding: "24px", borderRadius: "12px", background: "rgba(255,255,255,0.01)", border: "1px solid var(--border-muted)" }}>
                            <h4 style={{ color: "var(--text-primary)", fontSize: "0.9375rem", fontWeight: 600, marginBottom: "8px" }}>{item.title}</h4>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem", lineHeight: 1.6 }}>{item.desc}</p>
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
                    href="/docs/quick-start"
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
                    Previous: Quick Start
                </Link>
                <Link
                    href="/docs/cli"
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
                    Next: CLI Tools
                    <IconArrowRight />
                </Link>
            </div>
        </DocLayout>
    );
}
