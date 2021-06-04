import { createStore } from "vuex"

const store = createStore({
    state: {
        user: '',
        errorLog: '',
    },

    mutations: {
        login(state, user) {
            state.user = user

        },
        auth_error(state, error) {
            state.errorLog = error
        },

    },

    actions:{
        login({ commit }, user) {
            axios.post('api/login', user.user).then(response => {
                commit('login', response.data)
                this.$router.push({ path: "/" });

            }).catch((error) => {
                commit('auth_error', error.response.data.errors.email[0])
            })
        },

    }
})

export default store
