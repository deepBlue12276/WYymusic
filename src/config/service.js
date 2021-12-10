


export default {
  login: {
    PHONE_LOGIN: '/login/cellphone',  //手机登录
    CHECK_CODE: '/captcha/verify',  //验证验证码
    EMAIL_LOGIN: '/login',  //邮箱登录
    REFRESH_LOGIN: '/login/refresh',  //刷新登录
    GET_LOGIN_CODE: '/captcha/sent',  //获取验证码
    CHECK_REGIST: '/cellphone/existence/check',  //验证是否注册
  },
  home: {
    HOME_BANNER: '/banner',  //首页banner
    REC_SONG_LIST: '/recommend/resource',  //首页推荐歌单
    REC_MV: '/personalized/mv',   //首页推荐MV
    TOP_SONG: '/top/song',   //首页新歌速递
  }
}