import React from "react";
import logoBar from "../assets/logo/logobar.png";

function Tech() {
  return (
    <main className="mx-auto px-4 pt-12">
      <div className="scrollBar flex gap-5 justify-evenly border-t border-b py-14 mx-[34px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <img src={logoBar} className="h-[44px]" key={index} />
        ))}
      </div>
      <div className="mx-auto px-4 py-12 sm:ml-24 ml-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Full development cycle
            </h2>

            <p className="mb-6 text-gray-600 font-medium">
              We use proven technologies
            </p>
            <h3 className="text-xl font-semibold mb-4">Web</h3>
            <p className="text-gray-600 mb-4 font-medium mr-20">
              PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js/ Nuxt
              / MySQL / Laravel / GO lang / django / Python
            </p>

            <h3 className="text-xl font-semibold mb-4">Mobile</h3>
            <p className="text-gray-600 font-medium mr-20">
              Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm /
              Coroutine / RxJava / RxSwift / Unit Test / Navigation
            </p>
          </div>

          <div>
            {[
              "iOS development",
              "Android development",
              "Web development",
              "UI/UX design",
              "Testing",
              "Launch",
              "IT consulting",
            ].map((item, index) => (
              <div key={index} className="flex items-center mb-4 text-xl">
                <span className="text-gray-800 pb-2 font-medium hover:font-bold hover:underline hover:decoration-green-600 cursor-pointer">
                  {item}
                </span>
                <svg
                  className="w-4 h-4 ml-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Tech;
