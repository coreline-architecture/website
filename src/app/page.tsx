"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";



function Reveal({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } : { opacity: 0, y: 28 }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}


const IconLayers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const IconCode = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const IconDatabase = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12" />
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const IconGlobe = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconZap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconUsers = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconTerminal = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const IconGitHub = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);


const IconLockOpen = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
  </svg>
);

const IconBeaker = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 3h15" />
    <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
    <path d="M6 14h12" />
  </svg>
);

const IconShieldCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);


const layers = [
  {
    id: "01",
    name: "Port Layer",
    role: "Input / Output",
    description: "Handles all external communication — HTTP, WebSocket, CLI. Clean validation and response formatting at the boundary.",
    icon: <IconLayers />,
  },
  {
    id: "02",
    name: "Flow Layer",
    role: "Business Logic",
    description: "Pure orchestration of business rules. No framework coupling, no database calls — just clean, testable logic.",
    icon: <IconCode />,
  },
  {
    id: "03",
    name: "Source Layer",
    role: "Data Access",
    description: "Isolated data access layer. Databases, APIs, file systems — all abstracted behind a consistent interface.",
    icon: <IconDatabase />,
  },
  {
    id: "04",
    name: "Bridge Layer",
    role: "Transformation",
    description: "Bidirectional data mapping between layers. Keeps each layer's data model independent and decoupled.",
    icon: <IconLayers />,
  },
];

const features = [
  {
    icon: <IconGlobe />,
    title: "Language Agnostic",
    description: "Works with TypeScript, Go, Python, Java, C#, Rust — any language that supports structured programming.",
  },
  {
    icon: <IconZap />,
    title: "CLI Scaffolding",
    description: "Generate fully compliant module structures in seconds. Consistent output every time, across every project.",
  },
  {
    icon: <IconShield />,
    title: "Zero Lock-in",
    description: "Pure architectural patterns with no runtime dependencies. Adopt incrementally, migrate freely.",
  },
  {
    icon: <IconUsers />,
    title: "Team Consistency",
    description: "Shared vocabulary and structure across your entire engineering org. Onboarding becomes trivial.",
  },
  {
    icon: <IconCode />,
    title: "Testability First",
    description: "Each layer is independently testable. Unit, integration, and e2e tests become natural, not painful.",
  },
  {
    icon: <IconDatabase />,
    title: "Production Proven",
    description: "Battle-tested in production systems serving millions of requests. Designed for scale from day one.",
  },
];

const stats = [
  { value: "4", label: "Architectural Layers", suffix: "" },
  { value: "10+", label: "Languages Supported", suffix: "" },
  { value: "100%", label: "Framework Independent", suffix: "" },
  { value: "∞", label: "Scalability Ceiling", suffix: "" },
];

const integrations = [
  "TypeScript", "Go", "Python", "Java", "C#", "Rust",
  "Node.js", "NestJS", "Express", "FastAPI", "Spring", "Gin",
];


function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 30), { passive: true });
  }

  const navLinks = [
    { label: "Docs", href: "/docs" },
    { label: "Standards", href: "/docs/standards" },
    { label: "CLI", href: "/docs/cli" },
    { label: "Ecosystem", href: "/docs/ecosystem" },
  ];

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, pointerEvents: "none" }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          margin: "16px auto 0",
          maxWidth: "780px",
          padding: "0 20px",
          pointerEvents: "auto",
        }}
      >
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "48px",
          padding: "0 6px 0 14px",
          borderRadius: "100px",
          border: "1px solid",
          borderColor: scrolled ? "var(--border-default)" : "var(--border-muted)",
          background: scrolled ? "rgba(13,17,23,0.96)" : "rgba(13,17,23,0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.4)" : "none",
          transition: "all 0.3s ease",
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", flexShrink: 0 }}>
            <div style={{
              width: "24px", height: "24px",
              border: "1.5px solid var(--border-strong)",
              borderRadius: "6px",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "var(--bg-elevated)",
            }}>
              <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "9px", fontWeight: 700, color: "var(--text-primary)" }}>CL</span>
            </div>
            <span style={{ fontFamily: "var(--font-poppins), sans-serif", fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
              Core<span style={{ color: "var(--text-muted)" }}>—</span>Line
            </span>
          </Link>

          {/* Center links */}
          <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "5px 12px",
                  borderRadius: "100px",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s ease, background 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-primary)"; e.currentTarget.style.background = "var(--bg-elevated)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.background = "transparent"; }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "32px", height: "32px", borderRadius: "50%",
                color: "var(--text-muted)", textDecoration: "none",
                transition: "color 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-primary)"; e.currentTarget.style.background = "var(--bg-elevated)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.background = "transparent"; }}
            >
              <IconGitHub />
            </a>
            <Link
              href="/docs/quick-start"
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "7px 16px",
                borderRadius: "100px",
                background: "var(--text-primary)",
                color: "var(--bg-base)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background 0.2s ease, transform 0.15s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#f0f6fc"; e.currentTarget.style.transform = "scale(1.03)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--text-primary)"; e.currentTarget.style.transform = "scale(1)"; }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


