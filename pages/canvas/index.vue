<template>
	<view>
		<!-- <canvas canvas-id="canvas1" id="canvas1" @click="animation" type="webgl" style="z-index: 10;"></canvas> -->
		<view class="canvas-container" @click="startAction"></view>
		<view class="canvas-bg" v-if="showInsideBg"
			:class="backgroundConfig.type === 'repeat' ? `canvas-bg-${backgroundConfig.size}` : `canvas-bg-${backgroundConfig.type}`"
			:style="{
				'background-image': `url('//mobbbb.top/resource/destiny-child/images/background/${backgroundConfig.icon}')`,
				'background-color': backgroundConfig.type === 'color' ? backgroundConfig.icon : '#444c56',
			}">
		</view>
		<view class="loading" v-if="loadingStatus">
			<img src="//mobbbb.top/resource/destiny-child/images/icon/loading.webp">
		</view>
	</view>
</template>

<script setup>
import { onMounted, reactive, ref, getCurrentInstance } from 'vue'
import { debounce } from '@/utils/index.js'
import { axios } from '@/utils/request.js'
import { Live2D, Live2DModelWebGL, Live2DMotion, L2DMotionManager, L2DModelMatrix } from '@/utils/live2d.js'
import { onLoad } from '@dcloudio/uni-app'
import config from '@/config'

var baseUrl = ''
// var baseUrl = 'https://www.mobbbb.top'

var canvasScale = 2.2, // 画布尺寸
	modelScale = 1, // 缩放
	modelX = 0, // x坐标
	modelY = 0.1, // y坐标
	oldModelX = 0, // x坐标
	oldModelY = 0, // y坐标
	motionIdle = null,
	motionClick = null
var motionMgr = null
var moveSpeedP = 700 // 越大人物移动越慢
var moveSpeedM = 500
var live2DModel = null
var requestID = null
var loadLive2DCompleted = false
var initLive2DCompleted = false
var modelJson = ''
var canvas = null
var loadedImages = []

const modelName = ref('') // 模型编号
const loadingStatus = ref(false)
const showInsideBg = ref(false)

const backgroundConfig = reactive({
	type: '',
	icon: '',
	size: '',
})
const instance = getCurrentInstance()

onLoad(opt => {
	modelName.value = opt.code
})

onMounted(() => {
	let canvasContainer = document.querySelector('.canvas-container')
	canvas = document.createElement('canvas')
	canvas.id = 'canvas1'
	canvasContainer.appendChild(canvas)

	if (!parent.$hideLoading) {
		loadingStatus.value = true
	}
// const query = uni.createSelectorQuery().in(instance)
// query.select('#canvas1').node().exec((res) => {
// canvas = res[0].node
	if (backgroundConfig.type && backgroundConfig.icon && backgroundConfig.size) {
		showInsideBg.value = true
	}
	
	let initPanzoom = uni.getStorageSync(`${modelName.value.split('_')[0]}_panzoom`)
	
	if (initPanzoom) {
		initPanzoom = JSON.parse(initPanzoom)
	} else {
		initPanzoom = {}
	}
	
	const { x = 0, y = 0 } = initPanzoom
	let scale = 1
	if (initPanzoom.scale) {
		scale = initPanzoom.scale
	} else if (config.isMobile) {
		scale = 0.7
	} else {
		scale = 0.5
	}

	initModel(modelName.value, scale, x, y)
// })

	addEvent()
    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 27) {
			if (parent.$closeIframe) {
				parent.$closeIframe()
			}
        }
    })
})

function initModel(code = '', scale = 1, x = 0, y = 0) {
	if (code) {
		const windowInfo = uni.getWindowInfo()
        const clientWidth = windowInfo.windowWidth
        const clientHeight = windowInfo.windowHeight
		const bodySize = clientHeight > clientWidth ? clientWidth : clientHeight
		canvas.width = bodySize * canvasScale
		canvas.height = bodySize * canvasScale
		canvas.style.left = - (canvas.width - clientWidth) / 2 + 'px'
		canvas.style.top = - (canvas.height - clientHeight) / 2 + 'px'
		modelScale = scale
		modelX = x
		modelY = y
		oldModelX = x
		oldModelY = y

		loadBytes(getPath(baseUrl + '/resource/destiny-child/static/', 'MOC.' + code + '.json'), 'text', function(buf) {
			try {
				modelJson = JSON.parse(buf)
				initLive2d(baseUrl + '/resource/destiny-child/static/')
			} catch(e) {
				modelJson = buf
				initLive2d(baseUrl + '/resource/destiny-child/static/')
			}
		})
	}
}

function initLive2d(dir) {
	Live2D.init()
	init(dir, canvas)
}

function getDistance(event) {
	var x = event.touches[0].clientX - event.touches[1].clientX
	var y = event.touches[0].clientY - event.touches[1].clientY
	return Math.sqrt(x * x + y * y)
}

