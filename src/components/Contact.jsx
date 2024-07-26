import React from 'react'
import logo from "../assets/logo/logo.png";

function Contact() {
  return (
    <div className='bg-black mt-[200px] flex flex-col items-center justify-center rounded-3xl p-3'>
        <div className="w-[200px] my-8 bg-white rounded-full">
        <img src={logo} alt="" />
      </div>
      <div className='grid grid-cols-1 min-[450px]:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-36 mb-8'>
        <div>
            <div>
            <span ><i className="ri-smartphone-line text-gray-500 font-semibold"></i></span>
            <span className='text-gray-500 text-[15px] font-semibold ml-4 mb-1'>Gmail</span>
            </div>
            <p className='text-white'>+91 123-456-7890</p>
        </div>
        <div>
        <div>
            <span ><i className="ri-mail-line text-gray-500 font-semibold"></i></span>
            <span className='text-gray-500 text-[15px] font-semibold ml-4 mb-1'>Contact Number</span>
            </div>
            <p className='text-white'>demo@gmail.com</p>
        </div>
        <div>
        <div>
            <span ><i className="ri-map-pin-line  text-gray-500 font-semibold"></i></span>
            <span className='text-gray-500 text-[15px] font-semibold ml-4 mb-1'>Address</span>
            </div>
            <p className='text-white'>Mumbai, India</p>
        </div>
        <div>
        <div>
            <span ><i className="ri-file-add-line text-gray-500 font-semibold"></i></span>
            <span className='text-gray-500 text-[15px] font-semibold ml-4 mb-1'>Leave a Request</span>
            </div>
            <p className='text-white'>Leave a request</p>
        </div>
      </div>
      <div>
        <p className='text-gray-500 font-semibold my-4'>We work throughout the World.</p>
      </div>
    </div>
  )
}

export default Contact