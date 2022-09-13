var cartas = [
  {
    nome: "Tryndamere",
    imagem: "https://dd.b.pvp.net/2_11_0/set1/pt_br/img/cards/01FR039T2.png",
    atributos: {
      ataque: 9,
      defesa: 9,
      magia: 8
    }
  },
  {
    nome: "Phanteon",
    imagem: "https://i.imgur.com/dZh90LY.png",
    atributos: {
      ataque: 3,
      defesa: 2,
      magia: 4
    }
  },
  {
    nome: "Diana",
    imagem: "https://i.imgur.com/rMkF7G5.png",
    atributos: {
      ataque: 5,
      defesa: 4,
      magia: 6
    }
  },
  {
    nome: "Yasuo",
    imagem: "https://i.imgur.com/nPjvQLF.png",
    atributos: {
      ataque: 6,
      defesa: 1,
      magia: 4
    }
  },
  {
    nome: "Zoe",
    imagem: "https://i.imgur.com/cSg5O40.png",
    atributos: {
      ataque: 8,
      defesa: 6,
      magia: 10
    }
  },
  {
    nome: "Karma",
    imagem: "https://i.imgur.com/PPzzZZa.png",
    atributos: {
      ataque: 5,
      defesa: 7,
      magia: 7
    }
  },
  {
    nome: "Ashe",
    imagem: "https://i.imgur.com/7rowQHS.png",
    atributos: {
      ataque: 10,
      defesa: 2,
      magia: 4
    }
  },
  {
    nome: "Jinx",
    imagem: "https://i.imgur.com/EZg6NXG.png",
    atributos: {
      ataque: 11,
      defesa: 6,
      magia: 3
    }
  }
];

var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
  var numerCartaMaquina = parseInt(Math.random() * 8);
  cartaMaquina = cartas[numerCartaMaquina];
  console.log(cartaMaquina);

  var numerCartaJogador = parseInt(Math.random() * 8);

  while (numerCartaMaquina == numerCartaJogador) {
    var numerCartaJogador = parseInt(Math.random() * 8);
  }

  cartaJogador = cartas[numerCartaJogador];

  document.getElementById("btnSortear").disabled = true;

  document.getElementById("btnJogar").disabled = false;
  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");

  var opcoesTexto = "";
  opcoesTexto += "<h3>" + cartaJogador.nome + "</h3>";
  opcoesTexto += "<img src= " + cartaJogador.imagem + "><br>";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type ='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ": " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked == true) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var elementoResultado1 = document.getElementById("resultado1");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Vitória! a carta da máquina era:";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML =
      "Derrota! a maquina tem uma carta mais forte:";
  } else {
    elementoResultado.innerHTML = "Deu empate, a carta da máquina era:";
  }
  console.log(cartaMaquina);
  var opcoes1 = document.getElementById("opcoes1");
  var opcoesTexto1 = "";
  opcoesTexto1 += "<h3>" + cartaMaquina.nome + "</h3>";
  opcoesTexto1 += "<img src= " + cartaMaquina.imagem + "><br>";
  opcoes1.innerHTML = opcoesTexto1;
  elementoResultado1.innerHTML = "Atualize a pagina para jogar novamente!";
}