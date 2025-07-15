const funcionarios = require('./listaArray');

function insertionSort(){
    for(let atual = 0; atual < funcionarios.length; atual ++){
        let analise = atual;

        while( analise > 0 && funcionarios[analise].idade < funcionarios[analise -1].idade){
            let posicapoAtual = funcionarios[analise]
            let posicaoMaisNovo = funcionarios[analise -1]

            funcionarios[analise] = posicaoMaisNovo
            funcionarios[analise -1] = posicapoAtual


            analise --
        }
      console.log(funcionarios)
    }
}
insertionSort(funcionarios)