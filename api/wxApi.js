const axios = require("axios");
const { CONFIG } = require("../config/index");

/**
 * 获取token
 */
const getToken = async () => {
  const params = {
    grant_type: "client_credential",
    appid: CONFIG.APP_ID,
    secret: CONFIG.APP_SECRET,
  };

  const url = "https://api.weixin.qq.com/cgi-bin/token";

  return await axios.get(url, { params });
};

/**
 * 发送消息
 * @param {Object} content
 * @returns
 */
const sendMsg = async (content, userId) => {
  const token = (await getToken()).data.access_token;
  let data1 = '珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂珂'
  const data = {
    touser: userId,
    msgtype: "text",
    text: {
      content: "你好你好你好你hi奥"
    }
  };
  // const data = {
  //   touser: userId,
  //   template_id: CONFIG.TEMPLATE_ID,
  //   data: data1,
  // };
  

  // const url =
  //   "https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=" +
  //   token;
  const url =
  "https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=" +
  token;
  await axios.post(url, data);
};

module.exports = {
  sendMsg,
};
