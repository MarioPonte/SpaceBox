// Request api de noticias

const url = "https://api.spaceflightnewsapi.net/v3/articles";

async function getDados() {
    const dados = await fetch(url);
    const response = await dados.json();

    const pegueiDados = JSON.parse(JSON.stringify(response));

    let dataISODataHora = "";
    let dataFormatada = "";

    // Noticias

	for (let i = 0; i < pegueiDados.length; i++) {
        
        dataISODataHora = new Date(pegueiDados[i].publishedAt);

        if((dataISODataHora.getMonth() + 1)<10){

            if(dataISODataHora.getDate()<10){

                if(dataISODataHora.getHours()<10){

                    if(dataISODataHora.getMinutes()<10){
                        dataFormatada = dataISODataHora.getFullYear() + "-0" + (dataISODataHora.getMonth() + 1) + "-0" + dataISODataHora.getDate() + " | 0" + dataISODataHora.getHours() + ":0" + dataISODataHora.getMinutes();
                    }else{
                        dataFormatada = dataISODataHora.getFullYear() + "-0" + (dataISODataHora.getMonth() + 1) + "-0" + dataISODataHora.getDate() + " | 0" + dataISODataHora.getHours() + ":" + dataISODataHora.getMinutes();
                    }

                }else{

                    if(dataISODataHora.getMinutes()<10){
                        dataFormatada = dataISODataHora.getFullYear() + "-0" + (dataISODataHora.getMonth() + 1) + "-" + dataISODataHora.getDate() + " | " + dataISODataHora.getHours() + ":0" + dataISODataHora.getMinutes();
                    }else{
                        dataFormatada = dataISODataHora.getFullYear() + "-0" + (dataISODataHora.getMonth() + 1) + "-" + dataISODataHora.getDate() + " | " + dataISODataHora.getHours() + ":" + dataISODataHora.getMinutes();
                    }

                }

            }else{
                
                if(dataISODataHora.getHours()<10){

                    if(dataISODataHora.getMinutes()<10){
                        dataFormatada = dataISODataHora.getFullYear() + "-0" + (dataISODataHora.getMonth() + 1) + "-" + dataISODataHora.getDate() + " | 0" + dataISODataHora.getHours() + ":0" + dataISODataHora.getMinutes();
                    }else{
                        dataFormatada = dataISODataHora.getFullYear() + "-0" + (dataISODataHora.getMonth() + 1) + "-" + dataISODataHora.getDate() + " | 0" + dataISODataHora.getHours() + ":" + dataISODataHora.getMinutes();
                    }

                }else{

                    if(dataISODataHora.getMinutes()<10){
                        dataFormatada = dataISODataHora.getFullYear() + "-0" + (dataISODataHora.getMonth() + 1) + "-" + dataISODataHora.getDate() + " | " + dataISODataHora.getHours() + ":0" + dataISODataHora.getMinutes();
                    }else{
                        dataFormatada = dataISODataHora.getFullYear() + "-0" + (dataISODataHora.getMonth() + 1) + "-" + dataISODataHora.getDate() + " | " + dataISODataHora.getHours() + ":" + dataISODataHora.getMinutes();
                    }

                }

            }

        }else{
            
            if(dataISODataHora.getDate()<10){

                if(dataISODataHora.getHours()<10){

                    if(dataISODataHora.getMinutes()<10){
                        dataFormatada = dataISODataHora.getFullYear() + "-" + (dataISODataHora.getMonth() + 1) + "-0" + dataISODataHora.getDate() + " | 0" + dataISODataHora.getHours() + ":0" + dataISODataHora.getMinutes();
                    }else{
                        dataFormatada = dataISODataHora.getFullYear() + "-" + (dataISODataHora.getMonth() + 1) + "-0" + dataISODataHora.getDate() + " | 0" + dataISODataHora.getHours() + ":" + dataISODataHora.getMinutes();
                    }

                }else{

                    if(dataISODataHora.getMinutes()<10){
                        dataFormatada = dataISODataHora.getFullYear() + "-" + (dataISODataHora.getMonth() + 1) + "-0" + dataISODataHora.getDate() + " | " + dataISODataHora.getHours() + ":0" + dataISODataHora.getMinutes();
                    }else{
                        dataFormatada = dataISODataHora.getFullYear() + "-" + (dataISODataHora.getMonth() + 1) + "-0" + dataISODataHora.getDate() + " | " + dataISODataHora.getHours() + ":" + dataISODataHora.getMinutes();
                    }

                }

            }else{
                
                if(dataISODataHora.getHours()<10){

                    if(dataISODataHora.getMinutes()<10){
                        dataFormatada = dataISODataHora.getFullYear() + "-" + (dataISODataHora.getMonth() + 1) + "-" + dataISODataHora.getDate() + " | 0" + dataISODataHora.getHours() + ":0" + dataISODataHora.getMinutes();
                    }else{
                        dataFormatada = dataISODataHora.getFullYear() + "-" + (dataISODataHora.getMonth() + 1) + "-" + dataISODataHora.getDate() + " | 0" + dataISODataHora.getHours() + ":" + dataISODataHora.getMinutes();
                    }

                }else{

                    if(dataISODataHora.getMinutes()<10){
                        dataFormatada = dataISODataHora.getFullYear() + "-" + (dataISODataHora.getMonth() + 1) + "-" + dataISODataHora.getDate() + " | " + dataISODataHora.getHours() + ":0" + dataISODataHora.getMinutes();
                    }else{
                        dataFormatada = dataISODataHora.getFullYear() + "-" + (dataISODataHora.getMonth() + 1) + "-" + dataISODataHora.getDate() + " | " + dataISODataHora.getHours() + ":" + dataISODataHora.getMinutes();
                    }

                }

            }
            
        }

        $('#blog-post').append('<div class="blog-post"><div class="blog-post__img"><img id="news-img" src="' + pegueiDados[i].imageUrl + '" alt=""></div><div class="blog-post__info"><div class="blog-post__date"><span><i class="far fa-calendar-alt"></i> ' + dataFormatada + '</span><h1 class="blog-post__title">' + pegueiDados[i].title +'</h1><p class="blog-post__text">' + pegueiDados[i].summary + '</p><p class="blog-post__poster" translate="no"><i class="fas fa-newspaper"></i> ' + pegueiDados[i].newsSite + '</p><a href="' + pegueiDados[i].url + '" target="_blank" class="blog-post__cta" translate="no">Read More</a></div></div></div>');


    }

}
getDados();