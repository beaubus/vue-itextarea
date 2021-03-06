# Textarea with tab indentation

Use tab to indent in textareas (tab got automatically replaced by spaces).  
Escape to unfocus or move to the next sibling.  
![](demo.gif)

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
               placeholder="Demo"
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
