class CadastroView {
    constructor() {
        this.container = document.querySelector("#container-form");
    }
    confirmaCadastro() {
        this.container.innerHTML +=
            `
            <div class="alert alert-success" role="alert">
                Cadastrado com sucesso!
            </div>
            `
        setTimeout(() => location.href = "../../index.html", 3500);
    }
    static validaSenha() {
        if(document.getElementById("senha").value!=document.getElementById("confirma").value){
            document.getElementById("confirma").setCustomValidity("Senhas Diferentes");
               
        }
        else{
            document.getElementById("confirma").setCustomValidity("");
            
        }  
       
    }
    confirmaSenha() {
        this.container.innerHTML +=
            `
            <div class="alert alert-success" role="alert">
                Um email será enviado com instruções!
            </div>
            `
        setTimeout(() => location.href = "../../index.html", 3500);
    }
    confirmaLogin() {
        this.container.innerHTML +=
            `
            <div class="alert alert-success" role="alert">
                Login realizado com sucesso!
            </div>
            `
        setTimeout(() => location.href = "../../index.html", 3500);
    }
}