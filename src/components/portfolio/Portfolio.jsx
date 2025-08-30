import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Portfolio = () => {
  return (
    <section>
      <div className="container">
        <div className="my-32 text-center text-[#282938] max-w-[733px] mx-auto">
          <span className=" mb-2 opacity-70">What we created</span>
          <h1 className="text-[48px] mb-6 font-bold">Our Work Portfolio</h1>
          <p className="mb-8 opacity-70">
            We help teams create great digital products by providing them with
            tools and technology to make the design-to-code process universally
            accessible.
          </p>
          <div className="flex gap-7 items-center justify-center">
            <Facebook className="text-xl text-black cursor-pointer" />
            <Instagram className="text-xl text-black cursor-pointer" />
            <Twitter className="text-xl text-black cursor-pointer" />
            <Linkedin className="text-xl text-black cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
