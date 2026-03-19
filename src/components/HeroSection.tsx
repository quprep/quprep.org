import { motion } from "framer-motion";
import { Github, BookOpen, Package, Star, Copy, Check } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-60" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute top-40 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px]" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 mb-8">
            <span className="text-xs font-mono text-primary font-medium">v0.1</span>
            <span className="h-3 w-px bg-border" />
            <span className="text-xs text-muted-foreground">Open Source · Apache 2.0</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-4">
            QuPrep
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 font-light">
            Quantum data preparation for everyone.
          </p>

          {/* Terminal snippet */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="code-block">
              <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-destructive/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary/30" />
                </div>
                <span className="text-[11px] font-mono text-muted-foreground">terminal</span>
                <button
                  onClick={() => handleCopy('pip install quprep\n\nimport quprep\ncircuit = quprep.prepare("dataset.csv", encoding="angle", framework="qiskit")')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <div className="p-4 text-left text-sm font-mono leading-relaxed">
                <div className="text-muted-foreground">
                  <span className="text-accent">$</span> pip install quprep
                </div>
                <div className="mt-3 text-muted-foreground/50 text-xs">{"# Three lines to quantum-ready data"}</div>
                <div><span className="text-primary">import</span> <span className="text-foreground">quprep</span></div>
                <div>
                  <span className="text-foreground">circuit</span>
                  <span className="text-muted-foreground"> = </span>
                  <span className="text-foreground">quprep</span>
                  <span className="text-muted-foreground">.</span>
                  <span className="text-foreground">prepare</span>
                  <span className="text-muted-foreground">(</span>
                  <span className="text-accent">"dataset.csv"</span>
                  <span className="text-muted-foreground">, </span>
                  <span className="text-foreground">encoding</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-accent">"angle"</span>
                  <span className="text-muted-foreground">, </span>
                  <span className="text-foreground">framework</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-accent">"qiskit"</span>
                  <span className="text-muted-foreground">)</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <a
              href="https://quprep.readthedocs.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              <BookOpen className="w-4 h-4" />
              Documentation
            </a>
            <a
              href="https://github.com/quprep/quprep"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://pypi.org/project/quprep"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted"
            >
              <Package className="w-4 h-4" />
              PyPI
            </a>
          </div>

          {/* GitHub stars badge */}
          <a
            href="https://github.com/quprep/quprep"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <Star className="w-3.5 h-3.5" />
            Star us on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
