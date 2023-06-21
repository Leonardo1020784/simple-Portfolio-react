import React from 'react'
import {f, m, or, op} from '../assets'
function Projects3() {
  return (
    <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
          From Business Challenges to Seamless Solutions: I've Got Your Back!
            <br className="hidden md:block" />
            
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-gray-700 lg:text-sm lg:max-w-md">
        Experience the unparalleled value of my work, where my unwavering commitment, extensive expertise, and individualized approach combine to deliver customized solutions that address your specific business challenges, driving growth and unlocking your true potential.
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={m}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">Marketing</p>
              <p className="text-sm tracking-wide text-gray-300">
              I'll help you understand your target market, develop effective marketing campaigns, and track your results so you can see what's working and what's not.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={op}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                Operations
              </p>
              <p className="text-sm tracking-wide text-gray-300">
              With my help, you can take control of your operations, identify areas for improvement in costs, and develop strategies to improve your efficiency and productivity.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={or}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">Organization</p>
              <p className="text-sm tracking-wide text-gray-300">
                Together we can work for deploy the best Organizational plan and take control over management, including payrolls, operational distribution and taxes.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={f}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                Finance
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                Profit and Loss, Break Even Point and CashFlow, I will stay with you in all the numerical process and will help you to improve these numbers.
              </p>
            </div>
          </div>
      </div>

    </div>
    </div>
  )
}

export default Projects3