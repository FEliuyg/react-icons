import path from "node:path";
import OSS from "ali-oss";
import dotenv from "dotenv";

dotenv.config();

const accessKeyId = process.env.OSS_ACCESS_KEY_ID;
const accessKeySecret = process.env.OSS_ACCESS_KEY_SECRET;

if(!accessKeyId) {
  throw new Error("OSS_ACCESS_KEY_ID is required");
}

if(!accessKeySecret) {
  throw new Error("OSS_ACCESS_KEY_SECRET is required");
}

const client = new OSS({
  region: "oss-cn-hangzhou",
  accessKeyId: accessKeyId,
  accessKeySecret: accessKeySecret,
  bucket: "easyv-internal",
});

const files = ["index.html", "index.js"];

// upload docs files to oss
files.forEach((item) => {
  client.put(`icons/${item}`, path.resolve(__dirname, `../docs/${item}`));
});
