$(document).ready(function(){

    $("#incluirButton").click(function(){

        let genero = "";

        if($("#masculino").prop("checked")) {
            genero = "masculino";

        }else if($("#feminino").prop("checked")) {
            genero = "feminino";

        }else {
            genero = "Prefiro não informar";
        }
        
        let vaga = $("#vaga").find(":selected").text();

        $.ajax({

            url: "http://localhost:3000/candidatos",
            method: "POST",
            data: {
                nome: $("#nome").val(),
                data: $("#data").val(),
                genero: genero,
                telefone: $("#telefone").val(),
                email: $("#email").val(),
                vaga: vaga
            },

            success: function() {
                alert("Dados Incluidos");
            },

            error: function(erro) {
                alert("Erro" + erro.responseText);
            }

        });
    });

    $("#listarButton").click(function() {
             
        $.ajax({
            dataType: "json",
            url: "http://localhost:3000/candidatos",
            method: "GET",

            success: function(resposta) {

                $("#tabela > tbody ").html("");
                $.each(resposta, function(index, item) {
                    let linha = $("<tr>");
                    let colunas = "<td>" + item.id + "</td>";
                    colunas += "<td>" + item.nome + "</td>";
                    colunas += "<td>" + item.telefone + "</td>";

                    linha.append(colunas);

                    $("#tabela > tbody").append(linha);
                });
            },

            error: function(erro) {
                console.log(erro.responseText);
            }

        });
    });

});