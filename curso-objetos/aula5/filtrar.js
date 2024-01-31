const clientes = require("./clientes.json");

function filtrarApartamentosSemComplemento(clientes){
    return clientes.filter((clientes) => {
        return (clientes.endereco.apartamento && 
            !clientes.endereco.hasOwnProperty("complemento")
        );
    });
};

const filtrados = filtrarApartamentosSemComplemento(clientes);
console.log(filtrados)