const heroStacks = [
  {
    id: "node",
    label: "Node.js",
    lines: [
      { prompt: true, text: "npm install -g @core-line/cli", color: "#79c0ff" },
      { prompt: false, text: "  CLI installed successfully", color: "#8b949e" },
      { prompt: true, text: "cl init my-project", color: "#79c0ff" },
      { prompt: false, text: "  Project structure generated", color: "#8b949e" },
      { prompt: false, text: "  Layer config applied", color: "#8b949e" },
      { prompt: true, text: "cl generate module user", color: "#79c0ff" },
      { prompt: false, text: "  src/modules/user/user.port.ts", color: "#e3b341" },
      { prompt: false, text: "  src/modules/user/user.flow.ts", color: "#e3b341" },
      { prompt: false, text: "  src/modules/user/user.source.ts", color: "#e3b341" },
      { prompt: false, text: "  src/modules/user/user.bridge.ts", color: "#e3b341" },
    ],
  },
  {
    id: "go",
    label: "Go",
    lines: [
      { prompt: true, text: "go install github.com/core-line/cli@latest", color: "#79c0ff" },
      { prompt: false, text: "  CLI installed successfully", color: "#8b949e" },
      { prompt: true, text: "cl init my-service", color: "#79c0ff" },
      { prompt: false, text: "  Go module structure generated", color: "#8b949e" },
      { prompt: true, text: "cl generate module user", color: "#79c0ff" },
      { prompt: false, text: "  internal/user/user_port.go", color: "#e3b341" },
      { prompt: false, text: "  internal/user/user_flow.go", color: "#e3b341" },
      { prompt: false, text: "  internal/user/user_source.go", color: "#e3b341" },
      { prompt: false, text: "  internal/user/user_bridge.go", color: "#e3b341" },
    ],
  },
  {
    id: "python",
    label: "Python",
    lines: [
      { prompt: true, text: "pip install core-line-cli", color: "#79c0ff" },
      { prompt: false, text: "  CLI installed successfully", color: "#8b949e" },
      { prompt: true, text: "cl init my_service", color: "#79c0ff" },
      { prompt: false, text: "  Python package structure generated", color: "#8b949e" },
      { prompt: true, text: "cl generate module user", color: "#79c0ff" },
      { prompt: false, text: "  src/user/user_port.py", color: "#e3b341" },
      { prompt: false, text: "  src/user/user_flow.py", color: "#e3b341" },
      { prompt: false, text: "  src/user/user_source.py", color: "#e3b341" },
      { prompt: false, text: "  src/user/user_bridge.py", color: "#e3b341" },
    ],
  },
  {
    id: "java",
    label: "Java",
    lines: [
      { prompt: true, text: "# Add to pom.xml or build.gradle", color: "#6e7681" },
      { prompt: false, text: "  implementation 'io.coreline:cli:2.0'", color: "#a5d6ff" },
      { prompt: true, text: "cl init my-service", color: "#79c0ff" },
      { prompt: false, text: "  Maven/Gradle structure generated", color: "#8b949e" },
      { prompt: true, text: "cl generate module user", color: "#79c0ff" },
      { prompt: false, text: "  src/.../UserPort.java", color: "#e3b341" },
      { prompt: false, text: "  src/.../UserFlow.java", color: "#e3b341" },
      { prompt: false, text: "  src/.../UserSource.java", color: "#e3b341" },
      { prompt: false, text: "  src/.../UserBridge.java", color: "#e3b341" },
    ],
  },
  {
    id: "rust",
    label: "Rust",
    lines: [
      { prompt: true, text: "cargo install core-line-cli", color: "#79c0ff" },
      { prompt: false, text: "  CLI installed successfully", color: "#8b949e" },
      { prompt: true, text: "cl init my_service", color: "#79c0ff" },
      { prompt: false, text: "  Cargo workspace structure generated", color: "#8b949e" },
      { prompt: true, text: "cl generate module user", color: "#79c0ff" },
      { prompt: false, text: "  src/user/port.rs", color: "#e3b341" },
      { prompt: false, text: "  src/user/flow.rs", color: "#e3b341" },
      { prompt: false, text: "  src/user/source.rs", color: "#e3b341" },
      { prompt: false, text: "  src/user/bridge.rs", color: "#e3b341" },
    ],
  },
];

