
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*&";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value; // aparecer o valor inicial definido em tela. // sliderElement.value pega o valor definido pelo usuário (qnt caracteres).

slider.oninput = function(){
    sizePassword.innerHTML = this.value; //passando pro sizePassword, receber o valor que tem atual do slider.
}

function generatePassword () { // funciona com o onclick="generatePassword()" no arquivo HTML. //onclick deve ser escrito minusculo.
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){ //continuar passando pelo for até que o i seja menor que o valor selecionado pelo usuário.
        pass += charset.charAt(Math.floor(Math.random() * n))
    } 
    containerPassword.classList.remove("hide") // retirar a classe "hide", que está ocultando a caixa da senha //classList, lista de classes de containerPassword.
    password.innerHTML = pass; // pegar a senha que gerou e inserir no html dentro do span, contendo o id password.
    novaSenha = pass; //passar o valor de pass para novaSenha, podendo assim utilizar na função abaixo.
}

function copyPassword(){ //necessário colocar essa função para ser chamada quando clicar na div container-password.
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha) //Copiar o que tiver dentro da variável novaSenha
}