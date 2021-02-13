class FilmController {
    static buscaFilme(){
        let arrayFilmes = ["Twilight","The Avengers","The Croods","Cars 3","Kill bill","1917","Batman","The Avengers","The Green Mile","The godfather","Mulan","Joker","Fight club","Thor","Pearl Harbor","Forrest Gump"];
        for(let filme of arrayFilmes){
            let model = new FilmModel();
            model.fazRequest(filme,() => {let view = new FilmView(); view.update(model)});
        }
    }
    static paginaPesquisa(){
        localStorage.setItem('meuFilme', document.getElementById("filmName").value);
        location.href="./pages/pesquisa.html";
    }
    static pegaFilme(){
        localStorage.setItem('meuFilme', document.getElementById("filmName").value);
        location.href="pesquisa.html";
    }
    static buscaFilmebarra(){
        let model = new FilmModel();
        model.fazRequest(localStorage.getItem('meuFilme'),() => {let view = new FilmView(); view.updatePesquisa(model)});
    }
    static buscaFilmeImg(filme){
        localStorage.setItem('meuFilme', filme);
        location.href="./pages/pesquisa.html";
    }

}
document.querySelector('#formPesquisa').addEventListener("submit",(event)=>{event.preventDefault()});