import React from 'react'
import YouTube from 'react-youtube';
import styled from 'styled-components';
import video_over_img from '../../assets/bg-wave-sym.png'

const StylesImg = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0px;
`
const VideoPlay = () => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      mute: 1,
      autohide: 1,
      modestbranding: 1,
      rel: 1,
    },
  };

  return (
    <div className="position-relative">
      <YouTube
        videoId="PrjzhUMB5_M"
        opts={opts}
        className="castle-video"
        onEnd={_onRestart}
      />
      <StylesImg src={video_over_img} alt=""/>
    </div>
    
  )
}

const   _onRestart = (event) => {
  event.target.playVideo();
}
export default VideoPlay