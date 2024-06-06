import React from 'react'
import About from './About'
import Hero from './Hero'
import Marketing from './Marketing'
import Projects2 from './Projects2'
import Projects3 from './Projects3'
import Navbar from './Navbar'
import Projects from './Projects'
 


function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Projects/>
        <Marketing/>
        <Projects2/>
        <Projects3/>

        <About/>
    </div>
  )
}

export default Home