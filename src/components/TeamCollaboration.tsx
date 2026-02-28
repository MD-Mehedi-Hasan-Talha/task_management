import { motion } from "framer-motion";
import { Plus } from "lucide-react";

type Status = "Completed" | "In Progress" | "Pending";

const members = [
  { name: "Alexandra Deff", task: "Github Project Repository", status: "Completed" as Status },
  { name: "Edwin Adenike", task: "Integrate User Authentication System", status: "In Progress" as Status },
  { name: "Isaac Oluwatemilorun", task: "Develop Search and Filter Functionality", status: "Pending" as Status },
  { name: "David Oshodi", task: "Responsive Layout for Homepage", status: "In Progress" as Status },
];

const statusColors: Record<Status, string> = {
  Completed: "bg-badge-completed/10 text-badge-completed",
  "In Progress": "bg-badge-progress/10 text-badge-progress",
  Pending: "bg-badge-pending/10 text-badge-pending",
};

const initials = (name: string) => name.split(" ").map((n) => n[0]).join("");

const TeamCollaboration = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      whileHover={{ y: -2 }}
      className="bg-card rounded-2xl border border-border p-5"
    >
      <div className="flex items-center justify-between mb-4">

        <h3 className="text-xl font-semibold text-foreground mb-4">Team Collaboration</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1 text-sm font-medium border border-primary text-primary rounded-full px-3 py-1.5  hover:bg-secondary transition-colors"
        >
          <Plus className="w-3.5 h-3.5" /> Add Member
        </motion.button>
      </div>
      <div className="space-y-6">
        {members.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.08 }}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary text-xs font-bold shrink-0">
              {initials(m.name)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-md font-bold text-foreground">{m.name}</p>
              <p className="text-xs text-muted-foreground truncate">Working on <strong className="text-foreground">{m.task}</strong></p>
            </div>
            <span className={`text-[10px] font-semibold px-2 py-1 rounded-md whitespace-nowrap ${statusColors[m.status]}`}>
              {m.status}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TeamCollaboration;
