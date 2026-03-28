import { motion } from "framer-motion";
import { Copy, Check, ExternalLink } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    step: 1,
    title: "Install",
    code: `# Core install
pip install quprep

# With all quantum frameworks
pip install quprep[all]`,
  },
  {
    step: 2,
    title: "Prepare data",
    code: `import quprep as qd

# Load and prepare your dataset
result = qd.prepare(
    "my_data.csv",
    encoding="angle",
    framework="qasm",
)

print(result.circuit)`,
  },
  {
    step: 3,
    title: "Export",
    code: `import quprep as qd

# All exporters are on the top-level namespace
exporter = qd.QASMExporter()
for i, enc in enumerate(result.encoded):
    exporter.save(enc, f"circuit_{i}.qasm")

# Or get a Qiskit QuantumCircuit
# pip install quprep[qiskit]
from quprep.export.qiskit_export import QiskitExporter
qc = QiskitExporter().export(result.encoded[0])`,
  },
];

const QuickStartSection = () => {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section className="py-20 md:py-28 border-t border-border/50" id="quickstart">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Quickstart
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            From install to quantum circuits in under a minute.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          {steps.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-display font-bold">
                  {s.step}
                </span>
                <h3 className="font-display font-semibold">{s.title}</h3>
              </div>
              <div className="code-block">
                <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/30">
                  <span className="text-[11px] font-mono text-muted-foreground">python</span>
                  <button
                    onClick={() => handleCopy(s.code, idx)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {copiedIdx === idx ? (
                      <Check className="w-3.5 h-3.5 text-primary" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
                  {s.code.split("\n").map((line, i) => (
                    <div key={i}>
                      {line.trimStart().startsWith("#") ? (
                        <span className="text-muted-foreground/50">{line}</span>
                      ) : (
                        <span className="text-foreground">{line}</span>
                      )}
                    </div>
                  ))}
                </pre>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://quprep.readthedocs.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            Full documentation
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickStartSection;
