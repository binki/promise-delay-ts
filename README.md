Very simple delay with TypeScript typing which may be consumed by JavaScript.

# Usage

This is an ES module which may consumed from TypeScript or JavaScript.
Note that if you are consuming it via commonjs `require()`, the function will be available on the `default` export.

```ts
import delay from 'promise-delay-ts';

(async () => {
  console.log(new Date());
  await delay(1000);
  console.log(new Date());
})();
```

To import in pure nodejs/commonjs, be sure to import the `default` property:

```js
const {
  default: delay,
} = require('promise-delay-ts);

(async () => {
  console.log(new Date());
  await delay(1000);
  console.log(new Date());
})();
```

# API

## `delay(delay:number):Promise<void>`:

* `delay`: delay in milliseconds

Returns a `Promise<void>` which will resolve after the delay.
The resolved value will be `undefined`.
