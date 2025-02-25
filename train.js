//A-TASK
// console.log('train task ishga tushdi');
// TASK A

// Harf sifatida kiritilgan birinchi parametr, 
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi

// function countLetter(harf, matn) {
//     return matn.split(harf).length - 1;
// }

// // Misol
// const natija = countLetter('n', 'engineer');
// console.log(natija);  // Natija: 3
//================================================
//21. Nodejs event loop va Callback functionlarni o'rganamiz

// console.log("Jack Ma maslahatlari")
// const list = [
//     "yaxshi talaba bo'ling", //0-20
//     "to'g'ri boshliq tanlang va koproq xato qiling", // 20-30
//     "o'zinggizning ishlaringizni boshlang", //30-40
//     "siz kuchli bo'lgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi damoling, foydasi yoq", //60
// ];

// function maslahatBering (a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function() {
//             callback(null, list[5]);
//         }, 5000);
//     };
// };

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//     if(err) console.log('ERROR', err);
//     else {
//         console.log("javob:", data);
//     };
//     // console.log('javob:', data);
// });
// console.log("passed here 1");


// const server = http.createServer(app); clentlardan node.js single thread ga keladigan so'rovlar shu yerga keladi.
// yuqoridagi callback functions bu so'rovlarni ketma ketligini kutmasdan birinchi tayyor bergan javobni qaytaradi. bu single thread band qilishni oldini oladi.

// HOZIRGACHA ISHLATGAN BARCHA FUNCTIONLAR SYNCHRONOUS HISOBLANADI

//=============================================
//22. Asynchronous function 
// console.log("Jack Ma maslahatlari")
// const list = [
//     "yaxshi talaba bo'ling", //0-20
//     "to'g'ri boshliq tanlang va koproq xato qiling", // 20-30
//     "o'zinggizning ishlaringizni boshlang", //30-40
//     "siz kuchli bo'lgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi damoling, foydasi yoq", //60
// ];

// async function maslahatBering (a) {
//     if(typeof a !== 'number') throw new Error("insert a number", null);
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//         setTimeout(function() {
//             resolve(list[5]);
//         }, 5000);
//         });
//     };
// };
//---------------------------------
// bu holatda boshqa yoshlarni ketma ketlikda so'ralsa then { dan keyin pastagi mantiqni kiritishimiz kerak
// bu usul juda chalkash va ishlashga noqulay

// console.log("passed here 0");
// maslahatBering(25).
//     then(data => {maslahatBering(25).
//         then(data => {
//         console.log("javob:", data);
//         })
//         .catch(err => {
//         console.log("ERROR:", err);
//     });
//     console.log("javob:", data);
//     })
//     .catch(err => {
//     console.log("ERROR:", err);
// });
//--------------------------------------------------
// yosh o'zgaruvchilarini sodda usul bilan ketma ketlikda berishimiz mumkin
//then/catch
// console.log("passed here 0");
// maslahatBering(25).
//     then(data => {
//     console.log("javob:", data);
//     })
//     .catch(err => {
//     console.log("ERROR:", err);
// });
//-------------------------------------------
// async/await
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
//     javob = await maslahatBering(51);
//     console.log(javob);
// }
// run();
//----------------------------------
// setInterval bilan async function berish

// console.log("Jack Ma maslahatlari")
// const list = [
//     "yaxshi talaba bo'ling", //0-20
//     "to'g'ri boshliq tanlang va koproq xato qiling", // 20-30
//     "o'zinggizning ishlaringizni boshlang", //30-40
//     "siz kuchli bo'lgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi damoling, foydasi yoq", //60
// ];

// async function maslahatBering (a) {
//     if(typeof a !== 'number') throw new Error("insert a number", null);
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//         setInterval(function() {
//             resolve(list[5]);
//         }, 1000);
//         });
//     };
// };

// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);
// }
// run();
//-------------------------------------
//callback bilan setInterval misol

// console.log("Jack Ma maslahatlari")
// const list = [
//     "yaxshi talaba bo'ling", //0-20
//     "to'g'ri boshliq tanlang va koproq xato qiling", // 20-30
//     "o'zinggizning ishlaringizni boshlang", //30-40
//     "siz kuchli bo'lgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi damoling, foydasi yoq", //60
// ];

// function maslahatBering (a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function() {
//             callback(null, list[5]);
//         }, 5000);
//     };
// };

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//     if(err) console.log('ERROR', err);
//     else {
//         console.log("javob:", data);
//     };
//     // console.log('javob:', data);
// });
// console.log("passed here 1");

//A-TASK
// console.log('train task ishga tushdi');
// TASK A

// Harf sifatida kiritilgan birinchi parametr, 
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi

// function countLetter(harf, jumla) {
//     return jumla.split(harf).length-1;
// }

// const natija = countLetter('e', 'engineer');
// console.log(natija);

function countLetter(harf, jumla) {
    return jumla.split("").filter((a) => a === harf).length;
}
console.log(countLetter("n", "engineer"));

