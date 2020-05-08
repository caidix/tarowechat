import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import * as user from '../../../utils/user';

export default class Index extends Component {
  config = {
    navigationBarTitleText: "个人中心"
  };
  state = {};
  wxLogin = (e) => {
    console.log(e)
    if (e.detail.userInfo == undefined) {
      showErrorToast('微信登录失败');
      return;
    }

    user.checkLogin().catch(() => {

      user.loginByWeixin(e.detail.userInfo).then((data) => {
        console.log(data)
      }).catch(() => {
        showErrorToast('微信登录失败');
      });

    });
  }
  render() {
    return <View>
      <Button type='primary' openType='getUserInfo' onGetUserInfo={this.wxLogin}>登陆</Button>
    </View>;
  }
}
