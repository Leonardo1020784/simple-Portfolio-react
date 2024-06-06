import React from 'react'
import { facebook, yreport, greport } from '../assets';

function Marketing() {
  return (
    <div>
    <div className="m-5 rounded-lg bg-gradient-to-r from-slate-100 to-slate-100 p-5">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points=" 8,5 8,1 16,1 16,5"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="9,15 1,15 1,5 23,5 23,15 15,15"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="22,18 22,23 2,23 2,18"
                strokeLinejoin="round"
              />
              <rect
                x="9"
                y="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                width="6"
                height="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            The Ultimate 

          <br className="hidden md:block" />
          Marketing {' '}
              <span className="inline-block text-deep-purple-accent-400">
              Experience
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              I guarantee to attract more customers and maximize your brand's visibility. 
            </p ><br/>
            <p className="italic text-base text-gray-700 md:text-lg">I understand that every business is unique. That's why I develop customized strategies that align with your specific goals and target audience. </p>
          </div>
        </div>

        <div className="flex items-center justify-center -mx-4 lg:pl-8">
  <div className="flex flex-col items-end px-3">
    <img
      className="object-cover mb-6 rounded-lg shadow-xl h-40 w-50 border border-transparent hover:border-purple-500 hover:shadow-2xl transform hover:scale-110 transition duration-500"
      src={yreport}
      alt=""
    />
    <img
      className="object-cover w-40 h-40 rounded-lg shadow-xl border border-transparent hover:border-purple-500 hover:shadow-2xl transform hover:scale-110 transition duration-500"
      src={facebook}
      alt=""
    />
  </div>
  <div className="px-3">
    <img
      className="object-cover w-60 h-90 rounded-lg shadow-xl border border-transparent hover:border-purple-500 hover:shadow-2xl transform hover:scale-110 transition duration-500"
      src={greport}
      alt=""
    />
  </div>
</div>


      </div>
    </div>
    </div>
  )
}

export default Marketing