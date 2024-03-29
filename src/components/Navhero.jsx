import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Designlogo from '../assets/logo.png'

function Navhero() {
    
  return (
    <Container className='background-heronavbar' fluid>
        <Row className='pb-5'>
            <Col id='navbarres' sm={12} md={12} className='pb-5 mt-5 navbar-padd'>
                <ul className='navbar-list d-flex justify-content-center gap-5 text-light align-items-center'>
                    <li>Home</li>
                    <li>About</li>
                    <div>
                        <img src={ Designlogo } className='logo-style' />
                    </div>
                    <li>Reserve</li>
                    <li>Contact</li>
                </ul>
            </Col>
        </Row>

        <Container>
            <Row className='d-block text-white p-1'>
                <Col sm={12} md={12} className='pb-5'>
                    <h1 className='slogan-text1'>DELICIOUS <br></br> <h3 className='slogan-text2'>HOT CHOCOLATE</h3> </h1>
                </Col>
                <Col sm={12} md={12}>
                    <p className='slogan-quotes lead'>“Hot chocolate on a cold day 
                    makes everything warm.”</p>
                </Col>
            </Row>
        </Container>
    </Container>
  )
}

export default Navhero