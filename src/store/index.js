import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        get UserToken() {
            return localStorage.getItem('token')
        },
        set UserToken(value) {
            localStorage.setItem('token', value)
        },
        /* 导航菜单是否折叠 */
        isSidebarNavCollapse: false,
        /* 面包屑导航列表 */
        crumbList: [],
        mockGlobalData: { name: '你好' }
    },
    getters: {},
    mutations: {

        LOGIN_IN(state, token) {
            state.UserToken = token
        },
        LOGIN_OUT(state) {
            state.UserToken = ''
        },
        toggleNavCollapse(state) {
            state.isSidebarNavCollapse = !state.isSidebarNavCollapse
        },
        setCrumbList(state, list) {
            state.crumbList = list
        },
        setState(state, { payload }) {
            state = {
                ...state,
                ...payload
            }
        },
        clearState(state, { payload }) {
            state = {
                ...payload
            }
        }

    },
    actions: {},
    modules
})
