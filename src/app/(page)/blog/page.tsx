'use client';

import styles from "@/styles/heading.module.css";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="w-full h-screen flex items-center justify-center text-center dark:bg-dark-theme bg-white">
      <div>
        <h1
          className={`mb-10 md:text-8xl text-5xl text-red-500 dark:text-gray-100 font-bold font-main ${styles.stroke}`}
        >
          Blog
        </h1>
        <p className="text-xl font-bold font-main dark:text-primary text-black mb-6">
          This Blog is under construction
        </p>
        <button
          className={`focus:outline-none col-start-2 mt-8 place-self-start relative self-start align-start px-6 py-2 font-semibold text-md font-main capitalize rounded bg-primary text-black`}
        >
          <Link href="/">
            Back Home
          </Link>
        </button>
      </div>
    </div>
  );
};