# Textarea with tab indentation for Vue.js 2

<a href="https://www.npmjs.com/package/vue-itextarea">
    <img alt="npm" src="https://img.shields.io/npm/dt/vue-itextarea?logo=npm">
</a>

<a href="https://github.com/beaubus/vue-itextarea/blob/master/LICENSE">
    <img alt="MIT" src="https://img.shields.io/github/license/beaubus/vue-itextarea">
</a>
&nbsp;&nbsp;
<a href="https://twitter.com/intent/follow?screen_name=daily_web_dev">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/daily_web_dev?style=social">
</a>

<br>
<br>

An intuitive package that enhances textareas by allowing the use of the Tab key for indentation, automatically replacing tabs with spaces. It also supports the use of the Escape key to either unfocus the textarea or move to the next sibling element. Simple and efficient for improving user text input experience.

![](demo.gif)

<a href="https://www.beaubus.com/packages/#vue-itextarea">Demo</a>

## Installation

NPM
```bash
npm i vue-itextarea
```

CDN
```bash
<script src="https://www.unpkg.com/vue-itextarea/dist/vue-itextarea.min.js"></script>
```

## Usage
```js
import vue_itextarea from 'vue-itextarea';
Vue.component('vue-itextarea', vue_itextarea);
```

```html
<vue-itextarea v-model="demo"
               class="demo"
               placeholder="Press the Tab key"
></vue-itextarea>
```

## Properties
| Name            | Type              | Default     | Description                                        |
| ---             | ---               | ---         | ---                                                |
| value           |                   |             | value for v-model                                  |
| TAB_SIZE        | Number            | 4           | Number of spaces tab got automatically replaced by |


## Events
| Name   | Description              |
| ---    | ---                      |
| input  | Input event for v-model  |


## License
The MIT License (MIT). Please see [License File](LICENSE) for more information.
