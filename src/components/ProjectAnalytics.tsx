import { motion } from "framer-motion";

const analyticsData = [
  { day: "S", height: 65, type: "striped" },
  { day: "M", height: 85, type: "solid", color: "bg-[#2D7A4D]" },
  { day: "T", height: 74, type: "solid", color: "bg-[#6BC497]", showBadge: true },
  { day: "W", height: 100, type: "solid", color: "bg-[#164228]" },
  { day: "T", height: 90, type: "striped" },
  { day: "F", height: 60, type: "striped" },
  { day: "S", height: 75, type: "striped" },
];

const ProjectAnalytics = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-2xl border border-border p-4 sm:p-8 w-full"
    >
      <h3 className="text-xl font-semibold text-foreground mb-6 sm:mb-10">Project Analytics</h3>
      <div className="flex items-end justify-around sm:justify-between gap-1 sm:gap-2 h-48 px-1 sm:px-2">
        {analyticsData.map((item, i) => (
          <div key={i} className="flex flex-col items-center h-full flex-1 min-w-0">
            <div className="relative w-full h-full flex flex-col justify-end items-center">
              {item.showBadge && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ bottom: `${item.height}%`, marginBottom: '12px' }}
                  className="absolute z-10 flex flex-col items-center"
                >
                  <div className="bg-background-muted border border-border rounded px-2  shadow-sm relative">
                    <span className="text-[10px] font-bold text-[#6BC497]">{item.height}%</span>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-b border-r border-border rotate-45" />
                  </div>
                  <div className="w-2 h-2 rounded-full border-2 border-white bg-gray-400 mt-2" />
                </motion.div>
              )}
              <motion.div
                initial={{ height: "0%" }}
                animate={{ height: `${item.height}%` }}
                transition={{ delay: i * 0.05, duration: 0.8, ease: "easeOut" }}
                className={`w-10 sm:w-16 max-w-full rounded-full relative overflow-hidden ${item.type === "solid"
                  ? item.color
                  : "bg-transparent border-[1.5px] border-slate-200"
                  }`}
              >
                {item.type === "striped" && (
                  <div
                    className="absolute inset-0 w-full h-full opacity-30"
                    style={{
                      backgroundImage: `linear-gradient(135deg, #164228 15%, transparent 15%, transparent 50%, #164228 50%, #164228 65%, transparent 65%, transparent 100%)`,
                      backgroundSize: '8px 8px'
                    }}
                  />
                )}
              </motion.div>
            </div>

            {/* Day Label */}
            <span className="text-sm text-muted-foreground font-medium mt-4">{item.day}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectAnalytics;