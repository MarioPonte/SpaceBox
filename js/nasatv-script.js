
async function getDados() {

// Request api do youtube

let queryUrl = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCLA_DiR1FfKNvjuUpBHmylQ&maxResults=10&order=date&";
let queryKey = "key=AIzaSyAvRlsaTzsa1JUjz6ux3fhTnecoeoViLbE";
		
let queryFull = queryUrl + queryKey;

const dados = await fetch(queryFull);
const response = await dados.json();

const pegueiDados = JSON.parse(JSON.stringify(response));

for(let i=0; i<pegueiDados.items.length; i++){
    //console.log(pegueiDados.items[i].snippet.thumbnails.high.url)
    document.getElementById("nasaVideos").innerHTML += '<div class="videoCard"><img class="videoImg" src="' + pegueiDados.items[i].snippet.thumbnails.high.url + '" alt="" srcset=""><p class="videoTitle">' + pegueiDados.items[i].snippet.title + '</p></div>'
}
	
}

getDados();