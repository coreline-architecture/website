import { DocLayout } from "@/components/layout/DocLayout";

export default function DocsPage() {
    return (
        <DocLayout>
            <div className="space-y-8">
                <header>
                    <h1 className="text-4xl font-extrabold mb-4">Introduction to Core-Line</h1>
                    <p className="text-xl text-muted leading-relaxed">
                        The Universal Standard for High-Performance Backend Engineering.
                    </p>
                </header>

                <section className="space-y-6">
                    <p>
                        <strong>CL-Architecture (Core-Line Architecture)</strong> is a <strong>strict backend architecture standard</strong> designed to control complexity as applications grow.
                    </p>

                    <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 italic text-lg">
                        "Every request must follow one clear, linear path."
                    </div>

                    <p>
                        It is not a framework. It does not hide logic. It does not add magic.
                        Instead, it defines clear rules for how backend code must be organized and how data must flow through the system.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 pb-2 border-b border-card-border">The Core Concept</h2>
                    <p>
                        At the heart of CL-Architecture is a simple rule: No skipping layers. No calling Source from Controller. No calling Controller logic from Flow.
                    </p>

                    <div className="bg-black/50 p-6 rounded-xl border border-card-border font-mono text-sm leading-relaxed overflow-x-auto">
                        Route <br />
                        → Controller (Port) <br />
                        → Flow (Business Logic) <br />
                        → Source (DB / External APIs) <br />
                        → Flow <br />
                        → Response
                    </div>

                    <h2 className="text-2xl font-bold mt-12 pb-2 border-b border-card-border">Why CL-Architecture?</h2>
                    <ul className="space-y-4 list-disc list-inside text-muted">
                        <li><strong className="text-foreground">Predictable behavior:</strong> Always know where a request starts and ends.</li>
                        <li><strong className="text-foreground">Easier debugging:</strong> Linear execution makes tracing bugs trivial.</li>
                        <li><strong className="text-foreground">Clear ownership:</strong> Every layer has one responsibility.</li>
                        <li><strong className="text-foreground">Safer refactoring:</strong> Decoupled layers mean low blast radius for changes.</li>
                    </ul>

                    <div className="flex justify-between items-center mt-20 pt-8 border-t border-card-border">
                        <span className="text-sm text-muted">Last updated: February 2026</span>
                        <a href="/docs/philosophy" className="text-primary font-bold hover:underline">Next: Philosophy →</a>
                    </div>
                </section>
            </div>
        </DocLayout>
    );
}
