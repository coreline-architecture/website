import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/blocks/Hero";
import { MoveRight, Shield, Zap, Cpu, Globe, Lock, Terminal as TerminalIcon } from "lucide-react";
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

      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Crystal Clear <br /> <span className="text-primary">Logic Flow</span></h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Stop guessing. Start building with a standard that defines the role of every single line of code.
                From rules to ports, every layer is isolated and specialized.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-card/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <TerminalIcon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Thin Controllers</h4>
                    <p className="text-sm text-muted">Ports only handle I/O and pass data to the Flow layer.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-card/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Pure Business Flow</h4>
                    <p className="text-sm text-muted">Flows contain strictly business rules, zero infrastructure logic.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="relative p-1 rounded-3xl bg-gradient-to-br from-card-border via-transparent to-card-border">
                <div className="bg-[#0c111d] rounded-[22px] p-6 font-mono text-sm leading-relaxed overflow-hidden shadow-2xl">
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <pre className="text-white/80">
                    <span className="text-blue-400">export const</span> <span className="text-yellow-400">createUserController</span> = <span className="text-yellow-400">asyncHandler</span>(<span className="text-blue-400">async</span> (req, res) <span className="text-blue-400">=&gt;</span> {"{"}<br />
                    {"  "}<span className="text-blue-400">const</span> input = <span className="text-green-400">CreateUserRule</span>.<span className="text-yellow-400">parse</span>(req.body);<br />
                    {"  "}<span className="text-blue-400">const</span> user = <span className="text-blue-400">await</span> <span className="text-green-400">createUserFlow</span>.<span className="text-yellow-400">execute</span>(input);<br />
                    {"  "}<span className="text-blue-400">return</span> <span className="text-yellow-400">success</span>(res, <span className="text-yellow-400">toUserResponse</span>(user), <span className="text-orange-400">"User created"</span>);<br />
                    {"}"});
                  </pre>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
              </div>
            </div>
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
