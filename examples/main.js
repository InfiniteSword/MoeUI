import '../src/styles/index.scss';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import MoeUI from '../src/index';
import * as Pages from './pages';

Vue.use(VueRouter);
Vue.use(MoeUI);

Vue.config.debug = true;

let pages = Pages.default;

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: pages.start
        }, {
            path: '/button',
            component: pages.button
        }, {
            path: '/grid',
            component: pages.grid
        }, {
            path: '/color',
            component: pages.color
        }, {
            path: '/input',
            component: pages.input
        }, {
            path: '/radio',
            component: pages.radio
        }
    ]
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
