import React, { useState } from "react";
import logo from "../assets/logo/logo.png";

function Nav() {
  let [bar, setBar] = useState(true);
  function openMenu() {
    setBar(!bar);
  }
  return (
    <nav className="flex justify-between items-center border bg-white rounded-2xl shadow-lg px-5 py-3 sm:mx-28 z-20">
      <div className="w-[200px] ">
        <img src={logo} alt="" />
      </div>
      <ul className="min-[1160px]:flex font-medium gap-4 mr-7 hidden">
        <a href="">
          <li className=" hover:bg-cyan-100 transition duration-300 ease-in-out p-2 rounded-2xl">
            Services
          </li>
        </a>
        <a href="">
          <li className=" hover:bg-cyan-100 transition duration-300 ease-in-out p-2 rounded-2xl">
            Media
          </li>
        </a>
        <a href="">
          <li className=" hover:bg-cyan-100 transition duration-300 ease-in-out p-2 rounded-2xl">
            Cases
          </li>
        </a>
        <a href="">
          <li className=" hover:bg-cyan-100 transition duration-300 ease-in-out p-2 rounded-2xl">
            FAQ
          </li>
        </a>
        <a href="">
          <li className=" hover:bg-cyan-100 transition duration-300 ease-in-out p-2 rounded-2xl">
            Contacts
          </li>
        </a>
      </ul>
      <div className="min-[1160px]:flex gap-7 font-medium hidden">
        <div className="phone text-[#80A948]">
          <i className="ri-smartphone-line"></i>
          <a href="">+91 123-456-7890</a>
        </div>
        <div className="email text-[#80A948]">
          <i className="ri-mail-line"></i>
          <a href="">demo@gmail.com</a>
        </div>
      </div>
      <div>
        <button onClick={openMenu}>
          {bar ? (
            <i
              onClick={openMenu}
              className="ri-align-justify text-2xl text-[#80A948] flex min-[1160px]:hidden"
            ></i>
          ) : (
            <i className="ri-close-large-line text-2xl text-[#80A948] min-[1160px]:hidden"></i>
          )}
        </button>
      </div>
      {!bar && (
        <div className="fixed right-0 top-[120px] z-20 text-center w-full flex flex-col justigy-center items-center min-[1160px]:hidden ">
          <ul className=" border p-4 w-[300px] font-medium flex flex-col gap-3 bg-black text-white rounded-3xl sm:text-xl sm:w-[500px]">
            <a href="">
              <li className=" hover:bg-cyan-100 transition duration-300 ease-in-out p-2 rounded-2xl">
                Services
              </li>
            </a>
            <a href="">
              <li className=" hover:bg-cyan-100 transition duration-300 ease-in-out p-2 rounded-2xl">
                Media
              </li>
            </a>
            <a href="">
              <li className=" hover:bg-cyan-100 transition duration-300 ease-in-out p-2 rounded-2xl">
                Cases
              </li>
            </a>
            <a href="">
              <li className=" hover:bg-cyan-100 transition duration-300 ease-in-out p-2 rounded-2xl">
                FAQ
              </li>
            </a>
            <a href="">
              <li className=" hover:bg-cyan-100 transition duration-300 ease-in-out p-2 rounded-2xl">
                Contacts
              </li>
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
