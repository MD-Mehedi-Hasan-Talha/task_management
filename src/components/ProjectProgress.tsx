"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

interface ProjectProgressProps {
  completed: number;
  inProgress: number;
  title?: string;
  subtitle?: string;
}

const ProjectProgress = ({
  completed = 31,
  inProgress = 70,
  title = "Project Progress",
  subtitle = "Project Ended",
}: ProjectProgressProps) => {
  const totalValue = Math.min(completed + inProgress, 100);

  const count = useMotionValue(0);
  const roundedProgress = useTransform(count, (v) => Math.round(v));

  const completedPath = useTransform(count, (v) => {
    const currentCompleted = Math.min(v, completed);
    return currentCompleted / 100;
  });

  const inProgressPath = useTransform(count, (v) => {
    if (v <= completed) return 0;
    const currentIP = Math.min(v, totalValue) - completed;
    return currentIP / 100;
  });

  const inProgressOffset = completed / 100;

  useEffect(() => {
    animate(count, totalValue, {
      duration: 2,
      ease: "circOut",
    });
  }, [count, totalValue]);

  const strokeWidth = 22;
  const radius = 70;
  const viewBoxWidth = (radius + strokeWidth) * 2;
  const viewBoxHeight = radius + strokeWidth;

  const pathData = `M ${strokeWidth},${viewBoxHeight} A ${radius},${radius} 0 0,1 ${viewBoxWidth - strokeWidth},${viewBoxHeight}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-2xl border border-border p-4 sm:p-6 lg:p-8 flex flex-col items-start w-full max-w-sm shadow-sm"
    >
      <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-6 lg:mb-10">{title}</h3>

      <div className="relative w-full aspect-[2/1] mb-12">
        <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} className="w-full h-full overflow-visible">
          {/* ১. SVG Pattern for Pending (Striped Gray) */}
          <defs>
            <pattern id="stripes" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="6" stroke="#cbd5e1" strokeWidth="4" />
            </pattern>
          </defs>

          <path
            d={pathData}
            fill="none"
            stroke="url(#stripes)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            className="opacity-40"
          />

          <motion.path
            d={pathData}
            fill="none"
            stroke="#2D7A4D"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{ pathLength: completedPath }}
          />

          <motion.path
            d={pathData}
            fill="none"
            stroke="#164228"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{
              pathLength: inProgressPath,
              pathOffset: inProgressOffset
            }}
          />
        </svg>

        <div className="absolute -bottom-2 left-0 right-0 flex flex-col items-center justify-center">
          <div className="flex items-baseline leading-none">
            <motion.span className="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground">
              {roundedProgress}
            </motion.span>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">%</span>
          </div>
          <p className="text-xs sm:text-sm font-medium text-[#2D7A4D] mt-1 sm:mt-2">{subtitle}</p>
        </div>
      </div>

      <div className="flex items-center justify-between w-full mt-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#2D7A4D]" />
          <span className="text-sm text-muted-foreground font-medium">Completed</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#164228]" />
          <span className="text-sm text-muted-foreground font-medium">In Progress</span>
        </div>

        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-md border border-slate-200"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #cbd5e1 0, #cbd5e1 1px, transparent 0, transparent 50%)',
              backgroundSize: '4px 4px'
            }}
          />
          <span className="text-sm text-muted-foreground font-medium">Pending</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectProgress;