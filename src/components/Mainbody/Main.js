import React from 'react'
import Navbar from '../Appbar/Navbar'
import Footer from '../Footer/Footer'

const Main = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default Main