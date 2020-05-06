import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/user/index/index'
    ],
    requiredBackgroundModes: ["audio", "location"],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fffbf0',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      backgroundColor: '#fffbf0'
    },
    tabBar: {
      "backgroundColor": "#fffbf0",
      "borderStyle": "white",
      "selectedColor": "#AB956D",
      "color": "#666",
      "list": [{
        "pagePath": "pages/index/index",
        "iconPath": './static/img/home.png',
        "selectedIconPath": './static/img/home@selected.png',
        "text": "首页"
      }, {
        "pagePath": 'pages/user/index/index',
        "iconPath": './static/img/my.png',
        "selectedIconPath": './static/img/my@selected.png',
        "text": "个人"
      }]
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
