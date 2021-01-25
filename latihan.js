// Latihan 1 ====================================================================
function beliProduk(a,b){
    alert("Terima kasih "+a+" telah membeli produk "+b);
    console.log("Terima kasih "+a+" telah membeli produk "+b);
}


// Latihan 2 ====================================================================
function bagiSembilanPerLima(a){
    return a / (9/5);
}

function kaliSembilanPerLima(a){
    return a * (9/5);
}

function getCelcius(fahrenheit){
    document.getElementById('hasilCelcius').innerHTML = "Hasil = " + Math.round(bagiSembilanPerLima(fahrenheit-32)) +"C";
}

function getFahrenheit(celcius){
    document.getElementById('hasilFahrenheit').innerHTML = "Hasil = " + Math.round(kaliSembilanPerLima(celcius) + 32) +"F";
}


// Latihan 3 ====================================================================
const umurKucing = umur => {
    if (umur == 1) {
        document.getElementById('hasilUmurManusia').innerHTML = "Hasil = " + 15;
    } 
    else if(umur == 2){
        document.getElementById('hasilUmurManusia').innerHTML = "Hasil = " + 24 ;
    }
    else if(umur >=3){
        document.getElementById('hasilUmurManusia').innerHTML = "Hasil = " + (24 + (umur-3 + 1) * 4);
    }
}


// Latihan 4 ====================================================================
const lowerCase = kalimat => document.getElementById('hasilHurufKecil').innerHTML = "Hasil = " +kalimat.toLowerCase();
// `${kalimat}`.toLowerCase();
;