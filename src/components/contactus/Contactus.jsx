import React from "react";

const Contactus = () => {
  return (
    <section>
      <div className="container">
        <div className="my-32">
          <div className="mx-auto max-w-[562px] text-center">
            <h1 className="text-[48px] font-bold mb-4">Contact Us</h1>
            <p className="mb-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <form className="flex flex-col items-center gap-6 mx-auto max-w-[1061px] bg-[#F4F6FC] rounded-[12px] p-[77px]">
            <div className="flex gap-8 w-full">
              <div className="flex flex-col font-medium gap-1.5 w-full">
                <span>Name</span>
                <input
                  className="py-4.5 pl-8 rounded-[8px] border border-[#0000001F] focus:outline-none"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col font-medium gap-1.5 w-full">
                <span>Email</span>
                <input
                  className="py-4.5 pl-8 rounded-[8px] border border-[#0000001F] focus:outline-none"
                  type="email"
                  placeholder="Enter your Email"
                />
              </div>
            </div>

            <div className="flex gap-8 w-full">
              <div className="flex flex-col font-medium gap-1.5 w-full">
                <span>Subject</span>
                <input
                  className="py-4.5 pl-8 rounded-[8px] border border-[#0000001F] focus:outline-none"
                  type="text"
                  placeholder="Provide context"
                />
              </div>
              <div className="flex flex-col font-medium gap-1.5 w-full">
                <span>Subject</span>
                <input
                  className="py-4.5 pl-8 rounded-[8px] border border-[#0000001F] focus:outline-none"
                  type="text"
                  placeholder="Select Subject"
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <span>Message</span>
              <textarea
                className="w-full py-4 pl-8 rounded-[8px] border border-[#0000001F] focus:outline-none"
                rows="4"
                placeholder="Write your question here"
              ></textarea>
            </div>

            <button className="py-4 px-16 bg-[#282938] text-[#F4F6FC] rounded-full">
              Send Messege
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
