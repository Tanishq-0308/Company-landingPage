import React from "react";
import groupImg from "../assets/groupImg.png";

function Team() {
  return (
    <div className="bg-slate-100 ">
      <div className="containe  py-16 ">
        <div className="flex flex-col lg:flex-row sm:ml-24 ml-10 items-center gap-3">
          <div className="mb-8 lg:w-[50%] w-[70%]  flex flex-col gap-5">
            <h2 className="text-4xl font-bold mb-4">Our team</h2>
            <p className="mb-8 text-gray-600 text-[15px] font-medium">
              Thousand is a full-cycle digital production company with its own
              product analytics, design, web and mobile development.
            </p>

            <div className="flex md:justify-between items-center md:flex-row flex-col mb-8">
              <div className="text-start">
                <h3 className="text-5xl font-bold mb-3">28</h3>
                <p className="text-gray-600 font-medium">team members</p>
              </div>
              <div className="text-start">
                <h3 className="text-5xl font-bold mb-3">+100</h3>
                <p className="text-gray-600 font-medium">projects</p>
              </div>
              <div className="text-start">
                <h3 className="text-5xl font-bold mb-3">7 years</h3>
                <p className="text-gray-600 font-medium">in IT sphere</p>
              </div>
            </div>

            <p className="text-gray-600 text-[15px] font-medium">
              All the necessary specialists - from a designer to a tester - are
              on our staff. We hire the best specialists in the market. It's
              expensive but worth it
            </p>
          </div>

          <div className="">
            <img
              src={groupImg}
              alt="Team members collaborating"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
