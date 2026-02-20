"use client";

import { DocLayout } from "@/components/layout/DocLayout";
import { motion } from "framer-motion";
import Link from "next/link";

const IconCheck = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const IconArrowRight = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

function EcosystemCard({ title, items, win }: { title: string; items: string[]; win: string }) {
    return (
        <div style={{
            padding: "32px",
            borderRadius: "16px",
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid var(--border-muted)",
            height: "100%",
            display: "flex",
            flexDirection: "column",
        }}>
            <h3 style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: "20px",
            }}>
                {title}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px", flex: 1 }}>
                {items.map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "10px", fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                        <div style={{ color: "var(--text-faint)", marginTop: "2px" }}><IconCheck /></div>
                        {item}
                    </div>
                ))}
            </div>
            <div style={{
                marginTop: "auto",
                paddingTop: "16px",
                borderTop: "1px solid var(--border-muted)",
                fontSize: "0.8125rem",
                color: "var(--text-secondary)",
                fontStyle: "italic",
            }}>
                <strong style={{ color: "var(--text-primary)", fontStyle: "normal" }}>The Win:</strong> {win}
            </div>
        </div>
    );
}

export default function EcosystemPage() {
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
                        Adaptation
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
                        Language & <span style={{ color: "var(--text-muted)" }}>Frameworks</span>
                    </h1>
                    <p style={{
                        fontSize: "1.125rem",
                        lineHeight: 1.75,
                        color: "var(--text-secondary)",
                        maxWidth: "600px",
                    }}>
                        CL-Architecture is a Language-Agnostic standard. It defines the "How" and "Where" of data flow, making it compatible with every major backend ecosystem.
                    </p>
                </motion.div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginBottom: "80px" }}>
                <EcosystemCard
                    title="Node.js / TypeScript"
                    items={[
                        "Works with Express, Fastify, and NestJS.",
                        "Ports act as route handlers; Pulse handles middleware.",
                        "Enforce strict typing across layer boundaries."
                    ]}
                    win="Prevents the 'Fat Controller' syndrome and circular dependencies common in JS apps."
                />
                <EcosystemCard
                    title="Go (Golang)"
                    items={[
                        "Leverages native Go interfaces for Source layer abstraction.",
                        "Standard library http.HandlerFunc acts as the Port.",
                        "Direct mapping to Go's explicit package structure."
                    ]}
                    win="Matches Go's philosophy perfectly, enforcing clean boundaries and explicit logic flow."
                />
                <EcosystemCard
                    title="Python"
                    items={[
                        "Compatible with FastAPI and Django.",
                        "Use Pydantic models in Rule and Bridge layers.",
                        "Flow layer remains 100% framework-independent."
                    ]}
                    win="Makes business logic 100% testable without mocking complex framework DI systems."
                />
                <EcosystemCard
                    title="JVM / .NET"
                    items={[
                        "Fits Spring Boot and .NET Core patterns perfectly.",
                        "Enforces the Bridge layer so Entities never leak into responses.",
                        "Brings Clean Architecture benefits without the boilerplate."
                    ]}
                    win="Eliminates the 'Hidden Magic' trap by making every layer transition explicit."
                />
            </div>

            <section style={{
                padding: "40px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.01)",
                border: "1px solid var(--border-muted)",
                marginBottom: "80px",
                position: "relative",
                overflow: "hidden"
            }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: "4px", height: "100%", background: "var(--text-faint)" }} />
                <h2 style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    marginBottom: "20px",
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-poppins), sans-serif",
                }}>
                    Why it works everywhere
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
                    {[
                        { title: "Dependency Inversion", desc: "Every layer talks to the next via strict interfaces/types." },
                        { title: "Vendor Neutrality", desc: "External SDKs are isolated in the Link layer, protecting core logic." },
                        { title: "Boundary Protection", desc: "Your business logic (Flow) is never 'married' to your framework." }
                    ].map((item, i) => (
                        <div key={i}>
                            <h4 style={{ color: "var(--text-secondary)", fontSize: "0.875rem", fontWeight: 600, marginBottom: "8px" }}>{item.title}</h4>
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
                    href="/docs/standards"
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
                    Previous: Standards
                </Link>
                <Link
                    href="/docs/quick-start"
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
                    Next: Quick Start
                    <IconArrowRight />
                </Link>
            </div>
        </DocLayout>
    );
}
