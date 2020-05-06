import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
const backgroundAudioManager = Taro.getBackgroundAudioManager();
export default class Index extends Component {
  config = {
    navigationBarTitleText: ""
  };

  state = {};

  componentWillMount() {}
  componentDidMount() {
    backgroundAudioManager.title = "直到你降临";
    backgroundAudioManager.src =
      "https://cd-wechat.oss-cn-shenzhen.aliyuncs.com/%E9%98%BF%E8%82%86%20-%20%E7%9B%B4%E5%88%B0%E4%BD%A0%E9%99%8D%E4%B8%B4.mp3?Expires=1588775046&OSSAccessKeyId=TMP.3KiXvtCDR7kBsjRaYN4i8sCvuy41xK3ewvmQah3E3mS36pLmiaC1cBnHJ2iHERsPG7qYFzZQVKyq3ecE6U53R1A9GiFjXu&Signature=2t2xMxc3OeMFlfZ951BocbmDXBs%3D";
    backgroundAudioManager.play();
  }
  componentWillReceiveProps(nextProps, nextContext) {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  componentDidNotFound() {}
  render() {
    return <View>123</View>;
  }
}
