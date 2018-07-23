import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home';
import type from './modules/type';
import productinfo from './modules/product-info'
import search from './modules/search'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        home,type,productinfo,search
    }
})