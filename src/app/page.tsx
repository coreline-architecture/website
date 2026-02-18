import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/blocks/Hero";
import { MoveRight, Shield, Zap, Cpu, Globe, Lock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      <section className="py-24 bg-card/20 border-y border-card-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for Engineers</h2>
            <p className="text-muted max-w-2xl mx-auto">
              CL-Architecture provides the floor-plan that forces you to write world-class code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="text-primary" size={24} />}
              title="Execution Discipline"
              description="The Core-Line rule ensures you always know exactly where code belongs. No more controller bloat."
            />
            <FeatureCard
              icon={<Lock className="text-secondary" size={24} />}
              title="Zero-Trust Delivery"
              description="Protect the codebase from human error with automated Git hooks and strict naming enforcement."
            />
            <FeatureCard
              icon={<Globe className="text-accent" size={24} />}
              title="Language Agnostic"
              description="Standardize patterns across TypeScript, Go, Python, and more. One architecture, every language."
            />
            <FeatureCard
              icon={<Zap className="text-orange-500" size={24} />}
              title="High Performance"
              description="Minimal abstraction overhead. CL stays close to the metal while providing complete structure."
            />
            <FeatureCard
              icon={<Cpu className="text-pink-500" size={24} />}
              title="Vendor Isolation"
              description="Never be trapped by a library again. Switch vendors by changing a single Bridge layer."
            />
            <FeatureCard
              icon={<MoveRight className="text-blue-400" size={24} />}
              title="Predictable Scaling"
              description="Stateless flows and CQRS-native design make horizontal scaling trivial and safe."
            />
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to elevate your standards?</h2>
        <div className="flex justify-center gap-4">
          <Link
            href="/docs"
            className="px-8 py-3 rounded-full bg-primary text-white font-bold hover:opacity-90 transition-all"
          >
            Read the Documentation
          </Link>
        </div>
        <p className="mt-12 text-sm text-muted">© 2026 Core-Line Architecture. Follow the rules, scale the system.</p>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl border border-card-border bg-card/30 hover:bg-card/50 transition-all group">
      <div className="w-12 h-12 rounded-xl bg-background border border-card-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
