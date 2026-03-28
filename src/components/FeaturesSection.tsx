import { motion } from "framer-motion";
import { Shuffle, Cpu, Sparkles, Grid3X3, Binary, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Shuffle,
    title: "Framework Agnostic",
    description: "Export to OpenQASM 3.0, Qiskit, PennyLane, Cirq, and TKET. No lock-in — switch frameworks with one line.",
  },
  {
    icon: Sparkles,
    title: "Smart Encoding",
    description: "Auto-selects the correct normalizer per encoding. Recommendation engine scores all 7 encoders against your dataset and task.",
  },
  {
    icon: Cpu,
    title: "Hardware Aware",
    description: "Hardware-aware dimensionality reduction for IBM, Google, IQM, and Quantinuum devices. Automatically fits your qubit budget.",
  },
  {
    icon: Grid3X3,
    title: "Multiple Encodings",
    description: "7 encoders: Angle, Amplitude, Basis, IQP, Entangled Angle, Data Re-uploading, and Hamiltonian. NISQ-safe options included.",
  },
  {
    icon: Binary,
    title: "QUBO Support",
    description: "7 problem formulations (Max-Cut, TSP, Knapsack, Portfolio, and more), exact and SA solvers, QAOA circuit generation, and D-Wave export.",
  },
  {
    icon: ShieldCheck,
    title: "Validation & Cost",
    description: "Schema enforcement, per-column NaN reports, and formula-accurate circuit cost estimates (gate count, depth, NISQ-safe flag) — before encoding.",
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
