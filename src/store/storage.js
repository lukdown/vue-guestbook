import { createStore } from 'vuex';
export default createStore({
    state() {
        return {
            //apiBaseUrl: "http://localhost:9000"
            apiBaseUrl: "http://52.78.33.215:9000"

            //this.$store.state.apiBaseUrl
        };
    },
    mutations: {
    },
    plugins: [
    ]
});