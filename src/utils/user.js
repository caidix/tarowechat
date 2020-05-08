import Taro from '@tarojs/taro';
/**
 * Promise封装wx.checkSession
 */
function checkSession() {
  return new Promise(function (resolve, reject) {
    Taro.checkSession({
      success: function () {
        resolve(true);
      },
      fail: function () {
        reject(false);
      }
    })
  })
}
/**
 * Promise封装wx.login
 */
function login() {
  return new Promise(function (resolve, reject) {
    Taro.login({
      success: function (res) {
        if (res.code) {
          resolve(res);
        } else {
          reject(res);
        }
      },
      fail: function (err) {
        reject(err);
      }
    });
  });
}
/**
 * 调用微信登录
 */
export function loginByWeixin(userInfo) {
  return new Promise(function (resolve, reject) {
    return login().then((res) => {
      console.log(res, userInfo)
      Taro.setStorageSync('userInfo', userInfo);
      // Taro.setStorageSync('token', loginRes.token);
      resolve(userInfo);
    }).catch(err => {
      reject(err);
    })
  }).catch((err) => {
    reject(err);
  })
}

/**
 * 判断用户是否登录
 */
export function checkLogin() {
  return new Promise(function (resolve, reject) {
    if (Taro.getStorageSync('userInfo')
      // && Taro.getStorageSync('token')
    ) {
      checkSession().then(() => {
        resolve(true);
      }).catch(() => {
        reject(false);
      });
    } else {
      reject(false);
    }
  });
}
