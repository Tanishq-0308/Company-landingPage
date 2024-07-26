import React from "react";
import mobileImg from "../assets/application.png";

function Application() {
  const stages = [
    {
      icon: "📋",
      title: "Analysis",
      description:
        "We craft precise technical specs, aligning with your business, technology, and user requirements.",
    },
    {
      icon: "🎨",
      title: "Design",
      description:
        "We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces.",
    },
    {
      icon: "💻",
      title: "Development",
      description:
        "We create an extensible architecture, write clean and stable code. We integrate with customer technologies.",
    },
  ];

  const stage2 = [
    {
      icon: "🧪",
      title: "Testing",
      description:
        "We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions.",
    },
    {
      icon: "🚀",
      title: "Launching",
      description:
        "We design the application page and publish it in the App Store and Google Play stores.",
    },
    {
      icon: "🛠️",
      title: "Support",
      description:
        "We monitor the stability of the application, update it for new devices and versions of iOS and Android.",
    },
  ];

  return (
    <div className="sm:ml-24 m-10">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
        Application Development Stages
      </h2>
      <div className=" flex gap-[100px] sm:flex-row flex-col">
        <div className="left mt-10">
          {stages.map((stage, index) => (
            <div className="flex p-6 flex-col items-start rounded-2xl max-w-[400px] mb-5 shadow-xl">
              <div className="flex gap-6">
                <span className="text-3xl">{stage.icon}</span>
                <h3 className="text-lg font-medium text-gray-900">
                  {stage.title}
                </h3>
              </div>
              <div className="">
                <p className="mt-2 text-base text-gray-500 font-medium">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="center min-[1000px]:block hidden">
          <img src={mobileImg} alt="" className="w-[300px] mt-4" />
        </div>
        <div className="left mt-10">
          {stage2.map((stage, index) => (
            <div className="flex p-6 flex-col items-start rounded-2xl max-w-[400px] mb-5 shadow-xl">
              <div className="flex gap-6">
                <span className="text-3xl">{stage.icon}</span>
                <h3 className="text-lg font-medium text-gray-900">
                  {stage.title}
                </h3>
              </div>
              <div className="">
                <p className="mt-2 text-base text-gray-500 font-medium">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Application;
