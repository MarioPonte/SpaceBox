// This function takes the rover and sends it so it can be called
function getRover() {
	return document.getElementById('rover').value;
}

// This function takes the date from the search field and sends it so it can be called
function getDate() {
	return document.getElementById('dateSearch').value;
}

// Actual date
var data = new Date();
var ano = data.getFullYear();
var mes = data.getMonth()+1;
var dia = String(data.getDate()).padStart(2,'0');
var dataPadrao = '';

if(mes<10) dataPadrao = ano + '-' + '0' + mes + '-' + dia; else dataPadrao = ano + '-' + mes + '-' + dia;

document.getElementById("dateSearch").max = dataPadrao;
document.getElementById("dateSearch").min = '1995-06-20';

// Call Function
async function call() {

	let queryFull = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + getRover() + "/photos?earth_date=" + getDate() + "&api_key=leWsmyC7lJSYGrpntyDmUmaenjXwR4zZKbPv4LgJ";
	
	$('#mars-images').children("a").remove();

	const dados = await fetch(queryFull);
    const response = await dados.json();

    const pegueiDados = JSON.parse(JSON.stringify(response));

	pegueiDados.photos.forEach(function (d) {
		$('#mars-images').append('<a href="' + d['img_src'] + '" data-lightbox="photos"><img id="photo" class="photo" src="' + d['img_src'] + '"></a>');
	});

}
	
