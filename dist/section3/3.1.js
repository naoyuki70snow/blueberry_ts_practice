"use strict";
// 3.1.1
// const obj = {
//   foo: 123,
//   bar: "Hello, world!"
// }
// console.log(obj.foo);
// console.log(obj.bar);
// 3.1.2
// const obj = {
//   foo: 555,
//   bar: "文字列",
// }
// const user = {
//   name: input ? input : "名無し",
//   age: 20,
// }
// const name = input ? input : "名無し";
// const user = {
//   name: name,
//   age: 20,
// }
// const name = input ? input : "名無し";
// const user = {
//   name,
//   age: 20,
// }
// 3.1.3
// const obj = {
//   "foo": 123,
//   "foo bar": -500,
//   '↑↓↑↓': ""
// }
// console.log(obj.foo);
// console.log(obj["foo bar"]);
// const obj = {
//   1: "one",
//   2.05: "two point o five",
// }
// console.log(obj["1"]);
// console.log(obj["2.05"]);
// const propName = "foo";
// const obj = {
//   [propName]: 123
// };
// console.log(obj.foo);
// 3.1.4
// const user = {
//   name: "uhyo",
//   age: 25,
// }
// user.age = 26;
// console.log(user.age);
// import { createInterface } from "readline";
// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// const messages = {
//   good: "0以上の数値が入力されました！",
//   bad: "負の数値を入力しないでください！",
// }
// rl.question("数値を入力してください:", (line) => {
//   const num = Number(line);
//   console.log(messages[num >= 0 ? "good" : "bad"]);
//   rl.close();
// });
