import { projects } from "@/constants";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="mx-12  px-5  py-20">
      <h1 className="text-3xl text-center my-5 mb-10 ">
        My <span className="font-bold">Projects</span>
      </h1>
      {projects.map((project) => (
        <div key={project.title} className="flex  px-10 ">
          <div className={`w-1/2 flex ${project.number % 2 ?'justify-start':'justify-end'} `}>
            <Image
              src={project.Image}
              alt="project_image"
              width={500}
              height={500}
            />
          </div>
          <div
            className={`w-1/2 flex flex-col justify-center ${
              project.number % 2 ? "order-1" : "-order-1"
            }`}
          >
            <h3 className="text-4xl font-bold">0{project.number}</h3>
            <h3 className="text-3xl font-semibold my-4">{project.title}</h3>
            <p className="text-zinc-300">{project.description}</p>
            <a className="my-4" href={project.url}>
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
