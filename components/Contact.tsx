import React from "react";

const Contact = () => {
  return (
    <div className="flex">
      <div className="w-1/2 p-16">
        <form action="" className="flex gap-2 flex-col">
          <input type="text" placeholder="Name" className="focus:outline-none" />
          <input type="email" placeholder="Email" className="" />
          <input type="text" placeholder="Subject" className="" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
            className="w-full"
          ></textarea>
          <input type="submit" value="Send Message" className="w-full bg-black text-white"/>
        </form>
      </div>
      <div className="w-1/2">
        <h3>Let's talk for something special</h3>
        <p>
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>
        <p>mr.rai.vishal7@gmail.com
          <br />
          +91 93822 12073
        </p>
        
      </div>
    </div>
  );
};

export default Contact;
