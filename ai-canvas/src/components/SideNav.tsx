import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  Library,
  PenSquare,
  Settings,
  HelpCircle,
  LogOut,
  PlusCircle,
  AutoAwesome,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SideNav = () => {
  const navItems = [
    { to: "/dashboard", icon: <LayoutGrid size={20} />, text: "Dashboard" },
    { to: "/canvas", icon: <PenSquare size={20} />, text: "Canvas" },
    {
      to: "/templates",
      icon: <Library size={20} />,
      text: "Template Library",
      active: true,
    },
    { to: "/settings/studio", icon: <Settings size={20} />, text: "Settings" },
  ];

  return (
    <aside className="sticky top-0 h-screen w-64 flex-shrink-0 bg-[#1F2937] p-6 flex flex-col justify-between border-r border-[#334155]">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <div className="bg-[#4F46E5]/20 p-2 rounded-lg">
            <AutoAwesome className="text-[#4F46E5]" size={24} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-lg font-bold font-heading">
              AI Canvas
            </h1>
            <p className="text-[#94a3b8] text-sm">Workspace</p>
          </div>
        </div>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-4 py-2 rounded-lg text-[#94a3b8] hover:bg-white/5 transition-colors",
                  (isActive || item.active) && "bg-[#4F46E5]/10 text-[#4F46E5]"
                )
              }
            >
              {item.icon}
              <p className="text-sm font-medium">{item.text}</p>
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="flex flex-col gap-2">
        <button className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-[#4F46E5] text-white text-sm font-bold leading-normal tracking-wide hover:bg-[#4F46E5]/90 transition-colors">
          <PlusCircle size={16} />
          <span className="truncate">New Project</span>
        </button>
        <NavLink
          to="/help"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-[#94a3b8] hover:bg-white/5 transition-colors"
        >
          <HelpCircle size={20} />
          <p className="text-sm font-medium">Help</p>
        </NavLink>
        <NavLink
          to="/logout"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-[#94a3b8] hover:bg-white/5 transition-colors"
        >
          <LogOut size={20} />
          <p className="text-sm font-medium">Logout</p>
        </NavLink>
      </div>
    </aside>
  );
};

export default SideNav;
