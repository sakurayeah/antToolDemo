## code

```css
body {
  background: #ddd;
}
```

```html
<div class="test"></div>
```

```js
import $ from 'jquery';
import { util, Button } from 'index';
const abc = util.userAgent();
console.log(abc)

var btn = new Button({
  wrap: $('.test'),
  txt: '123',
  type: 'danger',
});

btn.render();
```