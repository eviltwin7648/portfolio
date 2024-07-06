import React from "react";
import Socials from "./Socials";
import { submitForm } from "@/lib/actions";


const Contact = () => {
  const handleSubmit = async (formdata: FormData) => {
    // handle form submission
    "use server"
     await submitForm({
      name: formdata.get('name') as string,
      email: formdata.get("email") as string,
      website: formdata.get("website") as string,
      description: formdata.get("description") as string,
    });
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 md:p-16">
        <form action={handleSubmit} className="flex gap-2 flex-col">
          <input name="name" type="text" placeholder="Name" className="" />
          <input name="email" type="email" placeholder="Email" className="" />
          <input
            name="website"
            type="website"
            placeholder="Your Website (if exists)"
            className=""
          />
          <textarea
            name="description"
            cols={30}
            rows={10}
            placeholder="How can i help?"
            className="w-full"
          ></textarea>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              value="Get In Touch"
              className="w-1/3 sm:text-base text-xs bg-black text-white"
            >
              Get In Touch
            </button>

            <Socials />
          </div>
        </form>
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center">
        <h3 className="sm:text-6xl text-2xl font-bold">
          Let's talk for something special
        </h3>
        <p className="sm:text-base text-sm my-5 text-gray-500">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>
        <a
          href="mailto:mr.rai.vishal7@gmail.com"
          className="text-2xl font-semibold"
        >
          mr.rai.vishal7@gmail.com
        </a>
        <a href="tel:+919382212073" className="text-2xl font-semibold">
          +91 93822 12073
        </a>
      </div>
    </div>
  );
};

export default Contact;
