function Spinner({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`animate-spin rounded-full border-4 border-slate-300 border-l-slate-800 border-r-slate-800 ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    ></div>
  );
}

export default Spinner;
