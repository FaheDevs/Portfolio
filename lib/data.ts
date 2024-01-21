import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "INGENIEUR LOGICIEL JAVA - ALTERNANCE Master 2",
    location: "France",
    description:
      "Designed, deployed, and maintained a complete IT solution for the B2C sector of the operator Epic Chypre, encompassing CRM, E-Shop, Client Space, Billing, Payment System, while maintaining microservices and improving architecture. Collaborated on improving React frontend components and creating a production deployment management tool.",
    icon: React.createElement(FaReact), // or another appropriate icon
    date: "Recent",
  },
  // ... (other experiences)
  {
    title: "INGENIEUR FULL STACK JAVA/REACTJS",
    location: "Nice, RIVIERA INTEGRATION SOLUTIONS FACTORY",
    description:
      "Designed a Google Chrome extension dedicated to automating form tests within the B2B CRM of the operator Epic Chypre, collaborating closely with multiple teams. Implemented an automation process for productions, covering component configuration collection and version updates. Managed API migration while collaborating with various teams, including Monaco Telecom.",
    icon: React.createElement(FaReact),
    date: "April 2023 - August 2023",
  },
  {
    title: "DEVELOPPEUR JAVA",
    location: "ALGERDZ at UNIDEES",
    description:
      "Designed and developed an e-learning platform using Spring MVC Framework. Participated in the analysis, design, and development phases of SDLC. Developed frontend pages using JSP, custom tags, and HTML.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2022 - August 2022",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
        "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    projectLink: "https://google.com"
  },
  {
    title: "rmtDev",
    description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    projectLink: "https://google.com"
  },
  {
    title: "Word Analytics",
    description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    projectLink: "https://google.com"
  },
] as const;


export const skillsData = [
  // ... (previous skills)
  "Java", "Spring", "Design Patterns", "Microservices", "API REST",
  "SOAPUI", "Cypress.io", "JUnit", "Jest", "MariaDB", "MongoDB",
  "TypeScript", "NodeJs", "ReactJs", "Maven", "WebPack", "Linters",
  "SonarQube", "RabbitMQ", "KrankenD", "Spring apiGateway", "Docker",
  "Kafka", "Zipkin", "Keycloak","liquibase",
  // ... (any other skills)
] as const;
