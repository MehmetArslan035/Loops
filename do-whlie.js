/* ---------------------------------- */
/*              DO-WHILE              */
/* ---------------------------------- */

let i = 1
do {
    console.log(i, "Deneme")
    i++;
} while (i < 10)
    console.log("döngü bitti");



   console.log("------------------------------------");
   let devam ="";
do{
   let ders = prompt("ders adını giriniz");
   let vize = prompt("vize notunu giriniz");
   let final = prompt("ders notunu giriniz");

   let ortalama = vize *0.3 + final*0.7;

   let sonuc = ortalama>= 50 ? `${ders} dersinden ${ortalama} ile geçtiniz ` : `${ders}dersinden ${ortalama} ile kaldınız`;
   console.log(sonuc);

  devam = prompt("hesaplamaya devam etmek istşyorsanız E tuşuna")

}while(devam.toLowerCase() == "e");