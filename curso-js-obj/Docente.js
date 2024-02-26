import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }
    aprovaEstudante(estudante, curso) {
        return `Estudante ${estudante} aprovado no curso ${curso}.`
    }
}

const novoDocente = new Docente('Enzo', 'enzo@gmail.com', '2024-03-03')
console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudante('Enzo', 'JS'))