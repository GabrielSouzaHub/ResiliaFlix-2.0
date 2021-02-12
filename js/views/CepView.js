class CepView{
    constructor(){
        var $ = document.querySelector.bind(document);
        this.inputEndereco = $("#endereco");
        this.inputBairro = $("#bairro");
        this.inputCidade = $("#cidade");
        this.inputEstado = $("#UF");
        this.alert = $(".alert-danger");
    }
    update(model){
        try{
            if(model.endereco == undefined)  throw "CEP Não Encontrado";
            else{
                this.alert.hidden = true;
                this.inputEndereco.value = model.endereco;
                this.inputBairro.value = model.bairro;
                this.inputCidade.value = model.cidade;
                this.inputEstado.value = model.estado;
            }
        }
        catch(e){
            this.alert.innerHTML = e;
            this.alert.hidden = false;
            this.inputEndereco.value = "";
            this.inputBairro.value = "";
            this.inputCidade.value = "";
            this.inputEstado.value = "";
        }
    }
}