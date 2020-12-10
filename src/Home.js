import React from 'react';
import Banner from './components/banner/Banner';
import Carousel from './components/carousel/Carousel';
import Navbar from './components/navbar/Navbar';


function Home() {
    return (
        <div>
            <div className="App">
                <Banner />
                <Navbar />
                <Carousel />
            </div>
        </div>
    )
}

export default Home
