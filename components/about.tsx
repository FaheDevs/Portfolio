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
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
    As a <span className="font-medium">dedicated and skilled Software Engineer</span> with a profound background in <span className="font-medium">Java and full-stack development</span>, I specialize in creating robust and scalable IT solutions. Throughout my journey in the tech industry, I've refined my skills in <span className="font-medium">Java, ReactJS</span>, and a wide range of other technologies.

    My academic journey culminated in achieving a <span className="font-medium">Master's degree</span>, enhanced by a hands-on alternance experience, providing me with a solid blend of theoretical knowledge and practical expertise. This phase was critical in shaping my proficiency in designing, deploying, and maintaining <span className="italic">comprehensive IT solutions</span>, particularly for the B2C sector. I have undertaken diverse projects, from CRM systems to e-learning platforms, each demanding a keen eye for detail, a robust grasp of technical concepts, and a <span className="underline">passion for excellence</span>. My core stack includes <span className="font-medium">Java, ReactJS, and NodeJs</span> among other technologies. I am on a continuous quest for learning and am currently seeking a <span className="font-medium">full-time position</span> that allows me to further refine my skills and contribute to impactful projects.
</p>

    </motion.section>
  );
}
