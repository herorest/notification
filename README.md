# notification.js
一个小巧的提示框React组件，不依赖除React外任何库

### Usage
var Notification = require('notification');

Notification.success(<span>center</span>,10,true);
Notification.error(<span>center</span>,10,false,{top:'300px'});
Notification.alert(<span>center</span>,10,false,{top:'300px'});
Notification.message(<span>center</span>,10,false,{top:'300px'});
