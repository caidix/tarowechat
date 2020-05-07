import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
const playIcon = require('../../../static/img/play.png')
const stopIcon = require('../../../static/img/stop.png')
const backgroundAudioManager = Taro.getBackgroundAudioManager();
import './music.scss'
export default class Music extends Component {
  state = {
    playing: false,
    src: '',
    title: ''
  }
  componentDidMount() {
    this.registerMusic();
    this.recoverPlaying();
  }
  registerMusic() {
    const { value } = this.props;
    if (value.music) {
      const music = JSON.parse(value.music).data;
      this.setState({
        src: music.url,
        title: music.originalname
      })
    }
    this.managerAudio();
  }
  recoverPlaying() {
    if (backgroundAudioManager.paused) {
      this.setState({
        playing: false
      })
      return
    }
    if (backgroundAudioManager.src &&
      backgroundAudioManager.src === this.state.src
      && !backgroundAudioManager.paused) {
      this.setState({
        playing: true
      })
    }
  }
  playMusic() {
    const { playing, src, title } = this.state;
    if (!playing) {
      this.setState({
        playing: true
      })
      if (backgroundAudioManager.src === src) {
        backgroundAudioManager.play()
      } else {
        backgroundAudioManager.src = src;
        backgroundAudioManager.play()
      }
      backgroundAudioManager.title = title;
    } else {
      this.setState({
        playing: false,
      })
      backgroundAudioManager.pause()
    }
  }
  managerAudio() {
    backgroundAudioManager.onPlay(() => {
      this.recoverPlaying()
    })
    backgroundAudioManager.onPause(() => {
      this.recoverPlaying()
    })
    backgroundAudioManager.onStop(() => {
      this.recoverPlaying()
    })
    backgroundAudioManager.onEnded(() => {
      this.recoverPlaying()
    })
  }
  render() {
    const { value } = this.props;
    const { playing } = this.state;
    let classname;
    if (playing) {
      classname = "music rotation";
    } else {
      classname = "music";
    }
    return (
      <View className="banner-panel">

        <Image className={classname} src={value.background}>
        </Image>
        <Image
          onClick={() => this.playMusic()}
          className="music-icon"
          src={playing ? stopIcon : playIcon}>
        </Image>
      </View>
    );
  }
}