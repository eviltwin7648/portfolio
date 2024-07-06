import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Button } from "./ui/button";

const MobileNav = () => {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger className="align-middle" asChild>
          <Image
            src="/logos/menu.svg"
            alt="menu"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="w-1/2">
          <div>
            <ul className="flex-col flex justify-around gap-3 font-medium">
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
                <a href="#contact" >Contact</a>
              </li>
            </ul>
            <a
              href="https://drive.google.com/file/d/1fAbuuJJVQl-c9AjNXxCPeWxIkxEVPkuj/view?usp=sharing"
              target="_blank"
            >
              <Button className="flex flex-row relative  items-left py-3 px-6 outline-none">
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
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
