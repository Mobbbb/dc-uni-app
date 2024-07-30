class HttpRequest {
	constructor(baseUrl = '') {
		this.baseUrl = baseUrl
	}
	
	getInsideConfig() {
		const config = {
			baseURL: this.baseUrl,
		}
		return config
	}

	request(options) {
		options = Object.assign(this.getInsideConfig(), options)
		return new Promise(resolve => {
			const requestTask = uni.request({
				method: options.method || 'GET',
				url: options.url || '',
				data: options.data || {},
				header: options.header || {},
				responseType: options.responseType || 'text',
				success: (res) => {
					resolve(res)
				}
			})
		})
	}
}

export const axios = new HttpRequest()
