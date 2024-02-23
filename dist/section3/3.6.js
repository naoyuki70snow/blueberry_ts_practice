"use strict";
// 3.6
// 3.6.1
// const obj = {
//   foo: "value",
//   bar: 0,
// };
// const { foo, bar } = obj;
// console.log(foo);
// console.log(bar);
// const obj = {
//   foo: "value",
//   bar: 0,
//   "foo bar": "foobar",
// }
// const {
//   foo,
//   bar: barVar,
//   "foo bar": fooBar,
// } = obj;
// console.log(foo);
// console.log(barVar);
// console.log(fooBar);
// const obj = {
//   str: "hello, world!",
//   num: 1234,
// }
// const { foo } = obj;
// 3.6.2
// const nested = {
//   num: 123,
//   obj: {
//     foo: "hello",
//     bar: "world",
//   }
// }
// const { num, obj: { foo } } = nested;
// console.log(num);
// console.log(foo);
// console.log(obj);
// 3.6.3
// const arr = [1, 2, 4, 8, 16, 32];
// const [first, second, third] = arr;
// console.log(first);
// console.log(second);
// console.log(third);
// const obj = {
//   arr: ["a", "b", "c", "d", "e"],
// }
// const { arr: [foo] } = obj;
// console.log(foo);
// const arr = [
//   { Name: "first"},
//   { Name: "second"},
//   { Name: "third"},
// ]
// const [{ Name }] = arr;
// console.log(Name);
// const arr = [1, 2, 4, 8, 16, 32];
// const [, foo, , bar, , baz ] = arr;
// console.log(foo);
// console.log(bar);
// console.log(baz);
// const tuple: [string, number] = ["uhyo", 26];
// const [myName, age] = tuple;
// console.log(myName);
// console.log(age);
// 3.6.4
// type Obj = { foo?: number };
// const obj1: Obj = {};
// const obj2: Obj = { foo: -1234 };
// const { foo = 500 } = obj1;
// console.log(foo);
// const { foo: bar = 500 } = obj2;
// console.log(bar);
// // const foo = obj.foo !== undefined ? obj.foo : 500;
// const obj = { foo: null }
// const { foo = 123 } = obj;
// console.log(foo);
// type NestedObj = {
//   obj?: {
//     foo: number;
//   }
// }
// const nested1: NestedObj = {
//   obj: { foo: 123 }
// };
// const nested2: NestedObj = {};
// const { obj: { foo: foo1 } = { foo: 500 } } = nested1;
// console.log(foo1);
// const { obj: { foo: foo2 } = { foo: 500 } } = nested2;
// console.log(foo2);
// 3.6.5
// const obj = {
//   foo: 123,
//   bar: "string",
//   baz: false,
// }
// const { foo, ...restObj} = obj;
// console.log(foo);
// console.log(restObj);
// const arr = [1, 1, 2, 3, 5, 8, 13];
// const [first, second, third, ...restArr] = arr;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(restArr);
