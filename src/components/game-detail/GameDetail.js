import React from 'react'
import {VscLock} from 'react-icons/vsc';
import {VscUnlock} from 'react-icons/vsc';

function GameDetail() {
    return (
        <div className="container-fluid">
            <div className="row p-0 m-0">
                <div className="row p-0 m-0 col-md-12 d-flex justify-content-center align-items-center">
                    <div className="col-md-4 text-center row p-0 m-0">
                        <div className="difficulty col-md-12 d-flex justify-content-center align-items-center">
                            <h1 className="text-center">DIFFICLULTY</h1>
                        </div>
                        <div className="col-md-12 d-flex justify-content-center align-items-center">
                            <VscLock />
                            <VscLock />
                            <VscLock />
                            <VscUnlock />
                            <VscUnlock />
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    )
}

export default GameDetail
