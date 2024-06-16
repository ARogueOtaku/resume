import { useMemo } from "react";

const getRatingClass = (current: number, max: number) => {
  switch (true) {
    case current + 1 <= max:
      return "bg-slate-100";
    case current < max && current + 1 > max:
      return "bg-gradient-to-r from-slate-100 from-50% to-transparent to-0%";
    default:
      return "";
  }
};

function Rating({
  header,
  rating,
  maxRating,
}: {
  header: string;
  rating: number;
  maxRating: number;
}) {
  const ratingComponents = useMemo(() => {
    const out = [];
    for (let i = 0; i < maxRating; i++) {
      const component = (
        <div
          key={i}
          className={`h-2 w-2 rounded-full border border-slate-100 ${getRatingClass(
            i,
            rating
          )}`}
        ></div>
      );
      out.push(component);
    }
    return out;
  }, [rating, maxRating]);

  return (
    <div className="mt-4 flex flex-col gap-1">
      <h2 className="mb-1 text-xs">{header}</h2>
      <div className="flex gap-2 text-xs">{ratingComponents}</div>
    </div>
  );
}

export default Rating;
