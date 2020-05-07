import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
const backgroundAudioManager = Taro.getBackgroundAudioManager();
export default class Index extends Component {
  config = {
    navigationBarTitleText: "个人中心"
  };

  state = {};
  render() {
    return <View>123</View>;
  }
}
