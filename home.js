class Aluno {
    constructor(nome, idade, curso, notaFinal) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.notaFinal = parseFloat(notaFinal);
    }

    isAprovado() {
        return this.notaFinal >= 7;
    }

    toString() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}, Nota Final: ${this.notaFinal}, Aprovado: ${this.isAprovado() ? 'Sim' : 'Não'}`;
    }
}

let usuarios = [];
const nomeInput = document.getElementById("nome");
const idadeInput = document.getElementById("idade");
const cursoInput = document.getElementById("curso");
const notaFinalInput = document.getElementById("notaFinal");
const corpoTabela = document.getElementById("bodytable");

function cadastrar() {
    const nome = nomeInput.value;
    const idade = idadeInput.value;
    const curso = cursoInput.value;
    const notaFinal = notaFinalInput.value;

    if (!nome || !idade || !curso || !notaFinal) {
        alert("Preencha todos os campos!");
        return;
    }

    const aluno = new Aluno(nome, idade, curso, notaFinal);

    usuarios.push(aluno);

    nomeInput.value = '';
    idadeInput.value = '';
    cursoInput.value = '';
    notaFinalInput.value = '';

    renderizarTabela();

    alert("Aluno cadastrado com sucesso!");
}

function editarAluno(indice) {
    const aluno = usuarios[indice];
    nomeInput.value = aluno.nome;
    idadeInput.value = aluno.idade;
    cursoInput.value = aluno.curso;
    notaFinalInput.value = aluno.notaFinal;

    usuarios.splice(indice, 1);

    renderizarTabela();
}

function excluirAluno(indice) {
    usuarios.splice(indice, 1);
    renderizarTabela();
    alert("Aluno excluído com sucesso!");
}

function renderizarTabela() {
    corpoTabela.innerHTML = '';

    usuarios.forEach((aluno, indice) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${aluno.nome}</td>
            <td>${aluno.idade}</td>
            <td>${aluno.curso}</td>
            <td>${aluno.notaFinal}</td>
            <td>${aluno.isAprovado() ? 'Aprovado' : 'Reprovado'}</td>
            <td>
                <button onclick="editarAluno(${indice})">Editar</button>
                <button onclick="excluirAluno(${indice})">Excluir</button>
            </td>
        `;
        corpoTabela.appendChild(linha);
    });
}
