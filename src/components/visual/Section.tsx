import { ReactNode } from "react";

function Section({
  headerText,
  content,
  id,
  divider = "LIGHT",
}: {
  headerText: string;
  content: ReactNode;
  id: string;
  divider?: "DARK" | "LIGHT";
}) {
  return (
    <section
      id={id}
      className="my-10 flex break-before-auto flex-col break-words"
    >
      <h1 className="font-bold uppercase tracking-widerest">{headerText}</h1>
      <hr
        className={`my-1 w-full ${
          divider === "LIGHT" ? "border-slate-100" : "border-slate-800"
        }`}
      ></hr>
      {content}
    </section>
  );
}

export default Section;
