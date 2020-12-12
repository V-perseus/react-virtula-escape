import React from 'react';

function Navbar() {
    return (
            <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"> 
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-items active">
                                    <a href="#" class="nav-link">HOME</a>
                                </li>
                                <li class="nav-items">
                                    <a href="#" class="nav-link">DASHBOARD</a>
                                </li>
                                <li class="nav-items">
                                    <a href="#" class="nav-link">VIRTUAL ESCAPE GAMES</a>
                                </li>
                                <li class="nav-items">
                                    <a href="#" class="nav-link">TO DO LIST BEFORE YOU PLAY</a>
                                </li>
                                <li class="nav-items">
                                    <a href="#" class="nav-link">BLOG</a>
                                </li>
                                <li class="nav-items">
                                    <a href="#" class="nav-link">SCHEDULE</a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </nav>
    )
}

export default Navbar