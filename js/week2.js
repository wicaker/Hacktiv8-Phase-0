//[Exercises 3] Mengenal penggunaan Conditional if-else dalam JavaScript

function submit3(){
	let nama = document.getElementById('nama').value;
	let peran = document.getElementById('peran').value;
	if (nama =="" && peran === "") {
		alert("Nama harus diisi!");
	}
	else if(peran ==""){
		alert("Halo "+ nama + ", Pilih peranmu untuk memulai game!");
	}
	else{
		alert(hasil = "Halo "+ nama + ", Peranmu adalah "+ peran);
	}
	document.getElementById('nama').value="";
	document.getElementById('peran').value="";
}

//[Exercises 4] Mengenal penggunaan Conditional (Switch-Case) dalam JavaScript
function submit4(){
	let hari = document.getElementById('hari').value;
	let bulan = document.getElementById('bulan').value;
	let tahun = document.getElementById('tahun').value;
	switch(bulan){
		case "1" : { alert(hari+" Januari "+ tahun); break; };
		case "2" : { alert(hari+" Februari "+ tahun); break; };
		case "3" : { alert(hari+" Maret "+ tahun); break; };
		case "4" : { alert(hari+" April "+ tahun); break; };
		case "5" : { alert(hari+" Mei "+ tahun); break; };
		case "6" : { alert(hari+" Juni "+ tahun); break; };
		case "7" : { alert(hari+" Juli "+ tahun); break; };
		case "8" : { alert(hari+" Agustus "+ tahun); break; };
		case "9" : { alert(hari+" September "+ tahun); break; };
		case "10" : { alert(hari+" Oktober "+ tahun); break; };
		case "11" : { alert(hari+" November "+ tahun); break; };
		case "12" : { alert(hari+" Desember "+ tahun); break; };
		default: { alert("Bulan yang diinputkan salah");};
	}
	document.getElementById('hari').value="";
	document.getElementById('bulan').value="";
	document.getElementById('tahun').value="";
}

function submit5a(){
	var word = 'JavaScript';
	var second = 'is';
	var third = 'awesome';
	var fourth = 'and';
	var fifth = 'I';
	var sixth = 'love';
	var seventh = 'it!';
	document.getElementById('e5a').innerHTML = word+" "+second+" "+third+" "+fourth+" "+fifth+" "+sixth+" "+seventh;
	//alert(word+" "+second+" "+third+" "+fourth+" "+fifth+" "+sixth+" "+seventh);
}

function submit5b(){
	var word = 'wow JavaScript is so cool';
	var exampleFirstWord = word[0] + word[1] + word[2];
	var secondWord = word[4]+word[5]+word[6]+word[7]+word[8]+word[9]+word[10]+word[11]+word[12]+word[13]; // do your own!
	var thirdWord = word[15]+word[16]; // do your own!
	var fourthWord = word[18]+word[19]; // do your own!
	var fifthWord = word[21]+word[22]+word[23]+word[24]; // do your own!
	document.getElementById('e5b').innerHTML = "First word: "+ exampleFirstWord+ "<br>" + "Second Word: "+ secondWord +"<br>"+"Third Word: "+ thirdWord+"<br>"+"Fourth Word: "+fourthWord +"<br>"+"Fift Word: "+ fifthWord;
}

function submit5c(){
	var word = 'wow JavaScript is so cool';
	var exampleFirstWord = word.substring(0, 3);
	var secondWord = word.substring(4, 14); // do your own!
	var thirdWord = word.substring(15, 17); // do your own!
	var fourthWord = word.substring(18, 20); // do your own!
	var fifthWord = word.substring(21, 25); // do your own!
	return document.getElementById('e5c').innerHTML = "First word: "+ exampleFirstWord+ "<br>" + "Second Word: "+ secondWord +"<br>"+"Third Word: "+ thirdWord+"<br>"+"Fourth Word: "+fourthWord +"<br>"+"Fift Word: "+ fifthWord;
}

function submit5d(){
	var word = 'wow JavaScript is so cool';
	var exampleFirstWord = word.substring(0, 3);
	var secondWord = word.substring(4, 14); // do your own!
	var thirdWord = word.substring(15, 17); // do your own!
	var fourthWord = word.substring(18, 20); // do your own!
	var fifthWord = word.substring(21, 25); // do your own!
	return document.getElementById('e5d').innerHTML = "First word: "+ exampleFirstWord+", with length: "+ exampleFirstWord.length +"<br>" + "Second Word: "+ secondWord +", with length; "+secondWord.length+"<br>"+"Third Word: "+ thirdWord+", with length: "+thirdWord.length+"<br>"+"Fourth Word: "+fourthWord +", with length: "+fourthWord.length+"<br>"+"Fift Word: "+ fifthWord+", with length: "+fifthWord.length;
}

function submit6a(){
	let angka = 2;
	while(angka<=20){
		let para = document.createElement('p');
		let node = document.createTextNode(angka+"- I love coding");
		para.appendChild(node);

		let element = document.getElementById('e6a1');
		element.appendChild(para);
		angka = angka+2;
	}
	let angka2 = 20;
	while(angka2>=2){
		let para = document.createElement('p');
		let node = document.createTextNode(angka2+"- I love coding");
		para.appendChild(node);

		let element = document.getElementById('e6a2');
		element.appendChild(para);
		angka2 = angka2-2;
	}
}

function submit6b(){
	for (let i = 1; i <= 20; i++) {
		let para = document.createElement('p');
		let node = document.createTextNode(i+"- I love coding");
		para.appendChild(node);

		let element = document.getElementById('e6b1');
		element.appendChild(para);
	}

	for (let i = 20; i >= 1; i--) {
		let para = document.createElement('p');
		let node = document.createTextNode(i+"- I love coding");
		para.appendChild(node);

		let element = document.getElementById('e6b2');
		element.appendChild(para);
	}
}

