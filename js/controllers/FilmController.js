class FilmController {
    static buscaFilme(){
        let arrayFilmes = ["Les Misérables","Monster House","The Fox and the Hound","Twilight","Pearl Harbor","Avengers: Endgame","City of god","The Karate Kid","The wolf of wall street","Django Unchained","Inglourious basterds","A marriage story","Police academy","1917","Pacific Rim","Cars 3"];
        for(let filme of arrayFilmes){
            let model = new FilmModel();
            model.fazRequest(filme,() => {let view = new FilmView(); view.update(model)});
        }
    }
    static paginaPesquisa(){
        localStorage.setItem('meuFilme', document.getElementById("filmName").value);
        location.href="./pages/pesquisa/pesquisa.html";
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
        location.href="./pages/pesquisa/pesquisa.html";
    }

}
document.querySelector('#formPesquisa').addEventListener("submit",(event)=>{event.preventDefault()});