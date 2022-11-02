
async function getDados() {

// Request api do youtube

let queryUrl = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCLA_DiR1FfKNvjuUpBHmylQ&maxResults=10&order=date&";
let queryKey = "key=AIzaSyAvRlsaTzsa1JUjz6ux3fhTnecoeoViLbE";
		
let queryFull = queryUrl + queryKey;

const dados = await fetch(queryFull);
const response = await dados.json();

const pegueiDados = JSON.parse(JSON.stringify(response));

for(let i=0; i<pegueiDados.items.length; i++){
    document.getElementById("nasaVideos").innerHTML += '<div class="col-sm videoCard"><a class="videoLink" href="https://www.youtube.com/watch?v=' + pegueiDados.items[i].id.videoId + '" target="_Blank"><img class="videoImg" src="' + "http://img.youtube.com/vi/" + pegueiDados.items[i].id.videoId + "/maxresdefault.jpg" + '" alt="" srcset=""><p class="videoTitle">' + pegueiDados.items[i].snippet.title + '</p></a></div>'
}
	
}

getDados();