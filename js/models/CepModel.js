class CepModel {
    constructor(){
        this._endereco;
        this._cidade;
        this._bairro;
        this._estado;
    }
    get endereco(){
        return this._endereco;
    }
    get cidade(){
        return this._cidade;
    }
    get bairro(){
        return this._bairro;
    }
    get estado(){
        return this._estado;
    }
    pegaEndereco(cep,callback){
        
        let request = new XMLHttpRequest();

        request.open("GET",`https://viacep.com.br/ws/${cep}/json/`);

        request.addEventListener("load",()=>{
            try{
                if(request.status == 200)
                {
                    let response = JSON.parse(request.responseText);
                    this._endereco = response.logradouro;
                    this._cidade = response.localidade;
                    this._bairro = response.bairro;
                    this._estado = response.uf;
                    callback();
                }
                else throw "Algo deu errado :(";
                 
            }
            catch(e){
                alert(e);
            }
                
            
        });

        request.send();
    }
}