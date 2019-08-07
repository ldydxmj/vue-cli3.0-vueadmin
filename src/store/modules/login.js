
export default {
    namespaced: true,
    name: 'login',
    state: {
        token: '222'// token
    },
    getters: {},
    actions: {
        async FETCH_PERMISSION({ commit, amount }, { payload }) {
            try {
                commit({
                    type: 'setState',
                    payload: {
                        token: payload.data
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
    },
    mutations: {
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
    }

}
