/* ------------ FOR LOOP ------------ */


console.log("***FOR***")

/* -------- girilmeyen döngü -------- */
// for(let i = 1; i == 50; i = i * 2){
//     console.log(i);
// }


/* ---------- sonsuz döngü ---------- */

// for (let i = 1; i != 50 ; i= i*2 ){
//     console.log(i);
// }

// for(let i=1; ; i+= 2 i){
//     console.log(i);
// }


/* -------------- Örnek** 50 kişinin notunu alan ve ortalamasını hesaplayan kodu yazınız ------------- */
// let i = 0;
// let sum = 0;
// for (i; i<5; i++){
// const grade = +prompt(` Enter ${i} grade`)
// sum= sum + grade

// }
// console.log(i);
// console.log(`AVG : ${sum / i}`);

/* ------- geri yönde değişim ------- */

// for(let i = 10; i>=0; i--){
//     console.log(i);
// }

/* ---------- aralık verme ---------- */
// Örnek** iki sayı arasındaki sayıların toplamını bulan kodu yazınız

let num1 = 4;
let num2 = 6;
let sum= 0;

if (num1 > num2) {
    console.log("num2 , num1 den büyük olmalıdır");
}else{
    for (num1; num1 <= num2 ; num1++){
sum += num1; 
    }
    console.log("sum:",sum)
}

/* -------- break - continue -------- */

for(let i=0; i<=10; i++){
    if (i%3) {
        continue
    }
    if(i===6){
        break
    }
    console.log(i)
}