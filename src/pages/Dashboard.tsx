import ProjectAnalytics from "@/components/ProjectAnalytics";
import ProjectList from "@/components/ProjectList";
import ProjectProgress from "@/components/ProjectProgress";
import Reminders from "@/components/Reminders";
import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import TeamCollaboration from "@/components/TeamCollaboration";
import TimeTracker from "@/components/TimeTracker";
import Topbar from "@/components/Topbar";
import { motion } from "framer-motion";
import { Plus, Upload } from "lucide-react";
import { useState } from "react";

const stats = [
  { title: "Total Projects", value: 24, subtitle: "Increased from last month", highlighted: true },
  { title: "Ended Projects", value: 10, subtitle: "Increased from last month", highlighted: false },
  { title: "Running Projects", value: 12, subtitle: "Increased from last month", highlighted: false },
  { title: "Pending Project", value: 2, subtitle: "On Discuss", highlighted: false },
];

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full lg:p-3 gap-4 bg-background overflow-hidden text-foreground">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0 gap-3 h-full overflow-y-auto">
        <Topbar onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 p-6 rounded-md bg-background-muted">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4"
          >
            <div>
              <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
              <p className="text-sm text-muted-foreground">Plan, prioritize, and accomplish your tasks with ease.</p>
            </div>
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-tl from-primary to-green-900 text-primary-foreground text-sm font-semibold"
              >
                <Plus className="w-4 h-4" /> Add Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-primary text-primary text-sm font-semibold hover:bg-secondary transition-colors"
              >
                <Upload className="w-4 h-4" /> Import Data
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {stats.map((s, i) => (
              <StatCard key={i} index={i} {...s} />
            ))}
          </div>

          {/* Middle row */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:col-span-3">
              <div className="lg:col-span-2">
                <ProjectAnalytics />
              </div>
              <Reminders />
            </div>
            <ProjectList />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <TeamCollaboration />
            </div>
            <ProjectProgress completed={41} inProgress={10} />
            <TimeTracker />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
