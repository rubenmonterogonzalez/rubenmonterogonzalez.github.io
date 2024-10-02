'use client';

import { Heading } from "@/components/Heading";
import { itemSlideUp, list } from "@/helpers/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { IconExternalLink } from "@tabler/icons-react";

export default function Work() {
  return (
    <section className="dark:bg-dark-theme bg-white relative overflow-hidden min-h-screen flex items-center py-28">
      <div className="max-w-screen-lg mx-auto w-full px-8 lg:px-2">
        <Heading heading="work" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={list}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 gap-y-16"
        >
          {projects.map(({ id, name, img, linkToPage }) => (
            <motion.div variants={itemSlideUp} key={id}>
              <Link
                href={linkToPage}
                rel="noopener noreferrer"
                target="_blank"
                className="relative"
              >
                <div className="relative w-full h-40 xs:h-60 sm:h-72 lg:h-50 xl:h-40">
                  <Image
                    src={img}
                    fill
                    className="rounded-md"
                    alt={`${name}`}
                    priority
                  />
                </div>
              </Link>
              <div className="mt-4 flex justify-between items-center">
                <h4 className="font-main text-md font-bold capitalize dark:text-white text-black">
                  {name}
                </h4>
                <div className="flex space-x-4 dark:text-white text-black">
                  <Link
                    href={linkToPage}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <IconExternalLink className="text-black dark:text-white" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
