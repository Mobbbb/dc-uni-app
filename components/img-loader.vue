<template>
    <image :id="`ImgLoader${item}`" :src="'https://www.mobbbb.top/resource/destiny-child/static/' + modelName + '/' + item" @load="imageOnLoad($event, item, index)" v-for="(item, index) in imgList" />
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps(['imgList', 'modelName'])

const emit = defineEmits(['on-load'])

const imageOnLoad = (e, name, index) => {

	uni.getImageInfo({
		src: 'https://www.mobbbb.top/resource/destiny-child/static/' + props.modelName + '/' + name,
		success: function (image) {
			console.log(image)
		}
	})
	emit('on-load', {
		target: e.target,
		name,
		index,
	})
}
</script>

<style>
.cache-icon {
    width: 6px;
    height: 6px;
    background: red;
    position: absolute;
    right: 6px;
    top: 6px;
    border-radius: 50%;
}
</style>
