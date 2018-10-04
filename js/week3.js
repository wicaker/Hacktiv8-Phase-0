function submit2(){
	document.getElementById('e2').innerHTML = '';
	let balikString = function(string){
		let hasil='';
		for (let i = string.length -1 ; i >= 0 ; i--) {
		hasil = hasil+(string[i]);
		}
		return hasil;
	}
	document.getElementById('e2').innerHTML = balikString(document.getElementById('inputString').value);
	document.getElementById('inputString').value='';
}

// Program ini belum sempurna
let dataMahasiswa = [];
function submit3a(){
	let dataMahasiswaSementara = [];
	let nomorId = document.getElementById('no-id').value;
	let nama = document.getElementById('nama-lengkap').value;
	let tempatLahir = document.getElementById('tempat-lahir').value;
	let tanggalLahir = document.getElementById('tanggal-lahir').value;
	let hobi = document.getElementById('hobi').value;
	dataMahasiswaSementara.push(nomorId,nama,tempatLahir,tanggalLahir,hobi);
	dataMahasiswa.push(dataMahasiswaSementara);
	document.getElementById('no-id').value = '';
	document.getElementById('nama-lengkap').value = '';
	document.getElementById('tempat-lahir').value = '';
	document.getElementById('tanggal-lahir').value = '';
	document.getElementById('hobi').value = '';
}

function submit3b(){
	document.getElementById('e3b').innerHTML = '';
	for (let i = 0; i < dataMahasiswa.length; i++) {
		let linebreak = document.createElement("br");
		let element = document.getElementById('e3b'); 
		let data = document.createTextNode("Nama ID : "+dataMahasiswa[i][0]+"\n"+"Nama Lengkap : "+dataMahasiswa[i][1]+"\n"+"TTL : "+dataMahasiswa[i][2]+", "+dataMahasiswa[i][3]+"\n"+"Hobi : "+dataMahasiswa[i][4]);
		document.getElementById('e3b').appendChild(data);
		element.appendChild(linebreak);
	}
}

function submit5(){
	document.getElementById('e5').innerHTML=''; // agar kosong dluu ketika memulai aksi palidrome yg baru
	
	let palindrome= function(kata){
		let kata2 = '';
		for(let i=kata.length-1; i>=0 ;i--){
			kata2 = kata2+ kata[i];
		}
		if (kata === kata2) {
			return 'true';
		}
		else if(kata !== kata2){
			return 'false';
		}
	}
	document.getElementById('e5').innerHTML = palindrome(document.getElementById('palindrome').value);
	document.getElementById('palindrome').value='';
}

function submit6(){
	document.getElementById('e6').innerHTML='';
	let palindromeAngka = function(angka){
		angka = parseInt(angka);
		if (angka >= 0 && angka < 9) { // jika angkanya 0-8
			return angka+1;
		}
		else{ // jika di atas 8
			for(let i = angka+1 ; i>=angka+1 ; i++){
				let angka2 =''; // array kosong menampung angka hasil pembalikan
				i = i.toString();
				for(let j = i.length-1 ; j>=0 ; j--){ //perulangan untuk lebih besar dari angka
					angka2 = angka2+i[j];
				}
				if (i == angka2){
					return angka2;
					break;
				}
				else if(i != angka2){
					continue;
				}
			}
		}
	}
	document.getElementById('e6').innerHTML = palindromeAngka(document.getElementById('palindrome-angka').value);
	document.getElementById('palindrome-angka').value='';
}

function submit7(){
	document.getElementById('e7').innerHTML='';
	let hitungJumlahKata = function(kalimat){
		let kalimatArray = kalimat.split(' ');
		return kalimatArray.length;
	}
	document.getElementById('e7').innerHTML = hitungJumlahKata(document.getElementById('jumlah-kata').value);
	document.getElementById('jumlah-kata').value='';
}

function submit8(){
	document.getElementById('e8').innerHTML='';
	let pasanganTerbesar = function(num){
		let number =[];
		for(let i = 0 ; i< num.length-1; i++){
			number.push(num.slice(i,i+2));
		}
		number.sort(function(value1, value2) { return value1 < value2 });
		return number[0];
	}
	document.getElementById('e8').innerHTML = pasanganTerbesar(document.getElementById('angka-terbesar').value);
	document.getElementById('angka-terbesar').value='';
}

