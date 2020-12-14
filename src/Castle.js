import React from 'react';
import CastleSlider from './components/castle-img-slide/CastleSlider';
import './Castle.css';
import VideoPlayer from './components/video-player/VideoPlayer';
import GameDetail from './components/game-detail/GameDetail';

function Castle() {
    return (
        <div>
            <div className="castle">
                <CastleSlider />
            </div>
            <div className="video mb-5">
                <div className="title d-flex justify-content-center align-items-center">
                    <h1>Video</h1>
                </div>
                <VideoPlayer />
            </div>
            <GameDetail />
        </div>
    )
}

export default Castle
