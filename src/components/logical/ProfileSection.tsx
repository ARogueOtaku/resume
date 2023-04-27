import Section from "@/components/visual/Section";
import useProfileDataSelector from "@/hooks/useProfileDataSelector";

function ProfileSection() {
  const profileDesc = useProfileDataSelector(
    (profileData) => profileData.basicInfo.aboutMe
  );

  return (
    <Section
      headerText="Profile"
      id="profile"
      divider="DARK"
      content={<p className="mt-3 text-sm md:text-base">{profileDesc}</p>}
    />
  );
}

export default ProfileSection;
