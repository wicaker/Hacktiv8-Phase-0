function submit1(){
	function angkaPrima(angka){
		let hasilPembagian = []; //akan menampung pembagian dari angka oleh faktor faktornya
		for(let i=2 ; i<=angka ; i++){
			if(angka%i == 0){
				hasilPembagian.push(angka/i);
			}
			else{
				continue;
			}
		}

		/*jika ada lebih dari 1 faktor atau hasil pembagian terhadap faktornya maka else, dan jika ada satu
		faktor (1 tidak diikutkan) maka true */
		if(hasilPembagian.length==1){ 
			return "true";
		}
		else{
			return "false";
		}
	}
	document.getElementById('e1').innerHTML= angkaPrima(document.getElementById('angka-prima').value);
	document.getElementById('angka-prima').value= "";
}

let angkaInputan=[]; //array akan menampung angka-angka yang diinputkan untuk dicari FPB nya
function submit2(){
	let angka = document.getElementById('angka-fpb').value;
	angkaInputan.push(angka);
	function angkaPersekutuanTerbesar(){	
		let faktor = []; //akan menampung faktor-faktor dari angka-angka yang dinnputkan
		let hasilPembagian = []; //digunakan sementara untuk faktor-faktor dari per angka inputan, nantinya akan di push ke array faktor

		for(let i=0 ; i<angkaInputan.length ; i++){
			function faktorAngka(angka2){ //fungsi untuk mencari faktor dari tiap tiap angka inputan
				if(angka2 == 1){
					return 1;
				}
				else{
					for(let j=2 ; j<=angka2 ; j++){
						if(angka2 %j == 0){
							hasilPembagian.push(j);
							return faktorAngka(angka2/j); //lakukan fungsi rekursif selama angka2 dibagi j tidak sama dengan 1
						}
						else{
							continue;
						}
					}
				}
			}
			faktorAngka(angkaInputan[i]); //jika array angkaInputan[0] sudah selesai, cari faktor array index selanjutnya dengan fungsi rekursif ini
			faktor.push(hasilPembagian); //isikan faktor untuk faktor-faktor dari tiaptiap index
			hasilPembagian=[];
		}
		let faktorFPB = []; //array sementara untuk menampung fpb dari 2 bilangan
		function fpb(a,b){ /*fungsi untuk mencari angka fpb(faktor fpb yang nantinya dikalikan) dari index 1 
		dengan index 2, hasilnya di fpbkan lagi dengan index 3, hasil nya di fpbkan lagi dengan index4 dst */
			if(b== null){
				return 1;
			}
			else{
				for(let i=0 ; i<a.length;i++){
					for(let j=0 ; j<b.length;j++){
						if(a[i]==b[j]){
							faktorFPB.push(a[i]);
							a.shift();
							b.shift();
						}
						else{
							continue;
						}
					}
				}
				faktor.splice(0,2,faktorFPB);
				faktorFPB=[];
				return fpb(faktor[0],faktor[1]);
			}
		}

		//untuk hasil akhir fpbnya
		fpb(faktor[0],faktor[1]);
		if (faktor==""){
			return "1";
		}
		else{
			let fpbHasil=1;
			for(let i=0; i<faktor[0].length;i++){
				fpbHasil=fpbHasil*parseInt(faktor[0][i]);
			}
			return fpbHasil;
		}
	}

	document.getElementById('e2').innerHTML=angkaPersekutuanTerbesar();
	document.getElementById('angka-inputan-fpb').innerHTML = angkaInputan;
	document.getElementById('angka-fpb').value ="";
}
function submit2Ulang(){
	angkaInputan = [];
	document.getElementById('e2').innerHTML="";
	document.getElementById('angka-inputan-fpb').innerHTML="";
}

let angkaInputanMedian=[];
function submit3(){
	function cariMedian(){
		angkaInputan = document.getElementById('angka-median').value;
		angkaInputanMedian.push(angkaInputan);
		if(angkaInputanMedian.length % 2 == 1){ //jika arranya ganjil
			return angkaInputanMedian[(angkaInputanMedian.length-1)/2];
		}
		else{ //jika arraynya genap
			let median = (parseInt(angkaInputanMedian[angkaInputanMedian.length/2])+ parseInt(angkaInputanMedian[(angkaInputanMedian.length/2)-1]))/2;
			return median;
		}
	}
	document.getElementById('e3').innerHTML=cariMedian();
	document.getElementById('angka-inputan-median').innerHTML = angkaInputanMedian;
	document.getElementById('angka-median').value ="";
}

