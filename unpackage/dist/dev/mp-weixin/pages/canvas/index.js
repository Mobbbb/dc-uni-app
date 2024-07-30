"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_index = require("../../utils/index.js");
const utils_request = require("../../utils/request.js");
const utils_live2d = require("../../utils/live2d.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    var baseUrl = "";
    var canvasScale = 2.2, modelScale = 1, modelX = 0, modelY = 0.1, oldModelX = 0, oldModelY = 0, motionIdle = null, motionClick = null;
    var motionMgr = null;
    var moveSpeedP = 700;
    var moveSpeedM = 500;
    var live2DModel = null;
    var loadLive2DCompleted = false;
    var initLive2DCompleted = false;
    var modelJson = "";
    var canvas = null;
    var loadedImages = [];
    const modelName = common_vendor.ref("");
    const loadingStatus = common_vendor.ref(false);
    const showInsideBg = common_vendor.ref(false);
    const backgroundConfig = common_vendor.reactive({
      type: "",
      icon: "",
      size: ""
    });
    common_vendor.onLoad((opt) => {
      modelName.value = opt.code;
    });
    common_vendor.onMounted(() => {
      let canvasContainer = document.querySelector(".canvas-container");
      canvas = document.createElement("canvas");
      canvas.id = "canvas1";
      canvasContainer.appendChild(canvas);
      if (!parent.$hideLoading) {
        loadingStatus.value = true;
      }
      if (backgroundConfig.type && backgroundConfig.icon && backgroundConfig.size) {
        showInsideBg.value = true;
      }
      let initPanzoom = common_vendor.index.getStorageSync(`${modelName.value.split("_")[0]}_panzoom`);
      if (initPanzoom) {
        initPanzoom = JSON.parse(initPanzoom);
      } else {
        initPanzoom = {};
      }
      const { x = 0, y = 0 } = initPanzoom;
      let scale = 1;
      if (initPanzoom.scale) {
        scale = initPanzoom.scale;
      } else {
        scale = 0.7;
      }
      initModel(modelName.value, scale, x, y);
      addEvent();
      document.addEventListener("keydown", function(e) {
        if (e.keyCode == 27) {
          if (parent.$closeIframe) {
            parent.$closeIframe();
          }
        }
      });
    });
    function initModel(code = "", scale = 1, x = 0, y = 0) {
      if (code) {
        const windowInfo = common_vendor.index.getWindowInfo();
        const clientWidth = windowInfo.windowWidth;
        const clientHeight = windowInfo.windowHeight;
        const bodySize = clientHeight > clientWidth ? clientWidth : clientHeight;
        canvas.width = bodySize * canvasScale;
        canvas.height = bodySize * canvasScale;
        canvas.style.left = -(canvas.width - clientWidth) / 2 + "px";
        canvas.style.top = -(canvas.height - clientHeight) / 2 + "px";
        modelScale = scale;
        modelX = x;
        modelY = y;
        oldModelX = x;
        oldModelY = y;
        loadBytes(getPath(baseUrl + "/resource/destiny-child/static/", "MOC." + code + ".json"), "text", function(buf) {
          try {
            modelJson = JSON.parse(buf);
            initLive2d(baseUrl + "/resource/destiny-child/static/");
          } catch (e) {
            modelJson = buf;
            initLive2d(baseUrl + "/resource/destiny-child/static/");
          }
        });
      }
    }
    function initLive2d(dir) {
      utils_live2d.Live2D.init();
      init(dir, canvas);
    }
    function getDistance(event) {
      var x = event.touches[0].clientX - event.touches[1].clientX;
      var y = event.touches[0].clientY - event.touches[1].clientY;
      return Math.sqrt(x * x + y * y);
    }
    function animation() {
      if (motionMgr !== null && motionClick !== null) {
        motionMgr.startMotion(motionClick);
      }
    }
    const startAction = () => {
      animation();
    };
    function addEvent() {
      var startX = 0;
      var startY = 0;
      var preDistance = 0;
      var scaleLock = false;
      var moveLock = false;
      canvas.addEventListener("touchstart", function(event) {
        if (event.touches.length === 2) {
          event.preventDefault();
          preDistance = getDistance(event);
          scaleLock = true;
          moveLock = false;
        } else if (event.touches.length === 1) {
          startX = event.touches[0].clientX;
          startY = event.touches[0].clientY;
          scaleLock = false;
          moveLock = true;
        } else {
          scaleLock = false;
          moveLock = false;
        }
      });
      canvas.addEventListener("touchmove", function(event) {
        if (event.touches.length === 2 && !moveLock && scaleLock) {
          event.preventDefault();
          var currentDistance = getDistance(event);
          if (currentDistance > preDistance) {
            if (modelScale < 3) {
              modelScale += 0.05;
            }
          } else {
            if (modelScale > 0.2) {
              modelScale -= 0.05;
            }
          }
          preDistance = currentDistance;
        }
        if (event.touches.length === 1 && moveLock && !scaleLock) {
          var currentX = event.touches[0].clientX;
          var currentY = event.touches[0].clientY;
          var offsetX = currentX - startX;
          var offsetY = currentY - startY;
          modelX = oldModelX + offsetX / moveSpeedM;
          modelY = oldModelY - offsetY / moveSpeedM;
        }
      });
      canvas.addEventListener("touchend", function(event) {
        oldModelX = modelX;
        oldModelY = modelY;
        saveInitParams();
      });
      document.onwheel = function(e) {
        if (e.target != canvas)
          return;
        if (e.wheelDelta > 0) {
          if (modelScale < 3) {
            modelScale += 0.05;
            setInitParamsDebounce();
          }
        } else {
          if (modelScale > 0.2) {
            modelScale -= 0.05;
            setInitParamsDebounce();
          }
        }
      };
      document.addEventListener("mousedown", function(e) {
        var startX2 = e.clientX;
        var startY2 = e.clientY;
        const mousemove = (e2) => {
          var offsetX = e2.clientX - startX2;
          var offsetY = e2.clientY - startY2;
          modelX = oldModelX + offsetX / moveSpeedP;
          modelY = oldModelY - offsetY / moveSpeedP;
        };
        const mouseup = () => {
          document.removeEventListener("mousemove", mousemove);
          document.removeEventListener("mouseup", mouseup);
          oldModelX = modelX;
          oldModelY = modelY;
          saveInitParams();
        };
        document.addEventListener("mousemove", mousemove);
        document.addEventListener("mouseup", mouseup);
      });
    }
    function init(dir, canvas2) {
      var gl = getWebGLContext(canvas2);
      if (!gl) {
        console.error("Failed to create WebGl context!");
        return;
      }
      utils_live2d.Live2D.setGL(gl);
      loadBytes(getPath(dir, modelJson.model), "arraybuffer", function(buf) {
        live2DModel = utils_live2d.Live2DModelWebGL.loadModel(buf);
        if (loadLive2DCompleted) {
          if (parent.$hideLoading) {
            parent.$hideLoading();
          } else {
            loadingStatus.value = false;
          }
        }
      });
      var loadedCount = 0;
      for (var i = 0; i < modelJson.textures.length; i++) {
        loadedImages[i] = new Image();
        loadedImages[i].src = getPath(dir, modelJson.textures[i]);
        loadedImages[i].onload = function() {
          loadedCount++;
          if (loadedCount == modelJson.textures.length) {
            loadLive2DCompleted = true;
            if (live2DModel) {
              if (parent.$hideLoading) {
                parent.$hideLoading();
              } else {
                loadingStatus.value = false;
              }
            }
          }
        };
        loadedImages[i].onerror = function() {
          console.error("Failed to load texture: " + modelJson.textures[i]);
        };
      }
      motionMgr = new utils_live2d.L2DMotionManager();
      loadBytes(getPath(dir, modelJson.motions.idle[0].file), "arraybuffer", function(buf) {
        motionIdle = new utils_live2d.Live2DMotion.loadMotion(buf);
        motionIdle._$eo = 0;
        motionIdle._$dP = 0;
      });
      if (modelJson.motions.attack) {
        loadBytes(getPath(dir, modelJson.motions.attack[0].file), "arraybuffer", function(buf) {
          motionClick = new utils_live2d.Live2DMotion.loadMotion(buf);
          motionClick._$eo = 0;
          motionClick._$dP = 0;
        });
      } else if (modelJson.motions.maxtouch) {
        loadBytes(getPath(dir, modelJson.motions.maxtouch[0].file), "arraybuffer", function(buf) {
          motionClick = new utils_live2d.Live2DMotion.loadMotion(buf);
          motionClick._$eo = 0;
          motionClick._$dP = 0;
        });
      }
      (function tick() {
        draw(gl);
        var requestAnimationFrame = canvas2.requestAnimationFrame || window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        requestAnimationFrame(tick);
      })();
    }
    function draw(gl) {
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      if (!live2DModel || !loadLive2DCompleted)
        return;
      if (!initLive2DCompleted) {
        initLive2DCompleted = true;
        for (var i = 0; i < loadedImages.length; i++) {
          var texture = getWebGLTexture(gl, loadedImages[i]);
          live2DModel.setTexture(i, texture);
        }
        loadedImages = [];
        live2DModel.setGL(gl);
      }
      var height = live2DModel.getCanvasHeight();
      var width = live2DModel.getCanvasWidth();
      var modelMatrix = new utils_live2d.L2DModelMatrix(width, height);
      modelMatrix.setWidth(modelScale);
      modelMatrix.setCenterPosition(modelX, modelY);
      live2DModel.setMatrix(modelMatrix.getArray());
      if (motionMgr.isFinished()) {
        motionMgr.startMotion(motionIdle);
      }
      motionMgr.updateParam(live2DModel);
      live2DModel.update();
      live2DModel.draw();
    }
    async function loadBytes(path, mime, callback) {
      const res = await utils_request.axios.request({
        url: path,
        responseType: mime
      });
      if (res.statusCode === 200) {
        callback(res.data);
      } else {
        console.error("Failed to load (" + request.status + ") : " + path);
      }
    }
    function getPath(pathDir, file) {
      return pathDir + modelName.value + "/" + file;
    }
    function getWebGLContext(canvas2) {
      var kits = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
      var param = {
        alpha: true,
        premultipliedAlpha: true
        // preserveDrawingBuffer: true,
      };
      for (var i = 0; i < kits.length; i++) {
        try {
          var ctx = canvas2.getContext(kits[i], param);
          if (ctx)
            return ctx;
        } catch (e) {
          console.log(e);
        }
      }
      return null;
    }
    function getWebGLTexture(gl, img) {
      var texture = gl.createTexture();
      if (live2DModel.isPremultipliedAlpha() == false) {
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
      }
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
      gl.generateMipmap(gl.TEXTURE_2D);
      gl.bindTexture(gl.TEXTURE_2D, null);
      return texture;
    }
    const setInitParamsDebounce = utils_index.debounce(() => {
      saveInitParams();
    }, 300, false);
    const saveInitParams = () => {
      common_vendor.index.setStorageSync(`${modelName.value.split("_")[0]}_panzoom`, JSON.stringify({
        x: modelX,
        y: modelY,
        scale: modelScale
      }));
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(startAction),
        b: showInsideBg.value
      }, showInsideBg.value ? {
        c: common_vendor.n(backgroundConfig.type === "repeat" ? `canvas-bg-${backgroundConfig.size}` : `canvas-bg-${backgroundConfig.type}`),
        d: `url('//mobbbb.top/resource/destiny-child/images/background/${backgroundConfig.icon}')`,
        e: backgroundConfig.type === "color" ? backgroundConfig.icon : "#444c56"
      } : {}, {
        f: loadingStatus.value
      }, loadingStatus.value ? {} : {});
    };
  }
};
wx.createPage(_sfc_main);
