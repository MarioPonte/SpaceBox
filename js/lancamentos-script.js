// Request api de lançamentos

const url = "https://fdo.rocketlaunch.live/json/launches/next/5";

async function getDados() {
	
    const dados = await fetch(url);
    const response = await dados.json();

    const pegueiDados = JSON.parse(JSON.stringify(response));

    // missoes

	for (let i = 0; i < pegueiDados.result.length; i++) {
        $('#missions-panel').append('<ul class="missions glass"><li><b>Mission:</b> ' + pegueiDados.result[i].name + '<ul><li><b>Vehicle:</b> ' + pegueiDados.result[i].vehicle.name + '</li><li><b>Space center:</b> ' + pegueiDados.result[i].pad.location.name + '</li><li><b>Date:</b> ' + pegueiDados.result[i].date_str + '</li></ul></li></ul>');
    }

}

getDados();
