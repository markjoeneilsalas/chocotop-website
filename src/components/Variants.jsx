import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import chocoproduct1 from '../assets/product.png'



function Variants() {

  const clickAll = () => {
    document.getElementById('product1').style.display = 'block';
    document.getElementById('product2').style.display = 'block';
    document.getElementById('product3').style.display = 'block';
  }

  const clickChoco = () => {
    document.getElementById('product1').style.display = 'block';
    document.getElementById('product2').style.display = 'none';
    document.getElementById('product3').style.display = 'none';
  }

  const clickVanilla = () => {
    document.getElementById('product1').style.display = 'none';
    document.getElementById('product2').style.display = 'block';
    document.getElementById('product3').style.display = 'none';
  }

  const clickMint = () => {
    document.getElementById('product1').style.display = 'none';
    document.getElementById('product2').style.display = 'none';
    document.getElementById('product3').style.display = 'block';
  }


  return (
    <Container className='background-variants-section pt-3' fluid>
        <div>
           <h3 className='text-center pt-3'>Popular Hot Chocolate Flavors</h3>
        </div>
        <div>
           <ul className='variants-list'>
            <li className='all-flavors button-74' onClick={clickAll}>All Flavor</li>
            <li className='choco-flavor button-74' onClick={clickChoco}>Choco Flavor</li>
            <li className='Vanilla-flavor button-74' onClick={clickVanilla}>Vanilla Flavor</li>
            <li className='Milk Flavor button-74' onClick={clickMint}>Mint Flavor</li>
           </ul>
        </div>
        <Row className='variants-popular-list'>
            <Col id='product1' className='product1' sm={3} md={3}>
              <div className='text-center'>
                <img className='product1 w-75' src={ chocoproduct1 } />
              </div>
              <div className='text-center'>
                <h3>Dark Chocolate</h3>
              </div>
            </Col>

            <Col id='product2' className='product1' sm={3} md={3}>
              <div className='text-center'>
                <img className='product1 w-75' src={ chocoproduct1 } />
              </div>
              <div className='text-center'>
                <h3>Vanilla Chocolate</h3>
              </div>
            </Col>

            <Col id='product3' className='product1' sm={3} md={3}>
              <div className='text-center'>
                <img className='product1 w-75' src={ chocoproduct1 } />
              </div>
              <div className='text-center'>
                <h3>Mint Chocolate</h3>
              </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Variants