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
          className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map(({ id, name, img, linkToPage }) => (
            <motion.div variants={itemSlideUp} key={id}>
              <Link href={`/details/${id}`}>
                <Image
                  src={img}
                  width={345}
                  height={216}
                  layout="responsive"
                  className="rounded"
                  alt="work"
                />
              </Link>
              <div className="mt-4 flex justify-between items-center">
                <h4 className="font-main text-md font-bold capitalize dark:text-gray-100">
                  {name}
                </h4>
                <div className="flex space-x-4 dark:text-gray-100">
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
