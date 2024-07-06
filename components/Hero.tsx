import Image from "next/image";
import React from "react";
import Socials from "./Socials";

const Hero = () => {
  return (
    <div className="flex flex-col align-middle items-center   lg:flex-row lg:h-[90vh]    ">
      <div className="order-1 lg:-order-1 m">
        <h1 className=" text-4xl font-light leading-normal lg:text-6xl ">
          Hello I&apos;m <span className="font-medium">Vishal Rai Software</span>{" "}
          <span className="hollow-text">Engineer</span> Based In{" "}
          <span className="font-medium">India</span>
        </h1>
        <p className="my-10 text-lg lg:text-xl text-gray-500">
        &quot;Hey there! I&apos;m a React.js wizard, Next.js enthusiast, and MongoDB
          aficionado. When I&apos;m not slinging code, you&apos;ll find me sipping coffee
          and pondering how to build the next big thing. Let&apos;s team up and
          create some digital magic together!&quot; 🚀👩‍💻
        </p>
        <Socials />
        <div></div>
      </div>
      <div>
        <Image src="/hero.png" alt="Hero Image" width={2000} height={2000} />
      </div>
    </div>
  );
};

export default Hero;
