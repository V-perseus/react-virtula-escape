import React from 'react';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import LabEscape from './components/gamelists/LabEscape';
import teamwork from './assets/teamwork.png';
import clock from './assets/clock.png';
import heart from './assets/heart.png';
import Testimonial from './components/testimonial/Testimonial';
import Blog from './components/blog/Blog';
import './App.css';

function Home() {
    return (
       
            <div className="homepage">
                <Banner />
                <Navbar />
                <div className="background">
                    <div className="text-1">
                        <h1>UNIQUE EXPERIENCE OF GAME THAT SEEMS LIKE REALITY!</h1>
                    </div>
                    <div className="text-2">
                        <h1 className="text-center">GATHER THE TEAM AND FIND THE EXIT</h1>
                    </div>
                </div>
                <div className="main-list">
                    <div className="container list">
                    <div className="title">
                        <h1>Featured Virtual Escape Games</h1>
                    </div>
                    <LabEscape />
                    </div>
                </div>
                <div className="bg-1"></div>
                <div className="space">
                    <div className="question">
                        <h1>HOW IT WORKS?</h1>
                    </div>
                </div>
                <div className="main-desc container">
                    <div className="d-flex row p-0 m-0">
                        <div className="first col-md-4 col-12 d-flex justify-content-center align-items-center">
                            <div className="text-center">
                                <img src={teamwork}></img>
                                <h1>Working with your team is the only way out.</h1>
                                <p>These team building games are designed to enable you to work efficiently with your team to be able to succeed. The only way you succeed in these games is your work with your team to find your way out.</p>
                            </div>
                        </div>
                        <div className="second col-md-4 col-12 d-flex justify-content-center align-items-center">
                            <div className="text-center">
                                <img src={clock}></img>
                                <h1>The clock is ticking...</h1>
                                <p>Working effectively is one thing, but working efficiently and is a totally different game. These games are timed with a maximum number of minutes to complete. You need to be an effective and efficient team to complete successfully on-time.</p>
                            </div>
                        </div>
                        <div className="third col-md-4 col-12 d-flex justify-content-center align-items-center">
                            <div className="text-center">
                                <img src={heart}></img>
                                <h1>Feel the atmosphere.</h1>
                                <p>Our Team Building games are 3D games, with a complex setup, and it is not just like a physical escape room where the setup is the same every time. Our games changes depending on your level, your team behavior, and is designed to improve the certain team and individual skillset. They look great too.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Testimonial className="testimonial"/>
                <Blog />
                
            </div>
    )
}

export default Home
