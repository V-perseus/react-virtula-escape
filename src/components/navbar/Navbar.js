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
            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button> */}
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item active">
                        <Link to="/" class="nav-link" >Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item dropdown ">
                        <Link to="#" class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Virtual Escape Games
                        </Link>
                        <div class="dropdown-menu bg-dark-theme" aria-labelledby="navbarDropdownMenuLink">
                            <Link to="/lab-escape" class="dropdown-item">Lab Escape</Link>
                            <Link to="/castle-escape" class="dropdown-item" >Castle Escape</Link>
                        </div>
                    </li>
                    <li class="nav-item">
                        <Link to="/to-do" class="nav-link" >To do list before you play</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="faq" class="nav-link" >FAQ</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/schedule" class="nav-link" >Schedule</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/dashboard" class="nav-link" >Dashboard</Link>
                    </li>
                </ul>
                <ul  class="navbar-nav mr-auto">
                    <li class="nav-item"><Link to="/login" class="nav-link">Login</Link></li>
                    <li class="nav-item"><Link to="/signup" class="nav-link">Sign Up</Link></li>
                </ul>
            </div>
            <div className="login row p-0 m-0">
                
            </div>
        </nav>
    )
}

export default Navbar