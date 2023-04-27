import { useCallback } from "react";

function ToggleButton({
  toggler,
  toggleState,
}: {
  toggler: (state: boolean | ((state: boolean) => boolean)) => void;
  toggleState: boolean;
}) {
  const onToggle = useCallback(() => {
    toggler((currentToggleState) => !currentToggleState);
  }, [toggler]);

  return (
    <div
      id="togglemenu"
      className="absolute left-0 top-0 z-10 m-5 md:hidden"
      onClick={onToggle}
    >
      <div
        className={`${
          toggleState ? "bg-slate-100" : "bg-slate-800"
        } my-1 h-1 w-6 rounded-md transition-colors`}
      ></div>
      <div
        className={`${
          toggleState ? "bg-slate-100" : "bg-slate-800"
        } my-1 h-1 w-6 rounded-md transition-colors`}
      ></div>
      <div
        className={`${
          toggleState ? "bg-slate-100" : "bg-slate-800"
        } my-1 h-1 w-6 rounded-md transition-colors`}
      ></div>
    </div>
  );
}

export default ToggleButton;
