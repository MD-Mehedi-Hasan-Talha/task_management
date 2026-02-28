import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  BarChart3,
  Calendar,
  HelpCircle,
  LayoutDashboard,
  ListTodo,
  LogOut,
  Settings,
  Users,
  X
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Tasks", icon: ListTodo, path: "#tasks", badge: "12+" },
  { label: "Calendar", icon: Calendar, path: "#calendar" },
  { label: "Analytics", icon: BarChart3, path: "#analytics" },
  { label: "Team", icon: Users, path: "#team" },
];

const generalItems = [
  { label: "Settings", icon: Settings, path: "#settings" },
  { label: "Help", icon: HelpCircle, path: "#help" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { logout } = useAuth();
  const location = useLocation();

  // Active চেক করার ফাংশন
  const isActive = (path: string) => location.pathname === path;

  // কন্টেইনার এবং টেক্সট ক্লাসের জন্য
  const linkClass = (path: string) => {
    const active = isActive(path);
    return `relative flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${active
      ? "after:absolute font-semibold after:-left-4 after:w-1.5 after:h-8 after:rounded-r-md after:bg-primary text-black "
      : "text-sidebar-foreground hover:bg-secondary"
      }`;
  };

  const sidebarVariants = {
    open: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeInOut" as const } },
    closed: { x: "-100%", opacity: 0, transition: { duration: 0.4, ease: "easeInOut" as const } },
  };

  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={typeof window !== 'undefined' && window.innerWidth >= 1024 ? "open" : (isOpen ? "open" : "closed")}
        variants={sidebarVariants}
        className="fixed lg:sticky top-0 left-0 z-50 w-60 shrink-0 h-screen bg-background-muted border-border flex flex-col py-6 px-4 rounded-xl lg:opacity-100 lg:translate-x-0"
      >
        <div className="flex-1">
          {/* Logo & Close Button */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 px-2">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-base">D</span>
              </div>
              <span className="text-lg font-bold text-foreground">Donezo</span>
            </div>
            <button 
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary text-muted-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu */}
          <div className="mb-8">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 mb-3">Menu</p>
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.15 }}>
                  <NavLink to={item.path} className={linkClass(item.path)} onClick={() => window.innerWidth < 1024 && onClose()}>
                    {/* Icon Color logic: active হলে text-primary হবে */}
                    <item.icon className={`w-5 h-5 ${isActive(item.path) ? "text-primary" : "text-sidebar-foreground"}`} />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span className="text-[9px] font-bold bg-primary text-primary-foreground px-1.5 py-0.2 rounded ">
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* General */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 mb-3">General</p>
            <nav className="space-y-1">
              {generalItems.map((item) => (
                <motion.div key={item.path} whileHover={{ x: 2 }} transition={{ duration: 0.15 }}>
                  <NavLink to={item.path} className={linkClass(item.path)} onClick={() => window.innerWidth < 1024 && onClose()}>
                    {/* Icon Color logic for General items */}
                    <item.icon className={`w-5 h-5 ${isActive(item.path) ? "text-primary" : "text-sidebar-foreground"}`} />
                    <span>{item.label}</span>
                  </NavLink>
                </motion.div>
              ))}

              <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.15 }}>
                <button onClick={() => { logout(); window.innerWidth < 1024 && onClose(); }} className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-sidebar-foreground hover:bg-secondary w-full transition-all text-left">
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </motion.div>
            </nav>
          </div>
        </div>

        <div
          style={{
            backgroundImage: "linear-gradient( #00070036, #00070055), url('/card-img.png')"
          }}
          className="bg-cover p-4 rounded-xl border border-border mt-auto"
        >
          <div className=" rounded-full size-8 flex justify-center items-center bg-white">
            <Award size={16} />
          </div>
          <h1 className="text-md text-white mt-3 font-regular">Download Our Mobile App</h1>
          <p className="text-xs text-gray-200 mt-2 ">Get easy in another way</p>

          <button className="bg-primary p-4 text-center w-full flex items-center justify-center rounded-full mt-4 text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
            Download
          </button>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;