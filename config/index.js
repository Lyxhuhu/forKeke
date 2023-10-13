const CONFIG = {
  // ================================基础配置 - 无需修改================================
  // 和风天气API
  HEFENG_API_KEY: "6ab01632e2b44936b4951d8019007eab",

  // ================================高级配置 - 需要修改================================

  // 微信公众号的appID
  APP_ID: "wx6e75f6318504362b",

  // 微信公众号的appsecret
  APP_SECRET: "f5706f6d728e2484a8cb1479924c4cd9",

  // 微信公众号的模板ID
  TEMPLATE_ID: "nRIqY9cxxulr-giqrgT5S1Ut6hWc8PltC8jYWkn9imE",

  // 天行API的key
  TXApiKey: "feb441da32d1efee2603a08c857c1336",

  // 用户列表 可配置多个用户
  user: [
    {
      // 男(女)朋友的名字（或昵称或网名）
      userName: "珂珂宝贝",
      // 用户列表的`微信号`
      userId: "o43eU6gIzhZlGs2swIgu7QghFkvk",
      // 星座
      star: "天秤座",
      // 生日 - 格式：08-22
      birthday: "10-15",
      // 城市 - 格式：支持省市县区
      city: "北京市朝阳区",
    },
  ],

  // 计划旅游日 - 格式：2022-05-20
  tourism: "2023-10-26",

  // 恋爱纪念日 - 格式：2022-05-20
  loveDay: "2023-07-08",

  // ================================功能配置 - 可选修改================================

  // 默认全部开启，关闭可以加快响应速度
  // true 开启，false 关闭
  plugins: {
    // 天气预报
    weather: true,
    // 天气接口 默认接口1，可选接口1、2，接口2暂时无法使用
    weatherType: 1,
    // 星座运势
    star: true,
    // 土味情话
    saylove: true,
    // 健康小提示
    healthtip: true,
    // 毒鸡汤
    duJiTang: true,
    // 早安心语
    zaoAn: true,
    // 晚安心语
    wanAn: true,
    // 彩虹屁
    caiHongPi: true,
  },
};

module.exports = {
  CONFIG,
};
