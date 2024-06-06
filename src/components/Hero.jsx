import React, { useState, useEffect } from 'react';
import { video } from '../assets';

const roles = [
  "Programmer and Developer",
  "Marketer and Advertiser",
  "Content Creator"
];



function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Function to get the background color based on the current role index
  const getBackgroundColor = (index) => {
    switch (index) {
      case 0:
        return "from-cyan-500 to-blue-500";
      case 1:
        return "from-green-500 to-cyan-500";
      case 2:
        return "from-purple-500 to-pink-500";
      default:
        return "from-cyan-500 to-blue-500";
    }
  };

  return (
    <div className="m-5 rounded-lg grid md:grid-cols-2 items-center justify-center h-screen bg-gradient-to-r from-slate-100 to-slate-100">
      <div className="bg-white p-8 m-5 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Leonardo Mejia</h1>
        <h2 className="text-2xl mb-4">Business Developer</h2>
        <h3 className={`text-lg mb-4 bg-gradient-to-r ${getBackgroundColor(currentRoleIndex)} flex text-white p-2 rounded-lg`}>
          {roles[currentRoleIndex]}
        </h3>
        <p className="text-gray-600">
          With a diverse range of experiences across various international companies, I possess a strong entrepreneurial mindset and extensive knowledge in the field of marketing, programming, business, and health.
        </p>
        <br/>
      </div>
      <div className="flex items-center justify-center">
      <img
              className="m-5 w-9/12 h-9/12 rounded-lg shadow-lg"
              src={video}               
              alt=""
            />
      </div>
    </div>
  );
}

export default Hero;
