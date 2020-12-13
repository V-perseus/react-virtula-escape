import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
            <nav class="navbar navbar-expand-md navbar-medium sticky-top">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"> 
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse mt-3 mb-3" id="navbarResponsive">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-items mx-3 active">
                                <a href="#" class="nav-link">HOME</a>
                            </li>
                            <li class="nav-items mx-3">
                                <a href="#" class="nav-link">DASHBOARD</a>
                            </li>
                            <li class="nav-items mx-3">
                                <a href="#" class="nav-link">VIRTUAL ESCAPE GAMES</a>
                            </li>
                            <li class="nav-items mx-3">
                                <a href="#" class="nav-link">TO DO LIST BEFORE YOU PLAY</a>
                            </li>
                            <li class="nav-items mx-3">
                                <a href="#" class="nav-link">BLOG</a>
                            </li>
                            <li class="nav-items mx-3">
                                <a href="#" class="nav-link">SCHEDULE</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar