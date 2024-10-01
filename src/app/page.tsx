'use client'

import { Shape } from '@/components/Shape';
import { slideToLeft, slideToRight, slideUp } from '@/helpers/animations';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '@/styles/home.module.css';

export default function Home() {
  return (
    <section className="relative overflow-hidden min-h-screen w-full flex items-center md:pt-0 pt-16 dark:bg-dark-theme bg-white">
      <div className="relative max-w-screen-lg px-8 lg:px-2 w-full mx-auto">
        <div className="md:grid md:grid-cols-2 md:grid-rows-2 xl:gap-0 gap-4">
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

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={slideToLeft}
            custom={0.3}
            className="md:text-7xl text-4xl col-span-2 dark:text-white font-black font-main text-black uppercase"
          >
            Ruben Montero
          </motion.h1>
          <div className="md:space-x-16 justify-center items-center md:flex">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={slideToRight}
              custom={0.3}
              className="md:text-2xl text-lg dark:text-white text-gray-700 capitalize mb-auto"
            >
              Full Stack Developer
            </motion.p>
          </div>
          <Link href="/work">
            <motion.button
              initial="hidden"
              animate="visible"
              variants={slideUp}
              whileTap={{ scale: 0.9 }}
              custom={0.6}
              className={`${styles.btn} focus:outline-none mt-8 place-self-start relative self-start align-start px-6 py-2 font-semibold text-md font-main capitalize rounded bg-primary text-dark-theme`}
            >
              view work
            </motion.button>
          </Link>
        </div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideUp}
        custom={0.6}
        className="absolute -bottom-10 xl:left-12 right-0 w-20 bg-cover h-20"
      >
        <div className="md:block hidden">
          <div className="absolute w-16 h-16 bg-primary right-0 top-0">
            <div className="absolute top-4 -left-4 w-16 bg-cover h-16 dark:invert">
              <Shape />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