function submit3Ulang(){
	angkaInputanMedian = [];
	document.getElementById('e3').innerHTML="";
	document.getElementById('angka-inputan-median').innerHTML="";
}

let angkaInputanModus=[]; //menyimpan angka yang diinputkan
function submit4(){
	function cariModus(){
		angkaInputanModus.push(document.getElementById('angka-modus').value);
		/*
		melakukan pengecekan apakah kalau semua nilai rata-ratanya sma dengan nilai yang diinputkan
		jika iya cetak -1
		*/
		let jumlah = 0;
		for(let i=0;i<angkaInputanModus.length;i++){
			jumlah=jumlah+parseInt(angkaInputanModus[i]);
		}
		if(jumlah/angkaInputanModus.length == angkaInputanModus[0]){
			return "-1";
		}
		//jika tidak
		else{
			let angkaModus=[];//untuk menyimpan calon-calon nilai modus
			let modusSementara=[]; //menyimpan calon nilai modus sementara
			for(let i=0;i<angkaInputanModus.length-1;i++){
				for(let j=i+1;j<angkaInputanModus.length;j++){
					if(angkaInputanModus[i]==angkaInputanModus[j]){
						modusSementara.push(angkaInputanModus[i]);
					}
					else{
						continue;
					}
				}
				if(modusSementara==""){
					continue;
				}
				else{
					angkaModus.push(modusSementara);
					modusSementara=[];
				}
				
			}
			/*
			fungsi dibawah digunakan untuk mencari pebandingan panjang array dari nilai-
			nilai yang sudah dikelompokkan pada array angka modus
			- jika nilai b sudah tidak ada, fungsi berhenti
			- jika panjang aray a==b, maka akan dipilih angka yang pertama diinputkan
			- jika panjang a>b, maka b akan dihilangkan dan a calon modus
			*/
			function modus(a,b){ 
				if(b==null){
					return 1;
				}
				else{
					if(a.length==b.length){
						angkaModus.splice(1,1);
						return modus(angkaModus[0],angkaModus[1]);
					}
					else{
						if(a.length>b.length){
							angkaModus.splice(1,1);
							return modus(angkaModus[0],angkaModus[1]);
						}
						else{
							angkaModus.splice(0,1);
							return modus(angkaModus[0],angkaModus[1]);
						}
					}
				}
			}
			if(angkaModus.length>=1){ //jika ada angka yang sama
				modus(angkaModus[0],angkaModus[1]);
				return angkaModus[0];
			}
			else{ //jika tidak ada angka diinputkan yang sama 
				return "-1";
			}
		}
	}
	document.getElementById('e4').innerHTML=cariModus();
	document.getElementById('angka-inputan-modus').innerHTML = angkaInputanModus;
	document.getElementById('angka-modus').value ="";
}

function submit4Ulang(){
	angkaInputanModus = [];
	document.getElementById('e4').innerHTML="";
	document.getElementById('angka-inputan-modus').innerHTML="";
}


function submit5(){
	function ubahHuruf(kata) {
		/*
		array abjad untuk menampung alfabet
		array hasil untuk menampung hasil perubahan huruf
		*/
		kata=kata.toLowerCase();
		let abjad=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a'];
		let hasil=[];
		for(let i=0;i<kata.length;i++){
			for(let j=0; j<abjad.length;j++){
				if(kata[i]==abjad[j]){
					hasil.push(abjad[j+1]);
					break;
				}
				else if(kata[i]==" "){
					hasil.push(" ");
					break;
				}
				else{
					continue;
				}
			}
		}
		return hasil.join(""); //untuk menggabuungkan array
	}
	document.getElementById('e5').innerHTML=ubahHuruf(document.getElementById('ubah-huruf').value);
	document.getElementById('inputan-ubah-huruf').innerHTML = document.getElementById('ubah-huruf').value;
	document.getElementById('ubah-huruf').value ="";
}

function submit5Ulang(){
	document.getElementById('e5').innerHTML="";
	document.getElementById('inputan-ubah-huruf').innerHTML="";
}

