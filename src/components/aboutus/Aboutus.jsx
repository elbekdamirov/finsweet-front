import React from "react";
import aboutImg from "../../assets/about.png";

const Aboutus = () => {
  return (
    <section>
      <div className="container">
        <div className="flex py-[126px] items-center justify-between gap-40">
          <div className="w-1/2">
            <span className="text-[18px] font-[400]">About us</span>
            <h1 className="font-[600] text-[54px] leading-[74px]">
              Our designs solve problems
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="w-1/2">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
