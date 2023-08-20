import React, { useState } from 'react';
import { useStepperContext } from '../../contexts/StepperContext';
import land from '../../components/landing1.jpeg';

export default function Details() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full mx-auto space-y-3">
        <div>
          <h1 className="text-2xl font-semibold">Address</h1>
          <p className='font-light text-sm '>(Please Enter Patient's Address)</p>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="py-8 text-base leading-6 space-y-12 text-gray-700 sm:text-lg sm:leading-7 ">
            <div className="relative">
              <input
                autoComplete="off"
                id="addressline1"
                name="addressline1"
                type="text"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="Address Line 1"
                value={userData.addressline1}
                onChange={handleChange}
                required 
              />
              <label
                htmlFor="address"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Address Line 1
              </label>
            </div>
            <div className="relative">
              <input
                autoComplete="off"
                id="addressline2"
                name="addressline2"
                type="text"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="addressline2"
                value={userData.addressline2} // Bind the value from context
                onChange={handleChange} // Use the handleChange function
              />
              <label
                htmlFor="addressline2"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Address Line 2
              </label>
            </div>
            <div className="relative">
              <input
                autoComplete="off"
                id="city"
                name="city"
                type="text"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="City"
                value={userData.city}
                onChange={handleChange}
                required 
              />
              <label
                htmlFor="city"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                City
              </label>
            </div>
            <div className="relative">
              <input
                autoComplete="off"
                id="state"
                name="state"
                type="text"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="State"
                value={userData.state}
                onChange={handleChange}
                required 
              />
              <label
                htmlFor="state"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                State
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
