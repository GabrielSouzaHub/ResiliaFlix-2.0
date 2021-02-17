class CadastroController {
    static enviaCadastro() {
        let view = new CadastroView();
        view.confirmaCadastro();

    }
    static enviaSenha() {
        let view = new CadastroView();
        view.confirmaSenha();
    }
    static enviaLogin() {
        let view = new CadastroView();
        view.confirmaLogin();
    }
}
let $ = document.querySelector.bind(document);
$("#form-envia").addEventListener("submit",(e)=> e.preventDefault());