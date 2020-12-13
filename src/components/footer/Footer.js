import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.svg';

function footer() {
    return (
        <div>
            <div className="footer container-fluid">
                <div className="row d-flex p-0 m-0">
                    <div className="col-md-12 d-flex justify-content-center align-items-center mb-5">
                        <div className="text-center mt-5">
                            <h1>INFORMATION ABOUT US</h1>
                        </div>
                    </div>
                    <div className="adress col-md-6 row p-0 m-0 d-flex justify-content-center align-items-center">
                        <div className="text-left">
                            <h2 className="mb-5">OUR ADDRESS</h2>
                            <p>ENCADE Corporation</p>
                            <p>https://encade.org</p>
                            <p>Email:general.inquiry@encade.org</p>
                            <p>Tel: +1(613)416-8996</p>
                        </div>
                    </div>
                    <div className="links col-md-6 row p-0 m-0 d-flex justify-content-center align-items-center">
                        <div className="text-left">
                            <h2 className="mb-5">USEFUL LINKS</h2>
                            <p><Link to ="/dashboard">Dashboard</Link></p>
                            <p><Link to ="/v-e games">Virtual Escape Games</Link></p>
                            <p><Link to ="/blog">Blog</Link></p>
                            <p><Link to ="/schedule">Schedule</Link></p>
                        </div>
                    </div>
                    <div className="footer-logo col-md-12 row p-0 m-0 d-flex justify-content-center align-items-center mt-5 mb-3">
                        <div className="text-center">
                            <img src={logo} alt=""/>
                        </div>
                    </div>
                    <div className="footer-logo col-md-12 row p-0 m-0 d-flex justify-content-center align-items-center mb-5">
                        <div className="text-center">
                            <p>Copyright © 2020 ENCADE Corporation | All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer
