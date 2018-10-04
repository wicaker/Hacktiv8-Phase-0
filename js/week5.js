let level3 = [];
let level2 =[];
let level1 = [];
function input1(){ //fungsi untuk menerima inputan dam mempush ke array 3
	let inputan=document.getElementById('array-deep-sum').value;
	level3.push(inputan.split(","));
	document.getElementById('array-deep-sum').value='';
	document.getElementById('inputan-deep-sum').innerHTML="["+inputan+"]";
}

let bentukArray=[]; //untuk menyimpan bentuk array yang akan tampil di halaman html
function deep2(){ //untuk membawa array level3 ke level 2 dan membuat tampilannya
	for(let i=0;i<level3.length;i++){
		level2.push(level3[i]);
	}
	function bentuk(panjang){
		if(panjang==1){
			return "["+level3[panjang-1]+"]"; 
		}
		else{
			return bentuk(panjang-1)+",["+level3[panjang-1]+"]";
		}
	}
	document.getElementById('inputan-deep-sum-level2').innerHTML="[ "+bentuk(level3.length)+" ]";
	bentukArray.push(" ["+bentuk(level3.length)+"]");
	level3=[];
}
function deep1(){ //membawa ke level 1 dan membuat tampilannya
	level1.push(level2);
	document.getElementById('inputan-deep-sum-level1').innerHTML="[ "+bentukArray +" ]";
	level2=[];
}
function submit1(){//fungsi mencari perhitungan angka-angka yang ada pada array
	function deepSum (arr) {
		if(arr[0][0][0].length==0){
			return "no Number";
		}
		else{
			let hasil=0;
			for(let i=0;i<arr.length;i++){
				for(let j=0;j<arr[i].length;j++){
					for(let k=0;k<arr[i][j].length;k++){
						hasil = hasil + parseInt(arr[i][j][k]);
					}
				}
			}
			return hasil;
		}
	}
	document.getElementById('e1').innerHTML=deepSum(level1);

	
}
function submit1Ulang(){
	level1=[];
	bentukArray=[];
	document.getElementById('inputan-deep-sum').innerHTML="";
	document.getElementById('inputan-deep-sum-level1').innerHTML="";
	document.getElementById('inputan-deep-sum-level2').innerHTML="";
	document.getElementById('e1').innerHTML="";
}


let dataPenumpang=[]; //menyimpan data seluruh penumpang
function submit2(){
	function naikAngkot(arrPenumpang) {
		let rute = ['A', 'B', 'C', 'D', 'E', 'F'];
		let jumlah=[];
		for(let i=0;i<arrPenumpang.length;i++){
			let bayar1 =[];//nilai array untuk menampung dari angka berapa ke angka berapa, sehingga mudah untuk dijitung
			for(let j=0;j<rute.length;j++){ //akan membandingkan array rute mana yang cocok dengan inputan
				if(arrPenumpang[i][1]==rute[j]){
					bayar1.push(j);
				}
				else if(arrPenumpang[i][2]==rute[j]){
					bayar1.push(j);
				}
				else{
					continue;
				}
			}
			let hasil={ //objek untuk menampung data-data penumpang
				nama : arrPenumpang[i][0],
				naikDari : arrPenumpang[i][1],
				tujuan : arrPenumpang[i][2],
				bayar : (bayar1[1]-bayar1[0])*2000
			}
			jumlah.push(hasil);
		}
		function tabel(objek){ //fungsi membuat tabel dinamis di html
			if(objek==1){
				return "<tr>"+"<td>"+jumlah[objek-1].nama+"</td>"+"<td>"+jumlah[objek-1].naikDari+"</td><td>"+jumlah[objek-1].tujuan+"</td><td>"+jumlah[objek-1].bayar+"</td>"+"</tr>";
			}
			else{
				return "<tr>"+"<td>"+jumlah[objek-1].nama+"</td>"+"<td>"+jumlah[objek-1].naikDari+"</td><td>"+jumlah[objek-1].tujuan+"</td><td>"+jumlah[objek-1].bayar+"</td>"+"</tr>"+ tabel(objek-1);
			}
		}
		return "<tr>"+"<th>Nama</th><th>Naik Dari</th><th>Tujuan</th><th>Bayar</th>"+"</tr>"+ tabel(jumlah.length);

	}
	
	let rutePenumpang = function(rute){
		let rute2= rute.selectedIndex; //ambil id rute, berdasarkan index yang dipilih
		let rute3= rute.options[rute2]; //ambil id rute, dengan tagName options, dan index yang dpilih
		penumpang.push(rute3.text); //ambil isi text dari option index yang dpilih
	}

	let penumpang=[]; //menyimpan data satu penumpang
	penumpang.push(document.getElementById('nama-naik-angkot').value);
	rutePenumpang(document.getElementById('rute-awal'));
	rutePenumpang(document.getElementById('rute-akhir'));
	dataPenumpang.push(penumpang);
	penumpang=[];
	document.getElementById('e2').innerHTML= naikAngkot(dataPenumpang);
	document.getElementById('form-e2').reset(); //untuk mereset value form setelah disubmit
}

