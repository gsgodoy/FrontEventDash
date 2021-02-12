function logar() {
    var txtLogin = document.getElementById("txtLogin").value;
    var txtSenha = document.getElementById("txtSenha").value;

    console.log("Digitou = " + txtLogin + "/" + txtSenha);

    var msgBody = {
        racf: txtLogin,
        email: txtLogin,
        senha: txtSenha
    };

    var cabecalho = {
        method: "POST",
        body: JSON.stringify(msgBody),
        headers: {
            "Content-type": "application/json"
        }
    };

    fetch("http://localhost:8088/login", cabecalho).then(resposta => trataResposta(resposta));

}

function trataResposta(resposta) {
    if (resposta.status == 200) { //se retornar
        resposta.json().then(usuario => {
            localStorage.setItem("userDASH", JSON.stringify(usuario));  //armazenar o objeto usuario no cache local
            window.location = "relatorio.html";                        //redireciono para outra pagina
        });
    }
    else if (resposta.status == 401) {
        document.getElementById("msg").innerHTML = "Senha Inválida!";
    }
    else if (resposta.status == 404) {
        document.getElementById("msg").innerHTML = "Usuário não encontrado!";
    }
    else {
        document.getElementById("msg").innerHTML = "Erro desconhecido!";
    }

}