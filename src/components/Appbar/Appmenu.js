import { Row,Col } from 'antd'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.css'
const Appmenu = ({isinline = false}) => {
  return (
    <Row gutter={28}  style={isinline?{flexDirection:'column',alignItems:'center'}:{flexDirection:'row'}} >
        <Col ><Link className='link-nav-navbar' to='/' >Home</Link></Col>
        <Col><Link className='link-nav-navbar' to='about' >About</Link></Col>
        <Col><Link className='link-nav-navbar' to='service' >Services</Link></Col>
        <Col><Link className='link-nav-navbar' to='portfolio' >Portfolio</Link></Col>
        <Col><Link className='link-nav-navbar' to='contact' >Contact</Link></Col>
    </Row>
  )
}

export default Appmenu