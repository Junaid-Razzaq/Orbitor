import React from 'react'
import Enterpeneur from '../components/Aboutcomp.js/Enterpeneur'
import Aboutservice from '../components/Aboutcomp.js/Aboutservice'
import Team from '../components/Aboutcomp.js/Team'
import Aboutbrand from '../components/Aboutcomp.js/Aboutbrand'
import Profile from '../components/Homecomp/Profile'

const About = () => {
  return (
    <>
    <Enterpeneur/>
    <Aboutservice/>
    <Team/>
    <Aboutbrand/>
    <Profile/>
    </>
  )
}

export default About