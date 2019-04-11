
import Switch from './components/Switch.vue'

import FormField from './components/FormField.vue'

import DataValue from './components/DataValue.vue'

import DataTable from './components/BDataTable.vue'

import FormBuilder from './components/FormBuilder.vue'

import TableBuilder from './components/TableBuilder.vue'

import AvatarCropper from "./components/AvatarCropper.vue"

import CustomComponet from './components/CustomComponent.vue'


export default function install(Vue) {
    Vue.component('b-switch', Switch)
    Vue.component('b-form-field', FormField)
    Vue.component('b-data-value', DataValue)
    Vue.component('b-data-table', DataTable)
    Vue.component('b-form-builder', FormBuilder)
    Vue.component('b-table-builder', TableBuilder)
    Vue.component('avatar-cropper', AvatarCropper)
    Vue.component('custom-component', CustomComponet)
};