class Aluno {
    constructor(nome, idade, curso, notaFinal) {
        this.nome = nome;
        this.idade = parseInt(idade);
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
const relatorioDiv = document.getElementById("relatorio");

const btnAprovados = document.getElementById("btnAprovados");
const btnMediaNotas = document.getElementById("btnMediaNotas");
const btnMediaIdades = document.getElementById("btnMediaIdades");
const btnOrdenarNomes = document.getElementById("btnOrdenarNomes");
const btnQuantidadePorCurso = document.getElementById("btnQuantidadePorCurso");

cadastrarBtn.addEventListener("click", () => {
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
});

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
                <button onclick="editarAluno(${indice})">Editar</button>
                <button onclick="excluirAluno(${indice})">Excluir</button>
            </td>
        `;
        corpoTabela.appendChild(linha);
    });
}

btnAprovados.addEventListener("click", () => {
    const aprovados = usuarios.filter(aluno => aluno.isAprovado());
    relatorioDiv.innerHTML = `<h3>Alunos Aprovados</h3><ul>${aprovados.map(aluno => `<li>${aluno.toString()}</li>`).join('')}</ul>`;
});

btnMediaNotas.addEventListener("click", () => {
    const media = usuarios.reduce((acc, aluno) => acc + aluno.notaFinal, 0) / usuarios.length;
    relatorioDiv.innerHTML = `<h3>Média das Notas Finais: ${media.toFixed(2)}</h3>`;
});

btnMediaIdades.addEventListener("click", () => {
    const mediaIdade = usuarios.reduce((acc, aluno) => acc + aluno.idade, 0) / usuarios.length;
    relatorioDiv.innerHTML = `<h3>Média das Idades: ${mediaIdade.toFixed(2)}</h3>`;
});

btnOrdenarNomes.addEventListener("click", () => {
    const nomesOrdenados = usuarios.map(aluno => aluno.nome).sort();
    relatorioDiv.innerHTML = `<h3>Alunos Ordenados:</h3><ul>${nomesOrdenados.map(nome => `<li>${nome}</li>`).join('')}</ul>`;
});

btnQuantidadePorCurso.addEventListener("click", () => {
    const quantidadePorCurso = usuarios.reduce((acc, aluno) => {
        acc[aluno.curso] = (acc[aluno.curso] || 0) + 1;
        return acc;
    }, {});
    
    relatorioDiv.innerHTML = `<h3>Quantidade por Curso:</h3><ul>${
        Object.entries(quantidadePorCurso).map(([curso, quantidade]) => `<li>${curso}: ${quantidade}</li>`).join('')
    }</ul>`;
});
