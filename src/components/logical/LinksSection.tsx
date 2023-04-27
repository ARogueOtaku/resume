import Link from "@/components/visual/Link";
import Section from "@/components/visual/Section";
import useProfileDataSelector from "@/hooks/useProfileDataSelector";

function LinksSection() {
  const socials = useProfileDataSelector((profileData) => profileData.socials);

  return (
    <Section
      headerText="Links"
      id="links"
      content={
        <div className="mt-4 flex flex-col gap-3 text-xs md:gap-2">
          {socials.map((social, idx) => (
            <Link key={idx} label={social.label} url={social.url} />
          ))}
        </div>
      }
    />
  );
}

export default LinksSection;
