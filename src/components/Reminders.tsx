import { motion } from "framer-motion";
import { Video } from "lucide-react";

const Reminders = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      whileHover={{ y: -2 }}
      className="bg-card flex flex-col justify-between rounded-2xl border border-border p-5"
    >
      <h3 className="text-xl font-semibold text-foreground mb-4">Reminders</h3>
      <div className="w-full">
        <h4 className="text-4xl font-regular text-primary  mb-1">Meeting with Arc Company</h4>
        <p className="text-sm text-muted-foreground mb-8">Time : 02.00 pm - 04.00 pm</p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex w-full justify-center items-center text-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-tl to-green-900 from-primary text-primary-foreground text-lg font-semibold"
        >
          <Video className="w-6 h-6" />
          Start Meeting
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Reminders;
