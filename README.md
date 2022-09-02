```typescript
const foo = require("./foo");
console.log(foo);                     // { default: [class Foo] }
console.log(foo["bar"]);              // undefined
console.log(foo.default);             // [class Foo]
console.log(foo.default["bar"]);      // undefined
console.log(new foo.default().bar()); // yappy

console.log("");

const staticFoo = require("./staticFoo");
console.log(staticFoo);                   // { default: [class StaticFoo] }
console.log(staticFoo["bar"]);            // undefined
console.log(staticFoo.default);           // [class StaticFoo]
console.log(staticFoo.default["bar"]);    // [Function: bar]
console.log(staticFoo.default["bar"]());  // static yappy
```