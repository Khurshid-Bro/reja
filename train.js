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

// function countLetter(harf, jumla) {
//     return jumla.split("").filter((a) => a === harf).length;
// }
// console.log(countLetter("n", "engineer"));

// B-TASK: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
// function countDigits(mit) {
//     let count = 0;
//     for (let idx = 0; idx < mit.length; idx++) {
//         if (mit[idx] >= "0" && mit[idx] <= "9") {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countDigits("ad2a54y79wet0sfgb9"));

// //------------------------------------------

// function countDigits(satr) {
//     const raqamlar = Array.from(satr).filter(belgi => belgi >= '0' && belgi <= '9');
//     return raqamlar.length;
// }


// const natija = countDigits("ad2a54y79wet0sfgbhjh91234564");
// console.log(natija);

/*
MITASK-C 

Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

*/

class Shop {
    constructor(non, choy, suv) {
        this.non = non;
        this.choy = choy;
        this.suv = suv;
    }
    
    qoldiq() {
        const vaqt = new Date().toLocaleTimeString();
        console.log(
            `${vaqt} da sizda hozir ${this.non} ta non, ${this.choy} ta choy, ${this.suv} ta suv bor.`
            );
        }
        
        sotish(nomi, miqdor) {
            const vaqt = new Date().toLocaleTimeString();
            
            if (this[nomi] === undefined) {
                console.log(`${vaqt} da bunday mahsulot yo'q.`);
            } else if (this[nomi] < miqdor) {
                console.log(
                    `${vaqt} da sizda ${miqdor} ta ${nomi} mahsulot yo'q, faqat ${this[nomi]} ta ${nomi} mavjud.`
                    );
                } else {
                    this[nomi] -= miqdor;
                    console.log(`${vaqt} da ${miqdor} ta ${nomi} sotildi.`);
                }
            }
            
            qabul(nomi, miqdor) {
                const vaqt = new Date().toLocaleTimeString();
                if (this[nomi] === undefined) {
                    console.log(`${vaqt} da bunday mahsulot yo'q.`);
                } else {
                    this[nomi] += miqdor;
                    console.log(`${vaqt} da siz ${miqdor} ta ${nomi} qabul qildingiz.`);
                }
            }
        }
        
        const shop = new Shop(4, 5, 2);
        shop.qoldiq();
        shop.sotish('non', 3);
        shop.qabul('suv', 1);
        shop.qoldiq();

// D-TASK: 
/* Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true; */

function checkContent(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }
    const normalize = str => str.split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

// E-TASK: 

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

function getReverse(str) {
    return str.split('').reverse().join('');
}

console.log(getReverse("hello word"));

// TASK F

// Yagona string argumentga ega findDoublers nomli function tuzing
// Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
// true yokida false natija qaytarsin.

// MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!

//a

function findDoublers(str) {
    const charSet = new Set();
    for (const char of str) {
        if (charSet.has(char)) {
            return true;
        }
        charSet.add(char);
    }
    return false;
}

console.log(findDoublers("hello"));
console.log(findDoublers("world"));

//b
function findDoublers(str) {
    return str.split("").some((dan, i, arr) => dan === arr[i + 1]);
}

console.log(findDoublers("hello"));
console.log(findDoublers("world"));

