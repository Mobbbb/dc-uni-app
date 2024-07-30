<template>
	<view class="app-main" :style="banScrolling ? { overflowY: 'hidden' } : {}">
        <ContentWrap v-if="footerType === '0'" :appendBlock="appendBlock">
            <template v-slot:header>
				<uni-segmented-control :current="activeStar" :values="items1" styleType="text" activeColor="#f3b219" @clickItem="setActiveStar"></uni-segmented-control>
				<uni-segmented-control :current="activeTab" :values="items2" styleType="text" activeColor="#f3b219" @clickItem="setActiveTab"></uni-segmented-control>
				<uni-segmented-control :current="activeType" :values="items3" styleType="text" activeColor="#f3b219" @clickItem="setActiveType"></uni-segmented-control>
            </template>
			<view style="height: 12px;width: 100%;"></view>
			<view v-if="ACTIVE_CHILDS_CODE_LIST === null" class="no-data-text">数据量过多，请先筛选！</view>
			<view v-else-if="!ACTIVE_CHILDS_CODE_LIST.length" class="no-data-text">暂无资源！</view>
			<Avatar v-for="(item, index) in ACTIVE_CHILDS_CODE_LIST" @on-click="selectItem(item)"
				:key="item.id"
				:name="item.name"
				:imgClass="OTHERS_ICON_SRC[item.id] ? 'others-img' : ''"
				:imgSrc="`https://www.mobbbb.top/resource/destiny-child/static/${item.id}_01/icon.png`"
				:isCached="0">
			</Avatar>
        </ContentWrap>
	</view>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { CHILDS_CODE_MAP } from '@/config/data/childs.js'
import { OTHERS_ICON_SRC } from '@/config/othersIcon.js'
import { getAppendBlock, getCacheList, dateFormat } from '@/utils/index.js'
import Avatar from '@/components/avatar.vue'
import ContentWrap from '@/components/content-wrap.vue'

const banScrolling = ref(false)

const footerType = ref('0')

const activeStar = ref(0)
const activeTab = ref(0)
const activeType = ref(0)

const items1 = ['5星', '4星', '3星', '2星', '1星', '其他']
const itemsValue1 = ['5', '4', '3', '2', '1', 'UNKNOWN']
const items2 = ['光属性', '暗属性', '火属性', '木属性', '水属性']
const itemsValue2 = ['L', 'D', 'F', 'G', 'W']
const items3 = ['防御型', '辅助型', '拘束型', '攻击型', '恢复型']
const itemsValue3 = ['F', 'S', 'J', 'G', 'H']

const itemWidth = 68
const margin = 8
const viewSize = 100
const windowInfo = uni.getWindowInfo()
const clientWidth = windowInfo.screenWidth
const appHeight = windowInfo.screenHeight
const appclientWidth = clientWidth * viewSize / 100
const lineMaxNum = Math.floor((clientWidth - margin) / (itemWidth + margin))

const ACTIVE_CHILDS_CODE_LIST = computed(() => {
	let arr = []
	Object.keys(CHILDS_CODE_MAP).forEach(item => {
		const attr = CHILDS_CODE_MAP[item].attribute || 'UNKNOWN'
		const star = CHILDS_CODE_MAP[item].star || 'UNKNOWN'
		const type = CHILDS_CODE_MAP[item].type || 'UNKNOWN'

		if (itemsValue1[activeStar.value] === 'UNKNOWN') {
			if (attr === 'UNKNOWN' || star === 'UNKNOWN') {
				arr.push(CHILDS_CODE_MAP[item])
			}
		} else if (itemsValue2[activeTab.value] === attr && itemsValue1[activeStar.value] === star && itemsValue3[activeType.value] === type) {
			arr.push(CHILDS_CODE_MAP[item])
		}
	})
	return arr
})

const appendBlock = computed(() => {
	if (footerType.value === '0') { // childs
		const length = ACTIVE_CHILDS_CODE_LIST.value && ACTIVE_CHILDS_CODE_LIST.value.length || 0
		return getAppendBlock(length, lineMaxNum)
	} else if (footerType === '1') { // dolls
		// const length = ACTIVE_DOLLS_CODE_LIST.value && ACTIVE_DOLLS_CODE_LIST.value.length || 0
		// return getAppendBlock(length, lineMaxNum)
	} else if (footerType.value === '2') { // cartas
		// return getAppendBlock(Object.keys(CARTAS_CODE_MAP).length, lineMaxNum)
	} else if (footerType.value === '3') { // slims
		// return getAppendBlock(Object.keys(SLIMS_CODE_MAP).length, lineMaxNum)
	} else { // others
		// return getAppendBlock(Object.keys(OTHERS_CODE_MAP).length, lineMaxNum)
	}
})

const selectedChildId = ref('')
const selectedVariantId = ref('')
const selectItem = (item) => {
	let selectedChildConfig = item
	selectedChildId.value = selectedChildConfig.id

	let recentSelectedVariantId = uni.getStorageSync(`DC_${selectedChildId.value}_VID`)
	recentSelectedVariantId = recentSelectedVariantId === 's' ? '' : recentSelectedVariantId

	if (recentSelectedVariantId) {
		selectedVariantId.value = recentSelectedVariantId
	} else {
		selectedVariantId.value = selectedChildConfig.variants['01']
			? '01'
			: Object.keys(selectedChildConfig.variants)[0]
	}
	nextTick(() => {
		updateViewsHandle()
	})
}

const updateViewsHandle = () => {
	if (selectedVariantId.value.indexOf('_') > -1) {
		updateViews(selectedVariantId.value)
	} else {
		updateViews(`${selectedChildId.value}_${selectedVariantId.value}`)
	}
}

const updateViews = (code) => {
	uni.navigateTo({
		url: '/pages/canvas/index?code=' + code,
	})
}

const setActiveStar = (e) => {
	if (activeStar.value != e.currentIndex) {
		activeStar.value = e.currentIndex
	}
}

const setActiveTab = (e) => {
	if (activeTab.value != e.currentIndex) {
		activeTab.value = e.currentIndex
	}
}

const setActiveType = (e) => {
	if (activeType.value != e.currentIndex) {
		activeType.value = e.currentIndex
	}
}

</script>
