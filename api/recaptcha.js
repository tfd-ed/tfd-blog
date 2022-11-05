const app = require("express")();
const crypto = require("crypto");
const axios = require("axios");

/**
 * It is highly recommended to use environment variables instead of hardcoded secrets.
 */
// const CAPTCHA_ID = process.env.GEETEST_ID;
//
// const CAPTCHA_KEY = process.env.GEETEST_KEY;

const API_SERVER = "https://gcaptcha4.geetest.com";

app.get("/api/check-token", function (req, res, next) {
  const lot_number = req.query.lot_number;
  const captcha_output = req.query.captcha_output;
  const pass_token = req.query.pass_token;
  const gen_time = req.query.gen_time;
  const captcha_key = req.query.captcha_key;
  const captcha_id = req.query.captcha_id;

  const API_URL = API_SERVER + "/validate" + "?captcha_id=" + captcha_id;

  // Generate signature
  // Generate the signature using the standard hmac algorithm, use the user's current verification serial number lot_number as the original message, and use the customer's verification private key as the key
  // One-way hashing of message and key using sha256 hashing algorithm to generate the final "sign_token" signature
  const sign_token = hmac_sha256_encode(lot_number, captcha_key);

  const data = {
    lot_number: lot_number,
    captcha_output: captcha_output,
    pass_token: pass_token,
    gen_time: gen_time,
    sign_token: sign_token,
  };

  // post request
  // 根据极验返回的用户验证状态, 网站主进行自己的业务逻辑

  post_form(data, API_URL)
    .then((result) => {
      if (result["result"] === "success") {
        res.send("success");
      } else {
        console.log("验证失败: " + result["reason"]);
        res.send("fail");
      }
    })
    .catch((err) => {
      // 当请求Geetest服务接口出现异常，应放行通过，以免阻塞正常业务。
      console.log("Geetest server error:" + err);
      res.send("fail");
    });
});

function hmac_sha256_encode(value, key) {
  return crypto.createHmac("sha256", key).update(value, "utf8").digest("hex");
}

// 发送post请求, 响应json数据如：{"result": "success", "reason": "", "captcha_args": {}}
async function post_form(data, url) {
  const options = {
    url: url,
    method: "POST",
    params: data,
    timeout: 5000,
  };

  const result = await axios(options);

  if (result.status !== 200) {
    // geetest服务响应异常
    console.log("服务响应异常, statusCode:" + result.status);
    throw new Error("Geetest Response Error");
  }
  return result.data;
}

module.exports = app;
