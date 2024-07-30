"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  props: ["appendBlock"],
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.appendBlock, (item, k0, i0) => {
      return {};
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
