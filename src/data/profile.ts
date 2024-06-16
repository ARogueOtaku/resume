import { Profile } from "@/data/types";
import addresses from "@/data/addresses";
import basicInfo from "@/data/basicInfo";
import educations from "@/data/educations";
import email from "@/data/email";
import experiences from "@/data/experiences";
import hobbies from "@/data/hobbies";
import languages from "@/data/languages";
import phone from "@/data/phone";
import projects from "@/data/projects";
import skills from "@/data/skills";
import socials from "@/data/socials";

const profile: Profile = {
  basicInfo,
  addresses,
  phone,
  email,
  socials,
  skills,
  languages,
  hobbies,
  experiences,
  educations,
  projects,
};

export default profile;
