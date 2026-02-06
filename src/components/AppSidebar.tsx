import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  LayoutDashboard,
  Wallet,
  Building2,
  Briefcase,
  Plane,
  FolderKanban,
  ShoppingCart,
  UserCog,
  TrendingUp,
  Landmark,
  FileText,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  url: string;
  icon: React.ElementType;
}

interface MenuSection {
  label: string;
  items: MenuItem[];
}

const menuSections: MenuSection[] = [
  {
    label: "OVERVIEW",
    items: [
      { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    label: "CASH OUTFLOW",
    items: [
      { title: "Salary Expenses", url: "/salary-expenses", icon: Wallet },
      { title: "Fixed Office Cost", url: "/fixed-office-cost", icon: Building2 },
      { title: "Flexible Office Cost", url: "/flexible-office-cost", icon: Briefcase },
      { title: "Traveling / Reimbursement Cost", url: "/traveling-cost", icon: Plane },
      { title: "Project Work Payment", url: "/project-payment", icon: FolderKanban },
      { title: "Iuova Purchase", url: "/iuova-purchase", icon: ShoppingCart },
      { title: "CEO Fix Salary Cost", url: "/ceo-salary", icon: UserCog },
    ],
  },
  {
    label: "CASH INFLOW",
    items: [
      { title: "Iuova Sales", url: "/iuova-sales", icon: TrendingUp },
      { title: "FD Interest", url: "/fd-interest", icon: Landmark },
      { title: "PI Issued", url: "/pi-issued", icon: FileText },
    ],
  },
  {
    label: "REPORTS",
    items: [
      { title: "Monthly Analytics", url: "/monthly-analytics", icon: BarChart3 },
    ],
  },
  {
    label: "SETTINGS",
    items: [
      { title: "Manage Categories", url: "/manage-categories", icon: Settings },
    ],
  },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <aside
      className={cn(
        "flex flex-col bg-sidebar text-sidebar-foreground h-screen transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center gap-1">
            <span className="text-xl font-bold text-sidebar-accent">IU</span>
            <span className="text-xl font-bold text-sidebar-foreground">OVA</span>
          </div>
        )}
        {collapsed && (
          <span className="text-xl font-bold text-sidebar-accent mx-auto">I</span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-md hover:bg-sidebar-muted transition-colors text-sidebar-foreground"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* User Info */}
      {!collapsed && (
        <div className="px-4 py-4 border-b border-sidebar-border">
          <p className="font-semibold text-sidebar-foreground text-sm">Financial Admin</p>
          <p className="text-xs text-sidebar-section-label">Finance Manager</p>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 scrollbar-thin">
        {menuSections.map((section) => (
          <div key={section.label} className="mb-4">
            {!collapsed && (
              <p className="px-4 mb-2 text-[11px] font-semibold tracking-wider text-sidebar-section-label uppercase">
                {section.label}
              </p>
            )}
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.url);
                return (
                  <li key={item.url}>
                    <Link
                      to={item.url}
                      className={cn(
                        "flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg transition-all duration-200",
                        active
                          ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-md"
                          : "text-sidebar-foreground hover:bg-sidebar-muted hover:text-sidebar-foreground"
                      )}
                      title={collapsed ? item.title : undefined}
                    >
                      <Icon size={18} className="flex-shrink-0" />
                      {!collapsed && (
                        <span className="text-sm font-medium truncate">{item.title}</span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
