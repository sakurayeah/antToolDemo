## code

```css
body {
  background: #ddd;
}
```

```html
<div id="test"></div>
```

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { util, Button } from 'index';
const abc = util.userAgent();
console.log(abc)

ReactDOM.render(
  <Button opts={{type:'danger',txt:'按钮'}} />,
  document.getElementById('test'),
)
```