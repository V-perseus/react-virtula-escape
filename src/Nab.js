import React from 'react';
import NabVideo from './components/nab-video/NabVideo';
import NabSlide from './components/nab-img-slider/NabSlide';
import {VscLock} from 'react-icons/vsc';
import {VscUnlock} from 'react-icons/vsc';
import {GrGroup} from 'react-icons/gr';
import {BiTime} from 'react-icons/bi';
import {FaPhoneAlt} from 'react-icons/fa';
import {AiTwotoneMail} from 'react-icons/ai';
import {Button} from 'react-bootstrap';
import Chart from './components/game-skill/Chart';
import Calendar from './components/calender/Calendar';
import './Nab.css';

function Nab() {
    return (
        <div>
            <div className="castle">
                <NabSlide />
            </div>
            <div className="video mb-5">
                <div className="title d-flex justify-content-center align-items-center">
                    <div className="h1 pb-2">How does it look like?</div>
                </div>
                <NabVideo />
            </div>
            <div className="container-fluid">
                <div className="row p-0 m-0">
                    <div className="row p-0 m-0 col-md-12 d-flex justify-content-center align-items-center">
                        <div className="col-md-4 text-center row p-0 m-0">
                            <div className="difficulty col-md-12 d-flex justify-content-center align-items-center mb-3">
                                <h1 className="text-center">DIFFICLULTY</h1>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center align-items-center lock-items">
                                <VscLock className="lock" />
                                <VscLock className="lock" />
                                <VscLock className="lock" />
                                <VscUnlock className="unlock" />
                                <VscUnlock className="unlock" />
                            </div>
                            <div className="col-md-12  justify-content-center align-items-center  level">
                                <h3>STAGE 1 : LEVEL 2</h3>
                                <h3>STAGE 2 : LEVEL 3</h3>
                                <h3>STAGE 3 : LEVEL 4</h3>
                            </div>
                        </div>
                        <div className="col-md-4 text-center row p-0 m-0">
                            <div className="player col-md-12 d-flex justify-content-center align-items-center">
                                <h1 className="text-center">PLAYERS</h1>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center text-right align-items-center row p-0 m-0">
                                <div className="col-md-6 col-6">
                                    <GrGroup className="group" />
                                </div>
                                <div className="col-md-6 col-6 text-left number">
                                    <h3>4-8</h3>
                                </div>
                            </div>
                            <div className="col-md-12  justify-content-center align-items-center">
                                <Chart />
                            </div>
                        </div>
                        <div className="col-md-4 text-center row p-0 m-0">
                            <div className="time col-md-12 d-flex justify-content-center align-items-center">
                                <h1 className="text-center">TIME</h1>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center text-right align-items-center row p-0 m-0">
                                <div className="col-md-12 row p-0 m-0">
                                    <div className="col-md-6 col-6">
                                        <BiTime className="clock" />
                                    </div>
                                    <div className="col-md-6 col-6 text-left minute mt-2">
                                        <h3>60 Mins</h3>
                                    </div>
                                </div>
                                <div className="col-md-12 row d-flex p-0 m-0 mt-3 contact-information">
                                    <div className="col-md-12 d-flex justify-content-center text-right align-items-center">
                                        <div className="text-right phone-icon mr-3">
                                            <FaPhoneAlt className="phone" />
                                        </div>
                                        <div className="text-left phone-number mt-1">
                                            <h4>: +1(613)416-8996</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-12 d-flex justify-content-center text-center align-items-center mt-2">
                                        <div className="text-right phone-icon mr-3">
                                            <AiTwotoneMail className="mail" />
                                        </div>
                                        <div className="text-left phone-number mt-1">
                                            <h4>: SUPPORT@ENCADE.com</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="content col-md-12 row d-flex p-0 m-0 mt-5">
                        <div className="col-md-8 content-detail row p-0 m-0">
                            <div className="col-md-12 text-center">
                                <h1>Coming February 2021</h1>
                            </div>
                            <div className="col-md-12">
                                <p>CASTLE ESCAPE is a virtual escape room is designed for a larger team-building exercise and intended to harness and improve the different team and individual skills, such as negotiation, teamwork, problem-solving, communication, creativity, and risk-taking.</p>
                            </div>
                            <div className="col-md-12">The story starts when people trapped in wormholes that started appearing around the world, which transported the individuals to the prison of an abandoned/destroyed castle. In an attempt to get out of the dungeon, players, by familiarizing themselves with the environment, learn that they are in a completely different world and they have little chance of returning home unless they start working together as a team to get to a movement device (gate) located at the very top of the crumbling castle.</div>
                        </div>
                        <div className="col-md-4 buttons row p-0 m-0">
                            <div className="col-md-12 text-center align-items-center justify-items-center pt-5">
                                <Button className="button"><h4 className="mt-2">Join Now!</h4></Button>
                            </div>
                            <div className="col-md-12 text-center align-items-center justify-items-center pt-5">
                                <Button className="button"><h4 className="mt-2">Practice Now!</h4></Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5 schedule-calendar mb-5">
                    <div className="row p-0 m-0 d-flex schedule-games">
                        <div className="col-md-12 d-flex align-items-center justify-content-center pt-5 pb-5">
                            <div className="text-center">
                                <h1>Schedule Games</h1>
                            </div>
                        </div>
                    </div>
                    <div className="calender">
                        <Calendar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nab
