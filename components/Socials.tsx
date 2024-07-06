import { socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Socials = () => {
  return (
    <div className="flex gap-2 ">
      {socials.map((social) => (
        <div
          key={social.title}
          className="border-2 border-black rounded-sm  hover:bg-black"
        >
          <div className="flex w-full h-full hover:invert m-1">
            <a href={social.url} target="_blank">
              <Image
                src={social.logo}
                alt={social.title}
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Socials;
