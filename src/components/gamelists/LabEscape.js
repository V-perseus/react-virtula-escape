import React from 'react';
import {Card, Container, Col, Row} from 'react-bootstrap';
import lab from '../../assets/lab.jpg';
import castle from '../../assets/castle.jpg';
import styled from 'styled-components';
import {FaLock} from 'react-icons/fa';
import {BsPeopleFill} from 'react-icons/bs';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {ImLocation2} from 'react-icons/im';

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
    .card-con{
        background: #242424;
    }
    .key-icon{
        width: 25px;
        color:#5A5A5A;
    }
    .key-icon.red{
        color:red;
    }
    .key-icon.white{
        color:white;
    }
    .text-gray-card{
        color:#5A5A5A;
    }
    .ripple {
        position: relative;
        border: none;
        outline: none;
        cursor: pointer;
        background: #ff3c41;
        color: white;
        padding: 8px 21px;
        border-radius: 45px;
        font-size: 13px;
        overflow: hidden;
        width:123px;
    }
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        animation: ripple-animation 2s;
    }

    @keyframes ripple-animation {
        from {
            transform: scale(1);
            opacity: 0.4;
        }
        to {
            transform: scale(100);
            opacity: 0;
        }
    }
    @media (max-width: 510px) {
        .image {
            height: auto;
        }
    }
    

`


function LabEscape() {
    return (
        <Styles>
            <Container>
                <Row className="justify-content-md-center lab-escape-section">
                    <Col md={12} className="d-flex mb-10">
                        <Row>
                            <Col className="p-0 m-0" xs={12} lg={8}>
                                <Card.Img className="image py-md-5 lab-image" variant="top" src={lab} />
                            </Col>
                            <Col className="p-0 m-0 detail" xs={12} lg={4}>
                                <Card  className="desc rounded-0 card-con" style={{ height: '35rem' }}>
                                    <Card.Body className="py-5 px-3" >
                                        <div className="key-con pb-4">
                                            <FaLock className="key-icon red" />
                                            <FaLock className="key-icon red" />
                                            <FaLock className="key-icon red" />
                                            <FaLock className="key-icon red" />
                                            <FaLock className="key-icon " />
                                        </div>
                                        <Card.Title>
                                            <h4 className="text-white">Lab Escape</h4>    
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            <div className="row m-0 p-0">
                                                <div className="col-12 d-flex justify-content-center">
                                                    <BsPeopleFill  className="key-icon white mr-1" />
                                                    <p className=" mr-3 mb-0 text-gray-card">4 - 6</p>
                                                    <AiOutlineClockCircle className="key-icon white mr-1" />
                                                    <p className=" mr-1 mb-0 text-gray-card">60</p>
                                                </div>
                                                <div className="col-12 d-flex mt-2 justify-content-center">
                                                    <ImLocation2 className="key-icon white" />
                                                    <p className="text-gray-card">http://escapeFrom.com/blabla</p>
                                                </div>
                                            </div>
                                        </Card.Subtitle>
                                        <Card.Text className="text-gray-card">
                                            <span>LAB ESCAPE is a virtual team escape room focusing on improving team communication, collaboration, and problem-solving skills. It is a fun and challenging team-building exercise. It is designed to involve everyone in the team and harness the power of all.
                                                </span>
                                        </Card.Text>
                                        <Card.Link>
                                            <button className="ripple mr-2" data-ripple-color="#ffffff">Practice Now</button>
                                            <button className="ripple" data-ripple-color="#ffffff">Join Now</button>
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} className="d-flex">
                        <Row>
                            <Col className="p-0 m-0 detail" xs={12} lg={4}>
                                <Card  className="desc rounded-0 card-con" style={{ height: '35rem' }}>
                                    <Card.Body className="py-5 px-3" >
                                        <div className="key-con pb-4">
                                            <FaLock className="key-icon red" />
                                            <FaLock className="key-icon red" />
                                            <FaLock className="key-icon red" />
                                            {/* <FaLock className="key-icon " />
                                            <FaLock className="key-icon " /> */}
                                        </div>
                                        <Card.Title>
                                            <h4 className="text-white">Castle Escape</h4>    
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            <div className="row m-0 p-0">
                                                <div className="col-12 d-flex justify-content-center">
                                                    <BsPeopleFill  className="key-icon white mr-1" />
                                                    <p className=" mr-3 mb-0 text-gray-card">4 - 6</p>
                                                    <AiOutlineClockCircle className="key-icon white mr-1" />
                                                    <p className=" mr-1 mb-0 text-gray-card">60</p>
                                                </div>
                                                <div className="col-12 d-flex mt-2 justify-content-center">
                                                    <ImLocation2 className="key-icon white" />
                                                    <p className="text-gray-card">http://escapeFrom.com/blabla</p>
                                                </div>
                                            </div>
                                        </Card.Subtitle>
                                        <Card.Text className="text-gray-card">
                                            <span>CASTLE ESCAPE is a virtual escape room is designed for a larger team-building exercise and intended to harness and improve the different team and individual skills, such as negotiation, teamwork, problem-solving, communication, creativity, and risk-taking.
                                                 </span>
                                        </Card.Text>
                                        <Card.Link>
                                            <button className="ripple mr-2" data-ripple-color="#ffffff">Practice Now</button>
                                            <button className="ripple" data-ripple-color="#ffffff">Join Now</button>
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="p-0 m-0" xs={12} lg={8}>
                                <Card.Img className="image py-md-5" variant="top" src={castle} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Styles>
    )
}

export default LabEscape
