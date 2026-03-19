import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pipelineSteps = [
  { label: "Ingest", description: "CSV, NumPy" },
  { label: "Clean", description: "Impute, outliers" },
  { label: "Reduce", description: "PCA, LDA" },
  { label: "Normalize", description: "Scale, center" },
  { label: "Encode", description: "Angle, basis" },
  { label: "Export", description: "Qiskit, QASM" },
];

const WhatIsSection = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What is <span className="gradient-text">QuPrep</span>?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            QuPrep converts any classical dataset into quantum-circuit-ready format.
            Upload a CSV, pick an encoding, export to your framework.{" "}
            <span className="font-medium text-foreground">Three lines of code.</span>
          </p>
        </motion.div>

        {/* Pipeline visualization */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="overflow-x-auto overflow-y-visible pb-4"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 min-w-[640px] px-4">
            {pipelineSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2 md:gap-3">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 md:w-24 h-16 rounded-lg border border-border bg-card p-3 card-hover flex flex-col justify-center">
                    <div className="text-sm font-display font-semibold text-foreground">{step.label}</div>
                    <div className="text-[10px] text-muted-foreground mt-1 leading-tight">{step.description}</div>
                  </div>
                </div>
                {i < pipelineSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-primary/50 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSection;
