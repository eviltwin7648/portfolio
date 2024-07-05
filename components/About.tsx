import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex justify-around items-center ">
      <div className="w-1/2 flex justify-center ">
        <Image src="/about.png" alt="about" width={500} height={500} />
      </div>
      <div className="w-1/2">
        <h1 className="text-3xl">
          About <span className="font-bold">Me</span>
        </h1>
        <p>
        I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me. <br />
        I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more. <br />
        When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
        </p>
      </div>
    </div>
  );
};

export default About;
