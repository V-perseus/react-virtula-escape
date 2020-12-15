import React from 'react';
import './ToDoList.css';
import ToDo from './components/todo-list/ToDo';

function ToDoList() {
    return (
        <div>
            <div className="container-fluid todo p-0 m-0 ">
            <div className="todo-bg">
                <h1>TO DO LIST BEFORE YOU PLAY</h1>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row p-0 m-0">
                    <div className="todo-title col-md-12 justify-content-center align-items-center d-flex">
                        <div className="text-center description">
                            <p>Our virtual escape games are designed to simulate complex team-building activities; therefore, you need to ensure that your computer system is effectively set-up to participate in these sophisticated team-building simulations.
                                Since we are using a gaming platform to build this, you must operate and know a specific gaming controls.
                                We built this check-list below for you to follow, so you have everything ready before you play. By doing this, you will have a higher chance of having a positive, productive, and fun experience.
                                Let’s start with the check-list below, but do not leave this to the last minute. Do it in-advance to get the opportunity to remediate any issues you might experience beforehand.</p>
                        </div>
                    </div>
                </div>
                <div className="todo-detail mt-5">
                    <ToDo />
                </div>
            </div>
        </div>
        </div>
    )
}

export default ToDoList
