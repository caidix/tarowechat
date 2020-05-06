import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Block, Image } from '@tarojs/components'
import Epsoide from '../../components/epsoide/epsoide'
import { getClassicList } from '../../services/classic'
import './index.scss'

class Index extends Component {
  state = {
    list: [],
    total: 0,
    activeIndex: 2
  }
  config = {
    navigationBarTitleText: '首页'
  }

  componentDidMount() {
    Taro.getSystemInfo({
      success: (res) => {
        console.log(res)
      }
    });
    getClassicList().then(data => {
      console.log(data)
      this.setState({
        list: data.data.data,
        total: data.data.total
      })
    })
  }
  nextInner() {
    const { total, activeIndex } = this.state
    if (total > 0 && total - 1 > activeIndex) {
      console.log(this.state)
      this.setState({
        activeIndex: activeIndex + 1
      })
    }
  }
  prevInner() {
    const { total, activeIndex } = this.state
    if (total > 0 && activeIndex > 0) {
      console.log(this.state)
      this.setState({
        activeIndex: activeIndex - 1
      })
    }
  }
  componentDidHide() { }
  render() {
    const { total, list, activeIndex } = this.state
    const item = list[activeIndex]
    console.log(item)
    return (
      <Block>
        <Epsoide index={activeIndex} />
        <View className="classic">
          <Image className="images" src={item.background}>
            <Text className="create-time at-article__info">createBy:{item.createTime}</Text>
          </Image>
          <View className="content">
            <Text>{item.message}</Text>
          </View>
          <View className="pagination">
            <Image className="icon"
              onClick={() => this.prevInner()}
              src={
                activeIndex === 0
                  ? require('../../static/img/left@disabled.png') :
                  require('../../static/img/left.png')
              }>
            </Image>
            <Text className="pagination-text">{item.message}</Text>
            <Image className="icon"
              onClick={() => this.nextInner()}
              src={
                activeIndex === total - 1
                  ? require('../../static/img/right@disabled.png') :
                  require('../../static/img/right.png')
              }>
            </Image>
          </View>
        </View>
      </Block>
    )
  }
}

export default Index
