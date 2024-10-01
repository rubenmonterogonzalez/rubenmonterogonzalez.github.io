'use client';

import { Heading } from "@/components/Heading";
import {
  item,
  list,
  slideDown,
  slideToLeft,
  slideUp,
} from "@/helpers/animations";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "Html/Css/Scss",
    "Javascript/Typescript",
    "React/Next",
    "Vue/Nuxt",
    "Wordpress",
    "Figma",
    "Prisma/ORMs",
    "Nodejs/Express",
    "MySQL/Postgres",
  ];
  return (
    <section className="min-h-screen flex items-center pt-28 overflow-hidden dark:bg-dark-theme bg-white">
      <div className="max-w-screen-lg mx-auto xl:flex xl:justify-between xl:space-x-10 px-8 lg:px-2">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={slideDown}
          className="sm:text-7xl text-5xl font-main dark:text-white text-black font-black uppercase mb-12 xl:mb-0"
        >
          About <br />
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="relative inline-block w-32  mr-4 h-4 bg-gray-200 dark:bg-dark-gray"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "4rem" }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute bottom-full w-16 h-4 bg-primary"
            ></motion.span>
          </motion.span>
          Me
        </motion.h1>
        <div className="xl:mt-2">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={slideToLeft}
            custom={0.3}
            className="text-main text-lg leading-relaxed text-gray-800 dark:text-gray-200 mb-9"
          >
            Ruben is a Full Stack Developer with a strong emphasis on Front-End Development. He is passionate about creating engaging, responsive user interfaces that offer seamless user experiences. While skilled in back-end technologies, Ruben primarily focuses on Front-End Development, bringing designs to life through well-structured and efficient code.
            <br />
            <br />
            Driven by a personal goal of constant improvement, not just in his professional work but in all areas of life, Ruben is always looking to master new technologies, optimize web applications, and enhance his personal growth. He believes in pushing boundaries to achieve better results every day. His aim is to deliver applications that are both visually appealing and technically sound, ensuring an optimal experience for all users.
          </motion.p>
          <motion.h3
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={0.3}
            className="text-3xl font-main font-black uppercase mb-6 dark:text-white text-black"
          >
            Skills :
          </motion.h3>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={list}
            className="relative z-20 grid md:grid-cols-3 grid-cols-2 max-w-screen-md gap-4 "
          >
            {skills.map((skill, i) => (
              <motion.li
                variants={item}
                key={`${skill}-${i}`}
                className="text-main text-xl text-gray-700 dark:text-gray-200"
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};