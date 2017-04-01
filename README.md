# notification.js
一个小巧的提示框React组件，es6语法，不依赖第三方库

### Usage
```
var Notification = require('notification');

Notification.success(<span>center</span>,10,true);
Notification.error(<span>center</span>,10,false,{top:'300px'});
Notification.alert(<span>center</span>,10,false,{top:'300px'});
Notification.message(<span>center</span>,10,false,{top:'300px'});
```