function submit6(){
	function hitungHuruf(kata){
		kata = kata.split(" ");
		kataSorting=[]; //untuk menyimpan kata yang diinputkan diirutkan per index
		for(let i=0;i<kata.length;i++){ //mengubah string menjadi array di tiap index
			kataSorting.push(kata[i].split(""));
		}
		for(let i=0;i<kataSorting.length;i++){ //mengurutkan tiap index dari array kataSorting sesuai alfabet
			kataSorting[i].sort();
		}
		/*
		dicari dlu kata mana yang memiliki perulangan
		setelah diketahui kata mana saja yang memiliki perulangan, disimpen dalam array kataBerurut
		array tersebut akan dilakukan perulangan pada fungsi dibawah untuk mengetahui yang mana
		katanya memiliki perulangan terbanyak
		*/
		kataBerurut = [];//untuk menyimpan kata yang memiliki perulangan huruf dibagi per index (gunanya untuk mencari mana yang paling banyak kata dengan huruf berurutnya)
		kataBerurutSementara=[]; //untuk menyimpan kata yang memiliki perulangan huruf sementara nanti di push ke kataBerurut
		for(let i=0;i<kataSorting.length;i++){
			for(let j=0;j<kataSorting[i].length;j++){
				if(kataSorting[i][j]==kataSorting[i][j+1]){
					kataBerurutSementara.push(kata[i]);
				}
				else{
					continue;
				}
			}
			kataBerurut.push(kataBerurutSementara);
			kataBerurutSementara=[];
		}
		/*
		fungsi hasil ada 3 parameter yang digunakan
		fungsi ini untuk membandingkan panjang tiap index dari kata berurut sebelumnya
		akan dicari index paling panjang, kemudian akan diambil satu katanya yang ada di 
		index[0][0] dari index kata berurut yang paling panjang
		*/
		function hasil(a,b,c){
			if(b==null){
				return 1;
			}
			else{
				for(let i=0;i<c.length-1;i++){
					if(a.length>b.length || a.length==b.length){
						c.splice(1,1);
						return hasil(kataBerurut[0],kataBerurut[1],kataBerurut);
					}
					else{
						c.splice(0,1);
						return hasil(kataBerurut[0],kataBerurut[1],kataBerurut);
					}
				}
			}
		}
		hasil(kataBerurut[0],kataBerurut[1],kataBerurut);
		return kataBerurut[0][0];
	}
	document.getElementById('e6').innerHTML=hitungHuruf(document.getElementById('hitung-huruf').value);
	document.getElementById('inputan-hitung-huruf').innerHTML = document.getElementById('hitung-huruf').value;
	document.getElementById('hitung-huruf').value ="";
}

function submit6Ulang(){
	document.getElementById('e6').innerHTML="";
	document.getElementById('inputan-hitung-huruf').innerHTML="";
}

function submit7(){
	function digitPerkalianMinimum(angka){
		let panjangMinimum=[]; //menyimpan panjang masing-masing faktor
		let hasilPembagian=[] //menyimpan hasil pembagian dan pembaginya semntara untuk melihat faktor-faktornya
		if(angka==1){
			return "1";
		}
		else{
			for(let i=1 ; i<=angka/2 ;i++){
				if(angka%i==0){
					hasilPembagian.push(i.toString()+(angka/i).toString()); //dijadikan string dlu, baru digabungkan
				}
				else{
					continue;
				}
				panjangMinimum.push(hasilPembagian[0].length); //dipush sesuai dengan panjang tiap index
				hasilPembagian =[];
			}
			panjangMinimum.sort(function(value1, value2) { return value1 > value2 }); //mengurutkan sesuai panjang index dari minimum
			return panjangMinimum[0];
		}
	}
	document.getElementById('e7').innerHTML=digitPerkalianMinimum(document.getElementById('digit-perkalian-minimum').value);
	document.getElementById('inputan-digit-perkalian-minimum').innerHTML = document.getElementById('digit-perkalian-minimum').value;
	document.getElementById('digit-perkalian-minimum').value ="";
}
function submit7Ulang(){
	document.getElementById('e7').innerHTML="";
	document.getElementById('inputan-digit-perkalian-minimum').innerHTML="";
}

function submit8(){
	function urutkanAbjad(str){
		str=str.split("");
		str.sort();
		return str.join("");

	}
	document.getElementById('e8').innerHTML=urutkanAbjad(document.getElementById('urutkan-abjad').value);
	document.getElementById('inputan-urutkan-abjad').innerHTML = document.getElementById('urutkan-abjad').value;
	document.getElementById('urutkan-abjad').value ="";
}
function submit8Ulang(){
	document.getElementById('e8').innerHTML="";
	document.getElementById('inputan-urutkan-abjad').innerHTML="";
}

