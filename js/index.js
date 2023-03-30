let cabecalho = document.getElementById('cabecalho');
let cursos = document.querySelector('#menu_opcoes nav a:first-child');
let introducao = document.querySelector('#introducao')
let depoimentos = document.getElementById('depoimentos');
let titulos = document.querySelectorAll('.titulo');
let todosOsCursos = document.getElementById('todos_posts');
const adicionarCurso = document.getElementById('investimentos_poupando_independencia');

//1- Mudança cabeçalho
cabecalho.style.backgroundColor = '#2E948A';

//2- Adicionando link Cursos
cursos.setAttribute('href','http://127.0.0.1:5500/curso.html' );
cursos.setAttribute('target', '_blank')


//1- Centralizar elementos   <<HOME>>
introducao.style.cssText = `
    display: flex;
    justify-content: center;
`;

// 2- Mudar text para depoimentos 
depoimentos.innerText = 'O que falam sobre nós'
depoimentos.style.cssText = `
    color: #009688;
    font-Size: 30px; 
    font-Weight: bold;
    margin-Left: 45px; 
    font-family: 'Ubuntu', sans-serif;
`

// 3- Mudar blog para Mais conteúdo pra você
let blog = document.querySelector('h3')
blog.innerHTML = 'mais conteúdo para você'

//4- Todos os textos com classe .titulo devem ficar em maiusculo
titulos.forEach(titulo => {
    titulo.innerHTML = titulo.innerHTML.toUpperCase()
})

// 5-o botão "ver todos os posts" deve ter um link que direciona para o arquivo
//blog.html
todosOsCursos.setAttribute('href', '/blog.html');

// 6- Adicionar um novo curso na section que contém o id
//investimentos_poupando_independencia:
adicionarCurso.innerHTML += `
<div id="independencia">
<img src="/imagens/independencia_financeira.png" width="180px"
alt="Independência Financeira">
<h2>Independência Financeira</h2>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore
eu fugiat nulla pariatur. </p>
<a class="comecar_agora" href="./curso.html">começar agora</a>
</div>
`