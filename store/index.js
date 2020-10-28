import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)
const store = new Vuex.Store({
	//持久化框架
	plugins: [
		createPersistedState({
			storage: {
				getItem: key => uni.getStorageSync(key),
				setItem: (key, value) => uni.setStorageSync(key, value),
				removeItem: key => uni.removeStorageSync(key)
			},
		}),
	],
    state: {
		count: 0,
		set_window_height:"",
		token:"",
		username:"",
		invite_code:"",
		ava_img:""
	},
    mutations: {
		set_window_height(state,msg){
			state.set_window_height = msg
		},
		set_user(state,msg){
			state.token =msg.token
			state.username = msg.user_name
			state.invite_code = msg.invite_code
		},
		set_ava_img(state,msg){
			state.ava_img = msg
		}
	},
    actions: {},
})
export default store