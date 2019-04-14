module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonprest_admin"] = (typeof self !== 'undefined' ? self : this)["webpackJsonprest_admin"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([null,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "0515":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0958":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13fa2dae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FormUploader.vue?vue&type=template&id=42f3d403&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"preview"},[(_vm.field.multiple)?_c('div',{staticClass:"thumbnail"},[_c('b-draggable',{staticClass:"row",on:{"input":_vm.update},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},_vm._l((_vm.model),function(v,k){return _c('b-form-uploader-item',{key:k,staticClass:"col-4",attrs:{"name":_vm.name,"id":(_vm.id + "_" + k),"field":_vm.field,"parent":_vm.parent,"allow-add":""},on:{"input":_vm.update,"remove":function($event){_vm.model.splice(k, 1) ; _vm.update()},"add":function($event){_vm.model.splice(k + 1,0, null) ; _vm.update()}},model:{value:(_vm.model[k]),callback:function ($$v) {_vm.$set(_vm.model, k, $$v)},expression:"model[k]"}})}),1)],1):_c('div',[_c('div',{staticClass:"row"},[_c('b-form-uploader-item',{staticClass:"col-12",attrs:{"id":_vm.id,"name":_vm.name,"field":_vm.field,"parent":_vm.parent},on:{"open-file-browser":function($event){_vm.openFileBrowser(_vm.name)},"input":_vm.update,"remove":function($event){_vm.model = null; _vm.update()}},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}})],1)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FormUploader.vue?vue&type=template&id=42f3d403&

// EXTERNAL MODULE: ./node_modules/vuedraggable/dist/vuedraggable.js
var vuedraggable = __webpack_require__("1516");
var vuedraggable_default = /*#__PURE__*/__webpack_require__.n(vuedraggable);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13fa2dae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FormUploaderItem.vue?vue&type=template&id=984dde66&scoped=true&
var FormUploaderItemvue_type_template_id_984dde66_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-card',[_c('b-data-value',{staticClass:"text-center",attrs:{"field":_vm.field,"name":_vm.name,"model":_vm.parent}}),(_vm.field.limit && _vm.field.limit.width)?_c('div',{staticClass:"text-center text-muted mt-2"},[_vm._v(_vm._s(_vm.$t('messages.image_size', _vm.field.limit)))]):_vm._e(),_c('div',{staticClass:"text-center",attrs:{"slot":"footer"},slot:"footer"},[_c('b-form-file',_vm._b({ref:"file",staticClass:"d-none",attrs:{"id":_vm.fileName,"name":_vm.name,"multiple":false},on:{"input":_vm.upload},model:{value:(_vm.file),callback:function ($$v) {_vm.file=$$v},expression:"file"}},'b-form-file',_vm.field,false)),(_vm.field.showInput)?_c('b-form-input',{staticClass:"mb-2",attrs:{"value":String(_vm.file || '')},on:{"input":function($event){_vm.$emit('input', arguments[0])}}}):_vm._e(),(_vm.field.showBrowse)?_c('b-btn',{staticClass:"mr-2",attrs:{"size":"sm"},on:{"click":function($event){_vm.$emit('open-file-browser')}}},[_vm._v(_vm._s(_vm.$t('actions.file_browser')))]):_vm._e(),_c('label',{staticClass:"btn btn-primary m-0 mr-2 btn-sm",attrs:{"for":("file_" + _vm.id)}},[_vm._v(_vm._s(_vm.file ? _vm.$t('actions.change') : _vm.$t('actions.choose')))]),_c('b-btn',{staticClass:"mr-2",attrs:{"size":"sm"},on:{"click":function($event){_vm.$emit('remove')}}},[_vm._v(_vm._s(_vm.$t('actions.delete')))]),(_vm.allowAdd)?_c('b-btn',{staticClass:"mr-2",attrs:{"size":"sm"},on:{"click":function($event){_vm.$emit('add')}}},[_vm._v(_vm._s(_vm.$t('actions.add')))]):_vm._e(),(_vm.field.showCopy)?_c('b-btn',{ref:"copy_btn",staticClass:"mr-2",attrs:{"data-clipboard-text":_vm.value,"size":"sm"}},[_vm._v(_vm._s(_vm.$t('actions.copy')))]):_vm._e()],1)],1)],1)}
var FormUploaderItemvue_type_template_id_984dde66_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FormUploaderItem.vue?vue&type=template&id=984dde66&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("e814");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./src/components/DataValue.vue + 4 modules
var DataValue = __webpack_require__("8a2b");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FormUploaderItem.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import ClipboardJS from 'clipboard'


/* harmony default export */ var FormUploaderItemvue_type_script_lang_js_ = ({
  components: {
    BDataValue: DataValue["a" /* default */]
  },
  props: {
    value: {},
    field: {},
    id: {},
    parent: {},
    name: {},
    allowAdd: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      model: this.value,
      file: this.value,
      current: this.value,
      fileData: {}
    };
  },
  watch: {
    value: function value(val) {
      this.file = val;
    }
  },
  computed: {
    text: function text() {
      return String(this.value).split("/").pop();
    },
    modalName: function modalName() {
      return "modal_".concat(this.id);
    },
    fileName: function fileName() {
      return "file_".concat(this.id);
    },
    tag: function tag() {
      var tags = {
        image: "img",
        audio: "audio",
        video: "video"
      };
      return tags[this.field.type] ? tags[this.field.type] : "div";
    }
  },
  mounted: function mounted() {
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {// new ClipboardJS(this.$refs.copy_btn)
    });
  },
  methods: {
    reset: function reset(error) {
      if (error) {
        this.$snotify.error(error);
      }

      this.model = this.oldValue;
      return false;
    },
    upload: function upload() {
      var _this = this;

      if (!this.file) {
        return;
      }

      var fd = new FormData();
      fd.append("type", this.name);
      fd.append("file", this.file);
      this.fileData = this.file;
      var src = URL.createObjectURL(this.file);

      var doUpload = function doUpload() {
        _this.$http.post("upload", fd).then(function (_ref) {
          var data = _ref.data;
          _this.file = data.url;

          _this.$emit("input", _this.file);

          _this.$snotify.success(_this.$t("messages.uploaded"));
        });
      };

      var _ref2 = this.field.limit || {},
          width = _ref2.width,
          height = _ref2.height,
          size = _ref2.size;

      if (this.file.size > size) {
        return this.reset(this.$t("errors.too_large", {
          limit: parse_int_default()(size / 1024)
        }));
      }

      if (this.file.type.match(/^image/)) {
        var file = new Image();
        file.src = src;

        file.onload = function () {
          if (_this.field.limit) {
            if (file.naturalHeight != height || file.naturalWidth != width) {
              return _this.reset(_this.$t("errors.wrong_size", {
                width: width,
                height: height
              }));
            }
          }

          doUpload();
        };
      } else {
        doUpload();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/FormUploaderItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FormUploaderItemvue_type_script_lang_js_ = (FormUploaderItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/FormUploaderItem.vue?vue&type=style&index=0&id=984dde66&scoped=true&lang=css&
var FormUploaderItemvue_type_style_index_0_id_984dde66_scoped_true_lang_css_ = __webpack_require__("3edb");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/FormUploaderItem.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FormUploaderItemvue_type_script_lang_js_,
  FormUploaderItemvue_type_template_id_984dde66_scoped_true_render,
  FormUploaderItemvue_type_template_id_984dde66_scoped_true_staticRenderFns,
  false,
  null,
  "984dde66",
  null
  
)

component.options.__file = "FormUploaderItem.vue"
/* harmony default export */ var FormUploaderItem = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FormUploader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var FormUploadervue_type_script_lang_js_ = ({
  components: {
    BDraggable: vuedraggable_default.a,
    BFormUploaderItem: FormUploaderItem
  },
  props: {
    value: {},
    field: {},
    id: {},
    parent: {},
    name: {}
  },
  data: function data() {
    return {
      model: this.value || [],
      file: null,
      current: this.value
    };
  },
  watch: {
    value: function value(val) {
      this.model = val;
    }
  },
  computed: {
    tag: function tag() {
      return this.field.type == "image" ? "img" : this.field.type;
    }
  },
  methods: {
    openFileBrowser: function openFileBrowser(name) {//this.$store.commit(types.SHOW_FILE_BROWSER, { name });
    },
    update: function update() {
      this.$emit("input", this.model);
    }
  }
});
// CONCATENATED MODULE: ./src/components/FormUploader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FormUploadervue_type_script_lang_js_ = (FormUploadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/FormUploader.vue?vue&type=style&index=0&lang=css&
var FormUploadervue_type_style_index_0_lang_css_ = __webpack_require__("5411");

// CONCATENATED MODULE: ./src/components/FormUploader.vue






/* normalize component */

var FormUploader_component = Object(componentNormalizer["a" /* default */])(
  components_FormUploadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

FormUploader_component.options.__file = "FormUploader.vue"
/* harmony default export */ var FormUploader = __webpack_exports__["a"] = (FormUploader_component.exports);

/***/ }),

/***/ "1484":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("28a5");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cebc");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2f62");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  components: {},
  props: {},
  data: function data() {
    return {
      loaded: false,
      form: {}
    };
  },
  watch: {
    '$route': function $route() {
      this.fetchForm();
    }
  },
  computed: Object(_home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__[/* mapState */ "b"])(["auth"]), {
    uri: function uri() {
      return this.$route.params.uri.replace(/\./g, '/');
    }
  }),
  methods: {
    fetch: function fetch() {},
    fetchForm: function fetchForm() {
      var _this = this;

      this.$http.get(this.uri).then(function (_ref) {
        var data = _ref.data;
        _this.form = data;

        if (!_this.form.action) {
          _this.form.action = _this.uri;
        }

        if (!_this.form.title) {
          _this.form.title = _this.$inflection.titleize(String(_this.$route.query.uri).split('/').pop());
        } // this.fetch();

      });
    },
    onSuccess: function onSuccess(data) {
      var message = data.message,
          then = data.then,
          redirect = data.redirect;

      if (message) {
        this.$snotify.success(message);
      }

      if (then) {
        eval(then);
      } else if (redirect) {
        this.$router.push({
          path: redirect
        });
      } else {// this.$router.go(-1);
      }
    }
  },
  mounted: function mounted() {},
  created: function created() {
    this.fetchForm();
  }
});

/***/ }),

