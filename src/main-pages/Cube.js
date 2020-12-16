import React from 'react';
import './Cube.css';
import {FaLock} from 'react-icons/fa';
import {MdGroup} from 'react-icons/md';
import {ImClock} from 'react-icons/im';
import {FaPhoneAlt} from 'react-icons/fa';
import {AiTwotoneMail} from 'react-icons/ai';
import {Button} from 'react-bootstrap';

function Cube() {
    return (
        <div className="container-fluid p-0 m-0">
            <div className="row p-0 m-0">
                <div className="col-md-12 d-flex justify-content-center align-items-center cube-background">
                    <div className="text-maze">
                        <h1>Cube Escape</h1>
                    </div>
                </div>
            </div>
            <div className="content maze-content-background">
                <div className="container">
                    <div className="row p-0 m-0">
                        <div className="col-md-12 row p-0 m-0 maze-main-con">
                            <div className="col-lg-12 d-flex row p-0 m-0 pb-5">
                                <div className="col-md-12 d-flex row p-0 m-0 mt-5">
                                    <div className="col-md-4 lock-key-1 row p-0 m-0">
                                        <div className="col-md-12 d-flex justify-content-center align-items-center">
                                            <div className="text-center pt-2 pb-2">
                                                <FaLock className="lock-maze-1" />
                                                <FaLock className="lock-maze" />
                                                <FaLock className="lock-maze" />
                                                <FaLock className="lock-maze" />
                                                <FaLock className="lock-maze" />
                                                <h4 className="mt-3 p-0 m-0">DIFFICULTY</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 lock-key-2 row p-0 m-0">
                                        <div className="col-md-12 d-flex justify-content-center align-items-center">
                                            <div className="text-center pt-2 pb-2 row p-0 m-0 d-flex">
                                                <div className="col-md-6 col-6 d-flex align-items-center justify-content-end">
                                                    <div className="text-right">
                                                        <MdGroup className="people mb-3"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-6 d-flex align-items-center justify-content-start">
                                                    <p className="p-0 m-0 pb-3">1</p>
                                                </div>
                                                <h4>PLAYERS</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 lock-key-3 row p-0 m-0">
                                        <div className="col-md-12 d-flex justify-content-center align-items-center">
                                            <div className="text-center pt-2 pb-2 row p-0 m-0 d-flex">
                                                <div className="col-md-6 col-6 d-flex align-items-center justify-content-end">
                                                    <div className="text-right">
                                                        <ImClock className="clock mb-3"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-6 d-flex align-items-center justify-content-start">
                                                    <p className="p-0 m-0 pb-3">5</p>
                                                </div>
                                                <h4>MINUTES</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 maze-desc mt-5">
                                    <h6>The Maze Escape Game is a single-player game designed to help new players to gaming-industry practice game controls. Virtual Escape Games use specific keyboard keys and mouse movements to help navigate your way and interact with objects inside the game (these are called Game Controls). Knowing how to use the proper game controls is essential, especially before playing any of our virtual escape multiple-player games with your team. <br/>Being proficient in these controls means that you will be able to focus on your gameplay and the team’s dynamics rather than the technological aspect of the game environment. <br/> Besides, you will have more fun and enjoy your game better with your teammates.
                                        So keep practicing using this game before you play with your team in the Real Virtual Escape Games.
                                        We designed the Maze Escape game for people who never played computer games before or have limited experience.
                                        Click the “Practice Now” button on the right side of this text, and start practicing and enjoy.</h6>
                                </div>
                            </div>
                            <div className=" col-lg-12 row p-0 m-0 mt-5">
                                <div className="col-md-12 contact-maze">
                                    <div className="col-md-12 d-flex justify-content-center text-right align-items-center">
                                        <div className="text-right phone-icon mr-3">
                                            <FaPhoneAlt className="phone" />
                                        </div>
                                        <div className="text-left phone-number mt-1">
                                            <a href="#"><h4>: +1(613)416-8996</h4></a>
                                        </div>
                                    </div>
                                    <div className="col-md-12 d-flex justify-content-center text-center align-items-center mt-2">
                                        <div className="text-right phone-icon mr-3">
                                            <AiTwotoneMail className="mail" />
                                        </div>
                                        <div className="text-left phone-number mt-1">
                                            <a href="#"><h4>: SUPPORT@ENCADE.com</h4></a>
                                        </div>
                                    </div>
                                    <div className="col-md-12 d-flex justify-content-center text-center align-items-center mt-5-btn">
                                        <Button className="button"><h4 className="mt-2">Practice Now!</h4></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cube
