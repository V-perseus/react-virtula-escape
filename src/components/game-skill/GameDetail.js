import React from 'react'
import {GrGroup} from 'react-icons/gr';
import {BiTime} from 'react-icons/bi';
import Chart from './Chart';
import './GameDetail.css';

function GameDetail() {
    return (
        <div className="container-fluid">
            <div className="row p-0 m-0">
                <div className="row p-0 m-0 col-md-12 d-flex justify-content-center align-items-center">
                    <div className="col-md-4 text-center row p-0 m-0 difficulty-stage">
                        <div className="difficulty col-md-12 d-flex justify-content-center mb-3">
                            <h1 className="text-center">DIFFICLULTY</h1>
                        </div>
                        <div className="col-md-12  justify-content-center align-items-center mt-5">
                            <h1>STAGE 1 : 2</h1>
                            <h1>STAGE 2 : 3</h1>
                            <h1>STAGE 3 : 4</h1>
                        </div>
                    </div>
                    <div className="col-md-4 text-center row p-0 m-0">
                        <div className="player col-md-12 d-flex justify-content-center align-items-center">
                            <h1 className="text-center">PlAYERS</h1>
                        </div>
                        <div className="col-md-12 d-flex justify-content-center text-right align-items-center row p-0 m-0">
                            <div className="col-md-6 col-6">
                                <GrGroup className="group" />
                            </div>
                            <div className="col-md-6 col-6 text-left number">
                                <h3>4-8</h3>
                            </div>
                        </div>
                        <div className="col-md-12  justify-content-center align-items-center mt-5">
                            <Chart />
                        </div>
                    </div>
                    <div className="col-md-4 text-center row p-0 m-0">
                        <div className="time col-md-12 d-flex justify-content-center align-items-center">
                            <h1 className="text-center">TIME</h1>
                        </div>
                        <div className="col-md-12 d-flex justify-content-center text-right align-items-center row p-0 m-0">
                            <div className="col-md-6 col-6">
                                <BiTime className="clock" />
                            </div>
                            <div className="col-md-6 col-6 text-left minute mt-2">
                                <h3>60 Mins</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameDetail;
