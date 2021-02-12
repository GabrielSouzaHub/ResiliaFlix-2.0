class FilmView{
    constructor(){
        this.container = document.querySelector(".containers");
    }
    update(model){
        this.container.innerHTML += 
        `
        <div class="film-container">
        <p class="film-title">${model.title}</p>
         <img class="film-poster" src=${model.poster} onclick= "FilmController.buscaFilmeImg('${model.title}')">
         </div> 
         `
    }
    updatePesquisa(model){
        try{
            if(model.title===undefined) throw `<img src=../../img/404.jpg>`
        this.container.innerHTML =
        `

        <div class="grid-container">
        <picture>
        <img class="poster" src=${model.poster}>
        </picture>
        <div class="info-um">
        <p class="text"><span>Titulo:</span> ${model.title}</p>
        <p class="text"><span>Lançamento:</span> ${model.released}</p>
        <p class="text"><span>Duração:</span> ${model.runtime}</p>
        <p class="text"><span>Gênero:</span> ${model.genre}</p>
        <p class="text"><span>Diretor:</span> ${model.director}</p>
        <p class="text"><span>Escritor:</span> ${model.writer}</p>
        <p class="text"><span>Elenco:</span> ${model.actors}</p>
        </div>
        <div class="info-dois">
        <p class="text"><span>Roteiro:</span> ${model.plot}</p>
        <p class="text"><span>Idioma:</span> ${model.language}</p>
        <p class="text"><span>País:</span> ${model.country}</p>
        <p class="text"><span>Prêmios:</span> ${model.awards}</p>
        <p class="text"><span>Bilheteria:</span> ${model.boxOffice}</p>
        <p class="text"><span>Produtora:</span> ${model.production}</p>
        </div>
        </div>
         ` 
        }
        catch(e){
            this.container.innerHTML = 
            `
            ${e}
            `
        }


    }
}