// 3.2

// 3.2.1
// const obj = {
//   foo: 123,
//   bar: "Hello, world!",
// }

// const obj: {
//   foo: number;
//   bar: string;
// } = {
//   foo: 123,
//   bar: "Hello, world!",
// }

// const obj: {
//   "foo bar": number;
// } = {
//   "foo bar": 123,
// }

// 3.2.2
// const obj: {
//   foo: number;
//   bar: string;
// } = {
//   foo: 123,
// }
// const obj: {
//   foo: 123;
//   bar: "Hello, world!";
// }
// obj.foo = null;
// const obj = {
//   foo: 123,
//   bar: "Hello, world!",
// };
// console.log(obj.hoge);

// 3.2.3
// type FooBarObj = {
//   foo: number;
//   bar: string;
// };
// const obj: FooBarObj = {
//   foo: 123,
//   bar: "Hello, world!",
// };
// const obj: FooBarObj = {
//   foo: 123,
//   bar: "Hello, world!",
// };
// type FooBarObj = {
//   foo: number;
//   bar: string;
// };
// type UserId = string;
// const id: UserId = "uhyo";
// type FooObj = { foo: number };
// type MyObj = FooObj;
// const obj: MyObj = { foo: 0 };

// 3.2.4
// interface FooBarObj {
//   foo: number;
//   bar: string;
// }
// const obj: FooBarObj = {
//   foo: 0,
//   bar: "string",
// }

// 3.2.5
// type PriceData = {
//   [key: string]: number;
// }
// const data: PriceData = {
//   apple: 220,
//   coffee: 120,
//   bento: 500,
// }
// data.chicken = 250;
// data.弁当 = "foo";

// 3.2.6
// type MyObj = {
//   foo: boolean;
//   bar: boolean;
//   baz?: number;
// }
// const obj: MyObj = { foo: false, bar: true };
// const obj2: MyObj = { foo: true, bar: false, baz: 1234 };
// console.log(obj.baz);
// console.log(obj2.baz);
// // console.log(obj2.baz * 1000);
// if (obj2.baz !== undefined) {
//   console.log(obj2.baz * 1000);
// }

// 3.2.7
// type MyObj = {
//   readonly foo: number;
// }
// const obj: MyObj = { foo: 123 };
// obj.foo = 0;

// 3.2.8
// const num: number = 0;
// type T = typeof num;
// const foo: T = 123;
// const obj = {
//   foo: 123,
//   bar: "hi",
// };
// type T = typeof obj;
// const obj2: T = {
//   foo: -50,
//   bar: "",
// };