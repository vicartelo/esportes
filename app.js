function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);

    if (campoPesquisa == "") { 
       section.innerHTML = "<p>Nenhum esporte encontrado</p>"
return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let Esporte = "";
    let descricao = "";
    let tags = "";

for (let dado of dados) {
    esporte = dado.Esporte.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()

    if (Esporte.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
                 <h2>
                    ${dado.Esporte}
                 </h2>
                 ${dado.imagem}
             <p class="descricao-meta">${dado.descricao} </p>
             <a href="${dado.Link}" target="_blank">Saiba mais</a>
         </div>
     `
    } 
}

if(!resultados){
    "<p>Nenhum esporte encontrado</p>"
}

section.innerHTML = resultados
}
// console.log(dados);


    