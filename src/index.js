// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import _ from 'lodash'

import './http'
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
    "models": [
        {
          "name": "Agent",
          "url": "admin/agents",
          "icon": "fa fa-home"
        },
        {
          "name": "Skill",
          "url": "admin/skills",
          "icon": "fa fa-list"
        },
        {
          "name": "Intent",
          "url": "admin/intent",
          "icon": "fa fa-cogs"
        },
        {
          "name": "samples",
          "url": "admin/samples",
          "icon": "fa fa-lock"
        },
        {
            "name": "Entity",
            "url": "admin/entities",
            "icon": "fa fa-lock"
        }
    ],
    primaryKey: process.env.VUE_APP_PRIMARY_KEY || 'id',
    resource_prefix: "",
    grid_style: 1,
  
};
const restAdminPlugin = {
    install (Vue, opts) {
        // Merge options argument into options defaults
        const config = { ...optionsDefaults, ...opts }

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