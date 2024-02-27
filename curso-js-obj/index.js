import User from "./User.js"
import Docente from "./Docente.js"
import Admin from "./Admin.js"

const novoUser = new User('Mariana', 'mariana@gmail.com', '2024-01-01')
console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2024-02-02')
console.log(novoAdmin.exibirInfos())
console.log(novoAdmin.nomeAdmin())