function submit2Ulang(){
	dataPenumpang=[];
	document.getElementById('e2').innerHTML="";
}

let dataSkorTertinggi=[];
function submit3(){
	function highestScore (students) {
		let kelas=[]; //menyimpan nama nama kelas
		for(let i=0;i<dataSkorTertinggi.length;i++){
			kelas.push(dataSkorTertinggi[i].class);
		}
		function dataKelas(data){ //fungsi untuk mencari nama kelas, dan membuang jika nama kelasnya sudah sama
			if(data==1||data==0){
				return data; 
			}
			else{
				for(let i=data-2;i>=0;i--){
					if(kelas[data-1]==kelas[i]){
						kelas.splice(data-1,1);
					}
					else{
						continue;
					}
				}
				return kelas + dataKelas(data-1);
			}
		}
		dataKelas(kelas.length);
		let dataTertinggi=[]; //menyimpan data sementara berdasarkan kesamaan kelas
		let hasil=[]; //menyimpan data-data yang nilainya sudah tertinggi
		for(let i=0;i<kelas.length;i++){ //perulangan dicari per kelas
			for(let j=0;j<students.length;j++){ //perulangan untuk mencari siswa berdasarkan kesamaan kelas dan akan di push ke dataTertinggi
				if(kelas[i]==students[j].class){
					dataTertinggi.push(students[j]);
				}
				else{
					continue;
				}
			}
			function mencariScoreTertinggi(data){ //fungsi untuk mencari data berdasarkan skor tertinggi yang diambil dari dataTertinggi
				if(data==1){
					hasil.push(dataTertinggi);
					return dataTertinggi=[];
				}
				else{
					if(parseInt(dataTertinggi[data-1].score) > parseInt(dataTertinggi[data-2].score)){
						dataTertinggi.splice([data-2],1);
						return mencariScoreTertinggi(data-1);				
					}
					else if(parseInt(dataTertinggi[data-1].score) < parseInt(dataTertinggi[data-2].score)){
						dataTertinggi.splice([data-1],1);
						return mencariScoreTertinggi(data-1);
					}
				}
			}
			mencariScoreTertinggi(dataTertinggi.length);
		}
		function tabel(objek){ //fungsi membuat tabel dinamis di html
			if(objek==1){
				return "<tr>"+"<td>"+hasil[objek-1][0].class+"</td>"+"<td>"+hasil[objek-1][0].nama+"</td>"+"<td>"+hasil[objek-1][0].score+"</td>"+"</tr>";
			}
			else{
				return "<tr>"+"<td>"+hasil[objek-1][0].class+"</td>"+"<td>"+hasil[objek-1][0].nama+"</td>"+"<td>"+hasil[objek-1][0].score+"</td>"+"</tr>"+ tabel(objek-1);
			}
		}
		return "<tr>"+"<th>Class</th><th>Name</th><th>Score</th>"+"</tr>"+ tabel(hasil.length);
	}

	let data={ //variabel menyimpan object data inputan
		nama : document.getElementById('nama-highest-score').value,
		score : document.getElementById('score-highest-score').value,
		class : document.getElementById('class-highest-score').value
	}

	dataSkorTertinggi.push(data);
	document.getElementById('e3').innerHTML=highestScore(dataSkorTertinggi);
	document.getElementById('form-e3').reset(); //untuk mereset value form setelah disubmit
}
function submit3Ulang(){
	dataSkorTertinggi=[];
	document.getElementById('e3').innerHTML="";
}

let dataGraduates=[];
function submit4(){
	function graduates(students){
		let kelas=[];
		for(let i=0;i<dataGraduates.length;i++){
			kelas.push(dataGraduates[i].class);
		}
		function dataKelas(data){ //fungsi untuk mencari nama kelas, dan membuang jika nama kelasnya sudah sama
			if(data==1||data==0){
				return data; 
			}
			else{
				for(let i=data-2;i>=0;i--){
					if(kelas[data-1]==kelas[i]){
						kelas.splice(data-1,1);
					}
					else{
						continue;
					}
				}
				return kelas + dataKelas(data-1);
			}
		}
		dataKelas(kelas.length);
		let dataTertinggi=[]; //menyimpan data sementara berdasarkan kesamaan kelas
		let hasil=[]; //menyimpan data-data yang nilainya sudah tertinggi
		for(let i=0;i<kelas.length;i++){ //perulangan dicari per kelas
			for(let j=0;j<students.length;j++){ //perulangan untuk mencari siswa berdasarkan kesamaan kelas dan akan di push ke dataTertinggi
				if(kelas[i]==students[j].class){
					dataTertinggi.push(students[j]);
				}
				else{
					continue;
				}
				hasil.push(dataTertinggi);
				dataTertinggi=[];
			}
			
		}
		function tabel(objek){ //fungsi membuat tabel dinamis di html
			if(objek==1){
				return "<tr>"+"<td>"+hasil[objek-1][0].class+"</td>"+"<td>"+hasil[objek-1][0].nama+"</td>"+"<td>"+hasil[objek-1][0].score+"</td>"+"</tr>";
			}
			else{
				return "<tr>"+"<td>"+hasil[objek-1][0].class+"</td>"+"<td>"+hasil[objek-1][0].nama+"</td>"+"<td>"+hasil[objek-1][0].score+"</td>"+"</tr>"+ tabel(objek-1);
			}
		}
		return "<tr>"+"<th>Class</th><th>Name</th><th>Score</th>"+"</tr>"+ tabel(hasil.length);
	}
	let data={ //variabel menyimpan object data inputan
		nama : document.getElementById('nama-graduates').value,
		score : document.getElementById('score-graduates').value,
		class : document.getElementById('class-graduates').value
	}
	dataGraduates.push(data);
	for(let i=0;i<dataGraduates.length;i++){
		if(dataGraduates[i].score>75){
			continue;
		}
		else{
			dataGraduates.splice(i,1);
		}
	}
	document.getElementById('e4').innerHTML=graduates(dataGraduates);
	document.getElementById('form-e4').reset(); //untuk mereset value form setelah disubmit
}

