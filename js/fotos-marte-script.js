
// Esta função pega o rover e manda ele para que possa ser chamado
function getRover() {
	return document.getElementById('rover').value;
}

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

console.log(dataPadrao);

document.getElementById("dateSearch").max = dataPadrao;
document.getElementById("dateSearch").min = '1995-06-20';

// Função de chamada

async function call() {
	
$('#mars-images').children("a").remove();
	

// Request api da NASA
	
let xmlhttp = new XMLHttpRequest();
		
		xmlhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				let data = JSON.parse(this.responseText);
				
				
				let photos = data["photos"];
				
				data['photos'].forEach(function (d) {
					$('#mars-images').append('<a href="' + d['img_src'] + '" data-lightbox="photos"><img id="photo" class="photo" src="' + d['img_src'] + '"></a>');
				});
				
			}
		}
		
		let queryRover = getRover();
		
		let queryFull = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + queryRover + "/photos?earth_date=" + getDate() + "&api_key=leWsmyC7lJSYGrpntyDmUmaenjXwR4zZKbPv4LgJ";
		
		xmlhttp.open("GET", queryFull, true);
		xmlhttp.send();

}
	
