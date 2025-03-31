class Aluno {
    constructor(nome, idade, curso, notaFinal) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.notaFinal = parseFloat(notaFinal);
    }

    isAprovado = () => this.notaFinal >= 7;

    toString = () => `Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}, Nota Final: ${this.notaFinal}, Aprovado: ${this.isAprovado() ? 'Sim' : 'Não'}`;
}

let usuarios = [];
const nomeInput = document.getElementById("nome");
const idadeInput = document.getElementById("idade");
const cursoInput = document.getElementById("curso");
const notaFinalInput = document.getElementById("notaFinal");
const corpoTabela = document.getElementById("bodytable");
const cadastrarBtn = document.getElementById("cadastrarBtn");

cadastrarBtn.addEventListener("click", () => {
    if (!nomeInput.value || !idadeInput.value || !cursoInput.value || !notaFinalInput.value) {
        alert("Preencha todos os campos!");
        return;
    }

    const aluno = new Aluno(
        nomeInput.value,
        idadeInput.value,
        cursoInput.value,
        notaFinalInput.value
    );

    usuarios.push(aluno);

    nomeInput.value = '';
    idadeInput.value = '';
    cursoInput.value = '';
    notaFinalInput.value = '';

    renderizarTabela();
    console.log(aluno.toString());
    alert("Aluno cadastrado com sucesso!");
});

const editarAluno = (indice) => {
    const aluno = usuarios[indice];
    nomeInput.value = aluno.nome;
    idadeInput.value = aluno.idade;
    cursoInput.value = aluno.curso;
    notaFinalInput.value = aluno.notaFinal;

    usuarios.splice(indice, 1);

    renderizarTabela();
    alert("Aluno em edição. Altere os campos e clique em Cadastrar.");
}

const excluirAluno = (indice) => {
    const alunoExcluido = usuarios.splice(indice, 1)[0];
    renderizarTabela();
    console.log(`Aluno excluído: ${alunoExcluido.toString()}`);
    alert("Aluno excluído com sucesso!");
}

const renderizarTabela = () => {
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
                <button class="btn-editar">Editar</button>
                <button class="btn-excluir">Excluir</button>
            </td>
        `;

        corpoTabela.appendChild(linha);

        linha.querySelector(".btn-editar").addEventListener("click", () => editarAluno(indice));
        linha.querySelector(".btn-excluir").addEventListener("click", () => excluirAluno(indice));
    });
}
