// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import _ from 'lodash'

import './http'
import config from './config'
import inflection from 'inflection'
import form from './form'

import Snotify from 'vue-snotify'
import 'font-awesome/css/font-awesome.min.css'
import 'simple-line-icons/css/simple-line-icons.css'
import './scss/style.scss'

import "vue-snotify/styles/material.css"

import storage from './storage'
import routes from './routes'

const optionsDefaults = {
    
};
const restAdminPlugin = {
    install (Vue, opts) {
        // Merge options argument into options defaults
        const options = { ...optionsDefaults, ...opts }

        Vue.prototype.$storage = storage
        Vue.prototype._ = _

        Vue.prototype.$config = config
        Vue.prototype.$inflection = inflection
        
        form(Vue);
        Vue.use(Snotify)
    },
    routes: routes
};

export default restAdminPlugin;