const Util = require("./index");
const { CONFIG } = require("../config");
const TianApi = require("../api/tianApi");
/**
 * 组装天气数据
 * @param {Object} data
 * @param {String} city
 */
const buildWeatherInfo = async (data, city) => {
  if (CONFIG.plugins.weather) {
    // 接口1
    if (CONFIG.plugins.weatherType === 1) {
      const weatherData = await TianApi.getWeather(city);
      // 天气
      data["weather"] = {
        value: weatherData.weather,
        color: Util.getColor(),
      };
      // 现在温度
      data["real"] = {
        value: weatherData.real,
        color: Util.getColor(),
      };
      // 当天温度
      data["est"] = {
        value: weatherData.lowest + "-" + weatherData.highest,
        color: Util.getColor(),
      };
      // 风
      data["wind"] = {
        value: weatherData.wind + "：" + weatherData.windsc,
        color: Util.getColor(),
      };
      // 降雨概率
      data["pop"] = {
        value: weatherData.pop + "%",
        color: Util.getColor(),
      };
      // 生活指数
      data["tips"] = {
        value: weatherData.tips,
        color: Util.getColor(),
      };
    } else if (CONFIG.plugins.weatherType === 2) {
      // 接口2
      // TODO待开发
    }
  }
};

/**
 * 组装星座运势
 * @param {Object} data
 * @param {String} astro
 */
const buildAstro = async (data, astro) => {
  if (CONFIG.plugins.star) {
    const astroInfo = await TianApi.getStar(astro);
    data["astro"] = {
      value: astroInfo[astroInfo.length - 1].content,
      color: Util.getColor(),
    };
  }
};

/**
 * 组装土味情话
 * @param {Object} data
 */
const buildSaylove = async (data) => {
  if (CONFIG.plugins.saylove) {
    const saylove = await TianApi.getSaylove();
    data["saylove"] = {
      value: saylove.content,
      color: Util.getColor(),
    };
  }
};

/**
 * 组装健康小提示
 * @param {Object} data
 */
const buildHealthtip = async (data) => {
  if (CONFIG.plugins.healthtip) {
    const healthtip = await TianApi.getHealthtip();
    data["healthtip"] = {
      value: healthtip.content,
      color: Util.getColor(),
    };
  }
};

/**
 * 组装毒鸡汤
 * @param {Object} data
 */
const buildDuJiTang = async (data) => {
  if (CONFIG.plugins.duJiTang) {
    const duJiTang = await TianApi.getDuJiTang();
    data["duJiTang"] = {
      value: duJiTang.content,
      color: Util.getColor(),
    };
  }
};

/**
 * 组装早安心语
 * @param {Object} data
 */
const buildZaoAn = async (data) => {
  if (CONFIG.plugins.zaoAn) {
    const zaoAn = await TianApi.getZaoAn();
    data["zaoAn"] = {
      value: zaoAn.content,
      color: Util.getColor(),
    };
  }
};

/**
 * 组装晚安心语
 * @param {Object} data
 */
const buildWanAn = async (data) => {
  if (CONFIG.plugins.wanAn) {
    const wanAn = await TianApi.getWanAn();
    data["wanAn"] = {
      value: wanAn.content,
      color: Util.getColor(),
    };
  }
};

/**
 * 组装彩虹屁
 * @param {Object} data
 */
const buildCaiHongPi = async (data) => {
  if (CONFIG.plugins.caiHongPi) {
    const caiHongPi = await TianApi.getCaiHongPi();
    data["caiHongPi"] = {
      value: caiHongPi.content,
      color: Util.getColor(),
    };
  }
};

/**
 * 构建数据模板
 * @param {Object} data
 * @param {String} city 城市
 * @param {String} astro 星座
 */
const build = async (data, city, astro) => {
  await buildWeatherInfo(data, city);
  await buildAstro(data, astro);
  await buildSaylove(data);
  await buildHealthtip(data);
  await buildDuJiTang(data);
  await buildZaoAn(data);
  await buildWanAn(data);
  await buildCaiHongPi(data);
};
/**
 * 根据data组装最后信息
 */
const packMsg = async(data) => {
  var title = "珂珂宝贝早上好呀！" + "\n";
  var userName = "我最最最爱的" + data["username"].value + "\n";
  var nowDate = "今天:" + data.nowDate.value + "\n";
  var city = "珂珂窝:" + data.city.value + "\n";
  var weather = "天气状态:" + data.weather.value + "\n";
  var real = "现在温度:" + data.real.value + "\n";
  var est = "今天温度:" + data.est.value + "\n";
  var wind = "今天风向:" + data.wind.value + "\n";
  var tips = "穿戴建议:" + data.tips.value + "\n";
  var saylove = "小狗语录:" + data.saylove.value + "\n";
  var togetherDays = "和小狗在一起:" + data.togetherDays.value + "\n";
  var birthday = "距离珂珂的下一个生日:" + data.birthday.value + "\n";
  // var leoSaying = "小狗一直很想你呀！！！"
  var leoSaying = "小狗一直很想你呀！！！" + "\n" + "健身小狗上线，科研珂珂上线，冲！";

  var res = title + userName + nowDate + city + weather + real + est + wind + tips + saylove + togetherDays + birthday + leoSaying
  return res
};

module.exports = { 
  build,
  packMsg,
 };
