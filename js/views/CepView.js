class CepView{
    constructor(){
        var $ = document.querySelector.bind(document);
        this.cep = $("#CEP");
        this.inputEndereco = $("#endereco");
        this.inputBairro = $("#bairro");
        this.inputCidade = $("#cidade");
        this.inputEstado = $("#UF");
        this.alert = $(".alert-danger");
    }
    update(model){
        try{
            if(model.endereco == undefined){ 
                this.inputEndereco.value = "";
                this.inputBairro.value = "";
                this.inputCidade.value = "";
                this.inputEstado.value = "";
                this.cep.setCustomValidity("CEP Não Encontrado")
            }
            else{
                this.cep.setCustomValidity("");
                this.inputEndereco.value = model.endereco;
                this.inputBairro.value = model.bairro;
                this.inputCidade.value = model.cidade;
                this.inputEstado.value = model.estado;
            }
        }
        catch(e){
            alert(`Ocorreu um erro, por favor tente novamente. Erro:${e}`) 
        }
    }
}