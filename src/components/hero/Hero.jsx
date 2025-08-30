import { MoveRight } from "lucide-react";
import React from "react";
import heroImage from "../../assets/hero-image.png";

const Hero = () => {
  return (
    <section className="w-full bg-[#1C1E53] text-white">
      <div className="container">
        <div className="flex justify-between items-center py-32 ">
          <div className="w-1/2">
            <h1 className="text-[54px]">
              Building stellar websites for early startups
            </h1>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="flex items-center gap-10 py-12">
              <button className="bg-[#FCD980] text-[#1B1C2B] py-4 px-14 rounded-full">
                View our work
              </button>
              <button className="flex">
                View Pricing <MoveRight />
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img className="w-full" src={heroImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
