import { skills } from "@/constants";
import Image from "next/image";
import React from "react";

const MySkills = () => {
  return (
    <div>
      <h1 className="text-center text-3xl py-10 ">
        My <span className="font-bold">Skills</span>
      </h1>
      <div className="  gap-16 flex flex-wrap justify-center">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className=" flex flex-col h-[186px] w-[186px] items-center justify-around rounded-md  border-4  border-black "
          >
            <Image src={skill.url} alt={skill.title} height={70} width={70} />
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
