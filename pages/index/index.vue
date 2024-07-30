<template>
	<view class="container">
		
		<uni-table border stripe emptyText="暂无更多数据" >
			<!-- 表头行 -->
			<uni-tr>
				<uni-th align="center">日期</uni-th>
				<uni-th align="center">姓名</uni-th>
				<uni-th align="left">地址</uni-th>
			</uni-tr>
			<!-- 表格数据行 -->
			<uni-tr>
				<uni-td>2020-10-20</uni-td>
				<uni-td>Jeson</uni-td>
				<uni-td>北京市海淀区</uni-td>
			</uni-tr>
			<uni-tr>
				<uni-td>2020-10-21</uni-td>
				<uni-td>HanMeiMei</uni-td>
				<uni-td>北京市海淀区</uni-td>
			</uni-tr>
			<uni-tr>
				<uni-td>2020-10-22</uni-td>
				<uni-td>LiLei</uni-td>
				<uni-td>北京市海淀区</uni-td>
			</uni-tr>
			<uni-tr>
				<uni-td>2020-10-23</uni-td>
				<uni-td>Danner</uni-td>
				<uni-td>北京市海淀区</uni-td>
			</uni-tr>
		
		</uni-table>
		
		<text @click="clicktest">{{username}}</text>
	</view>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { axios } from '@/utils/request.js'
import store from '@/store/index.js'

const clicktest = () => {
	uni.navigateTo({
		url: '/pages/home/index',
	})
}

onMounted(() => {
	console.log(111)
	uni.getProvider({
		service: 'oauth',
		success: function (res) {
			console.log(res.provider)
			if (~res.provider.indexOf('weixin')) {
				uni.login({
					provider: 'weixin',
					success: async function (loginRes) {
						// 获取临时登录凭证
						console.log(loginRes.code);
						
						const res = await axios.request({
							url: `https://api.weixin.qq.com/sns/jscode2session?`,
							data: {
								appid: 'wx3c952c5a483fe03f',
								secret: '9423d1bc9a62af7676795d0b3b50b537',
								js_code: loginRes.code,
								grant_type: 'authorization_code',
							},
						})
						
						uni.getUserInfo({
							provider: 'weixin',
							success: function (infoRes) {
								console.log(infoRes.userInfo); // 打印用户信息
								console.log('用户昵称为: ' + infoRes.userInfo.nickName); // 打印用户昵称
								// 在这里，你可以将用户的头像和昵称保存到本地或者发送到后端进行处理
								// infoRes.userInfo.avatarUrl是用户的头像链接
								// infoRes.userInfo.nickName是用户的昵称
							}
						});
						console.log(res)
					}
				})
			}
		},
	})
	// uni.login({
	// 	  provider: 'weixin', //使用微信登录
	// 	  success: function (loginRes) {
	// 		console.log(loginRes.authResult);
	// 	  }
	// })
})

const username = computed(() => store.state.username)

async function test() {
	const a = await axios.request({
		url: '/api/future/other/futureConfigInfo',
	})
	console.log(a)
}

test()
</script>

<style scoped>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
