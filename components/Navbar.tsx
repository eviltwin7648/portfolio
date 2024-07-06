import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className="flex justify-between  items-center sm:mx-12 my-2 px-5 py-2">
      <div>
        <a href="#hero" className="text-lg font-bold">
          Vishal
        </a>
      </div>
      <div>
        <ul className="hidden sm:flex justify-around gap-3 font-medium">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <a href="https://drive.google.com/file/d/1fAbuuJJVQl-c9AjNXxCPeWxIkxEVPkuj/view?usp=sharing" target="_blank">
        <Button className="hidden sm:flex flex-row relative justify-center items-center py-3 px-6 outline-none" >
          Resume
          <div className="relative w-6 h-4">
            <Image
              src="/logos/download.svg"
              alt="right icon"
              fill
              className="object-contain"
            />
          </div>
        </Button>
        </a>
        <MobileNav/>
      </div>
    </div>
  );
};

export default Navbar;
