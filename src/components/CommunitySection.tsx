import { motion } from "framer-motion";
import { Github, MessageCircle, Bug, Star, Copy, Check } from "lucide-react";
import { useState } from "react";

const bibtex = `@software{quprep2026,
  author    = {Perera, Hasarindu},
  title     = {QuPrep: Quantum Data Preparation},
  year      = {2026},
  publisher = {Zenodo},
  version   = {0.8.0},
  doi       = {10.5281/zenodo.19286258},
  url       = {https://doi.org/10.5281/zenodo.19286258},
  license   = {Apache-2.0},
}`;

const links = [
  {
    icon: Github,
    title: "Contributing Guide",
    description: "Read CONTRIBUTING.md to get started",
    href: "https://github.com/quprep/quprep/blob/main/CONTRIBUTING.md",
  },
  {
    icon: MessageCircle,
    title: "GitHub Discussions",
    description: "Ask questions and share ideas",
    href: "https://github.com/quprep/quprep/discussions",
  },
  {
    icon: Bug,
    title: "Issue Tracker",
    description: "Report bugs and request features",
    href: "https://github.com/quprep/quprep/issues",
  },
];

const CommunitySection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 md:py-28" id="community">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Community & Contributing
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            QuPrep is open source (Apache 2.0) and community-driven.
            Every contribution makes quantum computing more accessible.
          </p>
        </motion.div>

        {/* Links grid */}
        <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto mb-12">
          {links.map((link, i) => (
            <motion.a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-5 card-hover block"
            >
              <link.icon className="w-5 h-5 text-primary mb-3" />
              <h3 className="text-sm font-display font-semibold mb-1">{link.title}</h3>
              <p className="text-xs text-muted-foreground">{link.description}</p>
            </motion.a>
          ))}
        </div>

        {/* Star CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <a
            href="https://github.com/quprep/quprep"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
          >
            <Star className="w-4 h-4" />
            Star us on GitHub
          </a>
        </motion.div>

        {/* Citation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <h3 className="text-center font-display font-semibold mb-2 text-sm">
            Cite QuPrep in your research
          </h3>
          <p className="text-center text-xs text-muted-foreground mb-4">
            If you use QuPrep in your research, please cite us:
          </p>
          <div className="code-block">
            <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/30">
              <span className="text-[11px] font-mono text-muted-foreground">bibtex</span>
              <button
                onClick={handleCopy}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <pre className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-foreground">
              {bibtex}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
