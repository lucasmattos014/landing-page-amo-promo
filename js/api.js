function apiGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario) {
   linha = document.createElement("div");
   accordion = document.createElement("button");
   panel = document.createElement("div");
   paneltext = document.createElement("p");

   linha.className = "box-accordion"; 
   accordion.className = 'fadeInLeft accordion';
   panel.className = 'panel';

   accordion.innerHTML = usuario.title;
   paneltext.innerHTML = usuario.text;

   linha.appendChild(accordion);
   linha.appendChild(panel);
   panel.appendChild(paneltext);

   return linha;
}

function main(){
    let apiURL = apiGet("https://stark-cove-48986.herokuapp.com/seguros/motivos");
    let usuarios = JSON.parse(apiURL);
    let tabela = document.getElementById("accodion_table");

    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}


main()