function submit9(){
	function tukarBesarKecil(kalimat){
		let hasil=[]; //menyimpan hasil perubahan kalimat
		for(let i=0 ; i<kalimat.length;i++){
			if(kalimat.charAt(i)==(kalimat.charAt(i)).toUpperCase()){
				hasil.push((kalimat.charAt(i)).toLowerCase());
			}
			else if(kalimat.charAt(i)==(kalimat.charAt(i)).toLowerCase()){
				hasil.push((kalimat.charAt(i)).toUpperCase());
			}
			else{
				hasil.push(kalimat.charAt(i));
			}
		}
		return hasil.join("");
	}
	document.getElementById('e9').innerHTML=tukarBesarKecil(document.getElementById('tukar-ukuran').value);
	document.getElementById('inputan-tukar-ukuran').innerHTML = document.getElementById('tukar-ukuran').value;
	document.getElementById('tukar-ukuran').value ="";
}
function submit9Ulang(){
	document.getElementById('e9').innerHTML="";
	document.getElementById('inputan-tukar-ukuran').innerHTML="";
}

function submit10(){
	function checkAB(num){
		let hasil=[]; //untuk menampung nilai true jika ada a dan b jarak 3 karakter lain
		for(let i=0;i<num.length-4;i++){
			if((num[i]=="a" && num[i+4]=="b") || (num[i]=="A" && num[i+4]=="B") || (num[i]=="b" && num[i+4]=="a") || (num[i]=="B" && num[i+4]=="A")){
				hasil.push("true");
			}
			else{
				continue;
			}
		}
		if(hasil.length==0){ //hasil.length == 0 artinya tidak ada yang berulang
			return "false";
		}
		else{
			return "true";
		}
	}
	document.getElementById('e10').innerHTML=checkAB(document.getElementById('cek-ab').value);
	document.getElementById('inputan-cek-ab').innerHTML = document.getElementById('cek-ab').value;
	document.getElementById('cek-ab').value ="";
}
function submit10Ulang(){
	document.getElementById('e10').innerHTML="";
	document.getElementById('inputan-cek-ab').innerHTML="";
}

function submit11(){
	function changeMe(arr){
		let tgl= new Date(); //untuk mengambil waktu tanggal terbaru
		let tahun=tgl.getFullYear(); //untuk mengambil tahun terbaru 4 digit
		let data ={
			firstName : arr[0],
			lastName : arr[1],
			gender : arr[2],
			age : [
				tahun-arr[3],
				"Invalid Birth Year"
			]
		}
		let umur;
		if(arr[3]=="" || tahun-arr[3]<0){
			umur=data.age[1];
		}
		else{
			umur=data.age[0];
		}
		return "First Name: "+data.firstName+"<br>"+"Last Name: "+data.lastName+"<br>"+"Gender: "+data.gender+"<br>"+"Age: "+umur;
	}
	/*
	variabel inputan untuk menampung inputan user
	satu per satu inputan dimasukkan ke variabel inputan
	*/
	let inputan=[];
	inputan.push(document.getElementById('first-name').value); //mengambil nama awal
	inputan.push(document.getElementById('last-name').value); //mengambil nama terkahir
	let x=document.getElementById('gender'); //variabel untuk mengambil id gender
	let i=x.selectedIndex; //variabel menggabungkan id gender dan akan mengambil value berdasarkan yang dipilih
	inputan.push(x.options[i].text); //untuk mengambil isi option berdasrkan pilihan user
	inputan.push(document.getElementById('age').value); //mengambil tanggal lahir
	document.getElementById('e11').innerHTML=changeMe(inputan);
	document.getElementById('form-e11').reset();
}

function submit11Ulang(){
	document.getElementById('e11').innerHTML="";
}

