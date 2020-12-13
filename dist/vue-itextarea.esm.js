//
//
//
//
//
//
//
//
var script = {
  name: 'vue-itextarea',
  props: {
    value: {},
    TAB_SIZE: {
      default: 4
    }
  },

  data() {
    return {
      current_value: this.value ? this.value : ''
    };
  },

  methods: {
    /**
     * Keyboard shortcuts support, like <ctrl-v>
     */
    change(event) {
      this.$emit('input', event.target.value);
    },

    updateValue(event) {
      var target = event.target;
      var value = target.value;
      var start = target.selectionStart;
      var end = target.selectionEnd;

      if (event.key === 'Escape') {
        if (event.target.nextElementSibling) event.target.nextElementSibling.focus();else event.target.blur();
        return;
      }

      if (event.key === 'Tab' && !event.metaKey) {
        event.preventDefault();
        value = value.substring(0, start) + ' '.repeat(this.TAB_SIZE) + value.substring(end);
        event.target.value = value;
        setTimeout(() => target.selectionStart = target.selectionEnd = start + this.TAB_SIZE, 0);
      }

      if (event.key === 'Backspace' && !event.metaKey) {
        let chars_before_cursor = value.substr(start - this.TAB_SIZE, this.TAB_SIZE);

        if (chars_before_cursor === ' '.repeat(this.TAB_SIZE)) {
          event.preventDefault();
          value = value.substring(0, start - this.TAB_SIZE) + value.substring(end);
          event.target.value = value;
          setTimeout(() => target.selectionStart = target.selectionEnd = start - this.TAB_SIZE, 0);
        }
      }

      if (event.key === 'Enter') {
        let current_line = value.substr(0, start).split("\n").pop(); // line, we are currently on

        if (current_line && current_line.startsWith(' '.repeat(this.TAB_SIZE))) {
          // type tab
          event.preventDefault(); // detect how many tabs in the begining and apply

          let spaces_count = current_line.search(/\S|$/); // position of first non white-space character

          let tabs_count = spaces_count ? spaces_count / this.TAB_SIZE : 0;
          value = value.substring(0, start) + '\n' + ' '.repeat(this.TAB_SIZE).repeat(tabs_count) + this.current_value.substring(end);
          event.target.value = value;
          setTimeout(() => target.selectionStart = target.selectionEnd = start + this.TAB_SIZE * tabs_count + 1, 0);
        }
      }

      setTimeout(() => {
        this.current_value = event.target.value;
        this.$emit('input', event.target.value);
      }, 0);
    }

  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('textarea', {
    domProps: {
      "value": _vm.current_value
    },
    on: {
      "keydown": function ($event) {
        return _vm.updateValue($event);
      },
      "input": function ($event) {
        return _vm.change($event);
      }
    }
  });
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

// Import vue component

const install = function installVueItextarea(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VueItextarea', __vue_component__);
}; // Create module definition for Vue.use()
// to be registered via Vue.use() as well as Vue.component()


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default __vue_component__;
