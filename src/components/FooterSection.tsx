import { Github, BookOpen, Package, FileText, History } from "lucide-react";

const footerLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/quprep/quprep" },
  { icon: Package, label: "PyPI", href: "https://pypi.org/project/quprep" },
  { icon: BookOpen, label: "Documentation", href: "https://quprep.readthedocs.io" },
  { icon: FileText, label: "Contributing", href: "https://github.com/quprep/quprep/blob/main/CONTRIBUTING.md" },
  { icon: History, label: "Changelog", href: "https://github.com/quprep/quprep/blob/main/CHANGELOG.md" },
];

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-display text-lg font-bold gradient-text">QuPrep</span>
            <p className="text-xs text-muted-foreground mt-1">
              Open source under Apache 2.0
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <link.icon className="w-3.5 h-3.5" />
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Built by the quantum community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
