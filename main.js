function adicionarContato() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;

    if (nome && telefone) {
        let tabelaCorpo = document.getElementById("tabela-corpo");
        let novaLinha = document.createElement("tr");


        novaLinha.innerHTML = "<td>" + nome + "</td><td>" + telefone + "</td>";

        tabelaCorpo.appendChild(novaLinha);

        document.getElementById("nome").value = "";
        document.getElementById("telefone").value = "";
    } else {
        alert("Por favor, preencha todos os campos.");
    }    
}

