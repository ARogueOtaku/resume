import { useMemo } from "react";

function DateRange({
  start,
  end = null,
  includeMonth = true,
  includeDate = false,
}: {
  start: Date;
  end?: Date | null;
  includeMonth?: boolean;
  includeDate?: boolean;
}) {
  const dateFormatter = useMemo(() => {
    return new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: includeMonth ? "short" : undefined,
      day: includeDate ? "2-digit" : undefined,
    });
  }, [includeMonth, includeDate]);

  return (
    <div>
      <span>{dateFormatter.format(start)}</span>
      {includeDate ? " to " : " - "}
      <span>{end ? dateFormatter.format(end) : "Present"}</span>
    </div>
  );
}

export default DateRange;
