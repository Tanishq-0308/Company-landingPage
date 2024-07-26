import React, { useState } from 'react';

const Discuss = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    businessName: '',
    businessMail: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-green-500 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-4">Let's discuss<br />Your project</h2>
            <p className="text-white text-lg">
              Let's figure out how to create an effective application,<br />
              its cost and terms of its development
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 block w-full border-b border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone number</label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px- border-b border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      🇮🇳 +91
                    </span>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="flex-1 block w-full border-b border-gray-300  shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business name</label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="mt-1 block w-full border-b border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label htmlFor="businessMail" className="block text-sm font-medium text-gray-700">Business mail</label>
                  <input
                    type="email"
                    id="businessMail"
                    name="businessMail"
                    value={formData.businessMail}
                    onChange={handleChange}
                    className="mt-1 block w-full border-b border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
              </div>
              <div className='flex justify-end'>
                <button
                  type="submit"
                  className="  bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                >
                  Discuss the project
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discuss;