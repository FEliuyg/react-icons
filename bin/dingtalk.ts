import crypto from "crypto";
import got from "got";
import pkg from "../package.json";

const secretKey = process.env.DINGTALK_SECRET;
const baseUrl = process.env.DINGTALK_WEBHOOK_URL;

if(!secretKey) {
  throw new Error('DINGTALK_SECRET is not defined');
}

if(!baseUrl) {
  throw new Error('DINGTALK_WEBHOOK_URL is not defined');
}

const time = Date.now();
const stringToSign = `${time}\n${secretKey}`;
const signature = crypto
  .createHmac("sha256", secretKey)
  .update(stringToSign)
  .digest()
  .toString("base64");
const url = `${baseUrl}&timestamp=${time}&sign=${signature}`;

const body = `@easyv/react-icons@${pkg.version} has been published, please use 'npm update @easyv/react-icons' to update the package.You can visit http://static-site.easyv.cloud/icons/index.html to see all icons`;

(async () => {
  // send message to dingtalk
  await got
    .post(url, {
      json: {
        msgtype: "text",
        text: { content: body },
      },
    })
    .json();
})();
