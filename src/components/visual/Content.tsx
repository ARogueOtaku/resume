import { ReactNode } from "react";

function Content({ children }: { children: ReactNode }) {
  return (
    <main
      id="content"
      className="min-h-screen w-full bg-slate-100 text-slate-800 md:w-2/3"
    >
      <div className="mx-8 mt-90">{children}</div>
    </main>
  );
}

export default Content;
