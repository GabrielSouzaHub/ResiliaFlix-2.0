class FilmController {
    static buscaFilme(filme){
        let model = new FilmModel();
        model.fazRequest(filme,() => {let view = new FilmView(); view.update(model)});
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