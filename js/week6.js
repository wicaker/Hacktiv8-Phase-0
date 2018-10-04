let htmlAwalLatihan1 = document.getElementById('latihan-1').innerHTML;
function latihan1(){ //fungsi untuk merubah menjadi permintaan tugas
	document.getElementById('fill-me').innerHTML="HALO!";
	let p = document.getElementsByClassName('change-all-of-me');
	let h2 = p[p.length-1].nextElementSibling;
	for(let i=0;i<p.length;i++){
		p[i].innerHTML="HALO JUGA!";
	}
	h2.innerHTML = "Apa Kabar!";
}

function latihan1Ulang(){ //fungsi merubah seperti semula
	document.getElementById('latihan-1').innerHTML = htmlAwalLatihan1;

}

let htmlAwalLatihan2 = document.getElementById('eldest-parent').innerHTML;
function latihan2(){
	let divEldestParent = document.getElementById('eldest-parent'); //ambil id eldest-parent
	
	//<div>Saya Adalah Keturunan Pertama</div> menjadi <div>Diakses Melalui Eldest Parent</div>
	let div1 = divEldestParent.children;
	div1[2].innerHTML="Diakses Melalui Eldest Parent";

	//<div>Saya adalah Generasi Termuda, yang paling Tua</div> menjadi <div>Diakses Melalui a Child</div>
	let div2 = div1[3].children[0].children;
	div2[1].nextElementSibling.innerHTML = "Diakses Melalui a Child";
	//<div>Saya adalah Generasi Termuda, yang Paling Muda</div> menjadi <div>Diakses Melalui a Child</div>
	(div2[1].previousElementSibling).innerHTML = "Diakses Melalui a Child";
	//<div>Saya adalah Generasi yang Cukup Tua</div> menjadi <div>Diakses Melalui a Child</div>
	let button = divEldestParent.getElementsByTagName('button');
	button[0].previousElementSibling.innerHTML="Diakses Melalui a Child";
}

function latihan2Ulang(){
	document.getElementById('eldest-parent').innerHTML = htmlAwalLatihan2;
}

function latihan3(){
	let form = document.getElementById('main-form'); //ambil id main-form
	let formChild = form.getElementsByClassName('form-group'); //dapatkan isi main-form berdasrkan class form-group
	for(let i=0;i<formChild.length;i++){ //jika ada kosong, return alert
		if(formChild[i].children[1].value==""){
			return alert(formChild[i].children[0].innerHTML + " harus diisi");
		}
		else{
			continue;
		}
	}
	//return true jika data suda benar, dan false jika masih ada yang tidak sesuai
	let minimalPassword = /^[a-zA-Z0-9\_\-]{6,100}$/;
	if(formChild[1].children[1].value !== formChild[2].children[1].value || !minimalPassword.test(formChild[1].children[1].value)){
		return alert("Password Minimal 6 Karakter,  dan Confirmasi Password Harus Sama");
	}
	else if(formChild[3].children[1].value !== formChild[4].children[1].value ){
		return alert("Confirmasi Email Harus Sama");
	}
	else{
		alert("Data Berhasil Di Submit");
		return document.getElementById('main-form').reset();
	}
	//console.log(formChild[1].children[1].value.length<6);
}

let htmlAwalLatihan4=document.getElementById('main').innerHTML;
function latihan4(){
	/*call parent id'main'*/
	let idMain = document.getElementById('main');

	function createElementPerDiv(value, attr,element){
		/*create variable contain createElement based on Element needed*/
		let elementHTML;
		if(element=='div'){
			elementHTML =  document.createElement('div');
		}
		else if(element=='h1'){
			elementHTML =  document.createElement('h1');
		}
		else if(element=='span'){
			elementHTML =  document.createElement('span');
		}
		else if(element=='p'){
			elementHTML =  document.createElement('p');
		}
		else if(element=='button'){
			elementHTML =  document.createElement('button');
		}
		else{
			return 0;
		}

		/*create variable contain createAttribute based on Attribute needed */
		let attrClass = document.createAttribute('class');
		let attrId = document.createAttribute('id');

		/*
		create value of attribute
		add attribute to element needed using setAttributeNode
		return element contain attribute and value
		*/
		if(attr=='id'){
			attrId.value = value ;
			elementHTML.setAttributeNode(attrId);
			return elementHTML;
		}
		else if(attr=='class'){
			attrClass.value=value;
			elementHTML.setAttributeNode(attrClass);
			return elementHTML;
		}
		else{
			return elementHTML;
		}
	}
	/*create child of div id main*/
	let divIdContent = createElementPerDiv('content','id','div');
	idMain.appendChild(divIdContent);

	/*create child of div id content*/
	let idContent = document.getElementById('content'); //call div id content
	let divClassContentPost1= createElementPerDiv('content-post','class','div');
	idContent.appendChild(divClassContentPost1);
	let divClassContentPost2= createElementPerDiv('content-post','class','div');
	idContent.appendChild(divClassContentPost2);

	/*create function it can work like this*/
	function createElementText(value,attr,element,text,parent){
		let elementHTML = createElementPerDiv(value,attr,element)
		let textNode = document.createTextNode(text);
		elementHTML.appendChild(textNode);
		parent.appendChild(elementHTML);
	}
	let divClassContentPost = document.getElementsByClassName('content-post'); //ambil document dengan class content-post
	
	/*create child of div class content-post[0]*/
	createElementText(0,0,'h1',"Judul Post",divClassContentPost[0]);
	createElementText(0,0,'span',"Published on 12 May 2016",divClassContentPost[0]);
	createElementText(0,0,'p',"Lorem Ipsum Dolor Sit Amet",divClassContentPost[0]);
	createElementText('share-post-btn','class','button',"Share this Post",divClassContentPost[0]);

	/*create child of div class content-post[1]*/
	createElementText(0,0,'h1',"Judul Post 2",divClassContentPost[1]);
	createElementText(0,0,'span',"Published on 13 May 2016",divClassContentPost[1]);
	createElementText(0,0,'p',"Lorem Ipsum Dolor Sit Amet",divClassContentPost[1]);
	createElementText('share-post-btn','class','button',"Share this Post",divClassContentPost[1]);

	/*add addEventListener button*/
	let button = document.getElementsByClassName('share-post-btn');
	for(let i=0;i<button.length;i++){
		button[i].addEventListener('click',function(){
			alert("You have shared this post "+(i+1)+" !");
		});
	}
	
}

function latihan4Ulang(){
	document.getElementById('main').innerHTML = htmlAwalLatihan4;
}