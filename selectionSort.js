const funcionarioMaisNovo = require('./main')
const funcionarios = require('./listaArray')


for(let atual = 0;atual< funcionarios.length; atual ++){
    let maisNovo = funcionarioMaisNovo(funcionarios,atual)

    let posicaoAtual = funcionarios[atual]
    let posicaoMaisNovo = funcionarios[maisNovo]

    funcionarios[atual] = posicaoMaisNovo
    funcionarios[maisNovo] = posicaoAtual
}

console.log(funcionarios)