function submit12(){
	function shoppingTime(memberId,money){
		if(memberId=="" || memberId==""&&money==""){
			return "Mohon maaf, toko X hanya berlaku untuk member saja";
		}
		else if(money<50000){
			return "Mohon maaf, uang tidak cukup";
		}
		else{
			let data ={
				id : memberId,
				uang : money,
				barang : ["Sepatu Stacattu","Baju Zoro","Baju H&N","Sweater Uniklooh","Casing Handphone"],
				hargaBarang :[1500000,500000,250000,175000,50000]
			}
			let barangBelanja =[];//untuk menampung barang-barang yang bisa dibeli
			// let sisaBelanja =[];
			/* fungsi dibawah tidak digunakan karena member hanya membeli satu satu barangnya
			jika ada kelebihan uang. fungsi akan digunakan jika member ingin menghabiskan
			sisa uangnya setelah semua barang dibeli
			*/
			// function belanja(uang){
			// 	if(uang<50000){
			// 		sisaBelanja.push(uang);
			// 		return 1;
			// 	}
			// 	else{
			// 		for(let i=0 ; i<(data.hargaBarang).length;i++){
			// 			if(uang>=data.hargaBarang[i]){
			// 				barangBelanja.push(data.barang[i]);
			// 				uang=uang-data.hargaBarang[i];
			// 			}
			// 			else{
			// 				continue;
			// 			}
			// 		}
			// 		return belanja(uang);
			// 	}
			// }

			for(let i=0 ; i<(data.hargaBarang).length;i++){
				if(money>=data.hargaBarang[i]){
					barangBelanja.push(" "+data.barang[i]);
					money=money-data.hargaBarang[i];
				}
				else{
					continue;
				}
			}
			return 'Member ID: "'+data.id +'"'+"<br>"+"Money: "+data.uang+"<br>"+
			"List Belanjag: "+barangBelanja+"<br>"+"Sisa Uang:"+money;
		}
	}
	document.getElementById('e12').innerHTML=shoppingTime(document.getElementById('member-id').value,document.getElementById('jumlah-uang').value);
	document.getElementById('form-e12').reset();
}
function submit12Ulang(){
	document.getElementById('e12').innerHTML="";
}

let dataPembeli=[];
function submit13(){
	function countProfit(shoppers){
		let listBarang=[ //array berisikan list barang-barang yang ada di toko x
		['Sepatu Stacattu',1500000,10],
		['Baju Zoro',500000,2],
		['Sweater Uniklooh',175000,1]
		];

		let keuntungan=[[],[],[]]; //untuk menyimpan keuntungan tiap barang dan data lainnya
		let pembeli =[]; //untuk menyimpan data pembeli
		let pemasukan=0; //untuk menyimpan pemasukan atau keuntungan
		/*
		1. lakukan perulangan berdasarkan array list barang yaitu sebanyak 3 kali (perulangan pertama)
		2. lakukan juga perulangan untuk jumlah inputan atau array datapembeli (dalam funtion : shoppers) (perulangan kedua)
		3. jika nama barang pada list barang == nama barang pada inputan
		4. jika sisa barang lebih besar atau sama dengan permintaan, lakukan
		   - push nama pembeli tersebut ke array pembeli
		   - kurangkan sisa barang pada listBarang dengan barang yang dibeli
		5. jika perulangan kedua sudah selesai :
		   - push nama barang pada listBarang ke array keuntungan[i]
		   - push nama pembeli pada array pembeli ke array keuntungan[i]
		   - kosongkan pembeli
		   - lakukan perulangan untuk listBarang selanjutnya
		   - push sisa barang ke keuntungan  

		*/
		for(let i=0;i<listBarang.length;i++){ 
			for(let j=0;j<shoppers.length;j++){
				if(listBarang[i][0]==shoppers[j][1]){
					if(listBarang[i][2]>=shoppers[j][2]){
						pembeli.push(shoppers[j][0]);
						listBarang[i][2]=listBarang[i][2]-shoppers[j][2];
						pemasukan=pemasukan+(shoppers[j][2]*listBarang[i][1]);
					}
					else{
						continue;
					}
				}
				else{
					continue;
				}
			}
			keuntungan[i].push(listBarang[i][0]);
			keuntungan[i].push(pembeli);
			pembeli=[];
			keuntungan[i].push(listBarang[i][2]);
			keuntungan[i].push(pemasukan);
			pemasukan=0;

		}
	
			return "<tr>"+"<th>Product</th><th>Pembeli</th><th>Sisa Barang</th><th>Keuntungan</th>"+"</tr>"+
		"<tr>"+"<td>"+keuntungan[0][0]+"</td>"+"<td>"+keuntungan[0][1]+"</td><td>"+keuntungan[0][2]+"</td><td>"+keuntungan[0][3]+"</td>"+"</tr>"+
		"<tr>"+"<td>"+keuntungan[1][0]+"</td>"+"<td>"+keuntungan[1][1]+"</td><td>"+keuntungan[1][2]+"</td><td>"+keuntungan[1][3]+"</td>"+"</tr>"+
		"<tr>"+"<td>"+keuntungan[2][0]+"</td>"+"<td>"+keuntungan[2][1]+"</td><td>"+keuntungan[2][2]+"</td><td>"+keuntungan[2][3]+"</td>"+"</tr>";
	}
	
	let inputan=[];
	inputan.push(document.getElementById('nama-pembeli').value); //mengambil nama pembeli
	let x=document.getElementById('barang'); //variabel untuk mengambil id barang
	let i=x.selectedIndex; //variabel menggabungkan id barang dan akan mengambil value berdasarkan yang dipilih
	inputan.push(x.options[i].text); //untuk mengambil isi option berdasrkan pilihan user
	inputan.push(document.getElementById('jumlah-barang').value); //mengambil jumlah barang
	dataPembeli.push(inputan);//inputan akan dikirimkan ke dataPembeli untuk menampung data-data inputan selanjutnya
	document.getElementById('e13').innerHTML=countProfit(dataPembeli);
	document.getElementById('form-e13').reset();
}

