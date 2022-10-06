const API_KEY = "leWsmyC7lJSYGrpntyDmUmaenjXwR4zZKbPv4LgJ";
const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;

let selectedSolIndex;

/* API da nasa InSight | DESATIVADA TEMPORARIAMENTE

getWeather().then(sols => {
	let selectedSolIndex = sols.length - 1;
	displaySelectedSol(sols);
})

function displaySelectedSol(sols){
	const selectedSol = sols[selectedSolIndex];
	console.log(selectedSol);
}

function getWeather(){
	return fetch(API_URL)
		.then(res => res.json())
		.then(data => {
			const {
				sol_keys,
				validity_checks,
				...solData
			} = data
			return Object.entries(solData).map(([sol,data])=>{
                return {
                    sol:sol,
                    maxTemp: data.AT.mx,
                    minTemp: data.AT.mn,
                    windSpeed: data.HWS.av,
                    windDirectionDegress: data.WD.most_common.compass_degrees,
                    windDirectionCardinal: data.WD.most_common.compass_point,
                    date: new Date(data.First_UTC)
                }
            })
		})
}

*/