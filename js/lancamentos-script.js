
// Request api de lançamentos

const url = "https://fdo.rocketlaunch.live/json/launches/next/5";

async function getDados() {


    //Inicialização da api

    const dados = await fetch(url);
    const response = await dados.json();

    const pegueiDados = JSON.parse(JSON.stringify(response));


    // Calendário

    $(document).ready(function(){
        $('#CalendarioWeb').fullCalendar({

            selectable: true,

            eventSources: [{

                events: [

                    

                ],

            }],

            eventClick:function(date,jsEvent,view){
                //$('#exampleModal').modal('show');   Modal apenas funcional com uma Base de Dados
            }

        });



        // missoes

        for (let i = 0; i < pegueiDados.result.length; i++) {
            $('#missions-panel').append('<ul class="missions glass"><li><b>Mission:</b> ' + pegueiDados.result[i].name + '<ul><li><b>Vehicle:</b> ' + pegueiDados.result[i].vehicle.name + '</li><li><b>Space center:</b> ' + pegueiDados.result[i].pad.location.name + '</li><li><b>Date:</b> ' + pegueiDados.result[i].date_str + '</li></ul></li></ul>');  
            
            
            // Modificar a var date(Mudar o nome depois) para usar como data dos eventos do calendário

            var timestamp = pegueiDados.result[i].sort_date * 1000;
            var dateMission = new Date(timestamp);
            var dateMissionFormat = dateMission.getFullYear() + "-" + ((dateMission.getMonth() + 1) < 10 ? "0" + (dateMission.getMonth() + 1) : (dateMission.getMonth() + 1)) + "-" + (dateMission.getDate() < 10 ? "0" + dateMission.getDate() : dateMission.getDate());
            
            
            
            // Variavel myEvent para pegar os dados das missões na api

            var myEvent = {
                title: pegueiDados.result[i].name,
                start: dateMissionFormat,
                color: '#3F2CCC'
            };

            $('#CalendarioWeb').fullCalendar( 'renderEvent', myEvent );

        }


    });

}

getDados();