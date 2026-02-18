import { DocLayout } from "@/components/layout/DocLayout";

export default function StandardsPage() {
    return (
        <DocLayout>
            <header>
                <h1 className="text-4xl font-extrabold mb-4">Internalized Standards</h1>
                <p className="text-xl text-muted leading-relaxed">
                    The Science behind CL-Architecture.
                </p>
            </header>

            <section className="mt-8 space-y-12">
                <div>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-primary/20 text-primary flex items-center justify-center text-sm italic font-serif">S</div>
                        SOLID Principles
                    </h2>
                    <p className="text-muted mb-6">CL-Architecture is a SOLID-enforcement engine.</p>
                    <div className="grid grid-cols-1 gap-4">
                        <StandardItem title="Single Responsibility" detail="Every layer has exactly one job (Port, Flow, Source)." />
                        <StandardItem title="Open/Closed" detail="Add features by creating new Flows, not modifying existing logic." />
                        <StandardItem title="Liskov Substitution" detail="Interfaces in Source/Link layers allow seamless mocking/swapping." />
                        <StandardItem title="Interface Segregation" detail="Modules are self-contained and context-specific." />
                        <StandardItem title="Dependency Inversion" detail="Business logic never depends on technical details (DB/SDK)." />
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">DRY (Don't Repeat Yourself)</h2>
                    <p className="text-muted">Eliminate boilerplate noise with standardize handlers:</p>
                    <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                        <li>Global Async Handler Rule for error management</li>
                        <li>Universal Response Shape across all modules</li>
                        <li>Centralized Validation Layer (Rule)</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">12-Factor App Compatibility</h2>
                    <div className="p-6 rounded-2xl bg-card border border-card-border overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -z-10" />
                        <p className="text-sm leading-relaxed text-muted">
                            CL provides the structure for modern, cloud-native apps by enforcing config management via Orbit,
                            treating services as attached resources, and encouraging stateless logic.
                        </p>
                    </div>
                </div>
            </section>
        </DocLayout>
    );
}

function StandardItem({ title, detail }: { title: string, detail: string }) {
    return (
        <div className="p-4 rounded-xl border border-card-border bg-card/50">
            <h4 className="font-bold text-sm mb-1">{title}</h4>
            <p className="text-xs text-muted leading-relaxed">{detail}</p>
        </div>
    );
}
