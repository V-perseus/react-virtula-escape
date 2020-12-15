import React from 'react';
import './Schedule.css';


function Schedule() {
    return (
        <div>
            <div className="container-fluid faq p-0 m-0 ">
            <div className="faq-bg">
                <h1>FAQ</h1>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row p-0 m-0">
                    <div className="faq-title col-md-12 justify-content-center align-items-center d-flex">
                        <div className="text-center description">
                            <p>Here is the list of some most common questions. If you have any other questions please feel free to contact out us!</p>
                        </div>
                    </div>
                </div>
                <div className="faq-detail mt-5">
                    {/* <FaqMain /> */}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Schedule