function submit13Ulang(){
	dataPembeli=[];
	document.getElementById('e13').innerHTML="";
}

let angkaInputanLargestNumbers =[];
function submit14(){
	angkaInputanLargestNumbers.push(parseInt(document.getElementById('largest-numbers').value));
	document.getElementById('angka-inputan-largest-numbers').innerHTML = angkaInputanLargestNumbers;

	function sorting(arrNumber){
		return arrNumber.sort(function(value1, value2) { return value1 < value2 });
	}
	function getTotal(arrNumber){
		let hasil = []; //untuk menampung angka-angka yang terbesar untuk dicari berapa banyak
		if(isNaN(arrNumber[0])){ //jika arrNumber bukan tipe data number
			return "tidak ada angka diinputkan atau inputan salah";
		}
		else{
			for(let i=0;i<arrNumber.length;i++){
				if(arrNumber[i]==arrNumber[i+1]){
					hasil.push(arrNumber[i]);
				}
				else{
					hasil.push(arrNumber[i]);
					break;
				}
			}
			return "angka paling besar adalah "+ arrNumber[0] +" dan jumlah kemunculan sebanyak "+ hasil.length +" kali";
		}
		
	}
	function mostFrequentLargestNumbers(arrNumber) {
		var listSort = sorting(arrNumber);
		var countHighest = getTotal(listSort);
		return countHighest;
	}
	document.getElementById('e14').innerHTML=mostFrequentLargestNumbers(angkaInputanLargestNumbers);
	document.getElementById('largest-numbers').value ="";
}

function submit14Ulang(){
	angkaInputanLargestNumbers = [];
	document.getElementById('e14').innerHTML="";
	document.getElementById('angka-inputan-largest-numbers').innerHTML="";
}

function submit15(){
	function changeVocals (str) {
		let huruf = ['a','i','u','e','o','b','j','v','f','p']; //aray menampung huruf yang akan dirubah
		str = str.split(""); //jadikan array terlebih dahulu
		for(let i =0; i<str.length;i++){
			for(let j=0;j<5;j++){
				if(str[i]==huruf[j]){
					str.splice(i,1,huruf[j+5]); //hapus mulai index ke i, satu huruf, ganti dengan index huruf ke j+5
					break;
				}
				else if(str[i]==huruf[j].toUpperCase()){
					str.splice(i,1,huruf[j+5].toUpperCase());
					break;
				}
				else{
					continue;
				}
			}
		}
		return str;
	}

	function reverseWord (str) {
		let strBaru=[]; //menampung str yang sudah dibalikkan hurufnya
		for(let i=str.length-1;i>=0;i--){
			strBaru.push(str[i]);
		}
		return strBaru;
	}

	function setLowerUpperCase (str) {
		for(let i=0;i<str.length;i++){
		  	if(str[i]==str[i].toUpperCase()){ //apakah str sama dengan str huruf kapital
		  		str.splice(i,1,str[i].toLowerCase());
		  	}
		  	else if(str[i]==str[i].toLowerCase()){ //apakah str sama dengan str huruf kecil
		  		str.splice(i,1,str[i].toUpperCase())
		  	}
		  	else{
		  		continue;
		  	}
	  	}
	  	return str.join("");
	}

	function removeSpaces (str) {
		return str.split(" ").join(""); //buat array baru berdasarkan pemisal spasi, kemudian gabungkan lagi tanpa spasi
	}

	function passwordGenerator (name) {
		if(name.length<5){
			return 'Minimal karakter yang diinputkan adalah 5 karakter';
		}
		else{
			let ubahHuruf = changeVocals(name);
			let balikKata = reverseWord(ubahHuruf);
	  		let ubahUkuran = setLowerUpperCase(balikKata);
	  		let hapusSpasi = removeSpaces(ubahUkuran);
	  		return hapusSpasi;
		}
	}
	document.getElementById('e15').innerHTML=passwordGenerator(document.getElementById('password-generator').value);
	document.getElementById('inputan-password-generator').innerHTML = document.getElementById('password-generator').value;
	document.getElementById('password-generator').value="";
}

