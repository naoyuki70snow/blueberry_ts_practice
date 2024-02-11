// 2.5.1
// if (userName === "") userName = "名無し";

// 2.5.2
// let userName = "";
// if (userName === "") {
//   console.log("名前を入力して下さい！");
//   userName = "名無し";
// } 

// 2.5.3
// let userName = "";
// if (userName !== "") {
//   console.log("ちゃんと名前があってえらい！");
// } else {
//   console.log("名前を入力して下さい！");
//   userName = "名無し";
// }

// const num: number = -10;
// if (num < 0) {
//   console.log("numは負の数です");
// } else if (num === 0) {
//   console.log("numは0です");
// } else {
//   console.log("numは正の数です");
// }

// const num: number = 10;
// if (num < 0) {
//   console.log("numは負の数です");
// } else {
//   if (num === 0) {
//     console.log("numは0です");
//   } else {
//     console.log("numは正の数です");
//   }
// }

// 2.5.4
// import { createInterface } from 'readline';

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('コマンドを入力して下さい：', (name) => {
//   switch (name) {
//     case "greet":
//       console.log("こんにちは！");
//       break;
//     case "cat":
//       console.log("あなたは猫派ですか？");
//       console.log("私は犬派です");
//       break;
//     default:
//       console.log(`コマンド「${name}」を認識できませんでした。`)
//   }
//   rl.close();
// });

// 2.5.5
// let sum = 0;
// let i = 1;

// // while (i <= 100) {
// //   sum += i;
// //   i++;
// // }

// while(true) {
//   if (i > 100) {
//     break;
//   }
//   sum += i;
//   i++;
// }

// console.log(sum);

// let i = 1;

// while (i <= 100) {
//   i++;
//   if (i % 2 === 1) {
//     continue;
//   }
//   console.log(i);
// }

// 2.5.6
// let sum = 0;
// for (let i: number = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// for (let i; i <= 100; i++) {
//   if (i % 2 === 1) {
//     continue;
//   }
//   console.log(i);
// }