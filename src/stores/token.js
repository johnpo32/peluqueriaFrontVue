import { defineStore } from 'pinia'

export const useAuthStore = defineStore('storeId', {
    id: 'auth',
    state: () => ({
        token: '',
        user: '',
    }),
    getters: {
        getUser: (state) => state.user
    },
    actions: {
        addToken(token, user) {
            this.token = token
            this.user = user
        }
    }
})
