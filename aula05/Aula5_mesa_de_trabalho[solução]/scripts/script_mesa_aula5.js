/* 
    Prof Marcos Martins (CTD - Front end II) 
    Possível solução para a mesa de trabalho da Aula 5.
*/

//Capturando os elementos, através dos seletores do DOM
let toggleswitch = document.getElementById('toggleSwitch')
let body = document.querySelector('body')
let h1 = document.querySelector('h1')
let itemsList = document.querySelectorAll('.item')

/* Função que é chamada pelo onChanged ao clicar no ToggleSwitch */
function alteraTema() {
  // Verifica qual o valor que é retornado pelo Switch
  //console.log(switchValue.checked);

  if (toggleswitch.checked) {
    //Caso seja verdadeiro, ou seja, está selecionado

    /* Adicionando as classes (dark-mode) css nos elementos capturados */
    body.classList.add('body-dark')
    h1.classList.add('h1-dark')

    //1) Utilizando For..Of
    /*  for (let item of itemsList) {
             item.classList.add('items-dark')
             item.classList.add('items-text-dark')
         } */

    //2) Percorrendo com o ForEach (Recomendado)
    itemsList.forEach(item => {
      item.classList.add('items-dark')
      item.classList.add('items-text-dark')
    })

    /* 3) Alterando os elementos específicos ('h2' e 'p') ao invés de colocar a classe na div pai
         
        itemsList.forEach(item => {
             item.classList.add('items-dark');
 
             //1 maneira: Alterandos os elementos específicos pelo index/posição no DOM
             item.children[1].classList.add('items-text-dark') //[1] equivale ao 'h2'
             item.children[2].classList.add('items-text-dark') //[2] equivale ao 'p'
 
             // 2 maneira: Capturando pelo seletor (Recomendado) 
             item.querySelector('h2').classList.add('items-text-dark')
             item.querySelector('p').classList.add('items-text-dark')
         }); */
  } else {
    //Caso seja false, ou seja, não está selecionado

    /* Remove as classes adicionadas anteiormente, assim, a página volta para o "modo-claro" */
    body.classList.remove('body-dark')
    h1.classList.remove('h1-dark')

    //Percorre a lista de elementos, para fazer a remoção em cada um dos itens
    itemsList.forEach(item => {
      item.classList.remove('items-dark')
      //Uma forma de alterar o texto (poem o elemento principal)
      item.classList.remove('items-text-dark')
    })
  }
}

var objeto = { propriedade1: 'valor1', propriedade2: 'valor2' }

var postagem1 = {
  imagem: 'valor1',
  titulo: 'valor2',
  texto: 'valor3',
  curtidas: 0
}

  var tigre = {
    imagem: './imagens/tiger.jpg',
    titulo: 'O tigre',
    texto: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherina e (família Felidae) pertencente ao gênero Panthera. É encontrado deforma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.',
    curtidas: 0
  }

  var leon = {
    imagem: './imagens/leon.jpg',
    titulo: 'O leão',
    texto: 'O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.',
    curtidas: 0
  }

  var leopardo = {
    imagem: './imagens/leopardo.jpg',
    titulo: 'O leopardo',
    texto: 'O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o  tigre e a onça-pintada, são caracterizados por uma modificação do osso   hióide que lhes permite rugir. É também conhecido como pantera marrom   e, quando tem a pelagem completamente escura, como pantera negra (melanista).',
    curtidas: 0
  }  

  var panteraNegra = {
    imagem: './imagens/pantera-negra.jpg',
    titulo: 'A pantera negra',
    texto: 'A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais.',
    curtidas: 0
  }    

  var jaguar = {
    imagem: './imagens/jaguar.jpg',
    titulo: 'O jaguar',
    texto: 'O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre(Panthera tigris) e do leão (Panthera leo).',
    curtidas: 0
  }      
  
  var chita = {
    imagem: './imagens/chita.jpg',
    titulo: 'O guepardo (chita)',
    texto: 'O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.',
    curtidas: 0
  }      


  //onload - função chamada automaticamente ao ser executado pelo navegador 
  window.onload = function (){
      percorreListaPostagens
  }

  //percorre uma lista
  for (let postagem of postagens)

  //cria um card
  let card = `
  <div class = "item">
  <img srd="${felino.imagem}">
  <h2>${felino.titulo}</h2>
  <p>${felino.texto}</p>
  </div> `


  //Cria um novo nó html
let novoNo = document.createElement("h1")

// adiciona um conteúdo a um nó 
novoNo.innerHTML = card