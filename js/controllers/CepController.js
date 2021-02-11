class CepController{
    static buscaCEP(cep){
        let model = new CepModel;
        model.pegaEndereco(cep,() => {let view = new CepView(); view.update(model)});

    }
}