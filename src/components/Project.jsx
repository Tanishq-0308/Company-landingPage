import React, { useState } from "react";
import apple from "../assets/logo/appleStore.png";
import playStore from "../assets/logo/playStore.png";
import mobile from "../assets/project1.png";

function Project() {
  const [activeTab, setActiveTab] = useState("Project 1");
  const projectTabs = ["Project 1", "Project 2", "Project 3", "Project 4"];

  const industries = [
    { name: "Social media", icon: "📱" },
    { name: "Education", icon: "🎓" },
    { name: "AR technology", icon: "🔮" },
    { name: "Fitness and sport", icon: "🏋️" },
    { name: "Auto, transport", icon: "🚗" },
    { name: "TV series", icon: "📺" },
    { name: "Bank", icon: "🏦" },
    { name: "Medicine, health", icon: "🩺" },
    { name: "Startups", icon: "🚀" },
    { name: "Construction", icon: "🏗️" },
    { name: "Restaurants, food delivery", icon: "🍔" },
    { name: "Religion", icon: "🕌" },
    { name: "Game projects", icon: "🎮" },
    { name: "Marketplaces", icon: "🛒" },
    { name: "Online courses", icon: "💻" },
  ];
  return (
    <main className="bg-slate-100 ">
      <div className="py-16 px-4 sm:px-6 lg:px-8 sm:ml-24 ml-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
            Developed more than <span className="text-green-600">100</span>
          </h2>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900">
            projects in <span className="text-green-600">15</span> industries
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-xl">{industry.icon}</span>
                </div>
                <span className="text-sm sm:text-base font-medium text-gray-700">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16 px-4 sm:px-6 lg:px-8 sm:ml-24 ml-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
          Projects we are proud of
        </h2>
        <p className="text-gray-600 font-medium mt-8 max-w-2xl">
          Our software development company is truly proud of the wonderful
          clients we have worked with. We enjoy a long-term partnership
        </p>
        <div className="mt-11 flex gap-7">
          {projectTabs.map((tab, index) => (
            <button
              key={index}
              className={`mr-4 pb-2 text-[18px] grid grid-cols-1 font-medium ${
                activeTab === tab
                  ? "font-semibold underline decoration-yellow-500 decoration-[3px]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-12 flex sm:flex-row flex-col">
          <div className="left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
              {activeTab}
            </h2>
            <p className="text-gray-600 font-medium mt-8 max-w-[630px]">
              Crafted an innovative rental property management app, seamlessly
              integrating secure login, absence registration, and a tenant
              notive board. Elevating the resident experience with user-friendly
              design and efficient communication channels
            </p>
            <p className="mt-8 text-gray-700 font-medium">
              Business analysis / iOS / Android / QA / UI/UX Design
            </p>
            <div className="mt-8 flex gap-10">
              <span className="font-medium">
                <i className="ri-map-pin-line pr-3 text-yellow-400 text-xl"></i>
                India
              </span>
              <span className="font-medium">
                <i className="ri-briefcase-line pr-3 text-yellow-400 text-xl"></i>
                Real Estate
              </span>
            </div>
            <div className="flex gap-10 mt-8 flex-col sm:flex-row">
              <div>
                <p className="text-3xl font-bold">400%</p>
                <p className="text-gray-500 mt-2">User Growth</p>
              </div>
              <div>
                <p className="text-3xl font-bold">+ 200 000</p>
                <p className="text-gray-500 mt-2">Active Users</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row">
              <span>
                <img src={apple} alt="" className="h-[60px]" />
              </span>
              <span>
                <img src={playStore} alt="" className="h-[60px]" />
              </span>
            </div>
          </div>
          <div className="right mt-8  sm:ml-28 border w-auto sm:w-[400px]">
            <img src={mobile} alt="" className="h-auto w-auto" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Project;
