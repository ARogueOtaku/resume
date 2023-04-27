import DateRange from "@/components/visual/DateRange";
import Article from ".";
import Link from "../Link";

export interface IExperienceArticleProps {
  headerText: string;
  duration: {
    start: Date;
    end?: Date;
  };
  place: string;
  points: string[];
  yearOnly?: boolean;
}

function ExperienceArticle({
  headerText,
  duration,
  place,
  points,
  yearOnly = false,
}: IExperienceArticleProps) {
  return (
    <Article
      header={headerText}
      subheader={
        <DateRange
          includeMonth={!yearOnly}
          start={duration.start}
          end={duration.end}
        />
      }
      headerRight={place}
      points={points}
    />
  );
}

export default ExperienceArticle;
