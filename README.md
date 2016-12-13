Pick a random user agent

`randomUserAgent([type])` type can be one of `desktop` `mobile` `other`

```javascript
let randomUserAgent = require('random-user-agent');

randomUserAgent() // gives any random userAgent
randomUserAgent('desktop') // gives a random desktop user agent
```
