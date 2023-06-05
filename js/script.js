// função adiciona itens ao carrinho;
function adicionarCarrinho(){

  // var condição true vai ser responsavel por inicializar o laço de repetição;
  var condicao = true;

    // o laço de repetição inicia pois a condição é sempre true;
    while(condicao){

      // após inicializado vamos coletar do usuario atraves do prompt a quantidade do item que ele deseja e armazenar na variavel qtdItem;
      var qtdItem = prompt('Quantidade que deseja do item? ( caso não queira digite 0 )');

      // após receber o número, vamos verificar atraves de uma condição se o que foi digitado é um número ou string e se o número é maior ou igual a zero, usamos o Number para forçar a converção e fazer a verificação;
      if(Number(qtdItem) == qtdItem && Number(qtdItem) >= 0 ){

        // se for número e maior que zero seguimos para mais uma condição onde vamos mudar as frases que retornaremos ao usuario, entrando nessas condições usamos o break para poder parar o loop de repetição;
        if(Number(qtdItem) == 1){
          alert (`${qtdItem} Item adicionado ao carrinho!!`)
          break
        }else{
          alert (`${qtdItem} - Itens adicionado ao carrinho!!`)
          break
        }
      
      // Caso o que o usuario digitou seja um número negativo ou não seja um número ele entra no else exibindo está mensagem ao usuario e retornando ao loop fazendo a pergunta novamente;
      } else {
        alert("Você precisa digitar um valor numérico para prosseguir")
      }
  }
}


