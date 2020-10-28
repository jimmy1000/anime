import httpClient from '@/tools/request.js'
import config from '@/tools/config.js'

const api = {
	getVs(methed,url,token=false) {
		return httpClient.request(methed,config.data.anime + url,token);
	},
	reg(){
		return httpClient.request('post',config.data.reg);
	}
}
export default api