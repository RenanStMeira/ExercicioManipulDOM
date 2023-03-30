//                 <<<<<CONTATO>>>>>
//let telefone = document.getElementById('formulario');
let LargBotao = document.getElementById('enviar');
let depoimento = document.querySelector('.formulario');
let msg = document.querySelector('textarea');

// 1-O formulário não está funcionando, o atributo action deve mandar para url
//sucesso.html
function enviado(){
    window.location = 'sucess.html'

}

//2- Após o campo de email, precisamos de um novo campo para que o usuário
//adicione também um número de telefone.
let formTel = document.querySelector('#formulario form');
let campotelefone = document.createElement('input');

campotelefone.type = 'tel'
campotelefone.name = 'telefone'
campotelefone.placeholder = 'telefone'

let campoEmail = formTel.querySelector("input[type='email']")
campoEmail.insertAdjacentHTML('afterend', campotelefone.outerHTML)



// 3- resolver adicionando o atributo box-sizing: border-box;
msg.style.cssText = `
    box-sizing: border-box;
`

// 4- Aumentar a largura do buttao
LargBotao.style.cssText = `
padding-top: 10px;
padding-Left: 105px;
padding-Right: 150px;
font-size: 19px;
margin-Bottom: 25px; 
`;

//5- Abaixo da section do formulário, adicione uma seção de comentário igual a
//página Home.
telefone.innerHTML += `
<section id='falam_sobre'>
            <div class="depoimentos">
                <img src="/imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim">
                <p>
                    ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam.”
                    <br>
                    <br>
                    Wally, 25
                </p>
            </div>
        </section>
`