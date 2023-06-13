import { Col, Divider, Row, Typography } from 'antd'
import React from 'react'

const Multipages = ({name,title}) => {
  return (
    <>
    <Row justify={'center'}>
        <Col style={{textAlign:'center'}}>
        <Typography style={{color:'white',marginTop:'100px'}}>{name}</Typography>
        <Typography style={{color:'white',fontSize:'50px',fontWeight:900,lineHeight:1}}>{title}</Typography>
        </Col>
    </Row>
        <Row>
        <Col sm={2} xs={2} md={2} lg={2}></Col>
        <Col sm={20} xs={20} md={20} lg={20}>
          <Divider style={{ border: "1px solid #ffffff0f",marginTop:'60px' }} />
        </Col>
      </Row>
      <Row justify={'center'}><Col><Typography style={{color:'white'}}>Home /<span style={{ color: "#C0C0C0" }}> {name}</span></Typography></Col></Row>
    </>
  )
}

export default Multipages