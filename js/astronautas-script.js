
// Request api da NASA

const url = "https://proxytemptt.herokuapp.com/?url=http://api.open-notify.org/astros.json";

async function getDados() {
    const dados = await fetch(url);
    const response = await dados.json();

    const pegueiDados = JSON.parse(JSON.stringify(response));

	// Numero de Astronautas no espaço
	document.getElementById("counter").innerHTML = pegueiDados.people.length;

    // Tabela de Astronautas
	for (let i = 0; i < pegueiDados.people.length; i++) {
		$('#tabela').append('<tr translate="no"><td>' + pegueiDados.people[i].name + '</td><td>' + pegueiDados.people[i].craft + '</td></tr>');
    }
}

getDados();