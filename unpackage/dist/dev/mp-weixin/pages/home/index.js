"use strict";
const common_vendor = require("../../common/vendor.js");
const config_data_childs = require("../../config/data/childs.js");
const config_othersIcon = require("../../config/othersIcon.js");
const utils_index = require("../../utils/index.js");
if (!Array) {
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  _easycom_uni_segmented_control2();
}
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
if (!Math) {
  (_easycom_uni_segmented_control + Avatar + ContentWrap)();
}
const Avatar = () => "../../components/avatar.js";
const ContentWrap = () => "../../components/content-wrap.js";
const itemWidth = 68;
const margin = 8;
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const banScrolling = common_vendor.ref(false);
    const footerType = common_vendor.ref("0");
    const activeStar = common_vendor.ref(0);
    const activeTab = common_vendor.ref(0);
    const activeType = common_vendor.ref(0);
    const items1 = ["5星", "4星", "3星", "2星", "1星", "其他"];
    const itemsValue1 = ["5", "4", "3", "2", "1", "UNKNOWN"];
    const items2 = ["光属性", "暗属性", "火属性", "木属性", "水属性"];
    const itemsValue2 = ["L", "D", "F", "G", "W"];
    const items3 = ["防御型", "辅助型", "拘束型", "攻击型", "恢复型"];
    const itemsValue3 = ["F", "S", "J", "G", "H"];
    const windowInfo = common_vendor.index.getWindowInfo();
    const clientWidth = windowInfo.screenWidth;
    windowInfo.screenHeight;
    const lineMaxNum = Math.floor((clientWidth - margin) / (itemWidth + margin));
    const ACTIVE_CHILDS_CODE_LIST = common_vendor.computed(() => {
      let arr = [];
      Object.keys(config_data_childs.CHILDS_CODE_MAP).forEach((item) => {
        const attr = config_data_childs.CHILDS_CODE_MAP[item].attribute || "UNKNOWN";
        const star = config_data_childs.CHILDS_CODE_MAP[item].star || "UNKNOWN";
        const type = config_data_childs.CHILDS_CODE_MAP[item].type || "UNKNOWN";
        if (itemsValue1[activeStar.value] === "UNKNOWN") {
          if (attr === "UNKNOWN" || star === "UNKNOWN") {
            arr.push(config_data_childs.CHILDS_CODE_MAP[item]);
          }
        } else if (itemsValue2[activeTab.value] === attr && itemsValue1[activeStar.value] === star && itemsValue3[activeType.value] === type) {
          arr.push(config_data_childs.CHILDS_CODE_MAP[item]);
        }
      });
      return arr;
    });
    const appendBlock = common_vendor.computed(() => {
      if (footerType.value === "0") {
        const length = ACTIVE_CHILDS_CODE_LIST.value && ACTIVE_CHILDS_CODE_LIST.value.length || 0;
        return utils_index.getAppendBlock(length, lineMaxNum);
      } else if (footerType === "1")
        ;
      else if (footerType.value === "2")
        ;
      else if (footerType.value === "3")
        ;
      else
        ;
    });
    const selectedChildId = common_vendor.ref("");
    const selectedVariantId = common_vendor.ref("");
    const selectItem = (item) => {
      let selectedChildConfig = item;
      selectedChildId.value = selectedChildConfig.id;
      let recentSelectedVariantId = common_vendor.index.getStorageSync(`DC_${selectedChildId.value}_VID`);
      recentSelectedVariantId = recentSelectedVariantId === "s" ? "" : recentSelectedVariantId;
      if (recentSelectedVariantId) {
        selectedVariantId.value = recentSelectedVariantId;
      } else {
        selectedVariantId.value = selectedChildConfig.variants["01"] ? "01" : Object.keys(selectedChildConfig.variants)[0];
      }
      common_vendor.nextTick$1(() => {
        updateViewsHandle();
      });
    };
    const updateViewsHandle = () => {
      if (selectedVariantId.value.indexOf("_") > -1) {
        updateViews(selectedVariantId.value);
      } else {
        updateViews(`${selectedChildId.value}_${selectedVariantId.value}`);
      }
    };
    const updateViews = (code) => {
      common_vendor.index.navigateTo({
        url: "/pages/canvas/index?code=" + code
      });
    };
    const setActiveStar = (e) => {
      if (activeStar.value != e.currentIndex) {
        activeStar.value = e.currentIndex;
      }
    };
    const setActiveTab = (e) => {
      if (activeTab.value != e.currentIndex) {
        activeTab.value = e.currentIndex;
      }
    };
    const setActiveType = (e) => {
      if (activeType.value != e.currentIndex) {
        activeType.value = e.currentIndex;
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: footerType.value === "0"
      }, footerType.value === "0" ? common_vendor.e({
        b: common_vendor.o(setActiveStar),
        c: common_vendor.p({
          current: activeStar.value,
          values: items1,
          styleType: "text",
          activeColor: "#f3b219"
        }),
        d: common_vendor.o(setActiveTab),
        e: common_vendor.p({
          current: activeTab.value,
          values: items2,
          styleType: "text",
          activeColor: "#f3b219"
        }),
        f: common_vendor.o(setActiveType),
        g: common_vendor.p({
          current: activeType.value,
          values: items3,
          styleType: "text",
          activeColor: "#f3b219"
        }),
        h: ACTIVE_CHILDS_CODE_LIST.value === null
      }, ACTIVE_CHILDS_CODE_LIST.value === null ? {} : !ACTIVE_CHILDS_CODE_LIST.value.length ? {} : {}, {
        i: !ACTIVE_CHILDS_CODE_LIST.value.length,
        j: common_vendor.f(ACTIVE_CHILDS_CODE_LIST.value, (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => selectItem(item), item.id),
            b: item.id,
            c: "5dc686b8-4-" + i0 + ",5dc686b8-0",
            d: common_vendor.p({
              name: item.name,
              imgClass: common_vendor.unref(config_othersIcon.OTHERS_ICON_SRC)[item.id] ? "others-img" : "",
              imgSrc: `https://www.mobbbb.top/resource/destiny-child/static/${item.id}_01/icon.png`,
              isCached: 0
            })
          };
        }),
        k: common_vendor.p({
          appendBlock: appendBlock.value
        })
      }) : {}, {
        l: common_vendor.s(banScrolling.value ? {
          overflowY: "hidden"
        } : {})
      });
    };
  }
};
wx.createPage(_sfc_main);
