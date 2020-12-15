import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    
    useEffect(() => {
    const script = document.createElement('script');
    script.src = "/assets/js/common.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
        document.body.removeChild(script);
    }
    }, []);
    return (
        <nav class="navbar bg-dark-theme navbar-expand-md navbar-medium sticky-top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item dropdown ">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Virtual Escape Games
                        </a>
                        <div class="dropdown-menu bg-dark-theme" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/lab-escape">Lab Escape</a>
                            <a class="dropdown-item" href="/castle-escape">Castle Escape</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/to-do">To do list before you play</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="blog">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/schedule">Schedule</a>
                    </li>
                </ul>
            </div>
            <div className="login row p-0 m-0">
                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar