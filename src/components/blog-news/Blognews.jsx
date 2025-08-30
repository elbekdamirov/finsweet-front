import React from "react";
import blogImage from "../../assets/blog.png";

const Blognews = () => {
  return (
    <section>
      <div className="container">
        <div className="my-32 flex flex-col items-center text-center text-[#282938]">
          <h1 className="text-[48px] font-bold leading-[64px] max-w-[949px] mb-4">
            A UX Case Study on Creating a Studious Environment for Students
          </h1>
          <span className="mb-8">
            Andrew Jonson Posted on 27th January 2021
          </span>
          <img className="mb-12" src={blogImage} alt="" />
          <p className="opacity-70 mb-4 max-w-[831px]">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of the
            spectator on a hillside.
          </p>
          <span className="text-[#2405F2]">Read more</span>
        </div>
      </div>
    </section>
  );
};

export default Blognews;
