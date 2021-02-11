class CpfView{
    constructor(){
        var $ = document.querySelector.bind(document);
        this.inputEndereco = $("#adress-input");
        this.inputBairro = $("#bairro-input");
        this.inputCidade = $("#city-input");
        this.inputEstado = $("#state-input");
    }
    update(model){
        this.inputEndereco.value = model.endereco;
        this.inputBairro.value = model.bairro;
        this.inputCidade.value = model.cidade;
        this.inputEstado.value = model.estado;

    }
}