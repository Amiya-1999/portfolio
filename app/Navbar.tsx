import Image from "next/image";
import { fontLeagueSpartan } from "./fonts";
import { logo } from "@/public/assets/images";
import Link from "next/link";
import * as motion from "framer-motion/client";

const Navbar = () => {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div
        className={`max-w-containerExtraLarge h-full mx-auto py-1 ${fontLeagueSpartan.className} flex items-center
        justify-between`}
      >
        <div>
          <Image className="w-20" src={logo} alt="logo" />
        </div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex gap-7 text-lg text-headerColor">
            <Link
              href="#home"
              className="flex items-center gap-1 font-medium hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href="#about"
              className="flex items-center gap-1 font-medium hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <span className="text-textGreen">01. </span>About
              </motion.li>
            </Link>
            <Link
              href="#experience"
              className="flex items-center gap-1 font-medium hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                <span className="text-textGreen">02. </span>Experience
              </motion.li>
            </Link>
            <Link
              href="#project"
              className="flex items-center gap-1 font-medium hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className="text-textGreen">03. </span>Project
              </motion.li>
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-1 font-medium hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                <span className="text-textGreen">04. </span>Contact
              </motion.li>
            </Link>
          </ul>
          <a href="/assets/Amiya_Dey_Resume.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.5 }}
              className="px-4 py-2 rounded-md text-headerColor text-lg border border-textGreen hover:bg-red-700 hover:border-red-700 hover:text-textGreen"
            >
              Resume
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
