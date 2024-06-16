import useProfileDataSelector from "@/hooks/useProfileDataSelector";
import { Fragment, useMemo } from "react";
import Section from "@/components/visual/Section";
import ExperienceArticle, {
  IExperienceArticleProps,
} from "@/components/visual/Article/ExperienceArticle";

function EducationSection() {
  const educations = useProfileDataSelector(
    (profileData) => profileData.educations
  );

  const educationArticleDatas = useMemo<IExperienceArticleProps[]>(() => {
    return educations.map((education) => {
      const graduated = education.graduated ? "Graduated" : "Dropped Out";
      const as = education.specialization
        ? `as a ${education.specialization}`
        : "";
      const from = education.board ? `from ${education.board}` : "";
      let rating = "";
      if (education.rating) {
        switch (education.rating.ratingType) {
          case "PERCENT":
            rating += ` with ${education.rating.rating}%`;
            break;
          case "PERCENTILE":
            rating += ` in ${education.rating.rating}th Percentile`;
            break;
          default:
            rating += ` with a ${education.rating.ratingType} of ${education.rating.rating} out of ${education.rating.maxRating}`;
        }
      }
      return {
        headerText: `${education.degreeName}, ${education.school}`,
        duration: {
          start: education.start,
          end: education.end,
        },
        place: education.location,
        yearOnly: true,
        points: [`${graduated} ${as} ${from} ${rating}`],
      };
    });
  }, [educations]);

  return educationArticleDatas.length > 0 ? (
    <Section
      headerText="Education"
      id="education"
      divider="DARK"
      content={educationArticleDatas.map((educationArticleData, idx) => (
        <Fragment key={idx}>
          {idx > 0 && (
            <hr className="w-full border-dashed border-slate-500 md:w-1/2" />
          )}
          <ExperienceArticle {...educationArticleData} />
        </Fragment>
      ))}
    />
  ) : null;
}

export default EducationSection;
