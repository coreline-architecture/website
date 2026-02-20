"use client";

import { DocLayout } from "@/components/layout/DocLayout";
import { motion } from "framer-motion";
import Link from "next/link";

const IconArrowRight = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

export default function DocsPage() {
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
                        marginBottom: "16px",
                    }}>
                        Introduction
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
                        What is <span style={{ color: "var(--text-muted)" }}>Core—Line?</span>
                    </h1>
                    <p style={{
                        fontSize: "1.125rem",
                        lineHeight: 1.75,
                        color: "var(--text-secondary)",
                        maxWidth: "600px",
                        fontWeight: 450,
                    }}>
                        A strict backend architecture standard designed to control complexity, eliminate ambiguity, and enforce world-class discipline in any codebase.
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
                    letterSpacing: "-0.01em",
                }}>
                    The Core-Line Concept
                </h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "32px", lineHeight: "1.8", fontSize: "1rem" }}>
                    At the heart of CL-Architecture is a simple, non-negotiable rule:
                    <strong style={{ color: "var(--text-primary)" }}> Every request must follow one clear, linear path.</strong>
                </p>

                <div style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid var(--border-muted)",
                    borderRadius: "16px",
                    padding: "40px",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "0.875rem",
                    color: "var(--text-primary)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "32px",
                    position: "relative",
                    overflow: "hidden",
                }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, var(--border-muted), transparent)" }} />

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                        <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Entry</div>
                        <div style={{ padding: "8px 16px", borderRadius: "6px", border: "1px solid var(--border-muted)", background: "var(--bg-elevated)" }}>Route</div>
                    </div>
                    <div style={{ opacity: 0.3, fontSize: "1.25rem" }}>↓</div>
                    <div style={{ padding: "8px 16px", borderRadius: "6px", border: "1px solid var(--border-muted)", background: "var(--bg-elevated)" }}>Port <span style={{ color: "var(--text-muted)", opacity: 0.6 }}>(Controller)</span></div>
                    <div style={{ opacity: 0.3, fontSize: "1.25rem" }}>↓</div>
                    <div style={{ padding: "10px 20px", borderRadius: "6px", border: "1px solid var(--text-muted)", background: "rgba(255,255,255,0.05)", fontWeight: 600 }}>Flow <span style={{ color: "var(--text-muted)", fontWeight: 400, opacity: 0.8 }}>(Business Logic)</span></div>
                    <div style={{ opacity: 0.3, fontSize: "1.25rem" }}>↓</div>
                    <div style={{ padding: "8px 16px", borderRadius: "6px", border: "1px solid var(--border-muted)", background: "var(--bg-elevated)" }}>Source <span style={{ color: "var(--text-muted)", opacity: 0.6 }}>(Data / API)</span></div>
                    <div style={{ opacity: 0.3, fontSize: "1.25rem" }}>↓</div>
                    <div style={{ padding: "10px 20px", borderRadius: "6px", border: "1px solid var(--text-muted)", background: "rgba(255,255,255,0.05)", fontWeight: 600 }}>Flow</div>
                    <div style={{ opacity: 0.3, fontSize: "1.25rem" }}>↓</div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                        <div style={{ padding: "8px 16px", borderRadius: "6px", border: "1px solid var(--border-muted)", background: "var(--bg-elevated)" }}>Response</div>
                        <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Exit</div>
                    </div>
                </div>

                <p style={{ color: "var(--text-secondary)", lineHeight: "1.8", fontSize: "0.9375rem" }}>
                    No skipping layers. No calling Source from Controller. No calling Controller logic from Flow.
                    This linear flow is what we call the <strong style={{ color: "var(--text-primary)" }}>Core Line</strong>.
                </p>
            </section>

            <section style={{ marginBottom: "80px" }}>
                <h2 style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    marginBottom: "24px",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-poppins), sans-serif",
                }}>
                    Naming Styles
                </h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "32px", lineHeight: "1.8" }}>
                    CL-Architecture is about discipline, not just vocabulary. You can use our specialized naming or traditional industry terms.
                </p>
                <div style={{
                    overflowX: "auto",
                    border: "1px solid var(--border-muted)",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,0.01)"
                }}>
                    <table style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: "0.875rem",
                        textAlign: "left"
                    }}>
                        <thead>
                            <tr style={{ background: "rgba(255, 255, 255, 0.03)", borderBottom: "1px solid var(--border-muted)" }}>
                                <th style={{ padding: "16px 24px", color: "var(--text-muted)", fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Layer</th>
                                <th style={{ padding: "16px 24px", color: "var(--text-primary)", fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Core-Line Term</th>
                                <th style={{ padding: "16px 24px", color: "var(--text-secondary)", fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Industry Standard</th>
                                <th style={{ padding: "16px 24px", color: "var(--text-muted)", fontWeight: 400, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { layer: "I/O", cl: "Port", std: "Controller", role: "Request handling & parsing" },
                                { layer: "Logic", cl: "Flow", std: "Service / Use Case", role: "Business logic & orchestration" },
                                { layer: "Data", cl: "Source", std: "Repository", role: "Data access & external I/O" },
                                { layer: "DTO", cl: "Bridge", std: "DTO / Mapper", role: "Data transformation" },
                                { layer: "Policy", cl: "Rule", std: "Validation / Guard", role: "Input & state validation" },
                                { layer: "Entity", cl: "Shape", std: "Model / Entity", role: "Core data structures" },
                            ].map((row, i, arr) => (
                                <tr key={i} style={{
                                    borderBottom: i === arr.length - 1 ? "none" : "1px solid var(--border-muted)",
                                    transition: "background 0.2s ease"
                                }}
                                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                                >
                                    <td style={{ padding: "16px 24px", color: "var(--text-faint)", fontWeight: 600, fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "0.75rem" }}>{row.layer}</td>
                                    <td style={{ padding: "16px 24px", color: "var(--text-primary)", fontWeight: 600 }}>{row.cl}</td>
                                    <td style={{ padding: "16px 24px", color: "var(--text-secondary)" }}>{row.std}</td>
                                    <td style={{ padding: "16px 24px", color: "var(--text-muted)", fontSize: "0.8125rem" }}>{row.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
                    Architecture Philosophy
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
                    {[
                        { title: "Discipline over Freedom", text: "Freedom leads to inconsistency. Strict rules lead to maintainable systems that scale predictably." },
                        { title: "Explicit over Implicit", text: "No magic, no hidden logic, and no automatic dependency injection that obscures the flow." },
                        { title: "Structure over Shortcuts", text: "We value a slightly more verbose structure if it guarantees long-term clarity and safety." },
                        { title: "Consistency over Flexibility", text: "A team is only as fast as its slowest newcomer. Consistency ensures instant onboarding." }
                    ].map((item, i) => (
                        <div key={i} style={{
                            padding: "32px",
                            borderRadius: "16px",
                            background: "rgba(255, 255, 255, 0.02)",
                            border: "1px solid var(--border-muted)",
                            transition: "all 0.3s ease",
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-default)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-muted)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
                        >
                            <h4 style={{ color: "var(--text-primary)", fontSize: "1rem", fontWeight: 600, marginBottom: "12px", fontFamily: "var(--font-poppins), sans-serif" }}>{item.title}</h4>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>{item.text}</p>
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
                    Comparison
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {[
                        { vs: "MVC", desc: "MVC allows logic to spread into models and controllers indiscriminately. CL forces logic into the Flow layer only." },
                        { vs: "Clean Architecture", desc: "While sharing goals, CL is more opinionated on the exact file structure and layer interaction rules." },
                        { vs: "Framework-Specific", desc: "Most architectures are tied to a framework's magic. CL is 100% framework-agnostic." }
                    ].map((item, i) => (
                        <div key={i} style={{ display: "flex", gap: "24px", padding: "16px 0", borderBottom: i === 2 ? "none" : "1px solid var(--border-muted)" }}>
                            <div style={{ width: "140px", flexShrink: 0, fontWeight: 600, color: "var(--text-secondary)", fontSize: "0.875rem" }}>vs {item.vs}</div>
                            <div style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.6 }}>{item.desc}</div>
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
                <div style={{ fontSize: "0.75rem", color: "var(--text-faint)", fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                    Last updated Feb 2026
                </div>
                <Link
                    href="/docs/standards"
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
                    Next: Standards
                    <IconArrowRight />
                </Link>
            </div>
        </DocLayout>
    );
}
