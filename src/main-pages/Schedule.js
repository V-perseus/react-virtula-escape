import React from 'react';
import Calendar from '../components/calender/Calendar';
import './Schedule.css';


function Schedule() {
    return (
        <div>
            <div className="container-fluid schedule p-0 m-0 ">
                <div className="schedule-bg">
                    <h1>Schedule Games</h1>
                </div>
                <div className="schedule-title mt-5 mb-5">
                    <div className="row p-0 m-0">
                        <div className="col-md-12 d-flex justify-content-center align-items-center">
                            <div className="text-shedule">
                                <h1>Schedule Games</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="calendar-schedule mb-5">
                    <Calendar />
                </div>
            </div>
        </div>
    )
}

export default Schedule
