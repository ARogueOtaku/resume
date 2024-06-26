import { WorkExperience } from "@/data/types";

const experiences: WorkExperience[] = [
  {
    position: "Senior Software Engineer",
    employer: "LearningMate Solutions",
    location: "Kolkata",
    remote: false,
    contractor: false,
    start: new Date(2023, 6),
    clients: ["Imagine Learning"],
    technologies: [
      "React",
      "Redux",
      "JavaScript",
      "TypeScript",
      "GraphQL",
      "Ant Design",
      "React Router",
      "Java",
      "Kotlin",
    ],
    description: [
      "Developed key features and modules as a Senior Software Engineer at LearningMate for the Cosmos project.",
      "Cosmos is a React-based single-page application (SPA) designed to author content for Imagine Learning, a US-based ed-tech company focused on digitizing education.",
      "Built reusable components & collaborated with peers to determine the structure and design of the web app, ensuring scalable and maintainable code.",
      "Worked on the backend API service called Aether, a microservice that integrates business logic with generic APIs and serves as a bridge between Cosmos and the Imagine Learning backend.",
      "Conducted code reviews and wrote unit tests to maintain high code quality.",
      "Worked closely with the client Product and UX teams to gather requirements and provide updates, ensuring the application meets their needs.",
    ],
  },
  {
    position: "FrontEnd Developer",
    employer: "Paytm",
    location: "Bengaluru",
    remote: true,
    contractor: true,
    start: new Date(2023, 1),
    end: new Date(2023, 6),
    clients: ["Nagad"],
    technologies: [
      "React",
      "Redux",
      "JavaScript",
      "TypeScript",
      "Material UI",
      "React Router",
      "Axios",
    ],
    description: [
      "Built multiple UI modules as Contractor for Paytm as a part of the BO Team for Nagad BO Portal project.",
      "Nagad BO Portal / System Portal is a web app that helps the Back Office Users to manage and maintain the Nagad platform",
      "Work with peers to determine structure and design of modules for the web app. Developed features that is reusable for future enhancements while also providing a seamless user experience",
    ],
  },
  {
    position: "UI Developer",
    employer: "Thoughtworks",
    location: "Bengaluru",
    remote: true,
    contractor: true,
    start: new Date(2022, 0),
    end: new Date(2022, 11),
    clients: ["Standard Chartered Bank"],
    technologies: [
      "HTML/CSS",
      "React",
      "TypeScript",
      "TailwindCSS",
      "GraphQL",
      "NodeJS",
      "React Testing",
    ],
    description: [
      "Built multiple UI modules as Contractor for ThoughtWorks as a part of the Wealth Team for SCNextGen Project.",
      "SCNextGen (SCNG) was a complete overhaul of the Online Banking System for Standard Chartered Bank. Worked with a team of diverse, multinational and talented individuals to integrate my modules and test the same.",
      "Followed a strictly Test Driven Development Practice to ensure high quality reusable code.",
    ],
  },
  {
    position: "Senior Software Engineer",
    employer: "Accolite Digital",
    location: "Bengaluru",
    remote: true,
    contractor: false,
    start: new Date(2021, 10),
    end: new Date(2023, 6),
    clients: ["Thoughtworks", "Paytm"],
    description: [
      "Built multiple UI modules as Contractor for Thoughtworks and Paytm",
      "Worked on ReactJS, Redux and used a variety of libraries in the React Ecosystem",
    ],
  },
  {
    position: "Solutions Engineer",
    employer: "LabVantage Solutions",
    location: "Kolkata",
    remote: false,
    contractor: false,
    start: new Date(2019, 5),
    end: new Date(2021, 10),
    technologies: ["HTML/CSS", "JavaScript", "React", "Git", "SQL", "LIMS"],
    clients: [
      "Abbott",
      "Streck",
      "Baxter",
      "Cedas Sinai",
      "Capstone",
      "Gritstone",
      "Novavax",
      "Kite Pharma",
    ],
    description: [
      "Designed and Developed numerous reports of Lab Experimentation Data using Jasper.",
      "Designed and Developed bar-code labels for multiple clients using BarTender.",
      "Created Multiple Java/JavaScript micro frameworks.",
      "Worked on Multiple Projects simultaneously and handled multiple client calls. Collaborated with a team of Talented Engineers to meet Customers Requirements.",
    ],
  },
  {
    position: "Systems Engineer",
    employer: "Infosys Limited",
    location: "Bengaluru",
    remote: false,
    contractor: false,
    start: new Date(2017, 9),
    end: new Date(2019, 5),
    technologies: ["SQL Server", "Microsoft Excel", "JavaScript"],
    clients: ["CITI Bank"],
    description: [
      "Effectively resolved Data Inconsistencies and cleaned corrupt data from Citi Genesis Data Warehouse as part of the Data Investigation(DI) Team.",
      "CITI Genesis was CITI Banks Data Warehousing Project.",
    ],
  },
];

export default experiences;