let angkaArray = []; // menampung angka angka apa saja yang diinputkan untuk nantinya dicari rata-ratanya
function submit9(){
	//document.getElementById('e9').innerHTML='';
	let cariMean = function(arr){
		angkaArray.push(arr);
		let angkaArray2=0; //untuk menampung hasil penjumlahan dari angka angka pada variabel angkaArray[]
		for(let i = 0 ; i <angkaArray.length;i++){
			angkaArray2 = angkaArray2 + parseInt(angkaArray[i]);
		}
		angkaArray2 = Math.round(angkaArray2/angkaArray.length);
		return angkaArray2;
	}
    document.getElementById('e9').innerHTML = cariMean(document.getElementById('cari-mean').value); // mengubah e9 untuk melihat mean nya
    document.getElementById('deretan-angka').innerHTML = angkaArray; //menampilkan angka angka yang diinputkan
    document.getElementById('cari-mean').value="";
}

function submit9Hapus(){
	angkaArray = [];
	document.getElementById('e9').innerHTML='';
	document.getElementById('deretan-angka').innerHTML='';
}

let angkaPerkalian=[];
function submit10(){
	//document.getElementById('e9').innerHTML='';
	let perkalianUnik = function(arr){
		angkaPerkalian.push(arr);
		let angkaPerkalian2=1; //untuk menampung hasil penjumlahan dari angka angka pada variabel angkaArray[]
		for(let i = 0 ; i <angkaPerkalian.length;i++){
			angkaPerkalian2 = angkaPerkalian2 * parseInt(angkaPerkalian[i]);
		}
		let hasil =[];
		for(let i = 0 ; i <angkaPerkalian.length;i++){
			hasil.push(angkaPerkalian2/parseInt(angkaPerkalian[i]));
		}
		return hasil;
	}

    document.getElementById('e10').innerHTML = perkalianUnik(document.getElementById('perkalian-unik').value); // mengubah e9 untuk melihat mean nya
    document.getElementById('deretan-angka-perkalian').innerHTML = angkaPerkalian; //menampilkan angka angka yang diinputkan
    document.getElementById('perkalian-unik').value="";
}

function submit10Hapus(){
	angkaPerkalian = [];
	document.getElementById('e10').innerHTML='';
	document.getElementById('deretan-angka-perkalian').innerHTML='';
}

let angkaAritmatika=[];
function submit11(){
	//document.getElementById('e9').innerHTML='';
	let tentukanDeretAritmatika = function(arr){
		angkaAritmatika.push(arr);

		let angkaFalse =[]; //taruh di array false jika selisihnya berbeda
		for(let i = 0; i<angkaAritmatika.length - 2 ; i++){
			if (parseInt(angkaAritmatika[i+1]) - parseInt(angkaAritmatika[i]) != parseInt(angkaAritmatika[i+2]) - parseInt(angkaAritmatika[i+1])){
				angkaFalse.push("false");
			}
			else{
				continue;
			}
		}
		
		if(angkaFalse.length>0){
			return angkaFalse[0];
		}
		else {
			return "true";
		}
	}

    document.getElementById('e11').innerHTML = tentukanDeretAritmatika(document.getElementById('deret-aritmatika').value); // mengubah e9 untuk melihat mean nya
    document.getElementById('deretan-angka-aritmatika').innerHTML = angkaAritmatika; //menampilkan angka angka yang diinputkan
    document.getElementById('deret-aritmatika').value="";
}

function submit11Hapus(){
	angkaAritmatika = [];
	document.getElementById('e11').innerHTML='';
	document.getElementById('deretan-angka-aritmatika').innerHTML='';
}

let angkaGeometri=[];
function submit12(){
	//document.getElementById('e9').innerHTML='';
	let tentukanDeretGeometri = function(arr){
		angkaGeometri.push(arr);

		let angkaFalse =[]; //taruh di array false jika selisihnya berbeda
		for(let i = 0; i<angkaGeometri.length - 2 ; i++){
			if (parseInt(angkaGeometri[i+1]) / parseInt(angkaGeometri[i]) != parseInt(angkaGeometri[i+2]) / parseInt(angkaGeometri[i+1])){
				angkaFalse.push("false");
			}
			else{
				continue;
			}
		}
		
		if(angkaFalse.length>0){
			return angkaFalse[0];
		}
		else {
			return "true";
		}
	}

    document.getElementById('e12').innerHTML = tentukanDeretGeometri(document.getElementById('deret-geometri').value); // mengubah e9 untuk melihat mean nya
    document.getElementById('deretan-angka-geometri').innerHTML = angkaGeometri; //menampilkan angka angka yang diinputkan
    document.getElementById('deret-geometri').value="";
}

function submit12Hapus(){
	angkaGeometri = [];
	document.getElementById('e12').innerHTML='';
	document.getElementById('deretan-angka-geometri').innerHTML='';
}

