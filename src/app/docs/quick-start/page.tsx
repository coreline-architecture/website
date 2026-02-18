import { DocLayout } from "@/components/layout/DocLayout";
import { Terminal, Copy } from "lucide-react";

export default function QuickStartPage() {
    return (
        <DocLayout>
            <header>
                <h1 className="text-4xl font-extrabold mb-4">Quick Start Guide</h1>
                <p className="text-xl text-muted leading-relaxed">
                    Get your first Core-Line project running in minutes.
                </p>
            </header>

            <section className="mt-12 space-y-12">
                <Step
                    number="01"
                    title="Prerequisites"
                    content="Ensure you have Node.js version 18+ and npm 9+ installed on your system."
                />

                <Step
                    number="02"
                    title="Initialize Project"
                    content={
                        <div className="space-y-4">
                            <p>Run the initialization command to set up the core structure:</p>
                            <CodeBlock command="npx cl-architecture init --naming=custom" />
                            <p className="text-sm text-muted italic">
                                Choose between <strong>Core-Line Custom</strong> (Port/Flow/Source) or <strong>Industry Standard</strong> (Controller/Service/Repository).
                            </p>
                        </div>
                    }
                />

                <Step
                    number="03"
                    title="Generate a Module"
                    content={
                        <div className="space-y-4">
                            <p>Create your first functional module with all necessary layers:</p>
                            <CodeBlock command="npx cl-architecture create module user" />
                        </div>
                    }
                />

                <Step
                    number="04"
                    title="Follow the Path"
                    content={
                        <p>
                            Open your newly created module and start implementing logic. Remember the <strong>Core-Line Law</strong>:
                            Request → Port → Flow → Source → Response.
                        </p>
                    }
                />

                <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                    <h3 className="text-xl font-bold mb-4">What's Next?</h3>
                    <p className="text-muted mb-6">
                        Dive deeper into the architecture rules or explore how to isolate external vendors using the Link layer.
                    </p>
                    <div className="flex gap-4">
                        <a href="/docs/layers" className="text-primary font-bold hover:underline underline-offset-4">Learn about Layers →</a>
                    </div>
                </div>
            </section>
        </DocLayout>
    );
}

function Step({ number, title, content }: { number: string, title: string, content: React.ReactNode }) {
    return (
        <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-card-border/30 border border-card-border flex items-center justify-center font-mono font-bold text-primary">
                {number}
            </div>
            <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <div className="text-muted leading-relaxed">{content}</div>
            </div>
        </div>
    );
}

function CodeBlock({ command }: { command: string }) {
    return (
        <div className="bg-black p-4 rounded-xl border border-card-border flex items-center justify-between group">
            <code className="text-primary text-sm flex items-center gap-3">
                <Terminal size={14} className="text-muted" />
                {command}
            </code>
            <button className="text-muted hover:text-white transition-colors">
                <Copy size={14} />
            </button>
        </div>
    );
}
