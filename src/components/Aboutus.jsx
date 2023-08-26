import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Aboutusimg from '../assets/aboutus.jpg'
import chocoproduct2 from '../assets/product.png'

function Aboutus() {
  return (
    <Container className='bg-color pt-3' fluid>
        <div>
            <h2 className='text-center pb-4'>
                AboutUs
            </h2>
        </div>
        <Row className='variants-popular-list'>
            <Col md={6} className='aboutus justify-content-center'>
                <img className='w-75 img-fluid mx-auto d-block rounded-5' src={ Aboutusimg }></img>
                <img className='cuppng w-75' src={ chocoproduct2 }></img>
            </Col>
            <Col md={6} className='text-center pb-5'>
                <h3 className='about-title pb-5'>Our Hot Chocolate Journey</h3>
                <p className='lead'>Two Friends, One Passion: Hot Chocolate!We Believe in Spreading Happiness, One Mug at a Time. Join Us on Our Quest to Redefine Hot Chocolate Enjoyment.</p>
            </Col>
        </Row>
    </Container>
  )
}

export default Aboutus