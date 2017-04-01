# notification.js
notification is a small component for React

### Usage
you should import it to you project
use require or import
```
var Notification = require('notification');
```

### Example
```
Notification.success(<span>success</span>,10,true)
Notification.error(<span>error</span>,10,false,{top:'100px});
Notification.alert(<span>alert</span>,10,false,{top:'100px});
Notification.message('be careful!',10,true);
```

### Api
```
Notification.api(content,duration,center,style)
```
content : use JSX or string
duration : The time duration is measured in seconds
center : pass in "true" , let the notification be centered
style : css style


### Parameter
Notification.api(content,duration,center,style)
