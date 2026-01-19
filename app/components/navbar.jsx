"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsPersonFill, BsCodeSlash, BsFolderFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdSchool, MdLightMode, MdDarkMode } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { useTheme } from "next-themes";

function Navbar() {
  const pathname = usePathname();
  const [navigation, setNavigation] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Logic to handle active navigation link based on pathname
  }, [pathname]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav>
      <div className="navbar-content">
        <Link href="/" className="navbar-logo">
          SM
        </Link>
        <div className="navbar-links">
          <Link href="/#hero" className={pathname === "/#hero" ? "active" : ""}>
            <BsPersonFill /> <span>Home</span>
          </Link>
          <Link href="/#about" className={pathname === "/#about" ? "active" : ""}>
            <BsCodeSlash /> <span>About</span>
          </Link>
          <Link href="/#experience" className={pathname === "/#experience" ? "active" : ""}>
            <IoMdTime /> <span>Experience</span>
          </Link>
          <Link href="/#skills" className={pathname === "/#skills" ? "active" : ""}>
            <BsCodeSlash /> <span>Skills</span>
          </Link>
          <Link href="/#projects" className={pathname === "/#projects" ? "active" : ""}>
            <BsFolderFill /> <span>Projects</span>
          </Link>
          <Link href="/#education" className={pathname === "/#education" ? "active" : ""}>
            <MdSchool /> <span>Education</span>
          </Link>
          <Link href="/#contact" className={pathname === "/#contact" ? "active" : ""}>
            <BsFillTelephoneFill /> <span>Contact</span>
          </Link>
          <button onClick={toggleTheme} className="theme-toggle-button">
            {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
