"use strict";
// 3.5
// 3.5.1
// const arr = [0, 123, -456 * 100];
// console.log(arr);
// const arr2 = [100, "文字列", false];
// const arr1 = [4, 5, 6];
// const arr2 = [1, 2, 3, ...arr1];
// console.log(arr2);
// 3.5.2
// const arr = [0, 123, -456 * 100];
// // console.log(arr[0]);
// // console.log(arr[1]);
// console.log(arr);
// arr[1] = 5400;
// console.log(arr);
// arr = [1, 2, 345, 67];
// 3.5.3
// const arr: number[] = [1, 10, 100];
// const arr2: string[] = [123, -456];
// const arr1: boolean[] = [true, false];
// const arr2: Array<{
//   name: string;
// }> = [
//   { name: "山田さん"},
//   { name: "田中さん"},
//   { name: "鈴木さん"},
// ]
// const arr = [1, 10, 100];
// const arr2 = [100, "文字列", false];
// 3.5.4
// const arr: readonly number[] = [1, 10, 100];
// arr[1] = 1000;
// 3.5.5
// const arr = [1, 10, 100];
// arr.push(1000);
// console.log(arr);
// arr.push("foobar");
// const arr: readonly number[] = [1, 10, 100];
// arr.push(1000);
// const arr = [1, 10, 100];
// console.log(arr.includes(100));
// console.log(arr.includes(50));
// console.log(arr.includes("foobar"));
// const arr = [1, 10, 100];
// console.log(arr.length);
// arr.push(1000);
// console.log(arr.length);
// 3.5.6
// const arr = [1, 10, 100];
// for (const elm of arr) {
//   console.log(elm);
// }
// const arr = [1, 10, 100];
// for (let elm of arr) {
//   elm *= 10;
//   console.log(elm);
// }
// console.log(arr);
// 3.5.7
// let tuple: [string, number] = ["foo", 0];
// tuple = ["aiueo", -555]
// const str = tuple[0];
// const num = tuple[1];
// const nothing = tuple[2];
// type User = [name: string, age: number];
// const uhyo: User = ["uhyo", 26];
// console.log(uhyo[1]);
