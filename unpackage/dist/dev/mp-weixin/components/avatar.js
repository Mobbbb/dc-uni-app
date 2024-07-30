"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  props: ["name", "imgClass", "imgSrc", "isCached"],
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.$emit("on-click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($props.imgClass),
    b: $props.imgSrc,
    c: common_vendor.t($props.name),
    d: common_vendor.s($props.isCached ? {
      color: "var(--base-text-color)",
      fontWeight: "bold"
    } : {}),
    e: common_vendor.o((...args) => $options.onClick && $options.onClick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
