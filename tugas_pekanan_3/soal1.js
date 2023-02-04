const prompt = require('prompt-sync')({sigint: true});

function akar (num) {
    if (num % 2 == 0) { // cek kondisi x harus = bil genap
        console.log(Math.sqrt(num)); 
    } else if ( num < 0) { //cek kondisi x kurang dari 0
        console.log("Tidak bisa input bilangan negatif");
    } else if ( num % 2 == 1) { //cek kondisi x merupakan bilangan ganjil
        console.log("Tidak bisa input bilangan ganjil");
    } 
}

const x = prompt('Enter your number : ');
akar(x);