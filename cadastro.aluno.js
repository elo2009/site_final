let cadastrar = document.getElementById('cadastrar')
let res = document.getElementById('res')

let nome = document.getElementById('nome')
let sobrenome = document.getElementById('sobrenome')
let matricula = document.getElementById('matricula')
let telefone = document.getElementById('telefone')
let email = document.getElementById('email')

cadastrar.addEventListener('click', (e)=>{
    e.preventDefault()
    const valores = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        matricula: matricula.value,
        telefone: telefone.value,
        email: email.value
    }

    console.log(valores)


    res.innerHTML = ' '

    fetch(`http://localhost:8081/aluno`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dadosGrav => {
        console.log(dadosGrav)
            res.innerHTML += `─ ⋆⋅☆⋅⋆ ─ Cadastro realizado com sucesso! ─ ⋆⋅☆⋅⋆ ─ <br>`
            res.innerHTML += `Nome: ${dadosGrav.nome} <br>`
            res.innerHTML += `Sobrenome: R$ ${dadosGrav.sobrenome} <br>`
            res.innerHTML += `Matrícula: ${dadosGrav.matricula} <br>`
            res.innerHTML += `Telefone: ${dadosGrav.telefone} <br>`
            res.innerHTML += `E-mail: ${dadosGrav.email} <br>`
    })
    .catch((err)=>{
        console.error('Erro ao gravar os dados no banco de dados!',err)
    })

})

function toggleMenu() {
    const nav = document.getElementById('menu');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
  }