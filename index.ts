const foo = require("./foo");
console.log(foo);
console.log(foo["bar"]);
console.log(foo.default);
console.log(foo.default["bar"]);
console.log(new foo.default().bar());

console.log("");

const staticFoo = require("./staticFoo");
console.log(staticFoo);
console.log(staticFoo["bar"]);
console.log(staticFoo.default);
console.log(staticFoo.default["bar"]);
console.log(staticFoo.default["bar"]());
