import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex justify-around items-center flex-col md:flex-row ">
      <div className="sm:w-1/2 flex justify-center ">
        <Image src="/about.png" alt="about" width={500} height={500} />
      </div>
      <div className=" sm:w-1/2">
        <h1 className="sm:text-3xl text-xl my-5">
          About <span className="font-bold">Me</span>
        </h1>
        <p className="sm:text-base text-sm">
          I&apos;m a passionate software engineer who specializes in full stack
          development (React.js & Next.js). I am very enthusiastic about
          bringing the technical and visual aspects of digital products to life.
          User experience, pixel perfect design, and writing clear, readable,
          highly performant code matters to me. <br />
          <br />
          I began my journey as a web developer in 2023, and since then, I&apos;ve
          continued to grow and evolve as a developer, taking on new challenges
          and learning the latest technologies along the way. Now, in my early
          twenties, an years after starting my web development journey, I&apos;m
          building cutting-edge web applications using modern technologies such
          as Next.js, TypeScript, MongoDB, Tailwindcss, Supabase and much more.{" "}
          <br />
          <br />
          When I&apos;m not in full-on developer mode, you can find me hovering
          around on twitter enjoying some free time. You can follow me on
          Twitter where I share tech-related bites and build in public, or you
          can follow me on GitHub.
        </p>
      </div>
    </div>
  );
};

export default About;
