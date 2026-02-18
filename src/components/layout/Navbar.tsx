"use client";

import Link from "next/link";
import { MoveRight, Layers } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-card-border">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white">
                        <Layers size={20} />
                    </div>
                    <span className="font-bold text-xl tracking-tight">
                        CORE<span className="text-primary italic">LINE</span>
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted hover:text-foreground transition-colors">
                    <Link href="/docs" className="hover:text-foreground">Documentation</Link>
                    <Link href="/standard" className="hover:text-foreground">Standard</Link>
                    <Link href="/ecosystem" className="hover:text-foreground">Ecosystem</Link>
                    <Link href="/cli" className="hover:text-foreground">CLI</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="/docs/quick-start"
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 text-sm font-semibold"
                    >
                        Get Started
                        <MoveRight size={16} />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
