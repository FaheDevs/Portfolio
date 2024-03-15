"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
      <motion.section
          ref={ref}
          className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.175}}
          id="about"
      >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
          As a <span className="font-medium">seasoned Software Engineer</span> with expertise in <span
            className="font-medium">Java and full-stack development</span>, I am committed to crafting <span
            className="italic">maintainable, clean, and robust code</span> that adheres to object-oriented design
          principles, <span className="font-medium">SOLID standards</span>, and comprehensive unit testing for enhanced
          readability and future scalability. Holding a <span
            className="font-medium">Master's degree</span> supplemented by real-world experience through an alternance
          program, I have developed a strong foundation in both theoretical and practical aspects of software
          engineering, particularly in creating solutions tailored to the B2C sector.

          My experience spans a variety of projects, including CRM systems and e-learning platforms, where my attention
          to detail and technical acumen have been paramount. Proficient in <span className="font-medium">Java, ReactJS, NodeJs</span>,
          and other key technologies, I am dedicated to continuous learning and am actively seeking a <span
            className="font-medium">full-time role</span> where I can contribute to meaningful projects and further hone
          my skills.
        </p>
      </motion.section>

  );
}
