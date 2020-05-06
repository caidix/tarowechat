import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import "./epsoide.scss"

const months = [
  '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月',
  '十二月'
]
export default class Epsoide extends Component {

  state = {
    month:  '一月',
    year: 2020
  }

  componentWillMount() { }
  componentDidMount() {
    let date = new Date()
    let month = date.getMonth()
    let year = date.getFullYear()
    this.setState({
      month: months[month],
      year: year
    })
  }
  componentWillReceiveProps(nextProps, nextConText) { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }
  render() {
    return (
      <View className="date-epsoide">
        <View class="index-container">
          <Text class="plain">No.</Text>
          <Text class="index">{this.props.index + 1}</Text>
          <View class="vertical-line"></View>
        </View>
        <View class="date">
          <Text class="month">{month}</Text>
          <Text class="year">{year}</Text>
        </View>
      </View>
    );
  }
}