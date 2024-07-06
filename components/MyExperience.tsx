import { experiences } from "@/constants";
import Image from "next/image";
import React from "react";

const MyExperience = () => {
  return (
    <div className="sm:mx-12  px-5  py-20">
      <h1 className="text-center text-3xl my-5 mb-10  ">
        My <span className="font-bold">Expreience</span>
      </h1>
      <div className="flex flex-col items-center gap-4 ">
        {experiences.map((experience) => (
          <div
            key={experience.company}
            className=" max-w-[1200px]  border-2 border-zinc-500 px-6 py-5 rounded-md  gap-3"
          >
            <div className="flex sm:flex-row flex-col mb-5 justify-between">
              <div className="flex  gap-4">
                <Image
                  src={experience.logo}
                  alt="logo"
                  width={34}
                  height={34}
                  className="object-contain"
                />
                <h3 className="text-xl font-medium">
                  {experience.title} at {experience.company}
                </h3>
              </div>
              <div>
                <h4 className="text-zinc-300">{experience.date}</h4>
              </div>
            </div>
            <p className="text-zinc-300 text-base">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyExperience;
