import React from 'react';
import {Card, Container, Col, Row} from 'react-bootstrap';
import lab from '../../assets/lab.jpg';
import castle from '../../assets/castle.jpg';
import styled from 'styled-components';
import ReactReadMoreReadLess from "react-read-more-read-less";

const Styles = styled.div`
    .image {
        width: 100%;
        height: 35rem;
    }
    .mb-10 {
        margin-bottom: 6rem;
    }
    .detail {
        background-color: black;
    }
`


function LabEscape() {
    return (
        <Styles>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col md={12} className="d-flex mb-10">
                        <Row>
                            <Col className="p-0 m-0" xs={12} md={8}>
                                <Card.Img className="image" variant="top" src={castle} />
                            </Col>
                            <Col className="p-0 m-0 detail" xs={12} md={4}>
                                <Card  className="desc" style={{ height: '35rem' }}>
                                    <Card.Body>
                                        <Card.Title>Castle Escape</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Castle Escape</Card.Subtitle>
                                        <Card.Text>
                                            <ReactReadMoreReadLess
                                                charLimit={100}
                                                readMoreText={"Read more ▼"}
                                                readLessText={"Read less ▲"}
                                            >
                                                CASTLE ESCAPE is a virtual escape room is designed for a larger team-building exercise and intended to harness and improve the different team and individual skills, such as negotiation, teamwork, problem-solving, communication, creativity, and risk-taking.
                                                The story starts when people trapped in wormholes that started appearing around the world, which transported the individuals to the prison of an abandoned/destroyed castle. In an attempt to get out of the dungeon, players, by familiarizing themselves with the environment, learn that they are in a completely different world and they have little chance of returning home unless they start working together as a team to get to a movement device (gate) located at the very top of the crumbling castle.
                                            </ReactReadMoreReadLess>
                                        </Card.Text>
                                        <Card.Link href="#">Pracise Now</Card.Link>
                                        <Card.Link href="#">Join Now</Card.Link>
                                       
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} className="d-flex">
                        <Row>
                            <Col className="p-0 m-0 detail" xs={12} md={4}>
                                <Card  className="desc" style={{ height: '35rem' }}>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Lab Escape</Card.Subtitle>
                                        <Card.Text>
                                            <ReactReadMoreReadLess
                                                charLimit={100}
                                                readMoreText={"Read more ▼"}
                                                readLessText={"Read less ▲"}
                                            >
                                                LAB ESCAPE is a virtual team escape room focusing on improving team communication, collaboration, and problem-solving skills. It is a fun and challenging team-building exercise. It is designed to involve everyone in the team and harness the power of all.
                                                The story goes when a brave scientist keeps working in a lab in which they were designing a meteoroid-destruction laser to destroy a fast approaching meteoroid that will collide with the earth in a few hours. It is up to them to complete the last touches of the project and launch the laser beam on time to destroy the meteoroid before it is too late.
                                            </ReactReadMoreReadLess>
                                        </Card.Text>
                                        <Card.Link href="#">Pracise Now</Card.Link>
                                        <Card.Link href="#">Join Now</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="p-0 m-0" xs={12} md={8}>
                                <Card.Img className="image" variant="top" src={lab} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Styles>
    )
}

export default LabEscape
