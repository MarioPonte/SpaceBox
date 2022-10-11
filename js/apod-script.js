// Esta função pega a data do campo de procura e manda ela para que possa ser chamada
function getDate() {
	return document.getElementById('dateSearch').value;
}

// Data atual

var data = new Date();
var ano = data.getFullYear();
var mes = data.getMonth()+1;
var dia = String(data.getDate()).padStart(2,'0');
var dataPadrao = '';

if(mes<10){
	dataPadrao = ano + '-' + '0' + mes + '-' + dia;
}else{
	dataPadrao = ano + '-' + mes + '-' + dia;
}

document.getElementById("dateSearch").max = dataPadrao;
document.getElementById("dateSearch").value = dataPadrao;
document.getElementById("dateSearch").min = '1995-06-20';

async function getDados() {

// Request api da NASA

let queryUrl = "https://api.nasa.gov/planetary/apod?";
let queryKey = "api_key=leWsmyC7lJSYGrpntyDmUmaenjXwR4zZKbPv4LgJ&";
let queryDate = "date=" + getDate() + "&";
		
let queryFull = queryUrl + queryKey + queryDate;

const dados = await fetch(queryFull);
const response = await dados.json();

const pegueiDados = JSON.parse(JSON.stringify(response));

let date = new Date(pegueiDados.date);
let dateString = moment(date).format('DD-MM-YYYY');
let explanation = pegueiDados.explanation;
let copyright = pegueiDados.copyright;
let hdurl = pegueiDados.hdurl;
let media_type = pegueiDados.media_type;
let service_version = pegueiDados.service_version;
let title = pegueiDados.title;
let url = pegueiDados.url;

let imageType = `<div class="bg-image hover-overlay ripple shadow-1-strong rounded" data-mdb-ripple-color="light" > <a href="` + url + `" target="_blank" > <img id="wrapper-image" src="" class="w-100" /> </a> <a id="wrapper-hdurl" href="" target="_blank"> <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)" ></div> </a> </div> `;
				
let videoType = `<div class="ratio ratio-16x9"> <iframe id="wrapper-video" src="" title="YouTube video" allowfullscreen ></iframe> </div> `;

document.getElementById("wrapper-title").innerHTML = title;
document.getElementById("wrapper-date").innerHTML = dateString;
document.getElementById("wrapper-explanation").innerHTML = explanation;
if(copyright == undefined){
	document.getElementById("wrapper-copyright").innerHTML = "";
}else{
	document.getElementById("wrapper-copyright").innerHTML = "From " + copyright;
}

if (media_type === "video") {
	document.getElementById("wrapper-media").innerHTML = videoType;
	document.getElementById("wrapper-video").src = url;
} else {
	document.getElementById("wrapper-media").innerHTML = imageType;
	document.getElementById("wrapper-image").src = url;
	document.getElementById("wrapper-hdurl").href = hdurl;
}
	
}

getDados();