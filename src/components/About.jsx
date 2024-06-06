import React from 'react'
import {yo} from '../assets'

function About() {
  return (
    <div>
    <div className="m-5 rounded-lg bg-gradient-to-r from-slate-100 to-slate-100 p-5">
      <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Let's Talk
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Discover</span>
            </span>{' '}
            the Opportunity
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          I'm excited to bring my diverse skill set to your company and make a positive impact on your team.
          </p>
        </div>
        <div className=" flex justify-center">
          <img
            className="object-cover w-40 h-40 rounded shadow-lg sm:h-42 xl:h-40 sm:w-42 xl:w-40 bg-black"
            src={yo}
            alt=""
          />
        </div>
        <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto mt-10">
        Business man helping international companies, making this world a better place for us. 🌍
        </p>
        <a
          href="https://telegram.me/siriusls"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Direct Message
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>

    </div>
  )
}

export default About