function submit4Ulang(){
	dataGraduates=[];
	document.getElementById('e4').innerHTML="";
}

function submit6(){
	function meleeRangedGrouping (str) {
		if(str==""){ //jika yangn diinputkan kosong
			return "kosong";
		}
		else{
			str=str.split(",");
			let tipeHero=[]; //menyimpan tipe hero dari str
			for(let i=0;i<str.length;i++){
				tipeHero.push((str[i].split("-"))[1]);
			}
			tipeHero = tipeHero.sort(); //mengurutkan tipeHero
			tipeHeroKlasifikasi=[]; //hasil tipe hero yang didapatkan dengan menjalankan fungsi dibawah
			function hero (arr){ //untuk mencari tipe hero, dan membuannya jika ada herro dengan nama yang sama
				if(arr==1){
					return tipeHeroKlasifikasi.push(tipeHero[arr-1]);
				}
				else{
					if(tipeHero[arr-1]!=tipeHero[arr-2]){
						return hero(arr-1) + tipeHeroKlasifikasi.push(tipeHero[arr-1]);
					}
					else{
						return hero(arr-1);
					}
				}
			}
			hero(tipeHero.length);
			let grouping=[]; //menyimpan hasil akhir dari grouping
			for(let i=0;i<tipeHeroKlasifikasi.length;i++){
				let hasil=[]; //menyimpan sementara berdasarkan pahlawannya
				for(let j=0;j<str.length;j++){
					if(tipeHeroKlasifikasi[i]==str[j].split("-")[1]){
						hasil.push(str[j].split("-")[0]);
					}
					else{
						continue;
					}
				}
				grouping.push(hasil);
			}
			function cetak(arr){ //untuk mencetak bentuk html
				if(arr==1){
					return "["+grouping[arr-1]+"]";
				}
				else{
					return cetak(arr-1) + ", ["+grouping[arr-1]+"]";
				}
			}
			return cetak(grouping.length);
		}
		
	}
	document.getElementById('e6').innerHTML=meleeRangedGrouping(document.getElementById('melee-ranged').value);
	document.getElementById('inputan-melee-ranged').innerHTML = document.getElementById('melee-ranged').value;
	document.getElementById('melee-ranged').value="";
}
function submit6Ulang(){
	document.getElementById('inputan-melee-ranged').innerHTML="";
	document.getElementById('e6').innerHTML="";
}


function submit7(){
	function hapusSimbol(str) {
		str = str.match(/\w+/gi); // Mencocokan karakter pada sebuah kata (alphanumeric dan underscore/garis bawah).
  		str= str.join(""); //menggabungkan array menjadi satu tanpa pemisah menjadi string
  		return str;
	}
	document.getElementById('e7').innerHTML=hapusSimbol(document.getElementById('hapus-simbol').value);
	document.getElementById('inputan-hapus-simbol').innerHTML=document.getElementById('hapus-simbol').value;
	document.getElementById('hapus-simbol').value = "";
}
function submit7Ulang(){
	document.getElementById('inputan-hapus-simbol').innerHTML="";
	document.getElementById('e7').innerHTML="";
}

function submit8(){
	function cariPelaku(str) {
		str= str.match(/abc/g); //mencari yang cocok dengan abc, dikembalikan dalam bentuk array
		return str.length;
	}
	document.getElementById('e8').innerHTML=cariPelaku(document.getElementById('cari-pelaku').value);
	document.getElementById('inputan-cari-pelaku').innerHTML=document.getElementById('cari-pelaku').value;
	document.getElementById('cari-pelaku').value ="";
}
function submit8Ulang(){
	document.getElementById('inputan-cari-pelaku').innerHTML="";
	document.getElementById('e8').innerHTML="";
}