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
    static enviaContato() {
        let view = new CadastroView();
        view.confirmaContato();
    }
}
let $ = document.querySelector.bind(document);
$("#formContato-envia").addEventListener("submit",(e)=> e.preventDefault());
$("#form-envia").addEventListener("submit",(e)=> e.preventDefault());