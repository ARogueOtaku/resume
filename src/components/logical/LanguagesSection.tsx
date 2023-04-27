import Rating from "@/components/visual/Rating";
import Section from "@/components/visual/Section";
import useProfileDataSelector from "@/hooks/useProfileDataSelector";

function LanguagesSection() {
  const languages = useProfileDataSelector(
    (profileData) => profileData.languages
  );

  return (
    <Section
      headerText="Languages"
      id="languages"
      content={languages.map((language, idx) => (
        <Rating
          key={idx}
          header={language.name}
          rating={language.rating.rating}
          maxRating={language.rating.maxRating}
        />
      ))}
    />
  );
}

export default LanguagesSection;
