import { ProfileDataContext } from "@/providers/ProfileDataProvider";
import { useContext } from "react";

const useProfileDataLoading = () => {
  const { loading } = useContext(ProfileDataContext);
  return loading;
};

export default useProfileDataLoading;
