let usuarios = [];

function cadastrar(){
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var curso = document.getElementById("curso").value;
    var notaFinal = document.getElementById("notaFinal").value;

    var usuario = {
        nome: nome,
        idade: idade,
        curso: curso,
        notaFinal: notaFinal
    };

    usuarios.push(usuario);
    alert("Aluno cadastrado com sucesso!");
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    window.location.href = "index.html";
}

function editarAluno(indice){
    var usuario = usuarios[indice];

    document.getElementById("nome").value = usuario.nome;
    document.getElementById("idade").value = usuario.idade;
    document.getElementById("curso").value = usuario.curso;
    document.getElementById("notaFinal").value = usuario.notaFinal;

    usuarios.splice(indice, 1);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function excluirAluno(indice){
        usuarios.splice(indice, 1);
}