/***/ "18a9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarCropper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0515");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarCropper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarCropper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AvatarCropper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2382":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3edb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUploaderItem_vue_vue_type_style_index_0_id_984dde66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bab9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUploaderItem_vue_vue_type_style_index_0_id_984dde66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUploaderItem_vue_vue_type_style_index_0_id_984dde66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUploaderItem_vue_vue_type_style_index_0_id_984dde66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5411":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUploader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2382");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUploader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUploader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormUploader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5903":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5c24":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("768b");
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("f499");
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("55dd");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("bd86");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("28a5");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("7f7f");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cebc");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("2ef0");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _FormBuilder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("6a29");
/* harmony import */ var _DataValue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("8a2b");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("2f62");







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    BFormBuilder: _FormBuilder__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
    BDataValue: _DataValue__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]
  },
  props: {
    resource: {
      type: String,
      required: true
    },
    gridPath: {
      type: String,
      default: "grid",
      required: false
    }
  },
  data: function data() {
    return {
      iframeSrc: null,
      pause: true,
      //修复切换页面时page等参数的自动变更会导致多次fetch的问题
      page: 1,
      inputPage: 1,
      perPage: 6,
      sortBy: this.$config.primaryKey,
      sortDesc: true,
      description: "",
      fields: {},
      filter: {},
      choices: {},
      totalRows: 0,
      items: [],
      searchFields: {},
      searchModel: {},
      where: {},
      title: "",
      limitPages: 10
    };
  },
  computed: Object(_home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_10__[/* mapState */ "b"])(["site", "i18n"]), Object(vuex__WEBPACK_IMPORTED_MODULE_10__[/* mapGetters */ "a"])(["currentMenu", "currentLanguage"]), {
    actions: function actions() {
      return lodash__WEBPACK_IMPORTED_MODULE_7___default.a.get(this.fields, "_actions");
    },
    header: function header() {
      return "\n        ".concat(this.currentMenu.name || "", "\n        <small> ").concat(this.resource.toUpperCase(), " </small>\n      ");
    },
    with: function _with() {
      return lodash__WEBPACK_IMPORTED_MODULE_7___default.a.filter(lodash__WEBPACK_IMPORTED_MODULE_7___default.a.map(this.fields, function (v, k) {
        return v.ref && v.ref.split(".").slice(0, -1).join(".");
      }) //.concat(_.map(this.fields, (v, k) => (v.ref ? k : null)))
      );
    },
    searchUri: function searchUri() {
      return this.resource;
    },
    resourceUri: function resourceUri() {
      return [this.site.resource_prefix, this.resource].map(function (v) {
        return v.trim("/");
      }).filter(function (v) {
        return v;
      }).join("/");
    },
    gridUri: function gridUri() {
      return [this.site.resource_prefix, this.resource, this.gridPath].filter(function (v) {
        return v;
      }).join("/");
    },
    sort: {
      get: function get() {
        if (!this.sortBy) {
          return null;
        }

        return Object(_home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, this.sortBy, this.sortDesc ? -1 : 1);
      },
      set: function set(val) {
        for (var k in val) {
          this.sortBy = k;
          this.sortDesc = val === -1;
        }
      }
    },
    query: {
      get: function get() {
        return {
          sort: this.sort,
          page: this.page,
          perPage: this.perPage,
          with: this.with,
          where: this.where
        };
      },
      set: function set(val) {
        this.sort = val.sort;
        this.page = val.page;
        this.perPage = val.perPage;
        this.where = val.where;
      }
    }
  }),
  watch: {
    "site.fetched": function siteFetched(val) {
      if (val) {
        this.fetchGrid(true);
      }
    },
    "$route.params.resource": function $routeParamsResource() {
      this.inputPage = 1;
      this.pause = true;
      this.fetchGrid(true);
    },
    page: "fetch",
    sort: "fetch",
    where: "fetch",
    "$route.query.query": function $routeQueryQuery() {
      this.applyQuery();
      this.fetch();
    } // query(val) {
    //   this.$emit("change query", val);
    //   // this.$router.push({
    //   //   query: {
    //   //     query: JSON.stringify(val)
    //   //   }
    //   // });
    // }

  },
  methods: {
    goPage: function goPage() {
      var totalPages = Math.ceil(this.totalRows / this.limitPages);

      if (this.inputPage <= 0 || this.inputPage > totalPages) {
        this.$snotify.warning("请输入正确页码");
        this.inputPage = 1;
        this.page = 1;
        return;
      }

      this.page = this.inputPage;
    },
    previousPage: function previousPage() {
      // const totalPages = Math.ceil(this.totalRows/this.limitPages)
      if (this.inputPage > 1) {
        this.inputPage--;
        this.page = this.inputPage;
      } else {
        this.$snotify.warning("已是第一页");
        this.inputPage = 1;
        this.page = 1;
      }
    },
    nextPage: function nextPage() {
      var totalPages = Math.ceil(this.totalRows / this.limitPages);

      if (this.inputPage < totalPages) {
        this.inputPage++;
        this.page = this.inputPage;
      } else {
        this.$snotify.warning("后面没有了");
        this.inputPage = 1;
        this.page = 1;
      }
    },
    fetch: function fetch() {
      var _this = this;

      if (this.pause) {
        return;
      }

      this.pause = true;
      this.$http.get(this.resourceUri, {
        params: {
          query: _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(this.query)
        }
      }).then(function (_ref2) {
        var data = _ref2.data;
        var items = data.data,
            total = data.total,
            perPage = data.perPage,
            fields = data.fields,
            searchFields = data.searchFields,
            searchModel = data.searchModel;
        fields && (_this.fields = fields);
        searchFields && (_this.searchFields = searchFields);
        searchModel && (_this.searchModel = searchModel);
        _this.items = items;
        _this.description = data.description;
        _this.totalRows = total;
        _this.perPage = perPage;
        _this.pause = false;
      });
    },
    searchAndExport: function searchAndExport() {
      var _this2 = this;

      var query = _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
        where: lodash__WEBPACK_IMPORTED_MODULE_7___default.a.clone(this.searchModel),
        with: lodash__WEBPACK_IMPORTED_MODULE_7___default.a.clone(this.with)
      });

      this.iframeSrc = "";
      setTimeout(function () {
        _this2.iframeSrc = "".concat(global.API_URI).concat(_this2.resourceUri, "/export?query=").concat(query, "&token=").concat(_this2.$store.state.auth.token);
      }, 50);
    },
    fetchGrid: function fetchGrid() {
      var _this3 = this;

      var fetchData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // if (this.$store.state.site.use_field_apis === false) {
      //   this.pause = false;
      //   this.applyQuery();
      //   this.fetch();
      //   return
      // }
      this.query = {};
      this.$http.get(this.gridUri).then(function (_ref3) {
        var data = _ref3.data;
        _this3.fields = data.fields;

        if (!_this3.fields._actions && _this3.fields._actions !== false) {
          _this3.fields._actions = {};
        }

        if (_this3.fields._actions) {
          if (!_this3.fields._actions.label) {
            _this3.fields._actions.label = "";
          }
        }

        _this3.searchFields = data.searchFields;
        _this3.searchModel = data.searchModel;
        _this3.pause = false;

        if (fetchData) {
          _this3.applyQuery();

          _this3.fetch();
        }
      });
    },
    applyQuery: function applyQuery() {
      var query = this.$route.query.query;

      if (!query) {
        this.query = {};
        return;
      }

      this.query = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isString(query) ? JSON.parse(query) : query; // this.searchModel = this.where
    },
    get: function get(item, path) {
      var _path$split = path.split("."),
          _path$split2 = Object(_home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_path$split, 2),
          model = _path$split2[0],
          field = _path$split2[1];

      return item[model][field];
    },
    show: function show(item) {
      this.$router.push({
        path: this.resource + "/" + item[this.$config.primaryKey]
      });
    },
    edit: function edit(item) {
      if (this.site.grid_style == 2) {
        return this.$router.push({
          path: "/page/".concat(this.resource, ".").concat(item[this.$config.primaryKey], ".edit")
        });
      }

      this.$router.push({
        path: this.resource + "/" + item[this.$config.primaryKey] + "/edit"
      });
    },
    remove: function remove(item) {
      var _this4 = this;

      if (window.confirm(this.$t("messages.confirm_delete"))) {
        this.$http.delete(this.resourceUri + "/" + item[this.$config.primaryKey]).then(function () {
          _this4.$snotify.success(_this4.$t("messages.deleted"));

          _this4.fetch();
        });
      }
    },
    removeAll: function removeAll() {
      var _this5 = this;

      if (window.confirm(this.$t("messages.confirm_delete_all"))) {
        this.$http.delete(this.resourceUri).then(function () {
          _this5.$snotify.success(_this5.$t("messages.deleted_all"));

          _this5.fetch();
        });
      }
    },
    onSearch: function onSearch() {
      this.where = this.searchModel;
      this.fetch();
    }
  },
  mounted: function mounted() {
    this.site.fetched && this.fetchGrid(true); // console.log('mounted');
  },
  created: function created() {// this.applyQuery();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "5da2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataValue_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7010");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataValue_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataValue_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataValue_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "629a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bd86");
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2d1f");
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("768b");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("55dd");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("f499");
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("28a5");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cebc");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("2f62");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("2ef0");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  components: {},
  props: {},
  data: function data() {
    return {
      init: false,
      loaded: false,
      table: {},
      total: 0,
      //total rows
      pageLimit: 10,
      //display how many page buttons
      currentPage: 1,
      sortBy: this.$config.primaryKey,
      sortDesc: true,
      sortDirection: null,
      perPage: 10,
      where: {},
      iframeSrc: ""
    };
  },
  watch: {
    "$route.query": function $routeQuery(val) {
      this.applyRouteQuery();
    },
    "$route.params": function $routeParams(val) {
      this.applyRouteQuery();
      this.fetch();
    } // page(val) {}

  },
  computed: Object(_home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__[/* mapState */ "b"])(["site", "i18n", "auth"]), Object(vuex__WEBPACK_IMPORTED_MODULE_8__[/* mapGetters */ "a"])(["currentLanguage"]), {
    populate: function populate() {
      return lodash__WEBPACK_IMPORTED_MODULE_9___default()(this.table.fields || {}).map("ref").filter().map(function (v) {
        return v.split(".").shift();
      }).uniq().toJSON();
    },
    actions: function actions() {
      return lodash__WEBPACK_IMPORTED_MODULE_9___default.a.get(this.table, "fields._actions", {});
    },
    resource: function resource() {
      return this.$route.params.resource;
    },
    uri: function uri() {
      return this.resource.replace(/\./g, "/");
    }
  }),
  methods: {
    doSearch: function doSearch(params) {
      this.where = lodash__WEBPACK_IMPORTED_MODULE_9___default.a.omitBy(params, function (v) {
        return v === null;
      });
      this.$refs.table.refresh(); // console.log(params);
    },
    searchAndExport: function searchAndExport() {
      var _this = this;

      var query = _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default()({
        where: lodash__WEBPACK_IMPORTED_MODULE_9___default.a.clone(this.table.searchModel),
        with: lodash__WEBPACK_IMPORTED_MODULE_9___default.a.clone(this.populate)
      });

      this.iframeSrc = "";
      setTimeout(function () {
        _this.iframeSrc = "".concat(global.API_URI).concat(_this.uri, "/export?query=").concat(query, "&token=").concat(_this.$store.state.auth.token);
      }, 50);
    },
    applyRouteQuery: function applyRouteQuery() {
      var _JSON$parse = JSON.parse(this.$route.query.query || "{}"),
          _JSON$parse$sort = _JSON$parse.sort,
          sort = _JSON$parse$sort === void 0 ? {} : _JSON$parse$sort,
          _JSON$parse$page = _JSON$parse.page,
          page = _JSON$parse$page === void 0 ? 1 : _JSON$parse$page,
          _JSON$parse$where = _JSON$parse.where,
          where = _JSON$parse$where === void 0 ? {} : _JSON$parse$where;

      var _ref = _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(sort).pop() || [],
          _ref2 = Object(_home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ref, 2),
          sortBy = _ref2[0],
          sortDesc = _ref2[1];

      sortBy && (this.sortBy = sortBy);

      if (sortDesc) {
        this.sortDesc = sortDesc === -1 ? true : false;
      }

      this.total = page * this.perPage;
      this.currentPage = page;
      this.where = where;
      this.init = true;
    },
    remove: function remove(id) {
      var _this2 = this;

      if (window.confirm("是否删除?")) {
        this.$http.delete("".concat(this.uri, "/").concat(id)).then(function (res) {
          _this2.$snotify.success("删除成功");

          _this2.$refs.table.refresh();
        });
      }
    },
    fetchItems: function fetchItems(ctx) {
      var _this3 = this;

      var query = lodash__WEBPACK_IMPORTED_MODULE_9___default.a.merge({}, lodash__WEBPACK_IMPORTED_MODULE_9___default.a.get(this.table, "query"), {
        page: ctx.currentPage,
        sort: Object(_home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, ctx.sortBy, this.sortDesc ? -1 : 1),
        where: this.where,
        with: this.populate
      }); // console.log(query)


      if (!this.init) {
        // this.$router.replace({
        //   query: { query: JSON.stringify(query) }
        // });
        return [];
      } // this.$router.push({
      //   query: { query: JSON.stringify(query) }
      // });


      return this.$http.get(this.uri, {
        params: {
          query: _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default()(query)
        }
      }).then(function (res) {
        var _res$data = res.data,
            total = _res$data.total,
            data = _res$data.data;
        _this3.total = total;
        return data;
      }).catch(function (e) {
        return [];
      });
    },
    fetch: function fetch() {
      var _this4 = this;

      this.init = false;
      this.$http.get(this.uri + "/grid").then(function (res) {
        lodash__WEBPACK_IMPORTED_MODULE_9___default.a.mapValues(res.data.fields, function (field) {
          field.thClass = "bg-light";
        });

        _this4.table = res.data;

        if (lodash__WEBPACK_IMPORTED_MODULE_9___default.a.get(_this4.table, "fields._actions") !== false) {
          lodash__WEBPACK_IMPORTED_MODULE_9___default.a.set(_this4.table, "fields._actions.label", _this4.$t("actions.actions"));
        }

        _this4.init = true;

        if (_this4.$refs.table) {
          _this4.$refs.table.refresh();
        }
      });
    }
  },
  mounted: function mounted() {},
  created: function created() {
    this.applyRouteQuery();
    this.fetch(); // this.fetchTable();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "6a29":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13fa2dae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FormBuilder.vue?vue&type=template&id=6075f6c0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.model)?_c('div',[(_vm.inline)?_c(_vm.tag,{ref:"form",tag:"component",staticClass:"form form-inline",attrs:{"action":_vm.actionUrl,"method":_vm.method,"enctype":"multipart/form-data"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('input',{attrs:{"type":"hidden","name":"token"},domProps:{"value":_vm.auth.token}}),_vm._l((_vm.fields),function(field,name){return [(field.label !== false)?_c('label',{key:name,staticClass:"m-1",attrs:{"for":'input_' + name}},[_vm._v(_vm._s(field.label || _vm.$inflection.titleize(name)))]):_vm._e(),_c('b-form-field',{key:_vm.id + '_' +name,staticClass:"m-1 mr-4",attrs:{"languages":_vm.languages,"parent":_vm.model,"value":_vm.model[name],"id":_vm.getFieldId(name),"name":name,"field":field,"state":!_vm.hasError(name)},on:{"input":function($event){_vm.setValue(name, arguments[0], arguments[1])}}})]}),_vm._t("actions",[_c('b-button',{ref:"submitButton",staticClass:"mr-1",attrs:{"type":"submit","variant":"primary"}},[_vm._v(_vm._s(_vm.submitText))]),(_vm.backText)?_c('b-button',{attrs:{"type":"button","variant":"secondary"},on:{"click":function($event){_vm.$router.go(-1)}}},[_vm._v(_vm._s(_vm.backText))]):_vm._e(),_vm._t("extra-buttons")])],2):_c(_vm.tag,{ref:"form",tag:"component",staticClass:"form",attrs:{"action":_vm.actionUrl,"method":_vm.method,"enctype":"multipart/form-data"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('input',{attrs:{"type":"hidden","name":"token"},domProps:{"value":_vm.auth.token}}),(_vm.groupBy)?_c('b-tabs',{staticClass:"my-3",class:{'hide-group-name': _vm._.get(_vm.layout, 'hideGroupName')}},_vm._l((_vm.groupedFields),function(subFields,tabName){return _c('b-tab',{key:tabName,attrs:{"title":_vm._.get(_vm.layout, ("tabs." + tabName + ".name")) || tabName || _vm.$t('messages.default')}},[_c('div',{staticClass:"row form-cols"},[_c('b-col',{attrs:{"md":_vm._.get(_vm.layout, ("tabs." + tabName + ".cols"), 12)}},[_c('b-row',{staticClass:"mt-4"},_vm._l((subFields),function(field,name){return (_vm.isShowField(field) && _vm.model)?_c('b-form-group',_vm._b({key:_vm.id + '_' +name,class:_vm.getClass(field),attrs:{"state":!_vm.hasError(name),"label-for":'input_' + name,"label":field.label !== false ? (field.label || _vm.$inflection.titleize(name)) : ''}},'b-form-group',field,false),[_c('div',{},[_c('b-form-field',{class:_vm.getInputClass(field),attrs:{"languages":_vm.languages,"parent":_vm.model,"value":_vm.model[name],"name":name,"field":field,"state":!_vm.hasError(name),"id":'input_' + name},on:{"input":function($event){_vm.setValue(name, arguments[0], arguments[1])}}})],1)]):_vm._e()}),1)],1),(!!_vm._.get(_vm.layout, ("tabs." + tabName + ".right")))?_c('b-col',{attrs:{"md":12 - _vm._.get(_vm.layout, ("tabs." + tabName + ".cols"), 0)}},[_c('div',{domProps:{"innerHTML":_vm._s(_vm._.get(_vm.layout, ("tabs." + tabName + ".right")))}})]):_vm._e()],1)])}),1):_c('div',{staticClass:"row"},_vm._l((_vm.fields),function(field,name){return (_vm.isShowField(field) && _vm.model)?_c('b-form-group',_vm._b({key:[_vm.id,_vm.subForm,name].join(),class:_vm.getClass(field),attrs:{"state":!_vm.hasError(name),"label-for":_vm.getFieldId(name),"label":field.label !== false ? (field.label || _vm.$inflection.titleize(name)) : ''}},'b-form-group',field,false),[_c('div',{},[_c('b-form-field',{class:_vm.getInputClass(field),attrs:{"languages":_vm.languages,"parent":_vm.model,"value":_vm.model[name],"name":_vm.getFieldName(name),"field":field,"state":!_vm.hasError(name),"id":_vm.getFieldId(name)},on:{"input":function($event){_vm.setValue(name, arguments[0], arguments[1])}}})],1)]):_vm._e()}),1),(!_vm.subForm)?_vm._t("actions",[_c('b-button',{ref:"submitButton",staticClass:"mr-1",attrs:{"type":"submit","variant":"primary"}},[_vm._v(_vm._s(_vm.submitText))]),(_vm.backText)?_c('b-button',{attrs:{"type":"button","variant":"secondary"},on:{"click":function($event){_vm.$router.go(-1)}}},[_vm._v(_vm._s(_vm.backText))]):_vm._e()]):_vm._e()],2)],1):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FormBuilder.vue?vue&type=template&id=6075f6c0&

// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FormBuilder.vue?vue&type=script&lang=js&
var FormBuildervue_type_script_lang_js_ = __webpack_require__("d751");

// CONCATENATED MODULE: ./src/components/FormBuilder.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FormBuildervue_type_script_lang_js_ = (FormBuildervue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/FormBuilder.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FormBuildervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "FormBuilder.vue"
/* harmony default export */ var FormBuilder = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "7010":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "75d3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7767":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8a2b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13fa2dae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DataValue.vue?vue&type=template&id=a7015826&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"break-all data-value"},[(['html'].includes(_vm.field.type))?[_c('div',{staticClass:" data-value-html",domProps:{"innerHTML":_vm._s(_vm.value)}})]:(['number'].includes(_vm.field.type))?[_c('div',{staticClass:" text-right"},[_vm._v(_vm._s(_vm.value))])]:(['image'].includes(_vm.field.type))?[(_vm.field.multiple)?_vm._l((_vm.value),function(v){return _c('b-img',_vm._b({key:v,staticClass:"type-image",attrs:{"src":_vm.preview(v)},on:{"click":function($event){$event.stopPropagation();_vm.previewInModal(v)}}},'b-img',_vm.field,false))}):_c('b-img',_vm._b({staticClass:"type-image",attrs:{"src":_vm.preview(_vm.value),"fluid":""},on:{"click":function($event){$event.stopPropagation();_vm.previewInModal(_vm.value)}}},'b-img',_vm.field,false))]:(['audio', 'video'].includes(_vm.field.type))?[_c(_vm.field.type,{tag:"component",attrs:{"src":_vm.value,"controls":""}})]:(['file'].includes(_vm.field.type))?[(_vm.value)?_c('a',{attrs:{"target":"blank","href":_vm.value}},[_c('i',{staticClass:"fa fa-file"}),_vm._v(" "+_vm._s(String(_vm.value).split('/').pop())+"\n    ")]):_c('div',{staticClass:"text-muted"})]:(['link'].includes(_vm.field.type))?[_c('a',{class:_vm.field.classes,attrs:{"href":_vm.value,"target":_vm.field.target}},[(_vm.field.icon)?_c('i',{class:_vm.field.icon}):_vm._e(),_vm._v("\n      "+_vm._s(_vm.field.text || _vm.field.label)+"\n    ")])]:(['switch', 'boolean', 'checkbox'].includes(_vm.field.type))?[_c('b-badge',{attrs:{"variant":_vm.value ? 'success' : 'danger'}},[_vm._v("\n      "+_vm._s(_vm.value ? 'Yes' : 'No')+"\n    ")])]:(_vm.field.refLabel)?[[_vm._v("\n      "+_vm._s(_vm._.get(_vm.model || {}, [_vm.name ].concat( _vm.field.refLabel.split('.'))))+"\n    ")]]:(_vm.field.ref)?[(_vm.field.multiple)?[_vm._v("\n      "+_vm._s(_vm._.map(_vm._.get(_vm.model || {}, _vm.field.ref.split('.')[0]), _vm.field.ref.split('.')[1]).join(','))+"\n    ")]:(_vm.isIntl)?[_vm._v("\n      "+_vm._s(_vm._.get(_vm.model || {}, _vm.field.ref.split('.').concat([_vm.lang])))+"\n    ")]:[_vm._v("\n      "+_vm._s(_vm._.get(_vm.model || {}, _vm.field.ref))+"\n    ")]]:(_vm.name === _vm.$config.primaryKey)?[(_vm.value)?_c('span',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top.d100",modifiers:{"hover":true,"top":true,"d100":true}}],attrs:{"title":_vm.value}},[_vm._v("\n      "+_vm._s(String(_vm.shortId ? String(_vm.value).substr(-4) : _vm.value).toUpperCase())+"\n    ")]):_vm._e()]:(['date', 'datetime'].includes(_vm.field.type))?[(_vm.value)?_c('span',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top.d100",modifiers:{"hover":true,"top":true,"d100":true}}],attrs:{"title":_vm.value}},[(_vm._.isString(_vm.value))?[_vm._v("\n        "+_vm._s(_vm.$d(new Date(_vm.value), _vm.timeFormat))+"\n      ")]:(_vm._.isArray(_vm.value))?[_vm._v("\n        "+_vm._s(_vm.$d(new Date(_vm.value[0]), _vm.timeFormat))+" -\n        "+_vm._s(_vm.$d(new Date(_vm.value[1]), _vm.timeFormat))+"\n      ")]:_vm._e()],2):_vm._e()]:[_vm._v("\n    "+_vm._s(_vm.value)+"\n  ")],_c('b-modal',{attrs:{"title":_vm.field.label},model:{value:(_vm.showModal),callback:function ($$v) {_vm.showModal=$$v},expression:"showModal"}},[_c('b-img',{staticClass:"my-2",attrs:{"src":_vm.preview(_vm.previewValue),"center":"","fluid":""}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/DataValue.vue?vue&type=template&id=a7015826&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("2ef0");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DataValue.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var DataValuevue_type_script_lang_js_ = ({
  data: function data() {
    return {
      previewValue: null,
      showModal: false
    };
  },
  props: {
    field: {
      required: true,
      type: Object
    },
    name: {
      required: true,
      type: String
    },
    model: {
      required: true,
      type: Object
    },
    lang: {},
    shortId: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  computed: {
    timeFormat: function timeFormat() {
      return 'long';
    },
    isIntl: function isIntl() {
      return this.field.intl || this.field.multilingual;
    },
    value: function value() {
      // const path = this.name.replace(/\]/g, '').replace(/\[/g, '.').split('.').pop()
      // console.log(this.name)
      var value = lodash_default.a.get(this.model || {}, this.field.refLabel || this.field.ref || this.name);

      if (!value) {
        return value;
      }

      if (['select', 'select2', 'radiolist', 'checkboxlist'].includes(this.field.type)) {
        var options = lodash_default.a.mapValues(lodash_default.a.keyBy(this.field.options, "value"), "text");

        return options[value];
      }

      if (this.lang && this.isIntl) {
        return lodash_default.a.get(value, this.lang, null);
      }

      return value;
    }
  },
  methods: {
    previewInModal: function previewInModal(value) {
      this.showModal = true;
      this.previewValue = value;
    },
    preview: function preview(file) {
      if (!file) {
        return;
      }

      if (typeof file === "string") {
        return file;
      }

      if (file instanceof File) {
        return URL.createObjectURL(file);
      }

      return '';
    }
  }
});
// CONCATENATED MODULE: ./src/components/DataValue.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DataValuevue_type_script_lang_js_ = (DataValuevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/DataValue.vue?vue&type=style&index=0&lang=scss&
var DataValuevue_type_style_index_0_lang_scss_ = __webpack_require__("5da2");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/DataValue.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DataValuevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "DataValue.vue"
/* harmony default export */ var DataValue = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "ac01":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7514");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("386d");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7f7f");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6762");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2fdb");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("1516");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("7026");
/* harmony import */ var _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("6f8d");
/* harmony import */ var _riophae_vue_treeselect_dist_vue_treeselect_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_riophae_vue_treeselect_dist_vue_treeselect_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4a7a");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("3cdb");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _FormUploader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("0958");
/* harmony import */ var vue_html5_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("c097");
/* harmony import */ var vue_html5_editor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(vue_html5_editor__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("2ef0");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // import BSelect from "vue-multiselect"

 // import "vue-multiselect/dist/vue-multiselect.min.css"

 // import BUeditor from "./UEditor"


 // import BJsonEditor  from "./JsonEditor"
// import BJsonEditor from "vue-jsoneditor"

 // import "jsoneditor/dist/jsoneditor.min.css"
// Vue.use(BJsonEditor);

/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    // BUeditor,
    BDatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_10___default.a,
    BSelect: vue_select__WEBPACK_IMPORTED_MODULE_9___default.a,
    BFormUploader: _FormUploader__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],
    // BJsonEditor,
    BDraggable: vuedraggable__WEBPACK_IMPORTED_MODULE_6___default.a,
    BTreeSelect: _riophae_vue_treeselect__WEBPACK_IMPORTED_MODULE_7___default.a
  },
  props: {
    languages: {},
    id: {
      required: true
    },
    parent: {},
    value: {},
    field: {},
    state: {},
    name: {}
  },
  computed: {
    cropperOptions: function cropperOptions() {
      return {
        "upload-url": global.API_URI + "upload",
        "upload-headers": {
          Authorization: "Bearer " + this.$store.state.auth.token
        },
        "upload-form-name": "file",
        "upload-form-data": {
          from: "cropper"
        },
        "cropper-options": {
          viewMode: 2,
          aspectRatio: lodash__WEBPACK_IMPORTED_MODULE_13___default.a.get(this.field, "cropper.ratio", 1)
        },
        "output-options": this.field.cropper,
        labels: this.field.labels || {
          submit: "提交",
          cancel: "取消"
        }
      };
    },
    isSelect: function isSelect() {
      return ["select", "select2"].includes(this.field.type);
    },
    isSelect2: function isSelect2() {
      return ["select2"].includes(this.field.type);
    },
    groupedOptions: function groupedOptions() {
      return lodash__WEBPACK_IMPORTED_MODULE_13___default.a.groupBy(this.options, "group");
    },
    myFields: function myFields() {
      var fields = this.field.fields;

      if (typeof fields == "string") {
        var rel = this.parent[fields];

        if (!rel) {
          return {};
        }

        try {
          fields = JSON.parse(rel);
        } catch (e) {
          fields = {};
        }
      }

      if (this.parent.is_table) {
        fields._actions = {
          label: this.$t("actions.actions")
        };
      }

      return fields;
    },
    description: function description() {
      if (this.field.limit) {
        var _this$field$limit = this.field.limit,
            width = _this$field$limit.width,
            height = _this$field$limit.height;

        if (width && height) {
          return "\u5C3A\u5BF8\uFF1A".concat(width, "x").concat(height);
        }

        return;
      }

      return this.field.description;
    },
    filteredValue: function filteredValue() {
      var defaultValue = this.value;

      if (!this.defaultValue) {
        if (["object", "json"].includes(this.field.type)) {
          defaultValue = {};
        }

        if (["array"].includes(this.field.type) || this.field.multiple) {
          defaultValue = [];
        }
      } // console.log(defaultValue);


      return defaultValue;
    },
    isArrayValue: function isArrayValue() {
      return this.field.multiple || this.field.is_array || this.field.type == "array" || this.field.is_table;
    },
    isIntl: function isIntl() {
      return this.field.intl || this.field.multilingual;
    },
    model: {
      get: function get() {
        var isArray = this.field.multiple || this.field.is_array || this.field.type == "array" || this.field.is_table;
        var isObject = this.field.type == "object";
        var ret = this.value;

        if (!this.value) {
          if (isArray) {
            ret = [];
          } else if (isObject) {
            ret = {};
          }
        }

        if (this.isIntl) {
          console.log(this.name, ret, this.currentLanguage);
          return lodash__WEBPACK_IMPORTED_MODULE_13___default.a.get(ret, this.currentLanguage, "");
        }

        return ret;
      },
      set: function set(value) {
        this.$emit("input", value, this.currentLanguage);
      }
    }
  },
  data: function data() {
    var isArray = this.field.multiple || this.field.is_array || this.field.type == "array" || this.field.is_table;
    return {
      currentLanguage: this.field.currentLanguage || "en",
      options: this.field.options || [],
      selectedValue: isArray && !this.value ? [] : this.value
    };
  },
  methods: {
    addRow: function addRow() {
      var _this = this;

      if (!this.parent[this.name]) {
        this.$set(this.parent, this.name, []);
      }

      this.$nextTick(function () {
        _this.model.push({});
      });
    },
    initEditor: function initEditor() {
      var language = "zh-cn";
      window.document.execCommand("defaultParagraphSeparator", false, "p");
      var visibleModules = this.field.modules || ["text", // "color",
      // "font",
      "heading", "align", "list", "link", "unlink", "tabulation", "image", // this.field.cropper ? "cropper" : "image",
      "hr", "eraser", "undo", "full-screen", "cropper" // "info",
      ];

      var cropperClass = lodash__WEBPACK_IMPORTED_MODULE_13___default.a.get(this.field, "cropper.icon", "fa fa-crop text-danger");

      vue__WEBPACK_IMPORTED_MODULE_5___default.a.use(vue_html5_editor__WEBPACK_IMPORTED_MODULE_12___default.a, {
        name: "b-html-editor",
        language: language,
        showModuleName: false,
        modules: [{
          name: "cropper",
          icon: cropperClass,
          i18n: "cropper",
          show: true,
          handler: function handler(editor) {
            editor.$emit("open-cropper");
          }
        }, {
          name: "heading",
          icon: "fa fa-header",
          i18n: "heading",
          show: true,
          dashboard: {
            template: "\n                <div>\n                  <button v-for=\"h in 6\" type=\"button\" @click=\"setHeading(h)\">H{{h}}</button>\n                </div>\n              ",
            methods: {
              setHeading: function setHeading(heading) {
                this.$parent.execCommand("formatBlock", "h".concat(heading));
              }
            }
          }
        }],
        i18n: {
          "zh-cn": {
            cropper: "图片裁剪",
            heading: "标题"
          }
        },
        image: {
          sizeLimit: 10 * 1024 * 1024,
          upload: {
            url: global.API_URI + "upload",
            headers: {
              Authorization: "Bearer " + this.$store.state.auth.token
            },
            fieldName: "file"
          },
          // compress: {
          //   width: 1600,
          //   height: 1600,
          //   quality: 80
          // },
          uploadHandler: function uploadHandler(res) {
            var data;

            try {
              data = JSON.parse(res);
            } catch (e) {
              this.$notify.error("上传失败");
            }

            return data.url;
          }
        },
        visibleModules: visibleModules
      });
    },
    cropperUploaded: function cropperUploaded(res) {
      this.$refs.editor.execCommand("insertHTML", "<img src=\"".concat(res.url, "\" />"));
    },
    cropperUploadComplete: function cropperUploadComplete(data) {
      if (data.message) {
        this.$snotify.error(data.message);
      }
    },
    changeLanguage: function changeLanguage(lang) {
      this.currentLanguage = lang; // this.$emit('change-language', lang, name)
      // global.console.log(lang, name)
    },
    htmlEditorInput: function htmlEditorInput(value) {
      this.$emit("input", value, this.currentLanguage);
    },
    wrapFirstLine: function wrapFirstLine() {// const value = String(el.target.innerHTML).replace(/^\s*(.+?)(<?)/i, '<p> $1 </p>$2')
      // this.$emit('input', value)
    },
    treeSelectNormalizer: function treeSelectNormalizer(row) {
      return {
        id: row.value,
        label: row.text
      };
    },
    handleSelect: function handleSelect(val) {
      if (this.isSelect2) {
        if (this.isArrayValue) {
          val = lodash__WEBPACK_IMPORTED_MODULE_13___default.a.uniq(lodash__WEBPACK_IMPORTED_MODULE_13___default.a.map(val, "value"));
        } else {
          val = val ? val.value : null;
        }
      }

      this.$emit("input", val, this.currentLanguage);
    },
    getFormatter: function getFormatter(field) {
      if (field.format) {
        return eval(field.format);
      }

      return function (v) {
        return v;
      };
    },
    getAjaxOptions: function getAjaxOptions(q) {
      var _this2 = this;

      if (!this.field.ajaxOptions) {
        return;
      }

      var options = this.field.ajaxOptions;

      if (!options.where) {
        options.where = {};
      }

      options.where[options.text] = q;
      this.$http.get(options.resource + "/options", {
        params: options
      }).then(function (_ref) {
        var data = _ref.data;
        _this2.options = data;
      });
    },
    initOptionsForSelect2: function initOptionsForSelect2() {
      var parentOptions = this.parent[this.name + "_data"];

      if (parentOptions) {
        this.options = this.options.concat(parentOptions);
      }
    }
  },
  mounted: function mounted() {
    if (this.field.type == "html") {// window.onscroll =  () => {
      //   const editor = this.$refs.editor.$el
      //   const offsetTop = editor.getClientRects()[0].top
      //   // const scrollTop = document.documentElement.scrollTop
      //   if (offsetTop <= 0) {
      //     editor.classList.toggle()
      //   }
      //   // global.console.log(scrollTop, offsetTop)
      // }
    }
  },
  created: function created() {
    var _this3 = this;

    if (this.field.type == "html") {
      this.initEditor();
    }

    if (this.field.ajaxOptions && this.field.ajaxOptions.search !== true) {
      this.getAjaxOptions();
    }

    if (this.isSelect2) {
      this.initOptionsForSelect2();

      if (this.isArrayValue) {
        this.selectedValue = lodash__WEBPACK_IMPORTED_MODULE_13___default.a.filter(this.options, function (v) {
          return _this3.value && _this3.value.includes(v.value);
        });
      } else {
        this.selectedValue = lodash__WEBPACK_IMPORTED_MODULE_13___default.a.find(this.options, function (v) {
          return _this3.value == v.value;
        });
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "b619":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormField_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7767");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormField_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormField_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormField_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b635":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("cebc");

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("2ef0");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);

// EXTERNAL MODULE: ./src/http.js
var http = __webpack_require__("ba6a");

// CONCATENATED MODULE: ./src/config.js
/* harmony default export */ var src_config = ({
  "primaryKey": "_id" || false
});
// EXTERNAL MODULE: ./node_modules/inflection/lib/inflection.js
var inflection = __webpack_require__("ee71");
var inflection_default = /*#__PURE__*/__webpack_require__.n(inflection);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13fa2dae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Switch.vue?vue&type=template&id=39197026&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:_vm.classList},[_c('input',{staticClass:"switch-input",attrs:{"type":"checkbox"},domProps:{"value":_vm.value,"checked":_vm.isChecked},on:{"change":_vm.handleChange}}),(_vm.isOn)?[_c('span',{staticClass:"switch-label",attrs:{"data-on":_vm.on,"data-off":_vm.off}})]:[_c('span',{staticClass:"switch-label"})],_c('span',{staticClass:"switch-handle"})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Switch.vue?vue&type=template&id=39197026&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Switch.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Switchvue_type_script_lang_js_ = ({
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    value: {
      default: true
    },
    uncheckedValue: {
      default: false
    },
    checked: {
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    variant: {
      type: String,
      default: ''
    },
    pill: {
      type: Boolean,
      default: false
    },
    on: {
      type: String,
      default: null
    },
    off: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    }
  },
  computed: {
    classList: function classList() {
      return ['switch', this.switchType, this.switchVariant, this.switchPill, this.switchSize];
    },
    switchType: function switchType() {
      return this.type ? "switch-".concat(this.type) : "switch-default";
    },
    switchVariant: function switchVariant() {
      return this.variant ? "switch-".concat(this.variant) : "switch-secondary";
    },
    switchPill: function switchPill() {
      return !this.pill ? null : "switch-pill";
    },
    switchSize: function switchSize() {
      return this.size ? "switch-".concat(this.size) : '';
    },
    isChecked: function isChecked() {
      return this.checked === this.value;
    },
    isOn: function isOn() {
      return !this.on ? null : true;
    }
  },
  methods: {
    handleChange: function handleChange(_ref) {
      var checked = _ref.target.checked;
      this.$emit('change', checked ? this.value : this.uncheckedValue);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Switch.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Switchvue_type_script_lang_js_ = (Switchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Switch.vue





/* normalize component */

var Switch_component = Object(componentNormalizer["a" /* default */])(
  components_Switchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

Switch_component.options.__file = "Switch.vue"
/* harmony default export */ var Switch = (Switch_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13fa2dae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FormField.vue?vue&type=template&id=69d9579c&
var FormFieldvue_type_template_id_69d9579c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.isIntl)?_c('div',{staticClass:"languages mb-1"},_vm._l((_vm.languages),function(lang,key){return _c('span',{key:key,staticClass:"badge mr-1 mb-0 pointer",class:("badge-" + (_vm.currentLanguage === key ? 'primary' : 'secondary')),on:{"click":function($event){_vm.changeLanguage(key, _vm.name)}}},[_vm._v(_vm._s(lang))])}),0):_vm._e(),(['select'].includes(_vm.field.type))?_c('b-form-select',_vm._b({attrs:{"formatter":_vm.getFormatter(_vm.field, _vm.value),"id":_vm.id,"options":_vm.options,"value":_vm.selectedValue,"name":_vm.name},on:{"input":_vm.handleSelect}},'b-form-select',_vm.field,false)):(['select2'].includes(_vm.field.type))?_c('div',[_c('b-select',_vm._b({attrs:{"name":_vm.name,"label":"text","options":_vm.options,"value":_vm.selectedValue,"placeholder":_vm.field.placeholder || '',"selectLabel":""},on:{"search":_vm.getAjaxOptions,"input":_vm.handleSelect}},'b-select',_vm.field,false))],1):(['tree', 'treeselect'].includes(_vm.field.type))?_c('b-tree-select',_vm._b({attrs:{"normalizer":_vm.treeSelectNormalizer,"value-consists-of":"LEAF_PRIORITY"},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'b-tree-select',_vm.field,false)):(['date', 'datetime'].includes(_vm.field.type))?_c('b-date-picker',_vm._b({attrs:{"name":_vm.name},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'b-date-picker',_vm.field,false)):(['radiolist'].includes(_vm.field.type))?_c('b-form-radio-group',_vm._b({attrs:{"name":_vm.name},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'b-form-radio-group',_vm.field,false)):(['checkboxlist'].includes(_vm.field.type))?_c('b-form-checkbox-group',_vm._b({attrs:{"name":_vm.name},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'b-form-checkbox-group',_vm.field,false)):(['checkboxtable'].includes(_vm.field.type))?_c('div',{staticClass:"checkboxtable"},_vm._l((_vm.groupedOptions),function(options,group){return _c('div',{key:group,staticClass:"mt-1"},[_c('b-form-checkbox-group',_vm._b({attrs:{"name":_vm.name,"options":options},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'b-form-checkbox-group',_vm.field,false))],1)}),0):(['textarea'].includes(_vm.field.type))?_c('b-form-textarea',_vm._b({attrs:{"name":_vm.name,"id":_vm.id,"rows":_vm.field.rows || 3},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'b-form-textarea',_vm.field,false)):(['file-picker'].includes(_vm.field.type))?_c('div',[_c('b-btn',{directives:[{name:"b-modal",rawName:"v-b-modal.file-manager",modifiers:{"file-manager":true}}]},[_vm._v("选择文件")])],1):(['image', 'file', 'audio', 'video'].includes(_vm.field.type))?_c(_vm.field.autoUpload === false ? 'b-form-file' : 'b-form-uploader',{tag:"component",attrs:{"field":_vm.field,"id":_vm.id,"name":_vm.name,"parent":_vm.parent},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}}):(['switch', 'checkbox'].includes(_vm.field.type))?_c('div',[_c('b-form-checkbox',_vm._b({attrs:{"variant":"success","size":"lg","pill":"","type":"3d","id":_vm.id},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'b-form-checkbox',_vm.field,false))],1):(['wysiwyg', 'html'].includes(_vm.field.type))?_c('div',[(_vm.field.cropper)?_c('avatar-cropper',_vm._b({ref:"cropper",attrs:{"trigger":("#cropper_" + _vm.id)},on:{"uploaded":_vm.cropperUploaded,"completed":_vm.cropperUploadComplete}},'avatar-cropper',_vm.cropperOptions,false)):_vm._e(),_c('b-html-editor',_vm._b({ref:"editor",attrs:{"state":_vm.state,"id":_vm.id,"content":_vm.model},on:{"open-cropper":function($event){_vm.$refs.cropper && _vm.$refs.cropper.pickImage()},"change":_vm.htmlEditorInput},nativeOn:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.wrapFirstLine($event)}},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'b-html-editor',_vm.field,false))],1):(['json'].includes(_vm.field.type))?_c('div',[_c('b-form-textarea',_vm._b({attrs:{"id":_vm.id,"rows":_vm.field.rows || 5},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'b-form-textarea',_vm.field,false))],1):(_vm.field.fields)?_c('div',[(['array'].includes(_vm.field.type) || _vm.field.is_array || _vm.parent.is_array)?_c('div',[(_vm.field.is_table || _vm.parent.is_table)?_c('b-table',{attrs:{"hover":"","bordered":"","items":_vm.model,"fields":_vm.myFields},scopedSlots:_vm._u([_vm._l((_vm.myFields),function(child,k){return {key:k,fn:function(row){return [_c('b-form-field',{key:("input_" + (row.index) + "_" + k),attrs:{"parent":_vm.parent,"field":child,"name":("input_" + (row.index) + "_" + k),"id":("input_" + (row.index) + "_" + k)},model:{value:(_vm.model[row.index][k]),callback:function ($$v) {_vm.$set(_vm.model[row.index], k, $$v)},expression:"model[row.index][k]"}})]}}}),{key:"HEAD__actions",fn:function(row){return [_c('b-btn',{attrs:{"size":"sm"},on:{"click":_vm.addRow}},[_c('i',{staticClass:"icon-plus"}),_vm._v("\n            "+_vm._s(_vm.$t('actions.add'))+"\n          ")])]}},{key:"_actions",fn:function(row){return [_c('b-btn',{attrs:{"size":"sm"},on:{"click":function($event){_vm.model.splice(row.index + 1, 0, {});}}},[_c('i',{staticClass:"icon-plus"}),_vm._v("\n            "+_vm._s(_vm.$t('actions.add'))+"\n          ")]),_c('b-btn',{attrs:{"size":"sm"},on:{"click":function($event){_vm.model.splice(row.index, 1);}}},[_c('i',{staticClass:"icon-trash"}),_vm._v("\n            "+_vm._s(_vm.$t('actions.delete'))+"\n          ")])]}}])}):_c('b-draggable',{model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},[_c('transition-group',{staticClass:"row",attrs:{"tag":"div"}},[_vm._l((_vm.model),function(item,i){return _c('b-col',{key:("draggable-" + _vm.name + "-" + i),attrs:{"cols":"","lg":_vm.field.item_cols || 6}},[_c('b-card',{staticClass:"mb-4"},[_c('b-row',{staticClass:"justify-content-between",attrs:{"slot":"header"},slot:"header"},[_c('b-col',[_vm._v("No. "+_vm._s(i + 1))]),_c('b-col',{staticClass:"text-right",attrs:{"right":""}},[_c('b-btn',{attrs:{"size":"sm"},on:{"click":function($event){_vm.model.splice(i, 1)}}},[_c('i',{staticClass:"icon-trash"}),_vm._v("\n                    "+_vm._s(_vm.$t('actions.delete'))+"\n                  ")])],1)],1),_vm._l((_vm.myFields),function(child,key){return _c('b-form-group',_vm._b({key:key,attrs:{"label-for":("input_" + _vm.name + "_" + i + "_" + key)}},'b-form-group',child,false),[_c('b-form-field',{attrs:{"parent":_vm.parent,"name":(_vm.name + "." + i + "." + key),"field":child,"id":("input_" + _vm.name + "_" + i + "_" + key)},model:{value:(_vm.model[i][key]),callback:function ($$v) {_vm.$set(_vm.model[i], key, $$v)},expression:"model[i][key]"}})],1)})],2)],1)}),_c('b-col',{key:-1,staticClass:"d-flex align-items-center justify-content-center",attrs:{"cols":"","lg":_vm.field.item_cols || 6}},[_c('b-btn',{staticClass:"p-5",attrs:{"size":"lg","block":""},on:{"click":function($event){_vm.model = !_vm.model? [] : _vm.model; _vm.model.push({})}}},[_c('i',{staticClass:"fa fa-plus"})])],1)],2)],1)],1):(['object'].includes(_vm.field.type))?_c('div',[_c('b-card',[_c('b-form-builder',{ref:"subForm",attrs:{"sub-form":_vm.name || '',"languages":_vm.languages,"fields":_vm.myFields},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}})],1)],1):_c('div',_vm._l((_vm.myFields),function(child,key){return _c('b-form-group',_vm._b({key:key,attrs:{"label-for":("input_" + _vm.name + "_" + key)}},'b-form-group',child,false),[_c('b-form-field',{attrs:{"parent":_vm.parent,"name":key,"field":child,"id":("input_" + _vm.name + "_" + key)},model:{value:(_vm.model[key]),callback:function ($$v) {_vm.$set(_vm.model, key, $$v)},expression:"model[key]"}})],1)}),1)]):_c('b-input-group',[(_vm.field.prependIcon || _vm.field.prepend)?_c('b-input-group-prepend',{attrs:{"is-text":""}},[(_vm.field.prependIcon)?_c('i',{class:_vm.field.prependIcon}):_c('span',{domProps:{"innerHTML":_vm._s(_vm.field.prepend)}})]):_vm._e(),_c('b-form-input',_vm._b({attrs:{"state":_vm.state,"id":_vm.id,"name":_vm.name,"formatter":_vm.getFormatter(_vm.field, _vm.value)},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}},'b-form-input',_vm.field,false)),(_vm.field.appendIcon || _vm.field.append)?_c('b-input-group-append',{attrs:{"is-text":""}},[(_vm.field.appendIcon)?_c('i',{class:_vm.field.appendIcon}):_c('span',{domProps:{"innerHTML":_vm._s(_vm.field.append)}})]):_vm._e()],1)],1)}
var FormFieldvue_type_template_id_69d9579c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FormField.vue?vue&type=template&id=69d9579c&

// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FormField.vue?vue&type=script&lang=js&
var FormFieldvue_type_script_lang_js_ = __webpack_require__("ac01");

// CONCATENATED MODULE: ./src/components/FormField.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FormFieldvue_type_script_lang_js_ = (FormFieldvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./src/components/FormField.vue?vue&type=style&index=0&lang=css&
var FormFieldvue_type_style_index_0_lang_css_ = __webpack_require__("b619");

// CONCATENATED MODULE: ./src/components/FormField.vue






/* normalize component */

var FormField_component = Object(componentNormalizer["a" /* default */])(
  components_FormFieldvue_type_script_lang_js_,
  FormFieldvue_type_template_id_69d9579c_render,
  FormFieldvue_type_template_id_69d9579c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

FormField_component.options.__file = "FormField.vue"
/* harmony default export */ var FormField = (FormField_component.exports);
// EXTERNAL MODULE: ./src/components/DataValue.vue + 4 modules
var DataValue = __webpack_require__("8a2b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13fa2dae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BDataTable.vue?vue&type=template&id=f8cbb1aa&
var BDataTablevue_type_template_id_f8cbb1aa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-table')}
var BDataTablevue_type_template_id_f8cbb1aa_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BDataTable.vue?vue&type=template&id=f8cbb1aa&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BDataTable.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var BDataTablevue_type_script_lang_js_ = ({
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/components/BDataTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BDataTablevue_type_script_lang_js_ = (BDataTablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BDataTable.vue





/* normalize component */

var BDataTable_component = Object(componentNormalizer["a" /* default */])(
  components_BDataTablevue_type_script_lang_js_,
  BDataTablevue_type_template_id_f8cbb1aa_render,
  BDataTablevue_type_template_id_f8cbb1aa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

BDataTable_component.options.__file = "BDataTable.vue"
/* harmony default export */ var BDataTable = (BDataTable_component.exports);
// EXTERNAL MODULE: ./src/components/FormBuilder.vue + 3 modules
var FormBuilder = __webpack_require__("6a29");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13fa2dae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TableBuilder.vue?vue&type=template&id=621aa7e8&
var TableBuildervue_type_template_id_621aa7e8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-table',{staticClass:"table-builder",attrs:{"fields":_vm.fields,"items":_vm.items},scopedSlots:_vm._u([_vm._l((_vm._.omit(_vm.fields, '_actions')),function(field,key){return {key:("HEAD_" + key),fn:function(row){return [_c('div',{key:key,class:{'text-right': ['number'].includes(field.type)}},[_vm._v("\n      "+_vm._s(field.label || key)+"\n    ")])]}}}),_vm._l((_vm.fields),function(field,key){return {key:key,fn:function(row){return [_c('b-data-value',{key:key,attrs:{"field":field,"lang":_vm.currentLanguage,"name":key,"model":row.item,"short-id":""}})]}}})])})}
var TableBuildervue_type_template_id_621aa7e8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TableBuilder.vue?vue&type=template&id=621aa7e8&

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TableBuilder.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var TableBuildervue_type_script_lang_js_ = ({
  components: {
    BDataValue: DataValue["a" /* default */]
  },
  props: {
    fields: {},
    items: Array
  },
  computed: Object(objectSpread["a" /* default */])({}, Object(vuex_esm["b" /* mapState */])(["site", "i18n"]), Object(vuex_esm["a" /* mapGetters */])(["currentMenu", "currentLanguage"]))
});
// CONCATENATED MODULE: ./src/components/TableBuilder.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TableBuildervue_type_script_lang_js_ = (TableBuildervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/TableBuilder.vue





/* normalize component */

var TableBuilder_component = Object(componentNormalizer["a" /* default */])(
  components_TableBuildervue_type_script_lang_js_,
  TableBuildervue_type_template_id_621aa7e8_render,
  TableBuildervue_type_template_id_621aa7e8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

TableBuilder_component.options.__file = "TableBuilder.vue"
/* harmony default export */ var TableBuilder = (TableBuilder_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13fa2dae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AvatarCropper.vue?vue&type=template&id=e0a394c8&
var AvatarCroppervue_type_template_id_e0a394c8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"avatar-cropper"},[(_vm.dataUrl)?_c('div',{staticClass:"avatar-cropper-overlay"},[_c('div',{staticClass:"avatar-cropper-mark"},[_c('a',{staticClass:"avatar-cropper-close",attrs:{"href":"javascript:;"},on:{"click":_vm.destroy}},[_vm._v("×")])]),_c('div',{staticClass:"avatar-cropper-container"},[_c('div',{staticClass:"avatar-cropper-image-container"},[_c('img',{ref:"img",attrs:{"src":_vm.dataUrl,"alt":""},on:{"load":function($event){$event.stopPropagation();return _vm.createCropper($event)}}})]),_c('div',{staticClass:"avatar-cropper-footer"},[_c('button',{staticClass:"avatar-cropper-btn",attrs:{"type":"button"},domProps:{"textContent":_vm._s(_vm.labels.cancel)},on:{"click":_vm.destroy}},[_vm._v("Cancel")]),_c('button',{staticClass:"avatar-cropper-btn",attrs:{"type":"button"},domProps:{"textContent":_vm._s(_vm.labels.submit)},on:{"click":_vm.submit}},[_vm._v("Submit")])])])]):_vm._e(),_c('input',{ref:"input",staticClass:"avatar-cropper-img-input",attrs:{"type":"file","accept":_vm.mimes}})])}
var AvatarCroppervue_type_template_id_e0a394c8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AvatarCropper.vue?vue&type=template&id=e0a394c8&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("7618");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("5176");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/cropperjs/dist/cropper.css
var cropper = __webpack_require__("6107");

// EXTERNAL MODULE: ./node_modules/cropperjs/dist/cropper.esm.js
var cropper_esm = __webpack_require__("b5fc");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AvatarCropper.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var AvatarCroppervue_type_script_lang_js_ = ({
  props: {
    trigger: {
      type: [String, Element],
      required: true
    },
    uploadHandler: {
      type: Function
    },
    uploadUrl: {
      type: String
    },
    uploadHeaders: {
      type: Object
    },
    uploadFormName: {
      type: String,
      default: 'file'
    },
    uploadFormData: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    cropperOptions: {
      type: Object,
      default: function _default() {
        return {
          aspectRatio: 1,
          autoCropArea: 1,
          viewMode: 1,
          movable: false,
          zoomable: false
        };
      }
    },
    outputOptions: {
      type: Object,
      default: function _default() {
        return {
          width: 512,
          height: 512
        };
      }
    },
    outputMime: {
      type: String,
      default: 'image/jpeg'
    },
    outputQuality: {
      type: Number,
      default: 0.9
    },
    mimes: {
      type: String,
      default: 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon'
    },
    labels: {
      type: Object,
      default: function _default() {
        return {
          submit: "提交",
          cancel: "取消"
        };
      }
    }
  },
  data: function data() {
    return {
      cropper: undefined,
      dataUrl: undefined,
      filename: undefined
    };
  },
  methods: {
    destroy: function destroy() {
      this.cropper.destroy();
      this.$refs.input.value = '';
      this.dataUrl = undefined;
    },
    submit: function submit() {
      this.$emit('submit');

      if (this.uploadUrl) {
        this.uploadImage();
      } else if (this.uploadHandler) {
        this.uploadHandler(this.cropper);
      } else {
        this.$emit('error', 'No upload handler found.', 'user');
      }

      this.destroy();
    },
    pickImage: function pickImage() {
      this.$refs.input.click();
    },
    createCropper: function createCropper() {
      this.cropper = new cropper_esm["a" /* default */](this.$refs.img, this.cropperOptions);
    },
    uploadImage: function uploadImage() {
      var _this = this;

      this.cropper.getCroppedCanvas(this.outputOptions).toBlob(function (blob) {
        var form = new FormData();
        var xhr = new XMLHttpRequest();

        var data = assign_default()({}, _this.uploadFormData);

        for (var key in data) {
          form.append(key, data[key]);
        }

        form.append(_this.uploadFormName, blob, _this.filename);

        _this.$emit('uploading', form, xhr);

        xhr.open('POST', _this.uploadUrl, true);

        for (var header in _this.uploadHeaders) {
          xhr.setRequestHeader(header, _this.uploadHeaders[header]);
        }

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            var response = '';

            try {
              response = JSON.parse(xhr.responseText);
            } catch (err) {
              response = xhr.responseText;
            }

            _this.$emit('completed', response, form, xhr);

            if ([200, 201, 204].indexOf(xhr.status) > -1) {
              _this.$emit('uploaded', response, form, xhr);
            } else {
              _this.$emit('error', 'Image upload fail.', 'upload', xhr);
            }
          }
        };

        xhr.send(form);
      }, this.outputMime, this.outputQuality);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    // listen for click event on trigger
    var trigger = Object(esm_typeof["a" /* default */])(this.trigger) == 'object' ? this.trigger : document.querySelector(this.trigger);

    if (!trigger) {
      this.$emit('error', 'No avatar make trigger found.', 'user');
    } else {
      trigger.addEventListener('click', this.pickImage);
    } // listen for input file changes


    var fileInput = this.$refs.input;
    fileInput.addEventListener('change', function () {
      if (fileInput.files != null && fileInput.files[0] != null) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this2.dataUrl = e.target.result;
        };

        reader.readAsDataURL(fileInput.files[0]);
        _this2.filename = fileInput.files[0].name || 'unknown';

        _this2.$emit('changed', fileInput.files[0], reader);
      }
    });
  }
});
// CONCATENATED MODULE: ./src/components/AvatarCropper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AvatarCroppervue_type_script_lang_js_ = (AvatarCroppervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/AvatarCropper.vue?vue&type=style&index=0&lang=scss&
var AvatarCroppervue_type_style_index_0_lang_scss_ = __webpack_require__("18a9");

// CONCATENATED MODULE: ./src/components/AvatarCropper.vue






/* normalize component */

var AvatarCropper_component = Object(componentNormalizer["a" /* default */])(
  components_AvatarCroppervue_type_script_lang_js_,
  AvatarCroppervue_type_template_id_e0a394c8_render,
  AvatarCroppervue_type_template_id_e0a394c8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

AvatarCropper_component.options.__file = "AvatarCropper.vue"
/* harmony default export */ var AvatarCropper = (AvatarCropper_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13fa2dae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CustomComponent.vue?vue&type=template&id=22e7fe6e&
var CustomComponentvue_type_template_id_22e7fe6e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.component)?_c(_vm.component,{tag:"component"}):_vm._e()],1)}
var CustomComponentvue_type_template_id_22e7fe6e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CustomComponent.vue?vue&type=template&id=22e7fe6e&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("768b");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/entries.js
var entries = __webpack_require__("2d1f");
var entries_default = /*#__PURE__*/__webpack_require__.n(entries);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js + 1 modules
var construct = __webpack_require__("9a04");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("75fc");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("a745");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CustomComponent.vue?vue&type=script&lang=js&







//
//
//
//
//
//
/* harmony default export */ var CustomComponentvue_type_script_lang_js_ = ({
  props: {
    config: {
      required: true
    }
  },
  data: function data() {
    return {
      component: null
    };
  },
  mounted: function mounted() {},
  watch: {
    config: 'setComponent'
  },
  methods: {
    setComponent: function setComponent() {
      if (!this.config) {
        return this.component = null;
      }

      if (typeof this.config === 'string') {
        return this.component = {
          template: this.config
        };
      }

      var component = {};
      var config = this.config;

      var rawData = assign_default()({}, config.data);

      component.data = rawData;
      component.name = config.name;

      if (typeof component.data !== "function") {
        component.data = function () {
          return assign_default()({}, rawData);
        };
      }

      var wrapFunction = function wrapFunction(v) {
        if (is_array_default()(v)) {
          return Object(construct["a" /* default */])(Function, Object(toConsumableArray["a" /* default */])(v));
        }

        return v;
      };

      var mapValues = function mapValues() {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return entries_default()(obj).reduce(function (acc, _ref) {
          var _ref2 = Object(slicedToArray["a" /* default */])(_ref, 2),
              k = _ref2[0],
              v = _ref2[1];

          acc[k] = wrapFunction(v);
          return acc;
        }, {});
      };

      component.methods = mapValues(config.methods, wrapFunction);
      component.computed = mapValues(config.computed, wrapFunction);
      component.created = config.created ? wrapFunction(config.created) : null;
      component.mounted = config.mounted ? wrapFunction(config.mounted) : null;
      component.watch = config.watch ? wrapFunction(config.watch) : null;
      component.template = config.template;
      component.render = wrapFunction(config.render);
      this.component = assign_default()({}, component, {});
    }
  }
});
// CONCATENATED MODULE: ./src/components/CustomComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CustomComponentvue_type_script_lang_js_ = (CustomComponentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CustomComponent.vue





/* normalize component */

var CustomComponent_component = Object(componentNormalizer["a" /* default */])(
  components_CustomComponentvue_type_script_lang_js_,
  CustomComponentvue_type_template_id_22e7fe6e_render,
  CustomComponentvue_type_template_id_22e7fe6e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

CustomComponent_component.options.__file = "CustomComponent.vue"
/* harmony default export */ var CustomComponent = (CustomComponent_component.exports);
// CONCATENATED MODULE: ./src/form.js








function form_install(Vue) {
  Vue.component('b-switch', Switch);
  Vue.component('b-form-field', FormField);
  Vue.component('b-data-value', DataValue["a" /* default */]);
  Vue.component('b-data-table', BDataTable);
  Vue.component('b-form-builder', FormBuilder["a" /* default */]);
  Vue.component('b-table-builder', TableBuilder);
  Vue.component('avatar-cropper', AvatarCropper);
  Vue.component('custom-component', CustomComponent);
}
;
// EXTERNAL MODULE: ./node_modules/vue-snotify/vue-snotify.esm.js
var vue_snotify_esm = __webpack_require__("f213");

// EXTERNAL MODULE: ./node_modules/font-awesome/css/font-awesome.min.css
var font_awesome_min = __webpack_require__("1f54");

// EXTERNAL MODULE: ./node_modules/simple-line-icons/css/simple-line-icons.css
var simple_line_icons = __webpack_require__("679c");

// EXTERNAL MODULE: ./src/scss/style.scss
var style = __webpack_require__("5903");

// EXTERNAL MODULE: ./node_modules/vue-snotify/styles/material.css
var material = __webpack_require__("26e8");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("f499");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// CONCATENATED MODULE: ./src/storage.js

/* harmony default export */ var storage = ({
  get: function get(key, defaultValue) {
    try {
      return JSON.parse(localStorage.getItem("rest_admin_".concat(key)));
    } catch (e) {
      return defaultValue;
    }
  },
  set: function set(key, value) {
    localStorage.setItem("rest_admin_".concat(key), stringify_default()(value));
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13fa2dae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ResourceIndex.vue?vue&type=template&id=23f0ad2f&
var ResourceIndexvue_type_template_id_23f0ad2f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.$store.state.site.grid_style == 2)?_c('b-data-table',{attrs:{"resource":_vm.resource}}):_c('custom-table')],1)}
var ResourceIndexvue_type_template_id_23f0ad2f_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/ResourceIndex.vue?vue&type=template&id=23f0ad2f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13fa2dae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DataTable.vue?vue&type=template&id=966793ea&
var DataTablevue_type_template_id_966793ea_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"data-table"},[(_vm.site.grid_style === 1)?_c('div',[_c('div',{staticClass:"pb-3"},[(_vm._.get(_vm.actions,'toolbar.create') !== false)?_c('b-btn',{staticClass:"mr-2",attrs:{"to":'/rest/' + _vm.resourceUri + '/create',"variant":"secondary"}},[_c('i',{staticClass:"icon-plus"}),_vm._v("\n        "+_vm._s(_vm.$t('actions.create'))+"\n      ")]):_vm._e(),(_vm._.get(_vm.actions, 'toolbar.reload') !== false)?_c('b-btn',{staticClass:"mr-2",attrs:{"variant":"success"},on:{"click":_vm.fetchGrid}},[_c('i',{staticClass:"icon-reload"}),_vm._v("\n        "+_vm._s(_vm.$t('actions.reload'))+"\n      ")]):_vm._e(),_vm._l((_vm._.get(_vm.actions, 'toolbar.extra', [])),function(button){return _c('b-btn',_vm._b({key:button.label,staticClass:"mr-2"},'b-btn',button,false),[_vm._v(_vm._s(button.label))])}),(_vm._.get(_vm.actions, 'toolbar.delete_all') === true)?_c('b-btn',{staticClass:"pull-right",attrs:{"variant":"second"},on:{"click":_vm.removeAll}},[_c('i',{staticClass:"icon-trash"}),_vm._v("\n        "+_vm._s(_vm.$t('actions.delete_all'))+"\n      ")]):_vm._e()],2),(!_vm._.isEmpty(_vm.searchFields))?_c('div',{staticClass:"mb-2 data-table-search"},[_c('b-form-builder',{attrs:{"inline":true,"fields":_vm.searchFields,"action":_vm.searchUri,"submitText":_vm.$t('actions.search'),"backText":"","method":"get","on-submit":_vm.onSearch},model:{value:(_vm.searchModel),callback:function ($$v) {_vm.searchModel=$$v},expression:"searchModel"}},[_c('div',{staticClass:"ml-2",attrs:{"slot":"extra-buttons"},slot:"extra-buttons"},[(_vm._.get(_vm.actions, 'export'))?_c('b-button',{attrs:{"type":"button","variant":"success"},on:{"click":_vm.searchAndExport}},[_vm._v(_vm._s(_vm.$t('actions.search_and_export')))]):_vm._e(),_c('iframe',{staticStyle:{"width":"0","height":"0","border":"none"},attrs:{"src":_vm.iframeSrc}})],1)])],1):_vm._e(),(_vm.description)?_c('div',{domProps:{"innerHTML":_vm._s(_vm.description)}}):_vm._e(),_c('b-row',[_c('b-col',{attrs:{"cols":"8"}},[_c('b-pagination',{attrs:{"limit":_vm.limitPages,"total-rows":_vm.totalRows,"per-page":_vm.perPage},model:{value:(_vm.page),callback:function ($$v) {_vm.page=$$v},expression:"page"}})],1),_c('b-col',{staticClass:"text-right",attrs:{"cols":"4"}},[_c('p',[_vm._v(_vm._s(_vm.$t('messages.paginate', {total: _vm.totalRows})))])])],1)],1):_c('div',{staticClass:"table-toolbar style-2"},[_c('div',{staticClass:"search-box"},[_c('div',{staticClass:"flex"},[(!_vm._.isEmpty(_vm.searchFields))?_c('b-form-builder',{attrs:{"inline":true,"fields":_vm.searchFields,"action":_vm.searchUri,"submitText":_vm.$t('actions.search'),"backText":"","method":"get","on-submit":_vm.onSearch},model:{value:(_vm.searchModel),callback:function ($$v) {_vm.searchModel=$$v},expression:"searchModel"}},[_c('div',{staticClass:"ml-2",attrs:{"slot":"extra-buttons"},slot:"extra-buttons"},[(_vm._.get(_vm.actions, 'export'))?_c('b-button',{attrs:{"type":"button","variant":"success"},on:{"click":_vm.searchAndExport}},[_vm._v(_vm._s(_vm.$t('actions.search_and_export')))]):_vm._e(),_c('iframe',{staticStyle:{"width":"0","height":"0","border":"none"},attrs:{"src":_vm.iframeSrc}})],1)]):_vm._e(),(_vm._.get(_vm.actions,'toolbar.create') !== false)?_c('b-btn',{attrs:{"to":'/page/' + _vm.resourceUri + '.create',"variant":"link"}},[_c('i',{staticClass:"iconfont icon-xinjianshiti"}),_vm._v("\n          "+_vm._s(_vm.$t('actions.create'))+"\n        ")]):_vm._e(),(_vm._.get(_vm.actions, 'toolbar.reload') !== false)?_c('b-btn',{attrs:{"variant":"link"},on:{"click":_vm.fetchGrid}},[_c('i',{staticClass:"iconfont icon-shuaxin"}),_vm._v("\n          "+_vm._s(_vm.$t('actions.reload'))+"\n        ")]):_vm._e()],1),_c('div',{staticClass:"flex"},[_c('div',{staticClass:"result"},[_vm._v("共"+_vm._s(_vm.totalRows)+"个结果")]),_c('div',{staticClass:"pagination"},[_c('span',{staticClass:"left-arrow iconfont icon-tuichu",on:{"click":_vm.previousPage}}),_c('div',{staticClass:"go-page flex"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputPage),expression:"inputPage"}],attrs:{"type":"number"},domProps:{"value":(_vm.inputPage)},on:{"input":function($event){if($event.target.composing){ return; }_vm.inputPage=$event.target.value}}}),_c('div',[_vm._v("/"+_vm._s(_vm.totalRows == 0 ? 1 : Math.ceil(_vm.totalRows/_vm.limitPages)))]),_c('button',{on:{"click":_vm.goPage}},[_vm._v("GO")])]),_c('span',{staticClass:"right-arrow iconfont icon-jinru",on:{"click":_vm.nextPage}})])])])]),_c('b-table',{staticClass:"data-table bg-white",attrs:{"sort-by":_vm.sortBy,"sort-desc":_vm.sortDesc,"no-local-sorting":true,"fields":_vm.fields,"items":_vm.items},on:{"update:sortBy":function($event){_vm.sortBy=$event},"update:sortDesc":function($event){_vm.sortDesc=$event}},scopedSlots:_vm._u([_vm._l((_vm._.omit(_vm.fields, '_actions')),function(field,key){return {key:("HEAD_" + key),fn:function(row){return [_c('div',{key:key,class:{'text-right': ['number'].includes(field.type)}},[_vm._v(_vm._s(field.label || key))])]}}}),_vm._l((_vm.fields),function(field,key){return {key:key,fn:function(row){return [_c('b-data-value',{key:key,attrs:{"field":field,"lang":_vm.currentLanguage,"name":key,"model":row.item,"short-id":""}})]}}}),{key:"_actions",fn:function(row){return [_vm._l((_vm._.get(_vm.actions, 'addon')),function(button,key){return _c('b-btn',_vm._b({key:key,staticClass:"mr-2",attrs:{"size":"sm"}},'b-btn',button,false),[_vm._v(_vm._s(button.label))])}),(_vm._.get(_vm.actions, 'buttons.show') !== false)?_c('b-btn',{staticClass:"mr-2",attrs:{"size":"sm","variant":"success"},on:{"click":function($event){$event.stopPropagation();_vm.show(row.item)}}},[_c('i',{staticClass:"icon-eye"}),_vm._v("\n        "+_vm._s(_vm.$t('actions.view'))+"\n      ")]):_vm._e(),(_vm._.get(_vm.actions, 'buttons.edit') !== false)?_c('b-btn',{staticClass:"mr-2",attrs:{"size":"sm","variant":"primary"},on:{"click":function($event){$event.stopPropagation();_vm.edit(row.item)}}},[_c('i',{staticClass:"icon-pencil"}),_vm._v("\n        "+_vm._s(_vm.$t('actions.edit'))+"\n      ")]):_vm._e(),(_vm._.get(_vm.actions, 'buttons.delete') !== false)?_c('b-btn',{staticClass:"mr-2",attrs:{"size":"sm","variant":"second"},on:{"click":function($event){$event.stopPropagation();_vm.remove(row.item)}}},[_c('i',{staticClass:"icon-trash"}),_vm._v("\n        "+_vm._s(_vm.$t('actions.delete'))+"\n      ")]):_vm._e()]}}])}),(_vm.site.grid_style === 1)?_c('div',[_c('b-row',[_c('b-col',{attrs:{"cols":"8"}},[_c('b-pagination',{attrs:{"limit":_vm.limitPages,"total-rows":_vm.totalRows,"per-page":_vm.perPage},model:{value:(_vm.page),callback:function ($$v) {_vm.page=$$v},expression:"page"}})],1),_c('b-col',{staticClass:"text-right",attrs:{"cols":"4"}},[_c('p',[_vm._v(_vm._s(_vm.$t('messages.paginate', {total: _vm.totalRows})))])])],1)],1):_c('div',[_c('div',{staticClass:"footer-pagination"},[_c('div',{staticClass:"flex"},[_c('div',{staticClass:"result"},[_vm._v("共"+_vm._s(_vm.totalRows)+"个结果")]),_c('div',{staticClass:"pagination"},[_c('span',{staticClass:"left-arrow iconfont icon-tuichu",on:{"click":_vm.previousPage}}),_c('div',{staticClass:"go-page flex"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputPage),expression:"inputPage"}],attrs:{"type":"number"},domProps:{"value":(_vm.inputPage)},on:{"input":function($event){if($event.target.composing){ return; }_vm.inputPage=$event.target.value}}}),_c('div',[_vm._v("/"+_vm._s(_vm.totalRows == 0 ? 1 : Math.ceil(_vm.totalRows/_vm.limitPages)))]),_c('button',{on:{"click":_vm.goPage}},[_vm._v("GO")])]),_c('span',{staticClass:"right-arrow iconfont icon-jinru",on:{"click":_vm.nextPage}})])])])])],1)}
var DataTablevue_type_template_id_966793ea_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/DataTable.vue?vue&type=template&id=966793ea&

// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DataTable.vue?vue&type=script&lang=js&
var DataTablevue_type_script_lang_js_ = __webpack_require__("5c24");

// CONCATENATED MODULE: ./src/components/DataTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DataTablevue_type_script_lang_js_ = (DataTablevue_type_script_lang_js_["a" /* default */]); 
// CONCATENATED MODULE: ./src/components/DataTable.vue





/* normalize component */

var DataTable_component = Object(componentNormalizer["a" /* default */])(
  components_DataTablevue_type_script_lang_js_,
  DataTablevue_type_template_id_966793ea_render,
  DataTablevue_type_template_id_966793ea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

DataTable_component.options.__file = "DataTable.vue"
/* harmony default export */ var DataTable = (DataTable_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13fa2dae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/CustomTable.vue?vue&type=template&id=f648cef6&
var CustomTablevue_type_template_id_f648cef6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"custom-table"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col col-md-8 d-none"}),_c('div',{staticClass:"col col-md-12"},[(_vm._.get(_vm.actions,'toolbar.create') !== false)?_c('b-btn',{staticClass:"mr-2",attrs:{"to":'/rest/' + _vm.uri + '/create',"variant":"secondary"}},[_c('i',{staticClass:"icon-plus"}),_vm._v("\n        "+_vm._s(_vm.$t('actions.create'))+"\n      ")]):_vm._e(),(_vm._.get(_vm.actions, 'toolbar.reload') !== false)?_c('b-btn',{staticClass:"mr-2",attrs:{"variant":"success"},on:{"click":_vm.fetch}},[_c('i',{staticClass:"icon-reload"}),_vm._v("\n        "+_vm._s(_vm.$t('actions.reload'))+"\n      ")]):_vm._e(),_vm._l((_vm._.get(_vm.actions, 'toolbar.extra', [])),function(button){return _c('b-btn',_vm._b({key:button.label,staticClass:"mr-2"},'b-btn',button,false),[_vm._v(_vm._s(button.label))])}),(_vm._.get(_vm.actions, 'toolbar.delete_all') === true)?_c('b-btn',{staticClass:"pull-right",attrs:{"variant":"second"},on:{"click":_vm.removeAll}},[_c('i',{staticClass:"icon-trash"}),_vm._v("\n        "+_vm._s(_vm.$t('actions.delete_all'))+"\n      ")]):_vm._e()],2)]),_c('div',{},[_c('div',{staticClass:"my-2"},[(_vm._.keys(_vm.table.searchFields).length > 0)?_c('b-form-builder',{attrs:{"onSubmit":_vm.doSearch,"back-text":"","inline":"","submit-text":_vm.$t('actions.search'),"fields":_vm.table.searchFields},model:{value:(_vm.table.searchModel),callback:function ($$v) {_vm.$set(_vm.table, "searchModel", $$v)},expression:"table.searchModel"}},[_c('div',{staticClass:"ml-2",attrs:{"slot":"extra-buttons"},slot:"extra-buttons"},[(_vm._.get(_vm.actions, 'export'))?_c('b-button',{attrs:{"type":"button","variant":"success"},on:{"click":_vm.searchAndExport}},[_vm._v(_vm._s(_vm.$t('actions.search_and_export')))]):_vm._e(),_c('iframe',{staticStyle:{"width":"0","height":"0","border":"none"},attrs:{"src":_vm.iframeSrc}})],1)]):_vm._e()],1),_c('div',{staticClass:"row align-items-center"},[_c('div',{staticClass:"col-md-8"},[_c('b-pagination',{attrs:{"limit":_vm.pageLimit,"total-rows":_vm.total,"per-page":_vm.perPage},model:{value:(_vm.currentPage),callback:function ($$v) {_vm.currentPage=$$v},expression:"currentPage"}})],1),_c('div',{staticClass:"col-md-4 form-inline justify-content-end"},[_vm._v("Page\n        "),_c('b-select',{staticClass:"mx-2",model:{value:(_vm.currentPage),callback:function ($$v) {_vm.currentPage=$$v},expression:"currentPage"}},_vm._l((Math.ceil(_vm.total/_vm.perPage)),function(n){return _c('option',{key:n,domProps:{"value":n}},[_vm._v(_vm._s(n))])}),0),_c('span',[_vm._v(_vm._s(_vm.$t('messages.paginate', {total: _vm.total})))])],1)]),(_vm.table.fields)?_c('b-table',{ref:"table",staticClass:"data-table",attrs:{"items":_vm.fetchItems,"fields":_vm.table.fields,"current-page":_vm.currentPage,"sort-by":_vm.sortBy,"sort-desc":_vm.sortDesc,"sort-direction":_vm.sortDirection},on:{"update:sortBy":function($event){_vm.sortBy=$event},"update:sortDesc":function($event){_vm.sortDesc=$event}},scopedSlots:_vm._u([_vm._l((_vm.table.fields),function(field,key){return {key:("HEAD_" + key),fn:function(data){return [_c('div',{key:key,staticClass:"table-header",class:{'text-right': ['number'].includes(field.type)}},[_vm._v(_vm._s(field.label || key))])]}}}),_vm._l((_vm.table.fields),function(field,key){return {key:key,fn:function(row){return [_c('b-data-value',{key:key,attrs:{"field":field,"name":key,"model":row.item,"short-id":""}})]}}}),{key:"_actions",fn:function(row){return [_vm._l((_vm.actions),function(field,key){return (field.label)?_c('b-button',_vm._b({key:key,staticClass:"mr-1",attrs:{"to":_vm._.template(field.to)(row),"size":"sm"}},'b-button',field,false),[_vm._v(_vm._s(field.label))]):_vm._e()}),(_vm.actions.edit !== false)?_c('b-btn',{staticClass:"mr-1",attrs:{"variant":"success","size":"sm","to":("/rest/" + _vm.uri + "/" + (row.item[_vm.$config.primaryKey]))}},[_vm._v(_vm._s(_vm.$t('actions.view')))]):_vm._e(),(_vm.actions.edit !== false)?_c('b-btn',{staticClass:"mr-1",attrs:{"variant":"primary","size":"sm","to":("/rest/" + _vm.uri + "/" + (row.item[_vm.$config.primaryKey]) + "/edit")}},[_vm._v(_vm._s(_vm.$t('actions.edit')))]):_vm._e(),(_vm.actions.delete !== false)?_c('b-btn',{attrs:{"size":"sm"},on:{"click":function($event){$event.stopPropagation();_vm.remove(row.item[_vm.$config.primaryKey])}}},[_vm._v(_vm._s(_vm.$t('actions.delete')))]):_vm._e()]}}])}):_vm._e(),_c('div',{staticClass:"row align-items-center"},[_c('div',{staticClass:"col-md-10"},[_c('b-pagination',{attrs:{"limit":_vm.pageLimit,"total-rows":_vm.total,"per-page":_vm.perPage},model:{value:(_vm.currentPage),callback:function ($$v) {_vm.currentPage=$$v},expression:"currentPage"}})],1),_c('div',{staticClass:"col-md-2 text-right"},[_vm._v(_vm._s(_vm.$t('messages.paginate', {total: _vm.total})))])])],1)])}
var CustomTablevue_type_template_id_f648cef6_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/CustomTable.vue?vue&type=template&id=f648cef6&

// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/CustomTable.vue?vue&type=script&lang=js&
var CustomTablevue_type_script_lang_js_ = __webpack_require__("629a");

// CONCATENATED MODULE: ./src/views/CustomTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_CustomTablevue_type_script_lang_js_ = (CustomTablevue_type_script_lang_js_["a" /* default */]); 
// CONCATENATED MODULE: ./src/views/CustomTable.vue





/* normalize component */

var CustomTable_component = Object(componentNormalizer["a" /* default */])(
  views_CustomTablevue_type_script_lang_js_,
  CustomTablevue_type_template_id_f648cef6_render,
  CustomTablevue_type_template_id_f648cef6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

CustomTable_component.options.__file = "CustomTable.vue"
/* harmony default export */ var CustomTable = (CustomTable_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ResourceIndex.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var ResourceIndexvue_type_script_lang_js_ = ({
  name: "resource-index",
  components: {
    BDataTable: DataTable,
    CustomTable: CustomTable
  },
  data: function data() {
    return {};
  },
  computed: {
    resource: function resource() {
      return this.$route.params.resource;
    }
  },
  methods: {},
  created: function created() {}
});
// CONCATENATED MODULE: ./src/views/ResourceIndex.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_ResourceIndexvue_type_script_lang_js_ = (ResourceIndexvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/ResourceIndex.vue





/* normalize component */

var ResourceIndex_component = Object(componentNormalizer["a" /* default */])(
  views_ResourceIndexvue_type_script_lang_js_,
  ResourceIndexvue_type_template_id_23f0ad2f_render,
  ResourceIndexvue_type_template_id_23f0ad2f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

ResourceIndex_component.options.__file = "ResourceIndex.vue"
/* harmony default export */ var ResourceIndex = (ResourceIndex_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13fa2dae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ResourceEdit.vue?vue&type=template&id=b445053e&
var ResourceEditvue_type_template_id_b445053e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-data-form',{attrs:{"resource":_vm.resource,"id":_vm.id,"languages":_vm.$store.state.site.languages}})],1)}
var ResourceEditvue_type_template_id_b445053e_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/ResourceEdit.vue?vue&type=template&id=b445053e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13fa2dae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DataForm.vue?vue&type=template&id=55b47536&
var DataFormvue_type_template_id_55b47536_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"data-form"},[_c('div',{staticClass:"row d-none"},[_c('div',{staticClass:"col col-md-8"},[(_vm.model[_vm.$config.primaryKey] && false)?_c('legend',[_vm._v(_vm._s(_vm.$t('actions.edit'))+": "+_vm._s(_vm.model[_vm.$config.primaryKey]))]):_vm._e()]),_c('div',{staticClass:"col col-md-4 text-right hidden-sm-down"},[_c('b-btn',{on:{"click":function($event){_vm.$router.go(-1)}}},[_vm._v(_vm._s(_vm.$t('actions.back')))]),_c('b-btn',{attrs:{"variant":"primary"},on:{"click":function($event){_vm.$refs.form.submitForm()}}},[_vm._v(_vm._s(_vm.$t('actions.save')))])],1)]),(_vm.loaded)?_c('b-form-builder',{ref:"form",attrs:{"languages":_vm.$store.state.site.languages,"group-by":"group","auth":_vm.auth,"layout":_vm.layout,"fields":_vm.fields,"action":_vm.resourceUri,"method":_vm.method},on:{"success":_vm.onSuccess},model:{value:(_vm.model),callback:function ($$v) {_vm.model=$$v},expression:"model"}}):_vm._e()],1)}
var DataFormvue_type_template_id_55b47536_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/DataForm.vue?vue&type=template&id=55b47536&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DataForm.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var DataFormvue_type_script_lang_js_ = ({
  components: {},
  props: {
    resource: {
      type: String,
      required: true
    },
    id: {
      default: "",
      required: true
    },
    formPath: {
      type: String,
      default: "form",
      required: false
    }
  },
  data: function data() {
    return {
      redirect: -1,
      loaded: false,
      choices: {},
      fields: {},
      model: {},
      errors: [],
      tag: "b-card",
      header: "\n        ".concat(lodash_default.a.get(this.currentMenu, "name", "") || "", "\n        <small> ").concat(this.resource.toUpperCase(), " </small>\n      ")
    };
  },
  watch: {
    id: "fetchForm",
    "site.fetched": function siteFetched(val) {
      if (val) {
        this.fetchForm(true);
      }
    }
  },
  computed: Object(objectSpread["a" /* default */])({
    resourceUri: function resourceUri() {
      var url = [this.site.resource_prefix, this.resource, this.id].filter(function (v) {
        return v;
      }).join("/");
      var group = this.$route.params.group;

      if (group) {
        url += "?group=" + group;
      }

      return url;
    },
    formUri: function formUri() {
      var url = [this.site.resource_prefix, this.resource, this.formPath].filter(function (v) {
        return v;
      }).join("/");
      url += "?id=" + (this.id || "");
      return url;
    },
    isNew: function isNew() {
      return !this.id;
    },
    method: function method() {
      return this.isNew ? "post" : "put";
    },
    with: function _with() {
      return lodash_default.a.filter(lodash_default.a.map(this.fields, function (v) {
        return v.ref && v.ref.split(".").shift();
      }));
    }
  }, Object(vuex_esm["b" /* mapState */])(["nav", "auth", "site"]), Object(vuex_esm["a" /* mapGetters */])(["currentMenu"])),
  methods: {
    fetch: function fetch() {
      var _this = this;

      if (this.isNew) {
        this.model = {};
        this.loaded = true;
        return;
      }

      this.$http.get(this.resourceUri, {
        params: {
          query: {
            with: this.with
          }
        }
      }).then(function (_ref) {
        var data = _ref.data;
        _this.loaded = true;
        _this.model = data;
      });
    },
    fetchForm: function fetchForm() {
      var _this2 = this;

      this.$http.get(this.formUri, {
        params: this.$route.params
      }).then(function (_ref2) {
        var data = _ref2.data;
        _this2.fields = data.fields;
        _this2.layout = data.layout;
        _this2.redirect = data.redirect;

        if (data.header) {
          _this2.header = data.header;
        }

        if (data.tag) {
          _this2.tag = data.tag;
        }

        _this2.fetch();
      });
    },
    onSuccess: function onSuccess() {
      if (this.redirect === false) {
        this.fetchForm();
      } else if (this.redirect === -1 || !this.redirect) {
        this.$router.go(-1);
      } else {
        this.$router.go(this.redirect);
      }
    }
  },
  mounted: function mounted() {
    this.site.fetched && this.fetchForm();
  },
  created: function created() {// this.fetchForm();
  }
});
// CONCATENATED MODULE: ./src/components/DataForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DataFormvue_type_script_lang_js_ = (DataFormvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/DataForm.vue





/* normalize component */

var DataForm_component = Object(componentNormalizer["a" /* default */])(
  components_DataFormvue_type_script_lang_js_,
  DataFormvue_type_template_id_55b47536_render,
  DataFormvue_type_template_id_55b47536_staticRenderFns,
  false,
  null,
  null,
  null
  
)

DataForm_component.options.__file = "DataForm.vue"
/* harmony default export */ var DataForm = (DataForm_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ResourceEdit.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var ResourceEditvue_type_script_lang_js_ = ({
  name: "resource-edit",
  components: {
    BDataForm: DataForm
  },
  data: function data() {
    return {};
  },
  computed: {
    id: function id() {
      return this.$route.params.id;
    },
    resource: function resource() {
      return this.$route.params.resource;
    }
  },
  watch: {},
  methods: {},
  created: function created() {}
});
// CONCATENATED MODULE: ./src/views/ResourceEdit.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_ResourceEditvue_type_script_lang_js_ = (ResourceEditvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/ResourceEdit.vue





/* normalize component */

var ResourceEdit_component = Object(componentNormalizer["a" /* default */])(
  views_ResourceEditvue_type_script_lang_js_,
  ResourceEditvue_type_template_id_b445053e_render,
  ResourceEditvue_type_template_id_b445053e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

ResourceEdit_component.options.__file = "ResourceEdit.vue"
/* harmony default export */ var ResourceEdit = (ResourceEdit_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13fa2dae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ResourceShow.vue?vue&type=template&id=491f6944&
var ResourceShowvue_type_template_id_491f6944_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-row',[_c('b-col',{attrs:{"cols":"12","xl":"12"}},[_c('b-data-view',{attrs:{"resource":_vm.resource,"id":_vm.id}})],1)],1)],1)}
var ResourceShowvue_type_template_id_491f6944_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/ResourceShow.vue?vue&type=template&id=491f6944&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13fa2dae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DataView.vue?vue&type=template&id=71adf43e&
var DataViewvue_type_template_id_71adf43e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-view"},[_c('div',{staticClass:"data-view"},[(_vm.model[_vm.$config.primaryKey])?_c('legend',[_vm._v(_vm._s(_vm.$t('actions.view'))+": "+_vm._s(_vm.model[_vm.$config.primaryKey]))]):_vm._e(),_c('table',{staticClass:"table "},[_c('tbody',_vm._l((_vm.fields),function(field,key){return _c('tr',{key:key},[_c('th',{staticStyle:{"min-width":"120px"}},[_vm._v(_vm._s(field.label || key))]),_c('td',[(['array'].includes(field.type))?_c('div',[_c('b-table',{attrs:{"items":_vm.model[key],"fields":field.fields},scopedSlots:_vm._u([_vm._l((field.fields),function(child,k){return {key:k,fn:function(row){return [_c('b-data-value',{key:k,attrs:{"lang":_vm.currentLanguage,"field":child,"name":k,"model":row.item}})]}}})])})],1):_c('div',[_c('b-data-value',{attrs:{"lang":_vm.currentLanguage,"field":field,"name":key,"model":_vm.model}})],1)])])}),0)])]),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_c('b-btn',{on:{"click":function($event){_vm.$router.go(-1)}}},[_vm._v(_vm._s(_vm.$t('actions.back')))])],1)])}
var DataViewvue_type_template_id_71adf43e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/DataView.vue?vue&type=template&id=71adf43e&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DataView.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var DataViewvue_type_script_lang_js_ = ({
  components: {
    BDataValue: DataValue["a" /* default */]
  },
  props: {
    resource: {
      type: String,
      required: true
    },
    id: {
      default: '',
      required: true
    },
    viewPath: {
      type: String,
      default: "view",
      required: false
    }
  },
  data: function data() {
    return {
      choices: {},
      fields: {},
      model: {},
      errors: [],
      items: []
    };
  },
  computed: Object(objectSpread["a" /* default */])({
    resourceUri: function resourceUri() {
      var url = [this.site.resource_prefix, this.resource, this.id].filter(function (v) {
        return v;
      }).join("/");
      return url;
    },
    viewUri: function viewUri() {
      var url = [this.site.resource_prefix, this.resource, this.viewPath].filter(function (v) {
        return v;
      }).join("/");
      url += "?id=" + (this.id || "");
      return url;
    },
    with: function _with() {
      return lodash_default.a.filter(lodash_default.a.map(this.fields, function (v) {
        return v.ref && v.ref.replace(/\.\w+$/, '');
      }));
    }
  }, Object(vuex_esm["b" /* mapState */])(['site']), Object(vuex_esm["a" /* mapGetters */])(["currentMenu", "currentLanguage"]), {
    header: function header() {
      return "\n        ''\n        <small> ".concat(this.resource.toUpperCase(), " </small>\n      ");
    }
  }),
  methods: {
    fetch: function fetch() {
      var _this = this;

      this.$http.get(this.resourceUri, {
        params: {
          query: {
            with: this.with
          }
        }
      }).then(function (_ref) {
        var data = _ref.data;
        _this.model = data;
      });
    },
    fetchView: function fetchView() {
      var _this2 = this;

      this.$http.get(this.viewUri).then(function (_ref2) {
        var data = _ref2.data;
        _this2.fields = data.fields;
        delete _this2.fields._actions;

        _this2.fetch();
      });
    }
  },
  watch: {
    id: "fetchForm",
    "site.fetched": function siteFetched(val) {
      if (val) {
        this.fetchView(true);
      }
    }
  },
  mounted: function mounted() {},
  created: function created() {
    this.site.fetched && this.fetchView();
  }
});
// CONCATENATED MODULE: ./src/components/DataView.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DataViewvue_type_script_lang_js_ = (DataViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/DataView.vue





/* normalize component */

var DataView_component = Object(componentNormalizer["a" /* default */])(
  components_DataViewvue_type_script_lang_js_,
  DataViewvue_type_template_id_71adf43e_render,
  DataViewvue_type_template_id_71adf43e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

DataView_component.options.__file = "DataView.vue"
/* harmony default export */ var DataView = (DataView_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ResourceShow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ResourceShowvue_type_script_lang_js_ = ({
  components: {
    BDataView: DataView
  },
  data: function data() {
    return {};
  },
  computed: {
    id: function id() {
      return this.$route.params.id;
    },
    resource: function resource() {
      return this.$route.params.resource;
    }
  },
  methods: {},
  created: function created() {}
});
// CONCATENATED MODULE: ./src/views/ResourceShow.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_ResourceShowvue_type_script_lang_js_ = (ResourceShowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/ResourceShow.vue





/* normalize component */

var ResourceShow_component = Object(componentNormalizer["a" /* default */])(
  views_ResourceShowvue_type_script_lang_js_,
  ResourceShowvue_type_template_id_491f6944_render,
  ResourceShowvue_type_template_id_491f6944_staticRenderFns,
  false,
  null,
  null,
  null
  
)

ResourceShow_component.options.__file = "ResourceShow.vue"
/* harmony default export */ var ResourceShow = (ResourceShow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13fa2dae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ResourceStat.vue?vue&type=template&id=a99d325a&
var ResourceStatvue_type_template_id_a99d325a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-row',[_c('b-col',{attrs:{"cols":"6","lg":"8"}},[_c('b-card',{attrs:{"header":_vm.resource}},[_c('b-data-chart',{attrs:{"resource":_vm.resource,"id":_vm.id,"group":_vm.group}})],1)],1)],1)],1)}
var ResourceStatvue_type_template_id_a99d325a_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/ResourceStat.vue?vue&type=template&id=a99d325a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DataChart.vue?vue&type=script&lang=js&
// import Chart from "vue-chartjs";
/* harmony default export */ var DataChartvue_type_script_lang_js_ = ({
  // extends: Chart.Pie,
  props: {
    resource: {
      type: String,
      required: true
    },
    group: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      options: {}
    };
  },
  computed: {
    resourceUri: function resourceUri() {
      return this.resource + "/stat";
    }
  },
  methods: {
    fetch: function fetch() {
      var _this = this;

      this.$http.get(this.resourceUri, {
        params: {
          group: this.group
        }
      }).then(function (_ref) {
        var data = _ref.data;
        _this.options = data;

        _this.renderChart(_this.options);
      });
    }
  },
  mounted: function mounted() {
    // Overwriting base render method with actual data.
    this.fetch();
  }
});
// CONCATENATED MODULE: ./src/components/DataChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DataChartvue_type_script_lang_js_ = (DataChartvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/DataChart.vue
var DataChart_render, DataChart_staticRenderFns




/* normalize component */

var DataChart_component = Object(componentNormalizer["a" /* default */])(
  components_DataChartvue_type_script_lang_js_,
  DataChart_render,
  DataChart_staticRenderFns,
  false,
  null,
  null,
  null
  
)

DataChart_component.options.__file = "DataChart.vue"
/* harmony default export */ var DataChart = (DataChart_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ResourceStat.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ResourceStatvue_type_script_lang_js_ = ({
  name: "resource-stat",
  components: {
    BDataChart: DataChart
  },
  data: function data() {
    return {};
  },
  computed: {
    id: function id() {
      return this.$route.params.id;
    },
    resource: function resource() {
      return this.$route.params.resource;
    },
    group: function group() {
      return this.$route.query.group || 'status';
    }
  },
  methods: {},
  created: function created() {}
});
// CONCATENATED MODULE: ./src/views/ResourceStat.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_ResourceStatvue_type_script_lang_js_ = (ResourceStatvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/ResourceStat.vue





/* normalize component */

var ResourceStat_component = Object(componentNormalizer["a" /* default */])(
  views_ResourceStatvue_type_script_lang_js_,
  ResourceStatvue_type_template_id_a99d325a_render,
  ResourceStatvue_type_template_id_a99d325a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

ResourceStat_component.options.__file = "ResourceStat.vue"
/* harmony default export */ var ResourceStat = (ResourceStat_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13fa2dae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/CustomForm.vue?vue&type=template&id=c39a527a&
var CustomFormvue_type_template_id_c39a527a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-card',{attrs:{"header":_vm.form.header}},[_c('div',{staticClass:"custom-form"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col col-md-8"},[_c('legend',[_vm._v(_vm._s(_vm.form.title))])]),_c('div',{staticClass:"col col-md-4 text-right hidden-sm-down"},[_c('b-btn',{on:{"click":function($event){_vm.$router.go(-1)}}},[_vm._v(_vm._s(_vm.$t('actions.back')))]),_c('b-btn',{attrs:{"variant":"primary"},on:{"click":function($event){_vm.$refs.form.handleSubmit()}}},[_vm._v(_vm._s(_vm.form.submitText || _vm.$t('actions.save')))])],1)]),(_vm.form.fields)?_c('b-form-builder',_vm._b({ref:"form",attrs:{"auth":_vm.auth},on:{"success":_vm.onSuccess}},'b-form-builder',_vm.form,false)):_vm._e()],1)])}
var CustomFormvue_type_template_id_c39a527a_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/CustomForm.vue?vue&type=template&id=c39a527a&

// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/CustomForm.vue?vue&type=script&lang=js&
var CustomFormvue_type_script_lang_js_ = __webpack_require__("1484");

// CONCATENATED MODULE: ./src/views/CustomForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_CustomFormvue_type_script_lang_js_ = (CustomFormvue_type_script_lang_js_["a" /* default */]); 
// CONCATENATED MODULE: ./src/views/CustomForm.vue





/* normalize component */

var CustomForm_component = Object(componentNormalizer["a" /* default */])(
  views_CustomFormvue_type_script_lang_js_,
  CustomFormvue_type_template_id_c39a527a_render,
  CustomFormvue_type_template_id_c39a527a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

CustomForm_component.options.__file = "CustomForm.vue"
/* harmony default export */ var CustomForm = (CustomForm_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13fa2dae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/CustomPage.vue?vue&type=template&id=0417db3f&
var CustomPagevue_type_template_id_0417db3f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('custom-component',{attrs:{"config":_vm.page}})],1)}
var CustomPagevue_type_template_id_0417db3f_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/CustomPage.vue?vue&type=template&id=0417db3f&

// EXTERNAL MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/CustomPage.vue?vue&type=script&lang=js&
var CustomPagevue_type_script_lang_js_ = __webpack_require__("c3c7");

// CONCATENATED MODULE: ./src/views/CustomPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_CustomPagevue_type_script_lang_js_ = (CustomPagevue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./src/views/CustomPage.vue?vue&type=style&index=0&lang=css&
var CustomPagevue_type_style_index_0_lang_css_ = __webpack_require__("bf45");

// CONCATENATED MODULE: ./src/views/CustomPage.vue






/* normalize component */

var CustomPage_component = Object(componentNormalizer["a" /* default */])(
  views_CustomPagevue_type_script_lang_js_,
  CustomPagevue_type_template_id_0417db3f_render,
  CustomPagevue_type_template_id_0417db3f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

CustomPage_component.options.__file = "CustomPage.vue"
/* harmony default export */ var CustomPage = (CustomPage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"13fa2dae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=template&id=a1d430ec&
var Homevue_type_template_id_a1d430ec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('div',{staticClass:"row"},_vm._l((_vm.data.statics),function(item,index){return _c('div',{key:index,staticClass:"col-sm-6 col-md-3"},[_c('b-card',{staticClass:"text-white",class:[("bg-" + (item.bg))]},[_c('div',{staticClass:"h1 text-right mb-4"},[_c('i',{class:[item.icon]})]),_c('div',{staticClass:"h4 mb-0"},[_vm._v(_vm._s(item.value))]),_c('small',{staticClass:"text-uppercase font-weight-bold"},[_vm._v(_vm._s(item.title))]),_c('b-progress',{staticClass:"progress-white progress-xs mt-3",attrs:{"value":item.progress}})],1)],1)}),0),_c('div',{staticClass:"jumbotron mt-3"},[_c('h1',{staticClass:"display-4",domProps:{"innerHTML":_vm._s(_vm.data.title)}}),_c('div',{staticClass:"lead",domProps:{"innerHTML":_vm._s(_vm.data.description)}}),(_vm.data.button)?_c('b-button',_vm._b({},'b-button',_vm.data.button,false),[(_vm.data.button.icon)?_c('i',{class:[_vm.data.button.icon]}):_vm._e(),_vm._v("\n      "+_vm._s(_vm.data.button.text)+"\n    ")]):_vm._e()],1),(_vm.data.html)?_c('div',{domProps:{"innerHTML":_vm._s(_vm.data.html)}}):_vm._e()])}
var Homevue_type_template_id_a1d430ec_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=template&id=a1d430ec&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Homevue_type_script_lang_js_ = ({
  data: function data() {
    return {
      data: {},
      html: ""
    };
  },
  methods: {
    fetch: function fetch() {
      var _this = this;

      this.$http.get("home").then(function (_ref) {
        var data = _ref.data;
        _this.data = data;
      });
    }
  },
  created: function created() {
    this.fetch();
  }
});
// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_Homevue_type_script_lang_js_ = (Homevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/Home.vue





/* normalize component */

var Home_component = Object(componentNormalizer["a" /* default */])(
  views_Homevue_type_script_lang_js_,
  Homevue_type_template_id_a1d430ec_render,
  Homevue_type_template_id_a1d430ec_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Home_component.options.__file = "Home.vue"
/* harmony default export */ var Home = (Home_component.exports);
// CONCATENATED MODULE: ./src/routes.js









routes: [{
  path: "/",
  redirect: "/home"
}, {
  path: "/home",
  name: "home",
  component: Home
}, {
  path: "/rest/:resource/stat/:type?",
  name: "stat",
  component: ResourceStat
}, {
  path: "/rest/:resource",
  name: "index",
  component: ResourceIndex
}, {
  path: "/rest/:resource/create/:group?",
  name: "create",
  component: ResourceEdit
}, {
  path: "/rest/:resource/:id/edit/:group?",
  name: "edit",
  component: ResourceEdit
}, {
  path: "/rest/:resource/:id/:group?",
  name: "show",
  component: ResourceShow
}, {
  path: "/form/:uri?",
  name: "form",
  component: CustomForm
}, {
  path: "/table/:uri?",
  name: "table",
  component: CustomTable
}, {
  path: "/page/:uri?",
  name: "page",
  component: CustomPage
}];

/* harmony default export */ var src_routes = (routes);
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return restAdminPlugin; });

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.












var optionsDefaults = {};
var restAdminPlugin = {
  install: function install(Vue, opts) {
    // Merge options argument into options defaults
    var options = Object(objectSpread["a" /* default */])({}, optionsDefaults, opts);

    Vue.prototype.$storage = storage;
    Vue.prototype._ = lodash_default.a;
    Vue.prototype.$config = src_config;
    Vue.prototype.$inflection = inflection_default.a;
    form_install(Vue);
    Vue.use(vue_snotify_esm["a" /* default */]);
  },
  routes: src_routes
};

/***/ }),

/***/ "ba6a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("795b");
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a745");
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2ef0");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var API_URI = "http://localhost:8088/admin/api/" || false;
global.API_URI = API_URI;
axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.baseURL = API_URI;
global.LOADING_ENABLED = true;
axios__WEBPACK_IMPORTED_MODULE_3___default.a.interceptors.request.use(function (config) {
  // global.LOADING_ENABLED && store.commit(types.START_LOADING)
  config.headers.Authorization = 'Bearer ' + store.state.auth.token;
  return config;
});
axios__WEBPACK_IMPORTED_MODULE_3___default.a.interceptors.response.use(function (response) {
  // store.commit(types.STOP_LOADING)
  global.LOADING_ENABLED = true;

  var pageHeader = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(response, 'data._meta.page_header'); // store.commit(types.SET_PAGE_HEADER, pageHeader)


  return response;
}, function (_ref) {
  var response = _ref.response;
  // store.commit(types.STOP_LOADING)
  var data = response.data,
      status = response.status,
      statusText = response.statusText;

  switch (status) {
    case 422:
      break;

    case 401:
      // vm.$snotify.error('请先登录')
      // store.dispatch(types.GO_LOGIN)
      break;

    case 404:
      vue__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.$snotify.error(String(statusText));
      break;
  }

  var msg = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(data, 'message', lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(data, 'error.message', lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(data, '0.message')));

  if (_home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(msg)) {
    msg = msg[0].message;
  }

  if (msg) {
    vue__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.$snotify.error(String(msg));
  } else {// console.error(data)
  }

  return _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(response);
});
vue__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.$http = axios__WEBPACK_IMPORTED_MODULE_3___default.a;
/* unused harmony default export */ var _unused_webpack_default_export = (axios__WEBPACK_IMPORTED_MODULE_3___default.a);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "bab9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bf45":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("75d3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c3c7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5176");
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6b54");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__);



//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {},
  data: function data() {
    return {
      loaded: false,
      name: null,
      page: null
    };
  },
  computed: {
    uri: function uri() {
      return this.$route.params.uri.replace(/\./g, "/");
    }
  },
  watch: {
    $route: "fetch"
  },
  methods: {
    fetch: function fetch() {
      this.fetchPage();
    },
    render: function render() {},
    fetchPage: function fetchPage() {
      var _this = this;

      this.$http.get(this.uri).then(function (_ref) {
        var data = _ref.data;
        data.name = "server-page-" + new Date().getTime().toString();
        _this.page = _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, data);
      });
    },
    onSuccess: function onSuccess(data) {
      var message = data.message,
          then = data.then,
          redirect = data.redirect;

      if (message) {
        this.$snotify.success(message);
      }

      if (then) {
        eval(then);
      } else if (redirect) {
        this.$router.push({
          path: redirect
        });
      } else {
        this.$router.go(-1);
      }
    }
  },
  mounted: function mounted() {},
  created: function created() {
    this.fetchPage();
  }
});

/***/ }),

/***/ "d751":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("768b");
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2d1f");
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7514");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("7f7f");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ac6a");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cadf");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("5176");
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("c5f6");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("e814");
/* harmony import */ var _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("2ef0");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);









