import { Profile } from "@/data/types";
import profile from "@/data/profile";
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

const emptyProfile: Profile = {
  addresses: [],
  basicInfo: {
    aboutMe: "",
    job: "",
    name: "",
  },
  educations: [],
  email: "",
  experiences: [],
  hobbies: [],
  languages: [],
  phone: {
    country: "N/A",
    number: 0,
  },
  skills: [],
  socials: [],
  projects: [],
};

type TProfileDataContextValue = {
  loading: boolean;
  profileData: Profile;
};

const initialContextValue: TProfileDataContextValue = {
  loading: false,
  profileData: emptyProfile,
};

export const ProfileDataContext =
  createContext<TProfileDataContextValue>(initialContextValue);

function ProfileDataProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [profileData, setProfileData] = useState(emptyProfile);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      setProfileData(profile);
    } catch (err) {
      setProfileData(emptyProfile);
      console.log(err);
    }
    setLoading(false);
  }, []);

  const value = useMemo<TProfileDataContextValue>(() => {
    return { loading, profileData };
  }, [loading, profileData]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <ProfileDataContext.Provider value={value}>
      {children}
    </ProfileDataContext.Provider>
  );
}

export default ProfileDataProvider;
