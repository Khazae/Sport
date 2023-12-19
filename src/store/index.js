import Vue from 'vue';
import Vuex from 'vuex';
import auth from "./auth.js";
import user from "./user.js";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        auth,
        user,
    }
});

export default store;
