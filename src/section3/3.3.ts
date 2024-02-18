// 3.3

// 3.3.1
// type FooBar = {
//   foo: string;
//   bar: number;
// }
// type FooBarBaz = {
//   foo: string;
//   bar: number;
//   baz: boolean;
// }
// const obj: FooBarBaz = {
//   foo: "hi",
//   bar: 1,
//   baz: false,
// }
// const obj2: FooBar = obj;

// 3.3.2
// type Anial = {
//   age: number;
// }
// type Human = {
//   age: number;
//   name: string;
// }
// type AnimalFamily = {
//   familyName: string;
//   mother: Anial;
//   father: Anial;
//   child: Anial;
// }
// type HumanFamily = {
//   familyName: string;
//   mother: Human;
//   father: Human;
//   child: Human;
// }

// 3.3.3
// type User = { name: string; age: number; }
// const u: User = {
//   name: "uhyo",
//   age: 26,
//   telNumber: "09012345678"
// }
// const obj = {
//   name: "uhyo",
//   age: 26,
//   telNumber: "09012345678"
// }
// const u: User = obj;