function submit6c(){
	for (let i = 1; i <= 100; i++) {
		let para = document.createElement('p');
		if (i%10==0){
			let node = document.createTextNode(i+"- Genap "+"- Kelipatan 10");
			para.appendChild(node);
		}
		else if (i%2==0) {
			if (i%6==0) {
				let node = document.createTextNode(i+"- Genap "+"- Kelipatan 6");
				para.appendChild(node);
			}
			else{
				let node = document.createTextNode(i+"- Genap ");
				para.appendChild(node);
			}
		}
		else if (i%2 == 1){
			if (i%3==0) {
				let node = document.createTextNode(i+"- Ganjil "+"- Kelipatan 3");
				para.appendChild(node);
			}
			else{
				let node = document.createTextNode(i+"- Ganjil ");
				para.appendChild(node);
			}
		}
		let element = document.getElementById('e6c');
		element.appendChild(para);
	}
}

function submit7a(){
	document.getElementById('e7').innerHTML='';
	let rows = document.getElementById('rows').value;
	for (let i = 1; i <= rows; i++) {
		let node = document.createTextNode('*');
		let linebreak = document.createElement("br");
		let element = document.getElementById('e7');
		element.appendChild(node);
		element.appendChild(linebreak);
	}
	document.getElementById('rows').value="";
}

function submit7b(){
	document.getElementById('e7').innerHTML=''; //mengosongkan id e7 
	let rows = document.getElementById('rows').value;
	for (let i = 1; i <= rows; i++) {
		let element = document.getElementById('e7');
		for(let j= 1; j<=rows;j++){
			let node = document.createTextNode('*');
			element.appendChild(node);
		}
		let linebreak = document.createElement("br");
		element.appendChild(linebreak); // membuat line break
	}
	document.getElementById('rows').value=""; //mengosongkan value dari tag input id rows
}

function submit7c(){
	document.getElementById('e7').innerHTML='';
	let rows = document.getElementById('rows').value;
	for (let i = 1; i <= rows; i++) {
		let element = document.getElementById('e7');
		for(let j= 1; j<=i;j++){
			let node = document.createTextNode('*');
			element.appendChild(node);
		}
		let linebreak = document.createElement("br");
		element.appendChild(linebreak);
	}
	document.getElementById('rows').value="";
}

function submit9a(){
	document.getElementById('e9a').innerHTML='';
	document.getElementById('e9a').innerHTML='Halo Function!';
}

function submit9b(){
	document.getElementById('e9b').innerHTML='';
	let hasil = document.getElementById('angka1').value * document.getElementById('angka2').value;
	document.getElementById('e9b').innerHTML= hasil;
	document.getElementById('angka1').value="";
	document.getElementById('angka2').value="";

}

function submit9c(){
	document.getElementById('e9c').innerHTML='';
	let name = document.getElementById('name').value;
	let age = document.getElementById('umur').value;
	let address = document.getElementById('alamat').value;
	let hobby = document.getElementById('hobi').value;
	let fullSentence= function(name,age,address,hobby){
		return "Nama Saya "+ name +", Umur Saya "+ age + ", Alamat Saya " + address +", Hobi Saya "+ hobby; 
	}
	document.getElementById('e9c').innerHTML= fullSentence(name,age,address,hobby);
	document.getElementById('name').value='';
	document.getElementById('umur').value='';
	document.getElementById('alamat').value='';
	document.getElementById('hobi').value='';
}

function submit10(){
	document.getElementById('e10').innerHTML='';
	let bandingkanAngka = function(angka1, angka2){
		if (angka1 > angka2) {
			return false;
			
		}
		else if (angka1 < angka2) {
			return true;
			
		}

        else if (angka1 == angka2) {
        	return -1;
        	        
        }     
    }
    document.getElementById('e10').innerHTML = bandingkanAngka(document.getElementById('angka1e10').value, document.getElementById('angka2e10').value)    
    document.getElementById('angka1e10').value='';
    document.getElementById('angka2e10').value=''; 
}

function submit11(){
	document.getElementById('e11').innerHTML='';
	let balikKata = function(kata){
		let hasil='';
		for (let i = kata.length -1 ; i >= 0 ; i--) {
		hasil = hasil+(kata[i]);
		}
		return hasil;
	}
	document.getElementById('e11').innerHTML = balikKata(document.getElementById('kata').value);
	document.getElementById('kata').value='';
}

function submit12(){
	document.getElementById('e12').innerHTML='';
	let konversiMenit = function(waktu){
		let menit = Math.floor(waktu/60);
		let detik = waktu - (menit * 60);
		if (detik<10){detik='0'+detik;}
		return menit+":"+detik;
	}
	document.getElementById('e12').innerHTML = konversiMenit(document.getElementById('waktu').value);
	document.getElementById('waktu').value='';
}

function submit13(){
	document.getElementById('e13').innerHTML='';
	let xo = function(str){
		let x = "";
		let o = "";
		for (let i = 0; i < str.length; i++) {
			if (str[i]=='x' || str[i] == 'X') {
				x = x+str[i];
			}
			else if (str[i]=='o' || str[i] == 'O') {
				o = o+str[i];
			}
			else{
				continue;
			}
		}

		if (x.length == o.length) {
			return 'true';
		}
		else {
			return 'false';
		}
	}
	document.getElementById('e13').innerHTML = xo(document.getElementById('xo').value);
	document.getElementById('xo').value='';
}

