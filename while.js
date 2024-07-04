/* ---------------------------------- */
/*                WHILE               */
/* ---------------------------------- */

// console.log("*********WHLIE*********");
// let i = 1
// while (i<=10) {
//     console.log(i, "first");
//     i++
// }



// console.log("**********************");

// for(let i = 1; i <= 10; i++ ){
//     console.log(i , "sssss");
// }
// console.log("döngü bitti");


// let number = +prompt("0-100 arasında bir sayı giriniz")
// //  if (number <0 || number > 100) {
//     alert("Sayı 0-100 arasında değil");  
// // }

let number = +prompt("0-100 arasında bir sayı giriniz")
let exit = false; //?flag mechanizim
while(number <0 || number >100 ){
    console.log("Sayı 0-100 arasında olmalı"); 
    number = prompt
    ("0-100 arasında bir sayı giriniz veya çıkmak içi Q tuşuna basınız") ;
   
    if (number .toLowerCase() ==="q") {
        exit = true
        break;
    }
   
}
console.log("çıkış yapıldı"); console.log("girilen sayı", number);