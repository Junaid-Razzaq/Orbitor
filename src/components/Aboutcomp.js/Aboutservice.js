import { Button, Col, Image, Row, Typography } from 'antd'
import React from 'react'
import { TiTick } from 'react-icons/ti'
import aboutimage from '../../Images/Aboutimages/aboutcompany.png'
const Aboutservice = () => {
  return (
    <>
    <Row justify={'center'} style={{padding:'80px 0px',backgroundColor:'#F8F9FA'}}>
        <Col sm={21} xs={21} md={16} lg={10}>
            <Typography style={{fontSize:'44px',fontWeight:900}}>Growing Software Company Since 2008</Typography>
            <Typography style={{marginTop:'20px',color:'#6F8BA4'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint earum, eos esse non error facilis ad, maiores eum quae vero libero voluptas! Reprehenderit sunt similique, quae quidem voluptatem odit natus.</Typography>
           <div style={{display:'flex',gap:'10px',marginTop:'20px'}}> <TiTick style={{color:'#FF715B',fontSize:'25px'}}/><Typography>Create and manage any process for your business needs.</Typography></div>
           <div style={{display:'flex',gap:'10px',marginTop:'10px'}}> <TiTick style={{color:'#FF715B',fontSize:'25px'}}/><Typography>Create and manage any process for your business needs.</Typography></div>
            <div style={{display:'flex',gap:'10px',marginTop:'10px'}}><TiTick style={{color:'#FF715B',fontSize:'25px'}}/><Typography>Full functionality without needed to install software.</Typography></div>
            <Button className="btn-btn-body">
              ALL SERVICES
            </Button>
        </Col>
        <Col sm={22} xs={24} md={16} lg={10}>
            <img src={aboutimage} style={{height:'85vh'}}/>
        </Col>
    </Row>
    </>
  )
}

export default Aboutservice