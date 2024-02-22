const user = {
    nome: "Enzo",
    email: "enzo@gmail.com",
    nascimento: "2024/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}
 
const admin = {
    nome: "Mariana",
    email: "mariana@gmail.com",
    role: "admin",
    criarCurso() {
        console.log("Curso criado!")
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()