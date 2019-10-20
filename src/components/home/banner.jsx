import React, { Component } from 'react'
import background from '../../background.jpg'
import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel'

export default class Banner extends Component {
    render() {
        return (
            <WrapBanner >
   <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100  img-container"
      src={background}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={background}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={background}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

            </WrapBanner>
        )
    }
}

const WrapBanner = styled.div`
.item{
  
}
`
