function carregaDicionario() {
    var biografias = {
        bio01: {
            nome: "BTS",
            imagem: "https://lumiere-a.akamaihd.net/v1/images/bts_10e2829a.jpeg?region=0,0,4096,3121",
            descricao: " ",
            citacao: " "
        },
        bio02: {
            nome: "Bts",
            imagem: "https://lumiere-a.akamaihd.net/v1/images/bts_ok_9955722d.jpeg?region=0,120,1280,720&width=960",
            descricao: " ",
            citacao: " "
        },
        bio03: {
            nome: "bts",
            imagem: "https://www.ofuxico.com.br/wp-content/uploads/2022/10/bts-confira-as-musicas-solo-dos-integrantes-do-grupo-foto.jpg",
            descricao: " ",
            citacao: " "
        },
        bio04: {
            nome: " ",
            imagem: "https://www.ofuxico.com.br/wp-content/uploads/2022/10/bts-confira-as-musicas-solo-dos-integrantes-do-grupo-foto.jpg",
            descricao: " ",
            citacao: " "
        },
        bio05: {
            nome: " ",
            imagem: "https://www.ofuxico.com.br/wp-content/uploads/2022/10/bts-confira-as-musicas-solo-dos-integrantes-do-grupo-foto.jpg",
            descricao: " ",
            citacao: " "
        },
        bio06: {
            nome: " ",
            imagem: "https://www.ofuxico.com.br/wp-content/uploads/2022/10/bts-confira-as-musicas-solo-dos-integrantes-do-grupo-foto.jpg",
            descricao: " ",
            citacao: " "
        },
    }
    var content = document.getElementById("content");
    for (var bio in biografias) {
        content.innerHTML += '<div class="card">' +
         '<img src="' + 
         biografias[bio].imagem + '"/>' +
         '<details>' + 
         '<summary>' + biografias[bio].nome + 
         '</summary>' +
         '<p>' +
         biografias[bio].descricao +
         '</p>' +
         '<blockquote> <q>' + 
         biografias[bio].citacao + 
         '</q></blockquote>' +
         '</details>' +
         '</div>';
    }
}
carregaDicionario();