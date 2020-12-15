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
                            <p>Here is the list of some most common information. If you have any other questions please feel free to contact out us!</p>
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
