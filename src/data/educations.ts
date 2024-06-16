import { Education } from "@/data/types";

const educations: Education[] = [
  {
    degree: "BACHELORS",
    degreeName: "Bachelor of Technology",
    location: "Jaipur",
    graduated: true,
    school: "University of Engineering & Management",
    start: new Date(2013, 0),
    end: new Date(2017, 0),
    specialization: "Computer Science Engineer",
    rating: {
      rating: 7.11,
      maxRating: 10,
      ratingType: "CGPA",
    },
  },
  {
    degree: "HIGHER_SECONDARY",
    degreeName: "Higher Secondary",
    location: "Kolkata",
    graduated: true,
    school: "St. Xavier's Institution",
    start: new Date(2011, 0),
    end: new Date(2013, 0),
    specialization: "Science",
    board: "ISC",
    rating: {
      rating: 73.2,
      maxRating: 100,
      ratingType: "PERCENT",
    },
  },
  {
    degree: "SECONDARY",
    degreeName: "Secondary",
    location: "Kolkata",
    graduated: true,
    school: "St. Xavier's Institution",
    start: new Date(2009, 0),
    end: new Date(2011, 0),
    board: "ICSE",
    rating: {
      rating: 94.3,
      maxRating: 100,
      ratingType: "PERCENT",
    },
  },
];

export default educations;
