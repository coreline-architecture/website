"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";


const IconBook = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
);

const IconRocket = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
);

const IconLayers = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
    </svg>
);

const IconTerminal = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
);

const IconChevron = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

const IconMenu = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

const IconX = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const IconGitHub = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);
const sidebarGroups = [
    {
        title: "Introduction",
        icon: <IconBook />,
        items: [
            { label: "What is Core-Line?", href: "/docs" },
            { label: "Standards", href: "/docs/standards" },
            { label: "Ecosystem", href: "/docs/ecosystem" },
            { label: "FAQ", href: "/docs/faq" },
        ]
    },
    {
        title: "Getting Started",
        icon: <IconRocket />,
        items: [
            { label: "Quick Start", href: "/docs/quick-start" },
        ]
    },
    {
        title: "Architecture",
        icon: <IconLayers />,
        items: [
            { label: "Rules & Guarantees", href: "/docs/rules" },
        ]
    },
    {
        title: "CLI Tools",
        icon: <IconTerminal />,
        items: [
            { label: "CLI Reference", href: "/docs/cli" },
        ]
    },
];

function DocsNavbar() {
    const [scrolled, setScrolled] = useState(false);

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => setScrolled(window.scrollY > 30), { passive: true });
    }

    return (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "56px",
                padding: "0 32px",
                borderBottom: "1px solid",
                borderColor: scrolled ? "var(--border-default)" : "var(--border-muted)",
                background: scrolled ? "rgba(8,10,13,0.96)" : "rgba(8,10,13,0.8)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                transition: "all 0.3s ease",
            }}>
                <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
                    <div style={{
                        width: "22px", height: "22px",
                        border: "1.5px solid var(--border-strong)",
                        borderRadius: "5px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: "var(--bg-elevated)",
                    }}>
                        <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "8px", fontWeight: 700, color: "var(--text-primary)" }}>CL</span>
                    </div>
                    <span style={{ fontFamily: "var(--font-poppins), sans-serif", fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-primary)" }}>
                        Core<span style={{ color: "var(--text-muted)" }}>—</span>Line
                    </span>
                    <span style={{
                        marginLeft: "4px",
                        padding: "2px 8px",
                        borderRadius: "100px",
                        fontSize: "0.625rem",
                        fontWeight: 500,
                        background: "var(--bg-elevated)",
                        border: "1px solid var(--border-muted)",
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        letterSpacing: "0.05em",
                    }}>
                        docs
                    </span>
                </Link>

                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            display: "flex", alignItems: "center", justifyContent: "center",
                            width: "32px", height: "32px", borderRadius: "6px",
                            color: "var(--text-muted)", textDecoration: "none",
                            transition: "color 0.2s ease, background 0.2s ease",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-primary)"; e.currentTarget.style.background = "var(--bg-elevated)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.background = "transparent"; }}
                    >
                        <IconGitHub />
                    </a>
                    <Link
                        href="/"
                        style={{
                            padding: "5px 14px",
                            borderRadius: "6px",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            color: "var(--text-muted)",
                            textDecoration: "none",
                            border: "1px solid var(--border-muted)",
                            transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-strong)"; e.currentTarget.style.color = "var(--text-primary)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-muted)"; e.currentTarget.style.color = "var(--text-muted)"; }}
                    >
                        Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

function Sidebar({ mobile = false, onClose }: { mobile?: boolean; onClose?: () => void }) {
    const pathname = usePathname();

    return (
        <div style={{
            width: mobile ? "100%" : "230px",
            flexShrink: 0,
            padding: mobile ? "20px" : "0",
        }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                {sidebarGroups.map((group) => (
                    <div key={group.title}>
                        <div style={{
                            display: "flex", alignItems: "center", gap: "10px",
                            fontFamily: "var(--font-jetbrains-mono), monospace",
                            fontSize: "0.625rem",
                            fontWeight: 600,
                            letterSpacing: "0.15em",
                            textTransform: "uppercase" as const,
                            color: "var(--text-faint)",
                            marginBottom: "12px",
                            padding: "0 10px",
                        }}>
                            <span style={{ opacity: 0.6 }}>{group.icon}</span>
                            {group.title}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                            {group.items.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={onClose}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            padding: "8px 12px",
                                            borderRadius: "8px",
                                            fontSize: "0.8125rem",
                                            fontWeight: isActive ? 600 : 400,
                                            color: isActive ? "var(--text-primary)" : "var(--text-muted)",
                                            background: isActive ? "rgba(255, 255, 255, 0.03)" : "transparent",
                                            textDecoration: "none",
                                            transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                                            border: "1px solid",
                                            borderColor: isActive ? "rgba(255, 255, 255, 0.05)" : "transparent",
                                            boxShadow: isActive ? "0 4px 12px rgba(0,0,0,0.1)" : "none",
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.color = "var(--text-secondary)";
                                                e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.color = "var(--text-muted)";
                                                e.currentTarget.style.background = "transparent";
                                            }
                                        }}
                                    >
                                        {item.label}
                                        {isActive && (
                                            <motion.div layoutId="active-indicator">
                                                <IconChevron />
                                            </motion.div>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export function DocLayout({ children }: { children: React.ReactNode }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div style={{ background: "var(--bg-base)", minHeight: "100vh", color: "var(--text-primary)" }}>
            <DocsNavbar />

            <div style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "84px 32px 64px",
                display: "flex",
                gap: "48px",
            }}>
                {/* Desktop sidebar */}
                <div style={{
                    position: "sticky",
                    top: "80px",
                    height: "calc(100vh - 100px)",
                    overflowY: "auto",
                    borderRight: "1px solid var(--border-muted)",
                    paddingRight: "24px",
                }}
                    className="docs-sidebar-desktop"
                >
                    <Sidebar />
                </div>

                {/* Mobile menu button */}
                <button
                    className="docs-sidebar-mobile-btn"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    style={{
                        position: "fixed",
                        bottom: "24px",
                        right: "24px",
                        zIndex: 90,
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
                        background: "var(--bg-elevated)",
                        border: "1px solid var(--border-default)",
                        color: "var(--text-primary)",
                        display: "none",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                    }}
                >
                    {mobileOpen ? <IconX /> : <IconMenu />}
                </button>

                {/* Mobile sidebar overlay */}
                {mobileOpen && (
                    <div
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 80,
                            background: "rgba(0,0,0,0.6)",
                            backdropFilter: "blur(4px)",
                        }}
                        onClick={() => setMobileOpen(false)}
                    >
                        <div
                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                maxHeight: "70vh",
                                background: "var(--bg-surface)",
                                borderTop: "1px solid var(--border-default)",
                                borderRadius: "16px 16px 0 0",
                                overflowY: "auto",
                                padding: "8px 0",
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Sidebar mobile onClose={() => setMobileOpen(false)} />
                        </div>
                    </div>
                )}

                {/* Main content */}
                <main style={{ flex: 1, minWidth: 0, maxWidth: "740px" }}>
                    {children}
                </main>
            </div>
        </div>
    );
}
