import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex align-middle items-center ">
      <div>
        <h1 className="text-6xl font-light leading-normal">
          Hello I’m <span className="font-medium">Vishal Rai Software</span> <span className="hollow-text">Engineer</span> Based
          In <span className="font-medium">India</span>
        </h1>
        <p className="mt-10 text-gray-500">
        "Hey there! I’m a React.js wizard, Next.js enthusiast, and MongoDB aficionado. When I’m not slinging code, you’ll find me sipping coffee and pondering how to build the next big thing. Let’s team up and create some digital magic together!” 🚀👩‍💻
        </p>
        <div>

        </div>
      </div>
      <div>
        <Image
          src="/hero.png"
          alt="Hero Image"
          width={2000}
          height={2000}
        />
      </div>
    </div>
  );
};

export default Hero;