function submit15Ulang(){
	document.getElementById('e15').innerHTML="";
	document.getElementById('inputan-password-generator').innerHTML="";
}



function submit16(){
	function makanTerusRekursif(waktu) {
		if (waktu == 0) {
			return 0;
		}
		else {
			if (waktu < 15){
				let hasil = waktu - waktu; //variabel untuk menyimpan pengurangan waktu tersisa
				return waktu / waktu + makanTerusRekursif(hasil);
			}
			else {
				let hasil = waktu - 15;
				return waktu / waktu + makanTerusRekursif(hasil);
			}
		}
	}
	document.getElementById('e16').innerHTML=makanTerusRekursif(document.getElementById('makan-terus-rekursif').value);
	document.getElementById('inputan-makan-terus').innerHTML = document.getElementById('makan-terus-rekursif').value;
	document.getElementById('makan-terus-rekursif').value="";
}

function submit16Ulang(){
	document.getElementById('e16').innerHTML="";
	document.getElementById('inputan-makan-terus').innerHTML="";
}

function submit17(){
	function totalDigitRekursif(angka){
		/*
		jadikan angka menjadi string terlebih dahulu agar bisa dijadikan array
		buat variabel index untuk memuat panjang array angka.
		buat function baru yang memuat array angka, dan index
		index akan terus berkurang
		penggunaan index untuk mencari angka berdasarkan index n, sampai index 0
		*/
		angka = angka.toString();
		angka = angka.split("");
		let index = angka.length;
		function penjumlahan(angka,index){
			if(index==0){ //rekursif berhenti ketika sudah tidak ada index n yang dicari
				return 0;
			}
			else{
				return parseInt(angka[index-1])+ penjumlahan(angka,index-1); //jumlahkan index n dengan index n-1
			}
		}
		return penjumlahan(angka,index);
	}
	document.getElementById('e17').innerHTML=totalDigitRekursif(document.getElementById('total-digit-rekursif').value);
	document.getElementById('inputan-total-digit-rekursif').innerHTML = document.getElementById('total-digit-rekursif').value;
	document.getElementById('total-digit-rekursif').value="";
}

function submit17Ulang(){
	document.getElementById('e17').innerHTML="";
	document.getElementById('inputan-total-digit-rekursif').innerHTML="";
}

function submit18(){
	function kaliTerusRekursif(angka) {
		/*
		jadikan angka menjadi string kemudian ubah menjadi array
		jika angka panjangnya 1, maka kembalikan nilai angka
		jika tidak :
		buat variabel hasil untuk menampung hasil kali array index 0 dan index 1
		hilangkan index 0 dan 1, dan gantikan dengan hasil
		jadikan kembali array tersebut manjadi string dan menjadi tipe data integer
		lakukan rekursif pada angka terbaru sampai panjangnya hanya ada 1
		*/
		angka = angka.toString();
		angka = angka.split("");
		if(angka.length==1){
			return parseInt(angka);
		}
		else{
    		let hasil = parseInt(angka[0])*parseInt(angka[1]);
		    angka.splice(0,2,hasil);
		    angka =angka.join("");
		    parseInt(angka);
		    return kaliTerusRekursif(angka);
  		}
	}
	document.getElementById('e18').innerHTML=kaliTerusRekursif(document.getElementById('kali-terus-rekursif').value);
	document.getElementById('inputan-kali-terus-rekursif').innerHTML = document.getElementById('kali-terus-rekursif').value;
	document.getElementById('kali-terus-rekursif').value="";
}

function submit18Ulang(){
	document.getElementById('e18').innerHTML="";
	document.getElementById('inputan-kali-terus-rekursif').innerHTML="";
}