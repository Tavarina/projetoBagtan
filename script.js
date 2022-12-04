let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("SlidesCarusel");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function carregaDicionario() {
    var biografias = {
        bio01: {
            nome: "BTS",
            imagem:("./assets/img/bts-casabranca.jpg"),
            descricao: " ",
            citacao: " "
        },
        bio02: {
            nome: "Bts",
            imagem:("./assets/img/bts-casabranca.jpg"),
            descricao: " ",
            citacao: " "
        },
        bio03: {
            nome: "bts",
            imagem: ("./assets/img/bts-casabranca.jpg"),
            descricao: " ",
            citacao: " "
        },
        bio04: {
            nome: " ",
            imagem:("./assets/img/bts-casabranca.jpg"),
            descricao: " ",
            citacao: " "
        },
        bio05: {
            nome: " ",
            imagem:("./assets/img/bts-casabranca.jpg"),
            descricao: " ",
            citacao: " "
        },
        bio06: {
            nome: " ",
            imagem:("./assets/img/bts-casabranca.jpg"),
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