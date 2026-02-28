import { motion } from "framer-motion";
import { Plus, Zap, Layers, Monitor, Gauge, Bug } from "lucide-react";

const projects = [
  { name: "Develop API Endpoints", due: "Nov 26, 2024", icon: Zap, color: "text-blue-500" },
  { name: "Onboarding Flow", due: "Nov 28, 2024", icon: Layers, color: "text-orange-500" },
  { name: "Build Dashboard", due: "Nov 30, 2024", icon: Monitor, color: "text-primary" },
  { name: "Optimize Page Load", due: "Dec 5, 2024", icon: Gauge, color: "text-yellow-500" },
  { name: "Cross-Browser Testing", due: "Dec 6, 2024", icon: Bug, color: "text-pink-500" },
];

const ProjectList = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      whileHover={{ y: -2 }}
      className="bg-card rounded-2xl border border-border p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-foreground">Project</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1 text-sm font-medium border text-primary rounded-xl px-3 py-1.5 hover:bg-secondary border-primary transition-colors"
        >
          <Plus className="w-3.5 h-3.5" /> New
        </motion.button>
      </div>
      <div className="space-y-4">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.07 }}
            className="flex items-center gap-3"
          >
            <div className={`w-8 h-8 rounded-lg  flex items-center justify-center ${p.color}`}>
              <p.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{p.name}</p>
              <p className="text-xs text-muted-foreground">Due date: {p.due}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectList;
