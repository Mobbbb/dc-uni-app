"use strict";
const common_vendor = require("../common/vendor.js");
class HttpRequest {
  constructor(baseUrl = "") {
    this.baseUrl = baseUrl;
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl
    };
    return config;
  }
  request(options) {
    options = Object.assign(this.getInsideConfig(), options);
    return new Promise((resolve) => {
      common_vendor.index.request({
        method: options.method || "GET",
        url: options.url || "",
        data: options.data || {},
        header: options.header || {},
        responseType: options.responseType || "text",
        success: (res) => {
          resolve(res);
        }
      });
    });
  }
}
const axios = new HttpRequest();
exports.axios = axios;
