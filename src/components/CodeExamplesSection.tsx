import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { highlightPython } from "../lib/highlightPython";

const tabs = [
  {
    id: "simple",
    label: "Simple",
    code: `import quprep as qd

# One-liner: CSV → quantum circuits
result = qd.prepare(
    "dataset.csv",
    encoding="angle",
    framework="qasm",
)

print(result.circuit)   # OpenQASM 3.0 string
print(result.circuits)  # all samples`,
  },
  {
    id: "pipeline",
    label: "Pipeline",
    code: `import quprep as qd

# All classes on the top-level namespace
pipeline = qd.Pipeline(
    cleaner=qd.Imputer(strategy="knn"),
    encoder=qd.AngleEncoder(rotation="ry"),
    exporter=qd.QASMExporter(),
)

result = pipeline.fit_transform("dataset.csv")
print(result.circuit)`,
  },
  {
    id: "recommend",
    label: "Recommend",
    code: `import quprep as qd

rec = qd.recommend(
    "dataset.csv",
    task="classification",
    qubits=8,
)

print(rec.method)       # e.g. "iqp"
print(rec.reason)       # human-readable explanation
print(rec.alternatives) # ranked list of other options

# Build and run the recommended pipeline
result = qd.suggest_pipeline(
    "dataset.csv", task="classification", qubits=8
).build().fit_transform("dataset.csv")`,
  },
  {
    id: "validate",
    label: "Validate",
    code: `import quprep as qd

# Define expected schema
schema = qd.DataSchema([
    qd.FeatureSpec("age",    dtype="continuous", min_value=0),
    qd.FeatureSpec("income", dtype="continuous", min_value=0),
    qd.FeatureSpec("label",  dtype="discrete"),
])

# Attach to pipeline — validates before any stage runs
pipeline = qd.Pipeline(
    encoder=qd.AngleEncoder(),
    schema=schema,
)
result = pipeline.fit_transform("dataset.csv")

# Cost estimate + audit log included automatically
print(result.cost.nisq_safe)   # True / False
result.summary()               # aligned audit table`,
  },
  {
    id: "qubo",
    label: "QUBO",
    code: `import numpy as np
from quprep.qubo import max_cut, qaoa_circuit

# Max-Cut on a graph
adj = np.array([[0,1,1],[1,0,1],[1,1,0]], dtype=float)
q = max_cut(adj)

# Generate a QAOA circuit (OpenQASM 3.0)
qasm = qaoa_circuit(q, p=2)
print(qasm)`,
  },
];


const CodeExamplesSection = () => {
  const [activeTab, setActiveTab] = useState("simple");
  const [copied, setCopied] = useState(false);

  const activeCode = tabs.find((t) => t.id === activeTab)!.code;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 md:py-28 border-t border-border/50" id="examples">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Code Examples
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            From simple one-liners to full preprocessing pipelines.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="code-block">
            {/* Tabs */}
            <div className="flex items-center justify-between border-b border-border bg-muted/30">
              <div className="flex">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2.5 text-xs font-mono transition-colors border-b-2 -mb-px ${
                      activeTab === tab.id
                        ? "border-primary text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <button
                onClick={handleCopy}
                className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Code */}
            <div className="p-5 overflow-x-auto">
              <pre className="text-sm font-mono">{highlightPython(activeCode)}</pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeExamplesSection;
