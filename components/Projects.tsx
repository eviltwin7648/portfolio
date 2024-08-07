import { projects } from "@/constants";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="sm:mx-12  px-5  py-20">
      <h1 className="sm:text-3xl text-2xl text-center my-5 mb-10 ">
        My <span className="font-bold">Projects</span>
      </h1>
      {projects.map((project) => (
        <div key={project.title} className="flex flex-col lg:flex-row  sm:px-10 my-5 ">
          <div className={` flex lg:w-1/2  sm:max-lg:justify-center ${project.number % 2 ?'justify-start':'justify-end'}   `}>
            <Image className="rounded-lg"
              src={project.Image}
              alt="project_image"
              width={500}
              height={500}
            />
          </div>
          <div
            className={`lg:w-1/2 flex flex-col justify-center lg:${
              project.number % 2 ? "order-1" : "-order-1"
            }`}
          >
            <h3 className="sm:text-4xl text-xl font-bold">0{project.number}</h3>
            <h3 className="sm:text-3xl text-xl font-semibold my-4">{project.title}</h3>
            <p className="sm:text-base text-sm text-zinc-300">{project.description}</p>
            <a className="my-4" target="_blank" href={project.url}>
              <Image
                src="/external-link.svg"
                alt="link"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
