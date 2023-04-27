import { ProfileSchema, TProfile } from "@/schemas/profile";
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

const emptyProfile = ProfileSchema.parse({
  address: [],
  basicInfo: {
    aboutMe: "",
    job: "",
    name: "",
  },
  education: [],
  email: "",
  experience: [],
  hobbies: [],
  languages: [],
  phone: {
    country: "N/A",
    number: -1,
  },
  skills: [],
  socials: [],
  projects: [],
});

type TProfileDataContextValue = {
  loading: boolean;
  profileData: TProfile;
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
      const response = await fetch("./profileData.json");
      const data = ProfileSchema.parse(await response.json());
      setProfileData(data);
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