//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "b-form-builder",
  components: {},
  props: {
    subForm: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: function _default() {
        return "form_" + _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_8___default()(Math.random() * 9999);
      }
    },
    auth: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    col: {
      type: Number,
      default: 12
    },
    languages: {},
    inline: {
      type: Boolean,
      default: false
    },
    useFormData: {
      type: Boolean,
      default: false
    },
    submitRawForm: {
      type: Boolean,
      default: false
    },
    groupBy: {
      type: String,
      default: null
    },
    value: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    fields: {
      required: true,
      default: function _default() {
        return {};
      }
    },
    layout: {
      required: false,
      default: function _default() {
        return {};
      }
    },
    onSubmit: {
      type: Function,
      required: false
    },
    beforeSubmit: {
      type: Function,
      required: false
    },
    action: {},
    method: {
      default: "post"
    },
    submitText: {
      default: function _default() {
        return this.$t ? this.$t("actions.save") : "Submit";
      }
    },
    backText: {
      default: function _default() {
        return this.$t ? this.$t("actions.back") : "Back";
      }
    },
    successMessage: {
      default: function _default() {
        return this.$t ? this.$t("messages.succeed") : "Succeed";
      }
    }
  },
  data: function data() {
    return {
      model: null,
      errors: []
    };
  },
  watch: {
    value: function value(val) {
      this.model = _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_6___default()({}, val);
    }
  },
  computed: {
    tag: function tag() {
      return this.subForm ? "div" : "form";
    },
    actionUrl: function actionUrl() {
      return global.API_URI + this.action;
    },
    groupedFields: function groupedFields() {
      var _this = this;

      var ret = {};

      lodash__WEBPACK_IMPORTED_MODULE_9___default.a.keys(lodash__WEBPACK_IMPORTED_MODULE_9___default.a.groupBy(this.fields, this.groupBy)).map(function (v) {
        var tabName = v;

        if (v === "undefined") {
          v = null;
          tabName = _this.$t("messages.default");
        }

        ret[tabName] = lodash__WEBPACK_IMPORTED_MODULE_9___default.a.pickBy(_this.fields, function (field) {
          return field.group == v;
        });
      });

      return ret;
    }
  },
  methods: {
    getFieldId: function getFieldId(name) {
      if (this.subForm) {
        return "input_".concat(this.subForm, "_").concat(name);
      }

      return "input_".concat(name);
    },
    getFieldName: function getFieldName(name) {
      if (this.subForm) {
        return "".concat(this.subForm, "[").concat(name, "]");
      }

      return name;
    },
    setValue: function setValue(name, value, lang) {
      var isIntl = this.fields[name].multilingual || this.fields[name].intl;

      if (!isIntl) {
        this.$set(this.model, name, value); // _.set(this.model, name, value);
      } else if (lang && !lodash__WEBPACK_IMPORTED_MODULE_9___default.a.isObject(this.model[name])) {
        this.$set(this.model, name, {});
      } else {
        this.$set(this.model[name], lang, value);
      }

      return this.$emit('input', this.model);
    },
    titlize: function titlize() {},
    isShowField: function isShowField(field) {
      return !field.showWhen || this.model[field.showWhen] || eval(field.showWhen);
    },
    getInputClass: function getInputClass() {
      return []; // const classNames = [];
      // classNames.push(`col-lg-${field.input_cols ? field.input_cols : "12"}`);
      // return classNames;
    },
    getClass: function getClass(field) {
      var cols = field.cols ? field.cols : 12;
      var classNames = ["col-lg-" + cols, "col-" + Math.min(12, cols * 2)];
      return classNames;
    },
    hasError: function hasError(name) {
      return lodash__WEBPACK_IMPORTED_MODULE_9___default.a.find(this.errors, function (v) {
        return v.field == name;
      });
    },
    submitForm: function submitForm() {
      this.$refs.submitButton.click();
    },
    handleSubmit: function handleSubmit() {
      var _this2 = this;

      if (this.beforeSubmit) {
        var ret = this.beforeSubmit(this.model);

        if (ret === false) {
          return false;
        }
      }

      if (this.submitRawForm) {
        this.$refs.form.submit();
        return true;
      }

      if (this.onSubmit) {
        return this.onSubmit(this.model);
      }

      var methodName = String(this.method).toLowerCase(); // console.log(this.$refs.form);

      var formData = this.model;

      if (this.useFormData) {
        formData = new FormData();

        lodash__WEBPACK_IMPORTED_MODULE_9___default.a.mapValues(this.model, function (v, k) {
          return formData.append(k, v);
        });
      }

      this.$http[methodName](this.action, formData).then(function (_ref) {
        var data = _ref.data;

        if (_this2.successMessage) {
          _this2.$snotify.success(_this2.successMessage);
        }

        _this2.errors = [];

        _this2.$emit("success", data);
      }).catch(function (_ref2) {
        var data = _ref2.data,
            status = _ref2.status;

        if (status == 422) {
          _this2.errors = data.message;
        }
      });
    }
  },
  mounted: function mounted() {
    this.model = _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_6___default()({}, this.value);

    var _arr = _home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(this.fields);

    for (var _i = 0; _i < _arr.length; _i++) {
      var _arr$_i = Object(_home_fouad_projects_rest_admin_node_modules_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_arr[_i], 2),
          k = _arr$_i[0],
          v = _arr$_i[1];

      if (v.type === "object" && !this.model[k]) {
        this.$set(this.model, k, {});
      }
    } // global.console.log(this.fields, this.model)

  },
  created: function created() {}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ })

/******/ });