import AddressTypes from "@/constants/AddressTypes";
import Countries from "@/constants/Countries";
import Degrees from "@/constants/Degrees";
import RatingTypes from "@/constants/RatingTypes";

export type AddressType = (typeof AddressTypes)[number];
export type Degree = (typeof Degrees)[number];
export type RatingType = (typeof RatingTypes)[number];
export type Country = (typeof Countries)[number];
export type BasicInfo = {
  name: string;
  job: string;
  aboutMe: string;
};
export type Address = {
  name: string;
  type: AddressType;
};
export type Phone = {
  number: number;
  country: Country;
};
export type Email = string;
export type Hobby = string;
export type Link = {
  label: string;
  url: string;
};
export type Rating = {
  rating: number;
  maxRating: number;
  ratingType: RatingType;
};
export type Skill = {
  name: string;
  rating: Rating;
};
export type Language = {
  name: string;
  rating: Rating;
};
export type WorkExperience = {
  employer: string;
  position: string;
  start: Date;
  location: string;
  remote: boolean;
  contractor: boolean;
  description: string | string[];
  clients: string[];
  end?: Date;
  technologies?: string[];
};
export type Education = {
  school: string;
  degree: Degree;
  degreeName: string;
  start: Date;
  location: string;
  graduated: boolean;
  board?: string;
  specialization?: string;
  end?: Date;
  rating?: Rating;
};
export type Project = {
  name: string;
  technologies: string[];
  description: string | string[];
  sourceCode?: Link;
  demo?: Link;
};
export type Profile = {
  basicInfo: BasicInfo;
  addresses: Address[];
  phone: Phone;
  email: Email;
  socials: Link[];
  skills: Skill[];
  hobbies: Hobby[];
  languages: Language[];
  experiences: WorkExperience[];
  educations: Education[];
  projects: Project[];
};

export type CountryCode = {
  dial_code: string;
  code: string;
};