function HeroSection() {
  const [activeStack, setActiveStack] = useState(0);
  const active = heroStacks[activeStack];

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "120px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >

      <div
        className="grid-bg"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.35,
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />


      <div className="orb orb-1" />

      <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>


          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}
          >
            <div className="badge">
              <div className="badge-dot" />
              <span>v2.0 — Architecture Standard</span>
            </div>
          </motion.div>


          <motion.h1
            className="text-display"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: "24px" }}
          >
            The architecture standard
            <br />
            <span style={{
              background: "linear-gradient(135deg, #8b949e 0%, #6e7681 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              your codebase deserves
            </span>
          </motion.h1>


          <motion.p
            className="text-body"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            style={{ maxWidth: "600px", margin: "0 auto 48px", fontSize: "1.0625rem", lineHeight: 1.75 }}
          >
            Core-Line is a language-agnostic software architecture standard that brings
            clarity, consistency, and scalability to any codebase — from startup to enterprise.
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "72px", alignItems: "center" }}
          >
            <Link href="/docs/quick-start" style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              padding: "9px 20px",
              borderRadius: "100px",
              background: "var(--text-primary)",
              color: "var(--bg-base)",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#f0f6fc"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--text-primary)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Start Building <IconArrow />
            </Link>
            <Link href="/docs" style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              padding: "8px 18px",
              borderRadius: "100px",
              background: "transparent",
              color: "var(--text-secondary)",
              fontSize: "0.875rem",
              fontWeight: 500,
              textDecoration: "none",
              border: "1px solid var(--border-default)",
              transition: "all 0.2s ease",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-strong)"; e.currentTarget.style.color = "var(--text-primary)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-default)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
            >
              Documentation
            </Link>
            <Link href="/docs" style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              padding: "8px 18px",
              borderRadius: "100px",
              background: "transparent",
              color: "var(--text-muted)",
              fontSize: "0.875rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-primary)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; }}
            >
              View on GitHub
            </Link>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{
              maxWidth: "720px",
              margin: "0 auto",
              borderRadius: "16px",
              background: "rgba(10, 10, 10, 0.5)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.03)",
              overflow: "hidden",
              textAlign: "left"
            }}>

              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "14px 20px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                background: "rgba(255, 255, 255, 0.02)"
              }}>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FF5F57", opacity: 0.8 }} />
                  <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FEBC2E", opacity: 0.8 }} />
                  <div style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28C840", opacity: 0.8 }} />
                </div>
                <div style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  fontSize: "12px",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  color: "rgba(255, 255, 255, 0.3)",
                  letterSpacing: "0.05em"
                }}>
                  <IconTerminal />
                  core-line — cli
                </div>
                <div style={{ width: "33px" }} />
              </div>


              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                padding: "8px 16px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                background: "rgba(255, 255, 255, 0.01)",
                overflowX: "auto",
              }}>
                {heroStacks.map((stack, i) => (
                  <button
                    key={stack.id}
                    onClick={() => setActiveStack(i)}
                    style={{
                      padding: "5px 14px",
                      borderRadius: "6px",
                      border: "1px solid",
                      borderColor: activeStack === i ? "rgba(255, 255, 255, 0.12)" : "transparent",
                      background: activeStack === i ? "rgba(255, 255, 255, 0.06)" : "transparent",
                      color: activeStack === i ? "var(--text-primary)" : "var(--text-muted)",
                      fontSize: "0.75rem",
                      fontWeight: activeStack === i ? 600 : 400,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      whiteSpace: "nowrap",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {stack.label}
                  </button>
                ))}
              </div>


              <div style={{
                padding: "20px 24px",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "12.5px",
                lineHeight: "1.8",
                minHeight: "240px",
              }}>
                <motion.div
                  key={activeStack}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {active.lines.map((line, i) => (
                    <div key={i} style={{ marginBottom: "2px", display: "flex", gap: "8px" }}>
                      {line.prompt && <span style={{ color: "#6e7681", flexShrink: 0, userSelect: "none" }}>$</span>}
                      {!line.prompt && <span style={{ color: "transparent", flexShrink: 0, userSelect: "none" }}>$</span>}
                      <span style={{ color: line.color }}>{line.text}</span>
                    </div>
                  ))}
                  <div style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
                    <span style={{ color: "#6e7681", marginRight: "8px", userSelect: "none" }}>$</span>
                    <span className="cursor-blink" style={{ width: "7px", height: "16px", background: "rgba(255,255,255,0.35)" }} />
                  </div>
                </motion.div>
              </div>
            </div>


            <p style={{
              textAlign: "center",
              marginTop: "14px",
              fontSize: "0.75rem",
              color: "var(--text-faint)",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              letterSpacing: "0.03em",
            }}>
              Works on macOS, Windows & Linux
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function ArchitectureSection() {
  const [active, setActive] = useState<number | null>(null);

  const layerColors = ["#58a6ff", "#bc8cff", "#3fb950", "#e3b341"];

  return (
    <section className="section-pad">
      <div className="container-main">
        <Reveal className="text-center" style={{ marginBottom: "80px" }}>
          <div className="text-label" style={{ marginBottom: "16px" }}>The Science</div>
          <h2 className="text-headline" style={{ marginBottom: "16px" }}>Strict layers. One standard.</h2>
          <p className="text-body" style={{ maxWidth: "540px", margin: "0 auto" }}>
            A deterministic separation of concerns that internalizes advanced engineering principles into a single, linear flow.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          {/* Left: vertical pipeline */}
          <div style={{ position: "relative" }}>

            <div style={{
              position: "absolute",
              left: "19px",
              top: "20px",
              bottom: "20px",
              width: "1px",
              background: "linear-gradient(to bottom, var(--border-muted), var(--border-default), var(--border-muted))",
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {layers.map((layer, i) => (
                <Reveal key={i} delay={i * 0.12}>
                  <div
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                    style={{
                      display: "flex",
                      gap: "20px",
                      padding: "24px 0",
                      cursor: "default",
                      position: "relative",
                    }}
                  >

                    <div style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      border: `1.5px solid ${active === i ? layerColors[i] : "var(--border-default)"}`,
                      background: active === i ? `${layerColors[i]}18` : "var(--bg-surface)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.25s ease",
                      zIndex: 1,
                      color: active === i ? layerColors[i] : "var(--text-muted)",
                    }}>
                      {layer.icon}
                    </div>


                    <div style={{ paddingTop: "6px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                        <span style={{
                          fontFamily: "var(--font-jetbrains-mono), monospace",
                          fontSize: "0.6875rem",
                          color: active === i ? layerColors[i] : "var(--text-faint)",
                          letterSpacing: "0.1em",
                          transition: "color 0.25s ease",
                        }}>{layer.id}</span>
                        <span className="text-title" style={{ fontSize: "0.9375rem" }}>{layer.name}</span>
                        <span style={{
                          padding: "2px 8px",
                          borderRadius: "100px",
                          fontSize: "0.6875rem",
                          fontWeight: 500,
                          background: active === i ? `${layerColors[i]}18` : "var(--bg-elevated)",
                          color: active === i ? layerColors[i] : "var(--text-faint)",
                          border: `1px solid ${active === i ? layerColors[i] + "40" : "var(--border-muted)"}`,
                          transition: "all 0.25s ease",
                          letterSpacing: "0.05em",
                          fontFamily: "var(--font-jetbrains-mono), monospace",
                        }}>{layer.role}</span>
                      </div>
                      <p className="text-body" style={{ fontSize: "0.875rem" }}>{layer.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>


          <Reveal delay={0.3}>
            <div style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-muted)",
              borderRadius: "16px",
              overflow: "hidden",
              fontFamily: "var(--font-jetbrains-mono), monospace",
            }}>
              <div style={{ padding: "14px 16px", borderBottom: "1px solid var(--border-muted)", display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#28c840" }} />
                <span style={{ marginLeft: "6px", fontSize: "0.75rem", color: "var(--text-muted)" }}>request lifecycle</span>
              </div>
              <div style={{ padding: "24px" }}>
                {[
                  { label: "Incoming Request", layer: "Port Layer", color: "#58a6ff", arrow: true },
                  { label: "Business Rules", layer: "Flow Layer", color: "#bc8cff", arrow: true },
                  { label: "Data Access", layer: "Source Layer", color: "#3fb950", arrow: true },
                  { label: "Response Map", layer: "Bridge Layer", color: "#e3b341", arrow: false },
                ].map((item, i) => (
                  <div key={i}>
                    <div style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      background: "var(--bg-elevated)",
                      border: `1px solid ${item.color}30`,
                      marginBottom: item.arrow ? "0" : "0",
                    }}>
                      <span style={{ fontSize: "0.75rem", color: item.color }}>{item.label}</span>
                      <span style={{ fontSize: "0.6875rem", color: "var(--text-faint)", letterSpacing: "0.05em" }}>{item.layer}</span>
                    </div>
                    {item.arrow && (
                      <div style={{ display: "flex", justifyContent: "center", padding: "4px 0", color: "var(--text-faint)", fontSize: "0.75rem" }}>↓</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="section-pad" style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border-muted)", borderBottom: "1px solid var(--border-muted)" }}>
      <div className="container-main">
        <Reveal className="text-center" style={{ marginBottom: "72px" }}>
          <div className="text-label" style={{ marginBottom: "16px" }}>Core Principles</div>
          <h2 className="text-headline" style={{ marginBottom: "16px" }}>Engineered for absolute discipline</h2>
          <p className="text-body" style={{ maxWidth: "500px", margin: "0 auto" }}>
            Core-Line isn't just a style guide—it's a strict implementation of world-class engineering standards.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gridTemplateRows: "auto", gap: "16px" }}>
          <Reveal delay={0} style={{ gridColumn: "span 5" }}>
            <div style={{
              background: "var(--bg-elevated)", border: "1px solid var(--border-muted)",
              borderRadius: "14px", padding: "36px", height: "100%",
              transition: "border-color 0.2s ease",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-strong)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-muted)")}>
              <div style={{ marginBottom: "16px", color: "var(--text-secondary)" }}><IconShieldCheck /></div>
              <h3 className="text-title" style={{ marginBottom: "10px" }}>SOLID Enforcement</h3>
              <p className="text-body" style={{ fontSize: "0.875rem" }}>Strict single-responsibility at the layer level. Port handle I/O, Flow handle logic, Source handle data. Always.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "20px" }}>
                {["S", "O", "L", "I", "D"].map(l => (
                  <span key={l} style={{ padding: "3px 10px", borderRadius: "100px", fontSize: "0.6875rem", fontWeight: 600, background: "var(--bg-overlay)", border: "1px solid var(--border-default)", color: "var(--text-secondary)", fontFamily: "var(--font-jetbrains-mono), monospace" }}>{l}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} style={{ gridColumn: "span 4" }}>
            <div style={{
              background: "var(--bg-elevated)", border: "1px solid var(--border-muted)",
              borderRadius: "14px", padding: "32px", height: "100%",
              transition: "border-color 0.2s ease",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-strong)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-muted)")}>
              <div style={{ marginBottom: "16px", color: "var(--text-secondary)" }}><IconZap /></div>
              <h3 className="text-title" style={{ marginBottom: "10px" }}>CQRS-Native</h3>
              <p className="text-body" style={{ fontSize: "0.875rem" }}>Feature-driven Flow structure naturally separates Commands from Queries, enabling independent scaling and clarity.</p>
            </div>
          </Reveal>

          <Reveal delay={0.12} style={{ gridColumn: "span 3" }}>
            <div style={{
              background: "var(--bg-elevated)", border: "1px solid var(--border-muted)",
              borderRadius: "14px", padding: "28px", height: "100%",
              transition: "border-color 0.2s ease",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-strong)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-muted)")}>
              <div style={{ marginBottom: "16px", color: "var(--text-secondary)" }}><IconLockOpen /></div>
              <h3 className="text-title" style={{ marginBottom: "10px" }}>12-Factor Ready</h3>
              <p className="text-body" style={{ fontSize: "0.875rem" }}>Stateless flows and a dedicated Orbit layer ensure your system is cloud-native by default.</p>
            </div>
          </Reveal>

          <Reveal delay={0.15} style={{ gridColumn: "span 3" }}>
            <div style={{
              background: "var(--bg-elevated)", border: "1px solid var(--border-muted)",
              borderRadius: "14px", padding: "28px", height: "100%",
              transition: "border-color 0.2s ease",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-strong)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-muted)")}>
              <div style={{ marginBottom: "16px", color: "var(--text-secondary)" }}><IconGlobe /></div>
              <h3 className="text-title" style={{ marginBottom: "10px" }}>Stack Agnostic</h3>
              <p className="text-body" style={{ fontSize: "0.875rem" }}>The standard works in TS, Go, Python, or Rust. Use the tools you love with the structure you need.</p>
            </div>
          </Reveal>

          <Reveal delay={0.18} style={{ gridColumn: "span 5" }}>
            <div style={{
              background: "var(--bg-elevated)", border: "1px solid var(--border-muted)",
              borderRadius: "14px", padding: "36px", height: "100%",
              transition: "border-color 0.2s ease",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-strong)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-muted)")}>
              <div style={{ marginBottom: "16px", color: "var(--text-secondary)" }}><IconTerminal /></div>
              <h3 className="text-title" style={{ marginBottom: "10px" }}>CLI-Enforced Discipline</h3>
              <p className="text-body" style={{ fontSize: "0.875rem" }}>Generate modules that follow the standard perfectly. Automated Git hooks ensure zero-trust delivery excellence.</p>
              <div style={{ marginTop: "20px", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "0.75rem", color: "#79c0ff", background: "var(--bg-overlay)", borderRadius: "8px", padding: "10px 14px", border: "1px solid var(--border-muted)" }}>
                $ npx cl-architecture init -y
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} style={{ gridColumn: "span 4" }}>
            <div style={{
              background: "var(--bg-elevated)", border: "1px solid var(--border-muted)",
              borderRadius: "14px", padding: "36px", height: "100%",
              transition: "border-color 0.2s ease",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-strong)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-muted)")}>
              <div style={{ marginBottom: "16px", color: "var(--text-secondary)" }}><IconBeaker /></div>
              <h3 className="text-title" style={{ marginBottom: "10px" }}>Zero Lock-in</h3>
              <p className="text-body" style={{ fontSize: "0.875rem" }}>Pure architectural patterns. No heavy runtime dependencies. No proprietary decorators. Just clean code.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}



function IntegrationsSection() {
  return (
    <section className="section-pad" style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border-muted)", borderBottom: "1px solid var(--border-muted)" }}>
      <div className="container-main">
        <Reveal className="text-center" style={{ marginBottom: "56px" }}>
          <div className="text-label" style={{ marginBottom: "16px" }}>Compatibility</div>
          <h2 className="text-headline" style={{ marginBottom: "16px" }}>
            Works with your stack
          </h2>
          <p className="text-body" style={{ maxWidth: "480px", margin: "0 auto" }}>
            Core-Line is a standard, not a framework. It adapts to any language, runtime, or toolchain.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "1px",
            background: "var(--border-muted)",
            border: "1px solid var(--border-muted)",
            borderRadius: "12px",
            overflow: "hidden",
          }}>
            {integrations.map((name, i) => (
              <div
                key={i}
                style={{
                  background: "var(--bg-elevated)",
                  padding: "20px 16px",
                  textAlign: "center",
                  transition: "background 0.2s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-overlay)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg-elevated)")}
              >
                <div className="text-caption" style={{ color: "var(--text-secondary)", fontWeight: 500 }}>{name}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-caption" style={{ textAlign: "center", marginTop: "20px" }}>
            + any language that supports structured programming
          </p>
        </Reveal>
      </div>
    </section>
  );
}


function CTASection() {
  return (
    <section className="section-pad">
      <div className="container-main">
        <Reveal>
          <div
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-default)",
              borderRadius: "20px",
              padding: "88px 64px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >

            <div
              className="grid-bg"
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.25,
                borderRadius: "20px",
              }}
            />
            <div className="orb-2 orb" style={{ position: "absolute" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="text-label" style={{ marginBottom: "20px" }}>Get Started Today</div>
              <h2 className="text-headline" style={{ marginBottom: "20px", maxWidth: "560px", margin: "0 auto 20px" }}>
                Ready to bring order to your codebase?
              </h2>
              <p className="text-body" style={{ maxWidth: "480px", margin: "0 auto 40px" }}>
                Join engineering teams that use Core-Line to ship faster, onboard easier,
                and maintain codebases that actually scale.
              </p>

              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "40px" }}>
                <Link href="/docs/quick-start" className="btn-primary btn-base" style={{ fontSize: "0.9375rem", padding: "12px 28px" }}>
                  Start for Free
                  <IconArrow />
                </Link>
                <Link href="/docs" className="btn-secondary btn-base" style={{ fontSize: "0.9375rem", padding: "12px 28px" }}>
                  Read the Docs
                </Link>
              </div>

              <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
                {["No framework lock-in", "Language agnostic", "Open standard"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{
                      width: "18px", height: "18px",
                      borderRadius: "50%",
                      background: "var(--bg-elevated)",
                      border: "1px solid var(--border-default)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "var(--text-secondary)",
                      flexShrink: 0,
                    }}>
                      <IconCheck />
                    </div>
                    <span className="text-caption" style={{ color: "var(--text-secondary)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border-muted)",
      background: "var(--bg-surface)",
      padding: "60px 0 40px",
    }}>
      <div className="container-main">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "48px" }}>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{
                width: "28px", height: "28px",
                border: "1.5px solid var(--border-strong)",
                borderRadius: "6px",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "var(--bg-elevated)",
              }}>
                <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "10px", fontWeight: 700, color: "var(--text-primary)" }}>CL</span>
              </div>
              <span style={{ fontFamily: "var(--font-poppins), sans-serif", fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)" }}>
                Core<span style={{ color: "var(--text-muted)" }}>—</span>Line
              </span>
            </div>
            <p className="text-body" style={{ fontSize: "0.875rem", maxWidth: "280px", marginBottom: "20px" }}>
              A language-agnostic software architecture standard for modern engineering teams.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.8125rem",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <IconGitHub />
              View on GitHub
            </a>
          </div>


          <div>
            <div className="text-label" style={{ marginBottom: "16px" }}>Documentation</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Quick Start", href: "/docs/quick-start" },
                { label: "Standards", href: "/docs/standards" },
                { label: "Rules", href: "/docs/rules" },
                { label: "CLI Reference", href: "/docs/cli" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>


          <div>
            <div className="text-label" style={{ marginBottom: "16px" }}>Resources</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Examples", href: "/examples" },
                { label: "Ecosystem", href: "/docs/ecosystem" },
                { label: "Templates", href: "/templates" },
                { label: "Changelog", href: "/changelog" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>


          <div>
            <div className="text-label" style={{ marginBottom: "16px" }}>Community</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "GitHub", href: "#" },
                { label: "Discord", href: "#" },
                { label: "Twitter / X", href: "#" },
                { label: "Discussions", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="divider" style={{ marginBottom: "28px" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p className="text-caption">© 2026 Core-Line Architecture. All rights reserved.</p>
          <p className="text-caption" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "0.6875rem" }}>
            Port → Flow → Source → Bridge
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <HeroSection />
        <ArchitectureSection />
        <FeaturesSection />
        <IntegrationsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}