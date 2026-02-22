"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
    { label: "Standard", href: "/docs" },
    { label: "Rules", href: "/docs/rules" },
    { label: "Ecosystem", href: "/docs/ecosystem" },
    { label: "CLI", href: "/docs/cli" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
            scrolled ? "bg-[#080a0d]/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        )}>
            <div className="max-w-[1400px] mx-auto px-8 h-16 flex items-center justify-between">
                <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                    <div style={{
                        width: "24px", height: "24px",
                        border: "1.5px solid rgba(255,255,255,0.2)",
                        borderRadius: "6px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: "rgba(255,255,255,0.05)",
                    }}>
                        <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "10px", fontWeight: 700, color: "var(--text-primary)" }}>CL</span>
                    </div>
                    <span style={{
                        fontFamily: "var(--font-poppins), sans-serif",
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        letterSpacing: "-0.01em"
                    }}>
                        Core<span style={{ color: "var(--text-muted)" }}>—</span>Line
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 text-[0.8125rem] font-medium text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <Link
                    href="/docs/quick-start"
                    style={{
                        padding: "6px 14px",
                        borderRadius: "100px",
                        background: "var(--text-primary)",
                        color: "var(--bg-base)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(0.9)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.filter = "brightness(1)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                    Get Started
                </Link>
            </div>
        </nav>
    );
}
