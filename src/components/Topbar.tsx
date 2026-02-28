import { motion } from "framer-motion";
import { Bell, Mail, Menu, Search } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

interface TopbarProps {
  onMenuClick?: () => void;
}

const Topbar = ({ onMenuClick }: TopbarProps) => {
  const { user } = useAuth();

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 py-4 bg-background-muted/80 backdrop-blur-md rounded-md"
    >
      {/* Left side: Menu Toggle & Search */}
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-xl bg-background border border-border text-foreground hover:bg-secondary transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        <div className="relative max-w-md w-full hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search task"
            className="w-full pl-10 pr-16 py-3 rounded-full border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground border border-border rounded-md px-1.5 py-0.5">⌘ F</span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2 sm:gap-4 ml-4">
        <button className="hidden xs:flex p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground bg-white">
          <Mail className="w-4 h-4" />
        </button>
        <button className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground bg-white">
          <Bell className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-3 ml-1 sm:ml-2">
          <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
            {user?.email[0].toUpperCase() || "U"}
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-foreground">{user?.email.split('@')[0] || "User"}</p>
            <p className="text-xs text-muted-foreground">{user?.email || "user@example.com"}</p>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Topbar;
