import React from 'react'
import ReactAwesomePlayer from 'react-awesome-player'
import video_over_img from '../../assets/bg-wave-sym.png'
import './VideoPlayer.css';

export default class App extends React.Component {
  state = {
    options: {
      poster: "http://localhost:3000/castle1.jpg",
      sources: [{
        type: "video/mp4",
        src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
      }],
      
    }
  }
  loadeddata() {
    console.log('loadeddata')
  }
  canplay() {
    console.log('canplay')
  }
  canplaythrough() {
    console.log('canplaythrough')
  }
  play() {
    console.log('play')
  }
  pause() {
    console.log('pause')
  }
  waiting() {
    console.log('waiting')
  }
  playing() {
    console.log('playing')
  }
  ended() {
    console.log('ended')
  }
  error() {
    console.log('error')
  }

  render () {
    const { options } = this.state
    return (
        <div className="position-relative">
            <ReactAwesomePlayer
                options={options}
                loadeddata={this.loadeddata}
                canplay={this.canplay}
                canplaythrough={this.canplaythrough}
                play={this.play}
                pause={this.pause}
                waiting={this.waiting}
                playing={this.playing}
                ended={this.ended}
                error={this.error}
                />
            <img src={video_over_img} className="position-absolute video-over-image" alt=""/>
        </div>
    );
  }
}