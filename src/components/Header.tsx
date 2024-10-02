'use client';

import { slideDown } from "@/helpers/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Shape } from "./Shape";
import { ThemeSwitcher } from "./Theme-Switcher";
import { IconAddressBook, IconCode, IconHome, IconLego, IconMail } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export function Header() {
  const routes = [
    { link: "/", name: "home", icon: <IconHome style={{ margin: 'auto' }} /> },
    { link: "/work", name: "work", icon: <IconCode style={{ margin: 'auto' }} /> },
    { link: "/about", name: "about", icon: <IconLego style={{ margin: 'auto' }} /> },
    { link: "/blog", name: "blog", icon: <IconAddressBook style={{ margin: 'auto' }} /> },
    { link: "/contact", name: "contact", icon: <IconMail style={{ margin: 'auto' }} /> },
  ];

  const [isOpen, setOpen] = useState<boolean>(false);
  const { theme } = useTheme();

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={slideDown}
      custom={1.2}
      className="w-full z-20 absolute top-0 left-0 overflow-hidden md:py-6 py-2"
      style={{ willChange: 'auto' }}
    >
      <nav className="flex px-2 items-center justify-between w-full max-w-screen-xl mx-auto">
        <div className=" self-center">
          {/* <Logo /> */}
        </div>

        <ul className="md:flex hidden space-x-6 items-center text-xl font-main capitalize">
          {routes.map((route, index) => (
            <li key={`${route.name}-${index}`} className="dark:text-white text-black px-2">
              <Link href={route.link}>
                {route.name}
              </Link>
            </li>
          ))}
          <ThemeSwitcher />
        </ul>
        <div className="flex items-center md:hidden relative z-40 self-center">
          <ThemeSwitcher />
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color={theme === "light" ? "#000" : "#f7e018" || "#000"}
          />
        </div>

        <ul
          className={`
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        md:hidden  flex w-16 h-screen top-0 right-0 transform z-30 transition-transform duration-300 ease-in-out  bg-gray-50  dark:bg-dark-gray fixed justify-center space-y-8 flex-col items-center text-center `}
        >
          {routes.map((route, index) => (
            <li key={`${route.name}-${index}`} onClick={() => setOpen(false)}>
              <Link href={route.link} className="hover:text-primary text-black dark:text-white text-sm font-main capitalize">
                <span className="block w-8 h-8 mx-auto text-xl">
                  {route.icon}
                </span>
                <span className="text-sm">{route.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:block hidden">
          <div className="absolute w-16 h-16 bg-primary right-0 top-0">
            <div className="absolute top-4 -left-4 w-16 bg-cover h-16">
              <Shape />
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};