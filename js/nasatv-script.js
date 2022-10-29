
async function getDados() {

// Request api do youtube

let queryUrl = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCLA_DiR1FfKNvjuUpBHmylQ&maxResults=10&order=date&";
let queryKey = "key=AIzaSyAvRlsaTzsa1JUjz6ux3fhTnecoeoViLbE";
		
let queryFull = queryUrl + queryKey;

const dados = await fetch(queryFull);
const response = await dados.json();

const pegueiDados = JSON.parse(JSON.stringify(response));

console.log(pegueiDados);
	
}

getDados();