import { 
  LayoutDashboard, 
  Calendar, 
  FileText, 
  Brain, 
  Receipt, 
  DollarSign, 
  BarChart3, 
  Settings,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "../../../public/logo.png";

interface AdminSidebarProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
  collapsed: boolean;
  onToggle: () => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "dispatch", label: "Dispatch & Scheduling", icon: Calendar },
  { id: "job-details", label: "Job Details", icon: FileText },
  { id: "ai-intelligence", label: "AI Intelligence", icon: Brain },
  { id: "invoices", label: "Quotes & Invoices", icon: Receipt },
  { id: "job-costing", label: "Job Costing & Payroll", icon: DollarSign },
  { id: "analytics", label: "KPI & Analytics", icon: BarChart3 },
  { id: "settings", label: "Admin Settings", icon: Settings },
];

export function AdminSidebar({ currentScreen, onNavigate, collapsed, onToggle }: AdminSidebarProps) {
  return (
    <aside 
      className={cn(
        "bg-sidebar text-sidebar-foreground h-screen flex flex-col transition-all duration-300 border-r border-sidebar-border",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div style={{backgroundColor: "#ffffff"}}>

          <img src={logo} alt="" />
        </div>
        <div className="flex items-center gap-3">
          {/* <div className="w-10 h-10 rounded-lg gradient-orange flex items-center justify-center flex-shrink-0">
            <Zap className="w-6 h-6 text-white" />
          </div> */}
          {!collapsed && (
            <div className="overflow-hidden">
              <h1 className="font-bold text-lg text-white truncate">A1 Phoenix Plumbing</h1>
              <p className="text-xs text-sidebar-foreground/60">A1 Phoenix Plumbing Dashboard</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-left",
              currentScreen === item.id
                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            )}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span className="text-sm font-medium truncate">{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Mobile App Link */}
      <div className="p-3 border-t border-sidebar-border">
        <button
          onClick={() => onNavigate("mobile")}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
            currentScreen === "mobile"
              ? "bg-sidebar-primary text-sidebar-primary-foreground"
              : "text-sidebar-foreground hover:bg-sidebar-accent"
          )}
        >
          <Smartphone className="w-5 h-5 flex-shrink-0" />
          {!collapsed && <span className="text-sm font-medium">Mobile App Demo</span>}
        </button>
      </div>

      {/* Collapse Toggle */}
      <div className="p-3 border-t border-sidebar-border">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          {!collapsed && <span className="text-sm">Collapse</span>}
        </button>
      </div>
    </aside>
  );
}
