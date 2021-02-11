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
        this.container.innerHTML =
        `
        <p>${model.title}</p>
        <img src=${model.poster}>
        <p>${model.released}</p>
        <p>${model.runtime}</p>
        <p>${model.genre}</p>
        <p>${model.director}</p>
        <p>${model.writter}</p>
        <p>${model.actors}</p>
        <p>${model.plot}</p>
        <p>${model.language}</p>
        <p>${model.country}</p>
        <p>${model.awards}</p>
        <p>${model.boxOffice}</p>
        <p>${model.production}</p>
        `
        console.log(model.ratings);
    }
}