let angkaTerdekat=[];
function submit13(){
	let targetTerdekat = function(arr){
		angkaTerdekat.push(arr);

		let x =[];
		let o =[];
		let kosong =[];
		for(let i=0 ; i <angkaTerdekat.length ; i++){
			if(angkaTerdekat[i]==='O' || angkaTerdekat[i]==='o'){
				o.push(i);
			}
			else if(angkaTerdekat[i]=='x' || angkaTerdekat[i]=='X'){
				x.push(i);
			}
			else{
				kosong.push(i);
			}
		}
		let hasil=[];
		
		if(x.length == 0 || o.length == 0){
			return "0";
		}
		else{
			for(let i=0; i<x.length ; i++){
				for(let j=0; j<o.length;j++){
					hasil.push(Math.abs(parseInt(x[i])-parseInt(o[j])));
				}
			}
			hasil.sort(function(value1, value2) { return value1 > value2 });
			return hasil[0];
		}
	}
	document.getElementById('e13').innerHTML = targetTerdekat(document.getElementById('target-terdekat').value);
	document.getElementById('deretan-angka-terdekat').innerHTML = angkaTerdekat; //menampilkan angka angka yang diinputkan
    document.getElementById('target-terdekat').value="";
}

function submit13Hapus(){
	angkaTerdekat = [];
	document.getElementById('e13').innerHTML='';
	document.getElementById('deretan-angka-terdekat').innerHTML='';
}

let kelompokAngka = [];
function submit14(){
	let mengelompokkanAngka = function(arr){
		kelompokAngka.push(arr);
		let genap =[];
		let ganjil=[];
		let kelipatanTiga = [];
		for(let i=0; i<kelompokAngka.length;i++){
			if (kelompokAngka[i]%3 == 0){
				kelipatanTiga.push(kelompokAngka[i]);
			}
			else if(kelompokAngka[i]%2 == 0){
				genap.push(kelompokAngka[i]);
			}
			else if (kelompokAngka[i]%2 == 1) {
				ganjil.push(kelompokAngka[i]);
			}
		}
		let hasil =[];
		hasil.push('" '+genap+' " ');
		hasil.push(' " '+ganjil+' "');
		hasil.push(' " '+kelipatanTiga+' "');
		return hasil;
	}
	document.getElementById('e14').innerHTML = mengelompokkanAngka(document.getElementById('kelompok-angka').value);
	document.getElementById('deretan-angka-kelompok').innerHTML = kelompokAngka;
	document.getElementById('kelompok-angka').value="";
}

function submit14Hapus(){
	kelompokAngka = [];
	document.getElementById('e14').innerHTML='';
	document.getElementById('deretan-angka-kelompok').innerHTML='';
}

let kelompokHewan = [];
let kelompokHewanBelumSorting = []; // untuk menyimpan nama nama hewan yang diinput
function submit15(){
	let groupAnimals = function(animals){
		kelompokHewan.push(animals);
		kelompokHewanBelumSorting.push(animals);
		kelompokHewan.sort();
		kelompokHewan.push(""); // menambahkan array kosong agar perulangan berfungsi 
		let hasil = []; // hasil dari push pengelompokkanAlfabel.
		let pengelompokkanAlfabet = []; // untuk menampung sementara sesuai alfabet, misal kuncing, kerbau. Akan dikosongkan jika sudah tidak diperlukan atau sudah dipindahkan ke array sebelumnya.
		for(let i=0 ; i<kelompokHewan.length-1;i++){
			if(kelompokHewan[i][0] == kelompokHewan[i+1][0]){
				pengelompokkanAlfabet.push(kelompokHewan[i]);
			}
			else if(kelompokHewan[i][0] != kelompokHewan[i+1][0]){
				pengelompokkanAlfabet.push(kelompokHewan[i]);
				hasil.push("["+pengelompokkanAlfabet+"]");
				pengelompokkanAlfabet=[];
			}
		}

		if (hasil.length>1){
			hasil.shift();
		}
		return hasil;
	}
	document.getElementById('e15').innerHTML = groupAnimals(document.getElementById('kelompok-hewan').value);
	document.getElementById('deretan-kelompok-hewan').innerHTML = kelompokHewanBelumSorting;
	document.getElementById('kelompok-hewan').value="";
}

function submit15Hapus(){
	kelompokHewan = [];
	kelompokHewanBelumSorting = [];
	document.getElementById('e15').innerHTML='';
	document.getElementById('deretan-kelompok-hewan').innerHTML='';
}
