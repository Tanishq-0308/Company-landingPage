import React, { useState } from "react";
import bgImage from "../assets/page1/bgImage2.png";
import Nav from "./Nav";

function Home({ children }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    businessName: "",
    businessMail: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };
  return (
    <main className="w-full  bg-slate-100 pt-8 h-auto pb-[150px] -z-0 relative overflow-x-hidden overflow-y-hidden">
      {/* {children} */}
      <div className="z-10">
        <Nav />
      </div>
      <section className="flex h-full  ">
        <section className="ml-10 max-[900px]:w-[80%] sm:ml-28 w-[45%] flex mt-14 flex-col gap-[60px]">
          <div className="intro tracking-wide w-[95%]">
            <h2 className="text-4xl font-bold leading-10 tracking-wide">
              <span className="text-[#ffa600] text-[40px] font-bold  ">
                User-Centric Excellence
              </span>
              :Our App Development services
            </h2>
            <h3 className=" font-semibold text-[40px]">
              Tackles Your Pain Points
            </h3>
            <p className="mt-4 text-[18px] pr-5 font-[500]">
              Experience a Seamless Digital Journey with{" "}
              <span className="text-[#13b845] font-bold">Desun</span>- Where
              Every Line of Code Resolves Your Challenges and{" "}
              <span className="text-[#ffa600]">
                Elevates Your App Experience
              </span>{" "}
              to Unparalleled Heights.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            action=""
            className="border p-5 bg-white flex flex-col gap-5 rounded-2xl shadow-2xl w-auto"
          >
            <h1 className=" font-bold text-2xl mr-6">
              Leave Your contacts and we will call you back within 30 minutes
            </h1>
            <div className="flex gap-10 max-[1300px]:flex-col">
              <div className="name flex flex-col">
                <label
                  htmlFor="fullName"
                  className="text-gray-500 font-medium text-[15px]"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                    name="fullName"
                  className=" border-b outline-none"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="number flex flex-col">
                <label
                  htmlFor="phoneNumber"
                  className="text-gray-500 font-medium text-[15px]"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                      name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="border-b outline-none"
                />
              </div>
            </div>
            <div className="flex gap-10 max-[1300px]:flex-col">
              <div className="businessName flex flex-col">
                <label
                  htmlFor="businessName"
                  className="text-gray-500 font-medium text-[15px]"
                >
                  Business name
                </label>
                <input
                  type="text"
                  id="businessName"
                    name="businessName"
                  className=" border-b outline-none"
                  value={formData.businessName}
                  onChange={handleChange}
                />
              </div>
              <div className="mail flex flex-col">
                <label
                  htmlFor="businessMail"
                  className="text-gray-500 font-medium text-[15px]"
                >
                  Business mail
                </label>
                <input
                  type="email"
                  id="businessMail"
                  name="businessMail"
                  value={formData.businessMail}
                  onChange={handleChange}
                  className=" border-b outline-none"
                />
              </div>
              <div className="submit">
                <button className="bg-[#80A948] py-3 px-3 text-white rounded-xl font-semibold hover:bg-[#81a948a9]">
                  Get Consultation
                </button>
              </div>
            </div>
          </form>
        </section>
        <section className="h-full ">
          <img
            src={bgImage}
            alt=""
            className="max-w-[961px]  -top-[180px] -z-10 absolute "
          />
        </section>
      </section>
    </main>
  );
}

export default Home;
