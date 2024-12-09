import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center justify-center">
          {/* Socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary dark:text-white/70 text-[20px] hover:text-white/70 dark:hover:text-primary transition-all"
          />
          {/* CopyRights */}
          <div className="text-white/70">
            Copyright &copy; Bin Magdi. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
