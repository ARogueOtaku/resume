import { Profile } from "@/data/types";
import { ProfileDataContext } from "@/providers/ProfileDataProvider";
import { useContext } from "react";

const useProfileDataSelector = <S>(
  selector: (profileData: Profile) => S
): S => {
  const { profileData } = useContext(ProfileDataContext);
  return selector(profileData);
};

export default useProfileDataSelector;
