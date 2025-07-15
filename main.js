

function funcionarioMaisNovo(arrayProdutos, posicaoInicial) {
  let  maisNovo = posicaoInicial;

  for (let atual = posicaoInicial; atual < arrayProdutos.length; atual++) {
    if (arrayProdutos[atual].idade < arrayProdutos[maisNovo].idade) {
      maisNovo = atual;
    }
  }
  return maisNovo;
};

module.exports  = funcionarioMaisNovo;