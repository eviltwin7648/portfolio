import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex justify-between p-3">
        <div>
          <p className="text-xs sm:text-sm">© 2024 Vishal Rai</p>
        </div>
        <p className="text-xs sm:text-sm" >Made with Nextjs & TailwindCSS</p>
      </div>
    </div>
  );
};

export default Footer;
