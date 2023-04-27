import Rating from "@/components/visual/Rating";
import Section from "@/components/visual/Section";
import useProfileDataSelector from "@/hooks/useProfileDataSelector";

function SkillsSection() {
  const skills = useProfileDataSelector((profileData) => profileData.skills);

  return (
    <Section
      headerText="Skills"
      id="skills"
      content={skills.map((skill, idx) => (
        <Rating
          key={idx}
          header={skill.name}
          rating={skill.rating.rating}
          maxRating={skill.rating.maxRating}
        />
      ))}
    />
  );
}

export default SkillsSection;
