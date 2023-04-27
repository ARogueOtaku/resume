import { ProfileDataContext } from "@/providers/ProfileDataProvider";
import { TProfile } from "@/schemas/profile";
import { useContext } from "react";

const useProfileDataSelector = <S>(
  selector: (profileData: TProfile) => S
): S => {
  const { profileData } = useContext(ProfileDataContext);
  return selector(profileData);
};

export default useProfileDataSelector;
