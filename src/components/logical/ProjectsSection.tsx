import useProfileDataSelector from "@/hooks/useProfileDataSelector";
import { Fragment, useMemo } from "react";
import WorkArticle, {
  IWorkArticleProps,
} from "@/components/visual/Article/WorkArticle";
import Section from "@/components/visual/Section";

function ProjectsSection() {
  const projects = useProfileDataSelector(
    (profileData) => profileData.projects
  );

  const projectArticleDatas = useMemo<IWorkArticleProps[]>(() => {
    return projects.map((project) => {
      return {
        headerText: project.name,
        subheaderText: project.technologies.join(", "),
        source: project.sourceCode
          ? {
              label: project.sourceCode.label,
              url: project.sourceCode.url,
            }
          : undefined,
        demo: project.demo
          ? {
              label: project.demo.label,
              url: project.demo.url,
            }
          : undefined,
        points:
          typeof project.description === "string"
            ? [project.description]
            : [...project.description],
      };
    });
  }, [projects]);

  return projectArticleDatas.length > 0 ? (
    <Section
      headerText="Projects"
      id="projects"
      divider="DARK"
      content={projectArticleDatas.map((projectArticleData, idx) => (
        <Fragment key={idx}>
          {idx > 0 && (
            <hr className="w-full border-dashed border-slate-500 md:w-1/2" />
          )}
          <WorkArticle {...projectArticleData} />
        </Fragment>
      ))}
    />
  ) : null;
}

export default ProjectsSection;
