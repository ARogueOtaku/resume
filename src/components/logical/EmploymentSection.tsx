import useProfileDataSelector from "@/hooks/useProfileDataSelector";
import { Fragment, useMemo } from "react";
import Section from "../visual/Section";
import ExperienceArticle, {
  IExperienceArticleProps,
} from "@/components/visual/Article/ExperienceArticle";

function EmploymentSection() {
  const employments = useProfileDataSelector(
    (profileData) => profileData.experiences
  );

  const employmentArticleDatas = useMemo<IExperienceArticleProps[]>(() => {
    return employments.map((employment) => {
      const points =
        typeof employment.description === "string"
          ? [employment.description]
          : [...employment.description];
      if (employment.technologies) {
        points.push(`Technologies Used: ${employment.technologies.join(", ")}`);
      }
      points.push(`Clients: ${employment.clients.join(", ")}`);
      return {
        headerText: `${employment.position}, ${employment.employer}`,
        duration: {
          start: employment.start,
          end: employment.end,
        },
        place: `${employment.location} ${employment.remote ? "(Remote)" : ""}`,
        points,
      };
    });
  }, [employments]);

  return employmentArticleDatas.length > 0 ? (
    <Section
      headerText="Employment"
      id="employment"
      divider="DARK"
      content={employmentArticleDatas.map((employmentArticleData, idx) => (
        <Fragment key={idx}>
          {idx > 0 && (
            <hr className="w-full border-dashed border-slate-500 md:w-1/2" />
          )}
          <ExperienceArticle {...employmentArticleData} />
        </Fragment>
      ))}
    />
  ) : null;
}

export default EmploymentSection;
