'use client';

import styles from "@/styles/heading.module.css";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="w-full h-screen flex items-center justify-center text-center dark:bg-dark-theme bg-white">
      <div className="flex flex-col px-4">
        <h1
          className={`mb-10 md:text-8xl text-5xl text-red-500 dark:text-gray-100 font-bold font-main ${styles.stroke}`}
        >
          Blog
        </h1>
        <p className="text-xl font-bold font-main dark:text-primary text-black mb-6">
          This Blog is under construction
        </p>
        <Link href="/" className="focus:outline-none mt-8 px-6 py-3 font-semibold text-md font-main capitalize rounded bg-primary text-black block min-w-12 min-h-12 text-center">
    Back Home
  </Link>
      </div>
    </div>
  );
};