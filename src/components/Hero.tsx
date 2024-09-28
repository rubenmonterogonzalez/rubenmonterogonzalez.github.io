'use client';

import { slideToLeft } from "@/helpers/animations";
import { motion } from "framer-motion";
import styles from "../styles/hero.module.css";

export function Hero({ header, stroke }: { header: string, stroke: boolean }) {
  return (
    <h1 className="sm:text-7xl text-5xl font-main font-black uppercase mb-12">
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: "8rem" }}
        transition={{ duration: 0.5 }}
        className="relative inline-block w-32  mr-4 h-4 bg-gray-200 dark:bg-dark-gray"
      >
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: "4rem" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute bottom-full w-16 h-4 bg-primary"
        ></motion.span>
      </motion.span>
      <motion.span
        initial="hidden"
        animate="visible"
        variants={slideToLeft}
        custom={0.5}
        className={`inline-block dark:text-gray-100 ${stroke && styles.stroke}`}
      >
        {header}
      </motion.span>
    </h1>
  );
};