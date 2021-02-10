class FilmView{
    constructor(){
        this.container = document.querySelector(".containers");
    }
    update(model){
        this.container.innerHTML += 
        `<div class="film-container">
        <p class="film-title">${model.title}</p>
         <img class="film-poster" src=${model.poster}">
         </div>  
        `
    }
}