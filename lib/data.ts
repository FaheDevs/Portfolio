import React from "react";
import {CgWorkAlt} from "react-icons/cg";
import {FaReact} from "react-icons/fa";
import bankingImg from "@/public/BANKING.jpg";
import microImg from "@/public/MICROSERVICES.png";
import apiImg from "@/public/API.webp";

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
    title: "INGENIEUR FULL STACK JAVA/REACTJS",
    location: "Nice, INTEGRATION SOLUTIONS FACTORY - Client: Monaco Telecom, EPIC CYPRUS , GOMO ",
    description:
      "Designed, deployed, and maintained a complete IT solution for the B2C sector of the operator Epic Chypre, encompassing CRM, E-Shop, Client Space, Billing, Payment System, while maintaining microservices and improving architecture. Collaborated on improving React frontend components and creating a production deployment management tool.",
    icon: React.createElement(FaReact),
    date: "Recent",
  },
  // ... (other experiences)
  {
    title: "INGENIEUR FULL STACK JAVA/REACTJS",
    location: "Nice, INTEGRATION SOLUTIONS FACTORY - Client: Monaco Telecom, EPIC CYPRUS",
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
    title: "Core Banking System",
    description:
        "A showcase Java project employing TDD and Hexagonal Architecture for key banking functionalities and secure authentication via Keycloak",
    tags: ["Java", "Keycloak", "TDD", "Hexagonal Architecture"],
    imageUrl: bankingImg,
    projectLink: "https://yourProjectLinkHere"
  },
  {
    title: "Microservices Online Shop",
    description:
        "An e-commerce system powered by microservices, handling product cataloging, order management, inventory tracking, and customer notifications.",
    tags: ["Eureka Spring", "Spring API Gateway", "Resilience4j", "kafka", "Zipkin"],
    imageUrl: microImg,
    projectLink: "https://example.com"
  },
  {
    title: "MY Resume API",
    description:
        "A comprehensive Resume API built with Spring in Java",
    tags: ["Spring", "Java", "API REST ", "SWAGGER"],
    imageUrl: apiImg,
    projectLink: "https://example.com"
  },
] as const;


export const skillsData = [
  "Java", "Spring", "Design Patterns", "Microservices", "API REST",
   "Cypress.io", "JUnit", "Jest", "MariaDB", "MongoDB",
  "TypeScript", "NodeJs", "ReactJs/NextJs", "Maven", "WebPack",
  "KrankenD", "Spring Cloud", "Docker","K8s",
  "Kafka", "Keycloak","liquibase","Jira","Confluence","Git","Gitflow","TDD & BDD","cucumber"
] as const;
