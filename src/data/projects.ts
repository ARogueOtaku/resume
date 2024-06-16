import { Project } from "@/data/types";

const projects: Project[] = [
  {
    name: "Wordle",
    technologies: ["TypeScript", "React", "HTML/CSS"],
    sourceCode: {
      label: "Source",
      url: "https://github.com/ARogueOtaku/wordle",
    },
    demo: {
      label: "Live App",
      url: "https://arogueotaku.github.io/wordle",
    },
    description: ["A minimal Clone of the famous Wordle game."],
  },
  {
    name: "Authentication",
    technologies: ["Java", "Spring Boot", "Rest", "JWT"],
    sourceCode: {
      label: "Source",
      url: "https://github.com/ARogueOtaku/authentication",
    },
    description: ["Spring Boot Authentication API."],
  },
  {
    name: "GRPC/Rest",
    technologies: ["JavaScript", "NodeJS", "GRPC", "Google Protobuf", "JSON"],
    sourceCode: {
      label: "Source",
      url: "https://github.com/ARogueOtaku/grpc-rest-api",
    },
    description: ["A Simple API written in both gRPC and Rest."],
  },
  {
    name: "WCreate",
    technologies: ["Typescript", "NodeJS"],
    sourceCode: {
      label: "Source",
      url: "https://github.com/ARogueOtaku/wcreate",
    },
    demo: {
      label: "NPM Package",
      url: "https://www.npmjs.com/package/wcreate",
    },
    description: ["A Node CLI Utility to create Vanilla Webpage."],
  },
  {
    name: "RoomWS",
    technologies: ["JavaScript", "NodeJS", "WebSockets"],
    sourceCode: {
      label: "Source",
      url: "https://github.com/ARogueOtaku/RoomWS",
    },
    description: [
      "A Simple Chat App that uses basic WebSocket Server to implement a Lobby like Feature and Allow chatting.",
      "This is a POC Project I did to see if I could emulate a Room without using any Third Party Websocket Libraries. Although I was successful in what I set out to do, it involved a lot of boilerplating and hassle just to set up rooms and keep track of them.",
      "Please use dedicated libraries like Socket.IO if you wish to emulate rooms via WebSockets.",
    ],
  },
  {
    name: "Simple Stats",
    technologies: ["Java", "Minecraft 1.18 API"],
    sourceCode: {
      label: "Source",
      url: "https://github.com/ARogueOtaku/SimpleStats",
    },
    demo: {
      label: "Download",
      url: "https://www.curseforge.com/minecraft/mc-mods/simple-stats",
    },
    description: [
      "A Simple Stats Mod which show useful Statistics like Player Coordinates, Food Levels, FPS and Latency.",
    ],
  },
  {
    name: "YTAudioStream",
    technologies: ["NodeJS", "Express"],
    sourceCode: {
      label: "Source",
      url: "https://github.com/ARogueOtaku/YTAudioStream",
    },
    demo: {
      label: "Demo (Has a Cold Start)",
      url: "https://yd-loader.glitch.me/audio?v=dQw4w9WgXcQ",
    },
    description: [
      "A Web Server that Responds with YouTube Audio Readable Streams.",
    ],
  },
  {
    name: "BeforeAfter",
    technologies: ["HTML", "CSS", "JavaScript"],
    sourceCode: {
      label: "Source",
      url: "https://github.com/ARogueOtaku/BeforeAfter",
    },
    demo: {
      label: "Demo",
      url: "https://arogueotaku.github.io/BeforeAfter",
    },
    description: ["A Before After Image Slider Utility."],
  },
  {
    name: "CardPerspective",
    technologies: ["HTML", "CSS", "JavaScript"],
    sourceCode: {
      label: "Source",
      url: "https://github.com/ARogueOtaku/CardPerspective",
    },
    demo: {
      label: "Demo",
      url: "https://arogueotaku.github.io/CardPerspective",
    },
    description: [
      "A Vanilla JS tilt Effect POC. No Libraries Used.",
      "This is just for POC. For a more Production Ready Tilt Effect please check out this Awesome Library by Gijs Rogé called tilt.js.",
    ],
  },
  {
    name: "TimeKeeper",
    technologies: ["HTML", "CSS", "JavaScript"],
    sourceCode: {
      label: "Source",
      url: "https://github.com/ARogueOtaku/TimeKeeper",
    },
    demo: {
      label: "Download",
      url: "https://chrome.google.com/webstore/detail/timekeeper/kmcglconamolngmdcmmklkipkplfjhim",
    },
    description: ["A Chromium based Extensions to add clocks to Your Browser."],
  },
  {
    name: "ExtensionTunes",
    technologies: ["HTML", "CSS", "JavaScript"],
    sourceCode: {
      label: "Source",
      url: "https://github.com/ARogueOtaku/ExtensionTunes",
    },
    demo: {
      label: "Download",
      url: "https://chrome.google.com/webstore/detail/extensiontunes/nhocfnegiaknbpdpfphdffcppbhodpfc",
    },
    description: ["An Audio Player Chrome Extension."],
  },
  {
    name: "AlfaBot",
    technologies: ["JavaScript", " Discord API"],
    sourceCode: {
      label: "Source",
      url: "https://github.com/ARogueOtaku/AlfaBot",
    },
    description: [
      "Nifty Discord Buddy who provides Steam Game Details via commands.",
      "Due to recent changes to Heroku free plan, this bot is now dead. It might come alive in future when I port it to serverless architecture.",
    ],
  },
];

export default projects;
