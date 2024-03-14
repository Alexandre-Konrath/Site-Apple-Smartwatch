const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto')
const nomeCor = document.getElementById('nome-cor-selecionada')

const miniaturaImagem0 = document.getElementById('0-imagem-miniatura')
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura')
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura')

function trocarImagem() {
  const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id
  imagemSelecionada = idOpcaoSelecionada.charAt(0)
  imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg'
}

function trocarTamanho() {
  // mudar a variável com o tamanho da caixa
  const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id
  tamanhoSelecionada = idOpcaoSelecionada.charAt(0)

  // mudar o titulo do produto
  tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionada]

  // mudar o tamanho da imagem
  if (opcoesTamanho[tamanhoSelecionada] === '41 mn') {
    imagemVisualizacao.classList.add('caixa-pequena')
  } else {
    imagemVisualizacao.classList.remove('caixa-pequena')
  }
}

function trocarCor() {
  // trocar titulo pagina
  const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id
  corSelecionada = idOpcaoSelecionada.charAt(0)

  tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionada]
  // trocar nome da cor
  nomeCor.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome
  // trocar img das miniaturas
  miniaturaImagem0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg'
  miniaturaImagem1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg'
  miniaturaImagem2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg'
  // trocar imagem maior
  imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg'

  //
}
