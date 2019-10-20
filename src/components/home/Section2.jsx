import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Section2 extends Component {
    render() {
        return (
            <Container >
                <Row>
                    <Col lg={8}>Hi</Col>
                    <Col lg={4}>Hello</Col>
                </Row>
                <Row>
                    <Col lg={12} >
                        <div style='height:70'>

                        </div>next section</Col>
                </Row>
                <Row>
                    <Col lg={12}>One More</Col>
                </Row>
            </Container>
        )
    }
}
