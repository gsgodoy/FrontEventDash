function validaUser() {
    var userStr = localStorage.getItem("userDASH");
    if (!userStr) {
        window.location = "index.html";
        return;
    }
    else {
        gerarRelatorio();

    }

}

function gerarRelatorio() {


    var url = `http://localhost:8088/alarmes`;

    fetch(url).then(resposta => resposta.json()).then(lista => preencheRelatorio(lista));
}

function preencheRelatorio(lista) {


    var strRelatorio = `<br>
                        <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                        <b>ID</b>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <b>Nome Alarme</b>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-7 col-xl-7">
                        <b>Descrição</b>
                        </div>                                   
                        </div>`;

    for (i = 0; i < lista.length; i++) {
        var alarme = lista[i];

        strRelatorio = strRelatorio + `<div class="row">
                                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                                            ${alarme.idAlarme}
                                        </div>
                                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                            ${alarme.nome}
                                        </div>
                                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-7 col-xl-7">
                                            ${alarme.descricao}
                                        </div>
                                                                                
                                    </div>`;
    }

    document.getElementById("relatorio").innerHTML = strRelatorio;
}

function imprimir(){
    document.getElementById("botao3").style = "visibility:hidden";
    document.getElementById("botao2").style = "visibility:hidden";
    window.print();
    document.getElementById("botao3").style = "visibility:visible";
    document.getElementById("botao2").style = "visibility:visible";
 }

function logout() {
    localStorage.removeItem("userDASH");
    window.location = "index.html";
}