

import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <h1 className="text-3xl leading-tight font-bold text-gray-900">About Us</h1>
      <p className="text-lg text-gray-600 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
      </p>

      <div className="flex flex-wrap -mx-4 mt-8">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-lg leading-tight font-bold text-gray-900">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-lg leading-tight font-bold text-gray-900">Our Values</h2>
          <ul className="list-none mt-2">
            <li className="text-gray-600">Lorem ipsum dolor sit amet</li>
            <li className="text-gray-600">Consectetur adipiscing elit</li>
            <li className="text-gray-600">Sed sit amet nulla auctor</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-lg leading-tight font-bold text-gray-900">Our Team</h2>
          <div className="flex flex-wrap -mx-4 mt-2">
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
              <img src="https://picsum.photos/200/300" alt="Team Member 1" className="rounded-full w-16 h-16" />
              <h3 className="text-lg leading-tight font-bold text-gray-900 mt-2">Akbar</h3>
              <p className="text-gray-600 mt-1">CEO</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
              <img src="https://picsum.photos/200/301" alt="Team Member 2" className="rounded-full w-16 h-16" />
              <h3 className="text-lg leading-tight font-bold text-gray-900 mt-2">Mehdi</h3>
              <p className="text-gray-600 mt-1">CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

