import { motion } from "framer-motion";
import { Shuffle, Cpu, Sparkles, Grid3X3, Binary, ShieldCheck, Database, Terminal, Layers } from "lucide-react";

const features = [
  {
    icon: Shuffle,
    title: "Framework Agnostic",
    description: "Export to OpenQASM 3.0, Qiskit, PennyLane, Cirq, TKET, Amazon Braket, Q# (Azure Quantum), and IQM. No lock-in — switch frameworks with one line.",
  },
  {
    icon: Sparkles,
    title: "Smart Encoding",
    description: "Auto-selects the correct normalizer per encoding. Recommendation engine scores all 13 encoders against your dataset and task.",
  },
  {
    icon: Cpu,
    title: "Hardware Aware",
    description: "Hardware-aware dimensionality reduction for IBM, Google, IQM, and Quantinuum devices. Automatically fits your qubit budget.",
  },
  {
    icon: Grid3X3,
    title: "13 Encodings",
    description: "Angle, Amplitude, Basis, IQP, Entangled Angle, Re-Upload, Hamiltonian, ZZFeatureMap, PauliFeatureMap, RandomFourier, TensorProduct, QAOAProblem, GraphState. NISQ-safe options included.",
  },
  {
    icon: Binary,
    title: "QUBO Support",
    description: "7 problem formulations (Max-Cut, TSP, Knapsack, Portfolio, and more), QAOA circuit generation, and D-Wave export.",
  },
  {
    icon: ShieldCheck,
    title: "Validation & Cost",
    description: "Schema enforcement, per-column NaN reports, and formula-accurate circuit cost estimates (gate count, depth, NISQ-safe flag) — before encoding.",
  },
  {
    icon: Database,
    title: "Data Connectors",
    description: "Load any public dataset in one line — HuggingFace Hub, OpenML, and Kaggle. Auto-detects tabular, image, text, and graph modalities.",
  },
  {
    icon: Terminal,
    title: "CLI & Reproducibility",
    description: "Profile datasets and benchmark all encoders from the terminal. Lock in your pipeline config with a deterministic SHA-256 fingerprint for paper methods sections.",
  },
  {
    icon: Layers,
    title: "Data Modalities",
    description: "Native support for time series, sparse matrices, multi-label, images, text (TF-IDF + embeddings), and graphs — all feeding into the same encoders and exporters.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-28" id="features">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Features
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Everything you need to bridge classical data and quantum algorithms.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="rounded-xl border border-border bg-card p-6 card-hover"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-primary/10 p-2">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-display font-semibold mb-1.5">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
