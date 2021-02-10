class FilmView{
    constructor(){
        this.container = document.querySelector(".film-container");
    }
    update(model){
        this.container.innerHTML += 
        `<p>${model.title}</p>
         <img src=${model.poster}>  
        `
    }
}