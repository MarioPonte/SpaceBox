// Request api de noticias

const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=astronomy&api-key=ABo8Ujhx7YO9UZNW0FAAB2eCMrL5ex3v";

async function getDados() {
    const dados = await fetch(url);
    const response = await dados.json();

    const pegueiDados = JSON.parse(JSON.stringify(response));

    // Noticias

	for (let i = 0; i < pegueiDados.response.docs.length; i++) {
        $('#blog-post').append('<div class="blog-post"><div class="blog-post__img"><img id="news-img" src="https://www.nytimes.com/' + pegueiDados.response.docs[i].multimedia[i].url + '" alt=""></div><div class="blog-post__info"><div class="blog-post__date"><span><i class="far fa-calendar-alt"></i> ' + pegueiDados.response.docs[i].pub_date + '</span><h1 class="blog-post__title">' + pegueiDados.response.docs[i].headline.main +'</h1><p class="blog-post__text">' + pegueiDados.response.docs[i].lead_paragraph + '</p><a href="' + pegueiDados.response.docs[i].web_url + '" target="_blank" class="blog-post__cta">Read More</a></div></div></div>');
    }

}
getDados();