function animation() {
    if (motionMgr !== null && motionClick !== null) {
        motionMgr.startMotion(motionClick)
    }
}

const startAction = () => {
	animation()
}

function addEvent() {
		var startX = 0
		var startY = 0
		var preDistance = 0
		var scaleLock = false
		var moveLock = false
		canvas.addEventListener('touchstart', function(event) {
			if (event.touches.length === 2) {
				event.preventDefault()
				preDistance = getDistance(event)
				scaleLock = true
				moveLock = false
			} else if (event.touches.length === 1) {
			 	startX = event.touches[0].clientX
			 	startY = event.touches[0].clientY
				scaleLock = false
				moveLock = true
			} else {
				scaleLock = false
				moveLock = false
			}
		})

		canvas.addEventListener('touchmove', function(event) {
			if (event.touches.length === 2 && !moveLock && scaleLock) {
				event.preventDefault()
				var currentDistance = getDistance(event)
				if (currentDistance > preDistance) {
					if (modelScale < 3) {
						modelScale += 0.05
					}
				} else {
					if (modelScale > 0.2) {
						modelScale -= 0.05
					}
				}
				preDistance = currentDistance
			}
			if (event.touches.length === 1 && moveLock && !scaleLock) {
				var currentX = event.touches[0].clientX
				var currentY = event.touches[0].clientY
				var offsetX = currentX - startX
				var offsetY = currentY - startY
				modelX = oldModelX + offsetX / moveSpeedM
				modelY = oldModelY - offsetY / moveSpeedM
			}
		})

		canvas.addEventListener('touchend', function(event) {
			oldModelX = modelX
			oldModelY = modelY
			saveInitParams()
		})

		document.onwheel = function(e) {
			if (e.target != canvas) return
			if (e.wheelDelta > 0) {
				if (modelScale < 3) {
					modelScale += 0.05
					setInitParamsDebounce()
				}
			} else {
				if (modelScale > 0.2) {
					modelScale -= 0.05
					setInitParamsDebounce()
				}
			}
		}
		document.addEventListener('mousedown', function(e) {
			var startX = e.clientX
			var startY = e.clientY

			const mousemove = (e) => {
				var offsetX = e.clientX - startX
				var offsetY = e.clientY - startY
				modelX = oldModelX + offsetX / moveSpeedP
				modelY = oldModelY - offsetY / moveSpeedP
			}
	
			const mouseup = () => {
				document.removeEventListener('mousemove', mousemove)
				document.removeEventListener('mouseup', mouseup)
				oldModelX = modelX
				oldModelY = modelY
				saveInitParams()
			}
	
			document.addEventListener('mousemove', mousemove)
			document.addEventListener('mouseup', mouseup)
		})
}

function init(dir, canvas) {
	// try getting WebGl context
	var gl = getWebGLContext(canvas)
	if (!gl) {
		console.error('Failed to create WebGl context!')
		return
	}
	// pass WebGl context to Live2D lib
	Live2D.setGL(gl)

	// ------------------------
	// start of model rendering
	// ------------------------
	loadBytes(getPath(dir, modelJson.model), 'arraybuffer', function (buf) {
		live2DModel = Live2DModelWebGL.loadModel(buf)
        if (loadLive2DCompleted) {
			if (parent.$hideLoading) {
				parent.$hideLoading()
			} else {
				loadingStatus.value = false
			}
        }
	})

	// ------------------------
	// start loading textures
	// ------------------------
	var loadedCount = 0
	for (var i = 0; i < modelJson.textures.length; i++) {
		// create new image

		loadedImages[i] = new Image()
		loadedImages[i].src = getPath(dir, modelJson.textures[i])
		loadedImages[i].onload = function () {
			// check if all textures are loaded
			loadedCount++
			if (loadedCount == modelJson.textures.length) {
				loadLive2DCompleted = true
				if (live2DModel) {
                    if (parent.$hideLoading) {
						parent.$hideLoading()
					} else {
						loadingStatus.value = false
					}
                }
			}
		}
		loadedImages[i].onerror = function () {
			console.error('Failed to load texture: ' + modelJson.textures[i])
		}
		
		// loadedImages[i] = canvas.createImage()
		// loadedImages[i].src = getPath(dir, modelJson.textures[i])
		// loadedImages[i].onload = (res) => {
		// 	// check if all textures are loaded
		// 	loadedCount++
		// 	if (loadedCount == modelJson.textures.length) {
		// 		loadLive2DCompleted = true
		// 		if (live2DModel) {
		// 	        if (parent.$hideLoading) {
		// 				parent.$hideLoading()
		// 			} else {
		// 				loadingStatus.value = false
		// 			}
		// 	    }
		// 	}
		// }
		
		// var testData = new Uint8Array(16*4);
		// for (var testI = 0; testI < 16; ++testI) {
		// 	testData[testI*4] = 255;
		// 	testData[testI*4+1] = 255;
		// 	testData[testI*4+2] = 255;
		// 	testData[testI*4+3] = 255;
		// }
		
		// loadedImages[0] = testData
	}

	// ------------------------
	// start loading motions
	// ------------------------
	motionMgr = new L2DMotionManager()
	loadBytes(getPath(dir, modelJson.motions.idle[0].file), 'arraybuffer', function (buf) {
		motionIdle = new Live2DMotion.loadMotion(buf)
		// remove fade in/out delay to make it smooth
		motionIdle._$eo = 0
		motionIdle._$dP = 0
	})
	if (modelJson.motions.attack) {
		loadBytes(getPath(dir, modelJson.motions.attack[0].file), 'arraybuffer', function (buf) {
			motionClick = new Live2DMotion.loadMotion(buf)
			// remove fade in/out delay to make it smooth
			motionClick._$eo = 0
			motionClick._$dP = 0
		})
	} else if (modelJson.motions.maxtouch) {
		loadBytes(getPath(dir, modelJson.motions.maxtouch[0].file), 'arraybuffer', function (buf) {
			motionClick = new Live2DMotion.loadMotion(buf)
			// remove fade in/out delay to make it smooth
			motionClick._$eo = 0
			motionClick._$dP = 0
		})
	}
	// ------------------------
	// ?loop every frame
	// ------------------------
	let _index_ = 1
	;(function tick() {
		// if (live2DModel) {
		// 	_index_ ++; if (_index_ > 15) return
		// }
		draw(gl)
		var requestAnimationFrame =
			canvas.requestAnimationFrame ||
			window.requestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.msRequestAnimationFrame

		requestID = requestAnimationFrame(tick)
	})()
}


