import React from "react";
import { SlSocialFacebook, SlSocialGithub, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/Amiya-1999/" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <SlSocialGithub />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/amiya-dey-451357214/" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <SlSocialLinkedin />
          </span>
        </a>
        <a href="https://www.facebook.com/amiya.dey.5621" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <SlSocialFacebook />
          </span>
        </a>
        <a href="https://www.instagram.com/romeo.19.99/" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <SlSocialInstagram />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
