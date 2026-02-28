import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  highlighted?: boolean;
  index: number;
}

const StatCard = ({ title, value, subtitle, highlighted, index }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.08)" }}
      className={`rounded-2xl p-5 transition-all ${highlighted
        ? "bg-gradient-to-tl from-primary to-green-900 text-stat-green-fg"
        : "bg-card border border-border"
        }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-sm font-medium ${highlighted ? "text-stat-green-fg/80" : "text-muted-foreground"}`}>
          {title}
        </h3>
        <div style={{
          background: highlighted ? "white" : "transparent"
        }}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-foreground">
          <ArrowUpRight className={`w-5 h-5 ${highlighted ? "text-foreground" : "text-foreground"}`} />

        </div>
      </div>
      <p className={`text-6xl font-bold mb-2 ${highlighted ? "text-stat-green-fg" : "text-foreground"}`}>{value}</p>
      <div className="flex items-center gap-1.5 mt-3">
        <TrendingUp className={`w-3.5 h-3.5 ${highlighted ? "text-stat-green-fg/70" : "text-primary"}`} />
        <span className={`text-xs ${highlighted ? "text-stat-green-fg/70" : "text-muted-foreground"}`}>{subtitle}</span>
      </div>
    </motion.div>
  );
};

export default StatCard;