function draw(gl) {
	// clear canvas
	gl.clearColor(0.0, 0.0, 0.0, 0.0)
	gl.clear(gl.COLOR_BUFFER_BIT)

	// check if model and textures are loaded
	if (!live2DModel || !loadLive2DCompleted) return
	// check if first time drawign
	if (!initLive2DCompleted) {
		initLive2DCompleted = true

		// apply textures to the model
		for (var i = 0; i < loadedImages.length; i++) {
			var texture = getWebGLTexture(gl, loadedImages[i])
			live2DModel.setTexture(i, texture)
		}

		// reduce resources usage
		loadedImages = []

		// pass WebGl to model
		live2DModel.setGL(gl)
	}

	// something about model matrix
	var height = live2DModel.getCanvasHeight()
	var width = live2DModel.getCanvasWidth()
	var modelMatrix = new L2DModelMatrix(width, height)

	modelMatrix.setWidth(modelScale)
	modelMatrix.setCenterPosition(modelX, modelY)

	live2DModel.setMatrix(modelMatrix.getArray())
	// start idle animation
	if (motionMgr.isFinished()) {
		motionMgr.startMotion(motionIdle)
	}
	motionMgr.updateParam(live2DModel)

	// update and draw model
	live2DModel.update()
	live2DModel.draw()
}

// common helpers
async function loadBytes(path, mime, callback) {
	const res = await axios.request({
		url: path,
		responseType: mime,
	})
	if (res.statusCode === 200) {
		callback(res.data)
	} else {
		console.error('Failed to load (' + request.status + ') : ' + path)
	}
}

function getPath(pathDir, file) {
	return pathDir + modelName.value + '/' + file
}

// WebGL helpers
function getWebGLContext(canvas) {
	// try different WebGl kits
	var kits = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl']
	var param = {
		alpha: true,
		premultipliedAlpha: true,
		// preserveDrawingBuffer: true,
	}
	for (var i = 0; i < kits.length; i++) {
		try {
			var ctx = canvas.getContext(kits[i], param)
			if (ctx) return ctx
		} catch (e) { 
			console.log(e)
		}
	}
	return null
}

function getWebGLTexture(gl, img) {
	// create empty texture
	var texture = gl.createTexture()

	// a lot of WebGL things i dont understand
	if (live2DModel.isPremultipliedAlpha() == false) {
		gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1)
	}
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1)
	gl.activeTexture(gl.TEXTURE0)
	gl.bindTexture(gl.TEXTURE_2D, texture)
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img)
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST)
	gl.generateMipmap(gl.TEXTURE_2D)
	gl.bindTexture(gl.TEXTURE_2D, null)

	return texture
}

const setInitParamsDebounce = debounce(() => {
	saveInitParams()
}, 300, false)

const saveInitParams = () => {
	uni.setStorageSync(`${modelName.value.split('_')[0]}_panzoom`, JSON.stringify({
		x: modelX,
		y: modelY,
		scale: modelScale,
	}))
}
</script>
