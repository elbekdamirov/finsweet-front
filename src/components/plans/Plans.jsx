import React from "react";
import pointer from "../../assets/Pointer.svg";

const Plans = () => {
  return (
    <section className="text-[#282938]">
      <div className="container my-32">
        <div className="max-w-[562px] text-center m-auto">
          <h1 className=" text-[48px] font-[600] mb-4">Our Pricing Plans</h1>
          <p className=" font-[500]">
            When you’re ready to go beyond prototyping in Figma, Webflow is
            ready to help you bring your designs to life — without coding them.
          </p>
        </div>
        <div className=" grid grid-cols-3 gap-8 mt-16">
          <div className=" py-[62px] pl-12 bg-[#F4F6FC] rounded-[12px]">
            <div className="flex items-center mb-5 gap-2">
              <strong className="font-[600] text-[38px]">$299</strong>
              <span className="mb-2 text-[#2405F2]">Per Design</span>
            </div>
            <span className=" text-[24px]">Landing Page </span>
            <p className=" opacity-70 w-4/5">
              When you’re ready to go beyond prototyping in Figma,{" "}
            </p>
            <div className=" flex flex-col gap-5 my-20">
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <p>All limited links</p>
              </div>
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <span>Own analytics platform</span>
              </div>
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <span>Chat support</span>
              </div>
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <span>Optimize hashtags</span>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="py-4 px-20 bg-[#282938] text-white rounded-full ml-[-48px]">
                Get started
              </button>
            </div>
          </div>

          <div className=" py-[62px] pl-12 bg-[#1C1E53] text-white rounded-[12px]">
            <div className="flex items-center mb-5 gap-2">
              <strong className="font-[600] text-[38px]">$299</strong>
              <span className="mb-2 text-[#FCD980]">Multi Design</span>
            </div>
            <span className=" text-[24px]">Landing Page </span>
            <p className=" opacity-70 w-4/5">
              When you’re ready to go beyond prototyping in Figma,{" "}
            </p>
            <div className=" flex flex-col gap-5 my-20">
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <p>All limited links</p>
              </div>
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <span>Own analytics platform</span>
              </div>
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <span>Chat support</span>
              </div>
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <span>Optimize hashtags</span>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="py-4 px-20 bg-[#FCD980] text-[#282938] rounded-full ml-[-48px]">
                Get started
              </button>
            </div>
          </div>

          <div className=" py-[62px] pl-12 bg-[#F4F6FC] rounded-[12px]">
            <div className="flex items-center mb-5 gap-2">
              <strong className="font-[600] text-[38px]">$299</strong>
              <span className="mb-2 text-[#2405F2]">Per Design</span>
            </div>
            <span className=" text-[24px]">Landing Page </span>
            <p className=" opacity-70 w-4/5">
              When you’re ready to go beyond prototyping in Figma,{" "}
            </p>
            <div className=" flex flex-col gap-5 my-20">
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <p>All limited links</p>
              </div>
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <span>Own analytics platform</span>
              </div>
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <span>Chat support</span>
              </div>
              <div className="flex gap-3">
                <img src={pointer} alt="" />
                <span>Optimize hashtags</span>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="py-4 px-20 bg-[#282938] text-white rounded-full ml-[-48px]">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
