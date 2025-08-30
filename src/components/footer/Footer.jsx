import React from "react";
import logo from "../../assets/Logo.svg";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <footer className="py-28 bg-[#1C1E53]">
      <div className="container">
        <div className="flex gap-35">
          <div className="w-[40%]">
            <img src={logo} alt="" />
            <p className="font-medium text-[16px] text-[#D2D2DC] mt-6 mb-[86px] max-w-[400px] leading-7">
              We are always open to discuss your project and improve your online
              presence.
            </p>

            <div className="bg-[#FCD980] py-[18px] px-[37px] flex items-center justify-start gap-8">
              <div className="">
                <p className="text-[#292937] font-medium text-[18px]">
                  Email me at
                </p>
                <p className="text-[#282938] text-[16px] font-normal">
                  contact@website.com
                </p>
              </div>

              <div className="">
                <p className="text-[#282938] font-medium text-[18px]">
                  Call us
                </p>
                <p className="text-[#282938] text-[16px] font-normal">
                  0927 6277 28525
                </p>
              </div>
            </div>
          </div>

          <div className="w-[28%]">
            <h2 className="font-semibold text-5xl text-white">Lets Talk!</h2>
            <p className="font-normal text-[#CACBD9] mt-3.5 mb-7 leading-7">
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </p>
            <div className="flex gap-7 items-center">
              <Facebook className="text-xl text-white cursor-pointer" />
              <Instagram className="text-xl text-white cursor-pointer" />
              <Twitter className="text-xl text-white cursor-pointer" />
              <Linkedin className="text-xl text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
