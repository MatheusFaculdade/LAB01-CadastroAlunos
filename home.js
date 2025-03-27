let usuarios = [];
const nomeInput = document.getElementById("nome");
const idadeInput = document.getElementById("idade");
const cursoInput = document.getElementById("curso");
const notaFinalInput = document.getElementById("notaFinal");
const cadastrarBtn = document.getElementById("cadastrarBtn");
const corpoTabela = document.getElementById("bodytable");


function cadastrar(){
    const usuario = {
        nome: nomeInput.value,
        idade: idadeInput.value,
        curso: cursoInput.value,
        notaFinal: notaFinalInput.value
    };

    usuarios.push(usuario);

    nomeInput.value = '';
    idadeInput.value = '';
    cursoInput.value = '';
    notaFinalInput.value = '';

    renderizarTabela();

    alert("Aluno cadastrado com sucesso!");
}

function editarAluno(indice){
    const usuario = usuarios[indice];
    nomeInput.value = usuario.nome;
    idadeInput.value = usuario.idade;
    cursoInput.value = usuario.curso;
    notaFinalInput.value = usuario.notaFinal;

    usuarios.splice(indice, 1);

    renderizarTabela();
}

function excluirAluno(indice){
        usuarios.splice(indice, 1);
        renderizarTabela();
        alert("Aluno excluido com sucesso!");
}

function renderizarTabela() {
    corpoTabela.innerHTML = '';
    
    usuarios.forEach((usuario, indice) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${usuario.nome}</td>
            <td>${usuario.idade}</td>
            <td>${usuario.curso}</td>
            <td>${usuario.notaFinal}</td>
            <td>
                <button onclick="editarAluno(${indice})">Editar</button>
                <button onclick="excluirAluno(${indice})">Excluir</button>
            </td>
        `;
        corpoTabela.appendChild(linha);
    });
}