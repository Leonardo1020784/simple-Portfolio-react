import React from 'react'
import About from './About'
import Hero from './Hero'
import Projects from './Projects'
import Projects2 from './Projects2'
import Projects3 from './Projects3'

import Navbar from './Navbar'
import Dexperience from './Dexperience'


function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Dexperience/>
        <Projects/>
        <Projects2/>
        <Projects3/>

        <About/>
    </div>
  )
}

export default Home