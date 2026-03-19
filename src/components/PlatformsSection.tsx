import { motion } from "framer-motion";

const platforms = [
  { name: "Qiskit", abbr: "Qk" },
  { name: "Cirq", abbr: "Cq" },
  { name: "PennyLane", abbr: "PL" },
  { name: "TKET", abbr: "Tk" },
  { name: "Braket", abbr: "Bk" },
  { name: "Azure Quantum", abbr: "Az" },
  { name: "IQM", abbr: "IQ" },
  { name: "D-Wave", abbr: "DW" },
  { name: "OpenQASM", abbr: "QA" },
];

const PlatformsSection = () => {
  return (
    <section className="py-20 md:py-28" id="platforms">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Supported Platforms
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            One pipeline, every framework. Write once, export anywhere.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4 max-w-4xl mx-auto"
        >
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 rounded-xl border border-border bg-card flex items-center justify-center transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-md group-hover:shadow-primary/5">
                <span className="text-lg font-display font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {platform.abbr}
                </span>
              </div>
              <span className="text-[11px] text-muted-foreground text-center leading-tight">
                {platform.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformsSection;
