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
        <nav className="navbar bg-dark-theme navbar-expand-lg navbar-medium sticky-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item dropdown ">
                        <Link to="#" className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Virtual Escape Games
                        </Link>
                        <div className="dropdown-menu bg-dark-theme" aria-labelledby="navbarDropdownMenuLink">
                            <Link to="/lab-escape" className="dropdown-item">Lab Escape</Link>
                            <Link to="/castle-escape" className="dropdown-item" >Castle Escape</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown ">
                        <Link to="#" className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Practice Games
                        </Link>
                        <div className="dropdown-menu bg-dark-theme" aria-labelledby="navbarDropdownMenuLink">
                            <Link to="/maze-escape" className="dropdown-item">Maze Escape</Link>
                            <Link to="/cube-escape" className="dropdown-item" >Cube Escape</Link>
                            <Link to="/lost-found-escape" className="dropdown-item" >Lost & Found Escape</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/to-do" className="nav-link" >To do list before you play</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="faq" className="nav-link" >FAQ</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link" >Dashboard</Link>
                    </li>
                </ul>
                <ul  className="navbar-nav mr-auto">
                    <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                    <li className="nav-item"><Link to="/log-out" className="nav-link">Log out</Link></li>
                    <li className="nav-item"><Link to="/signup" className="nav-link">Sign Up</Link></li>
                </ul>
            </div>
            <div className="login row p-0 m-0">
                
            </div>
        </nav>
    )
}

export default Navbar