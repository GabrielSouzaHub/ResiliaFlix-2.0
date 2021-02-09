class FilmController {
    static buscaFilme(filme){
        let model = new FilmModel();
        model.fazRequest(filme,() => {let view = new FilmView(); view.update(model)});
    }
}