import React, { useState, useEffect } from 'react';
import { FaInstagram, FaVk, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Logo from './Logo';

const texts = ["Welcome to my Site", "Discover more of me", "Let's work together"];

function Navbar() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    let animationTimeout;

    const animateText = (index) => {
      const currentText = texts[index % texts.length];
      let currentIndex = 0;

      animationTimeout = setInterval(() => {
        if (currentIndex <= currentText.length) {
          setText(currentText.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(animationTimeout);
          setIndex(index + 1);
        }
      }, 120); // Change the animation speed (in milliseconds) according to your preference
    };

    animateText(index);

    return () => {
      clearInterval(animationTimeout);
    };
  }, [index]);

  return (
    <nav className="m-5 rounded-lg bg-gradient-to-r from-slate-100 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
            <div className='text-black'>
              {text}
              <span className="animate-blink">|</span>
            </div>
          </div>
          <div className="flex items-center">
            <a href="https://www.linkedin.com/in/leonardo-mejia" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white p-2">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com/hallojacom" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white p-2">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/ciriusjs/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white p-2">
              <FaInstagram />
            </a>
            <a href="https://vk.com/leonardomejia" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white p-2">
              <FaVk />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
