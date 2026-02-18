"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { ChevronRight, BookOpen, Rocket, Layers, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
    {
        title: "Introduction",
        icon: <BookOpen size={16} />,
        items: [
            { label: "What is Core-Line?", href: "/docs" },
            { label: "Philosophy", href: "/docs/philosophy" },
            { label: "Standards", href: "/docs/standards" },
        ]
    },
    {
        title: "Getting Started",
        icon: <Rocket size={16} />,
        items: [
            { label: "Quick Start", href: "/docs/quick-start" },
            { label: "Installation", href: "/docs/installation" },
            { label: "Project Setup", href: "/docs/setup" },
        ]
    },
    {
        title: "Core Concepts",
        icon: <Layers size={16} />,
        items: [
            { label: "The Core-Line", href: "/docs/core-line" },
            { label: "Layers & Roles", href: "/docs/layers" },
            { label: "Naming Styles", href: "/docs/naming" },
        ]
    },
    {
        title: "CLI Tools",
        icon: <Terminal size={16} />,
        items: [
            { label: "Overview", href: "/docs/cli" },
            { label: "Commands", href: "/docs/cli-commands" },
        ]
    }
];

export function DocLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 pt-24 pb-12 flex gap-12">
                <aside className="w-64 hidden lg:block sticky top-24 h-[calc(100vh-120px)] overflow-y-auto pr-4 border-r border-card-border">
                    <div className="space-y-8">
                        {sidebarItems.map((group) => (
                            <div key={group.title}>
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted mb-4">
                                    {group.icon}
                                    {group.title}
                                </div>
                                <div className="space-y-1">
                                    {group.items.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={cn(
                                                "flex items-center justify-between group px-3 py-2 rounded-lg text-sm transition-all",
                                                pathname === item.href
                                                    ? "bg-primary/10 text-primary font-bold"
                                                    : "text-muted hover:text-foreground hover:bg-card-border/30"
                                            )}
                                        >
                                            {item.label}
                                            <ChevronRight size={14} className={cn(
                                                "opacity-0 transition-opacity",
                                                pathname === item.href ? "opacity-100" : "group-hover:opacity-100"
                                            )} />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>

                <main className="flex-1 max-w-3xl py-4 overflow-hidden">
                    <div className="prose prose-invert prose-blue max-w-none">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
