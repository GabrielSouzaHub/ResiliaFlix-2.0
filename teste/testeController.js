class CpfController{
    static buscaCpf(cep){
        let model = new CpfModel;
        model.pegaEndereco(cep,() => {let view = new CpfView(); view.update(model)});

    }
}