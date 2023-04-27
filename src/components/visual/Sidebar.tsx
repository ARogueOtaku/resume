import { ReactNode } from "react";

function SideBar({
  children,
  expanded,
}: {
  children: ReactNode;
  expanded: boolean;
}) {
  return (
    <aside
      id="sidebar"
      className={`absolute ${
        expanded ? "left-0" : "-left-80"
      } top-0 h-full w-80 overflow-hidden bg-slate-800 text-slate-100 transition-all md:relative md:left-0 md:h-auto md:w-1/3`}
    >
      <div className="ml-10 mr-6 mt-90 lg:ml-12">{children}</div>
    </aside>
  );
}

export default SideBar;
