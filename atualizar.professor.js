let atualizar = document.getElementById('atualizar')
let consultar = document.getElementById('consultar')
let res2 = document.getElementById('res2')
let res = document.getElementById('res')

let id = document.getElementById('id')
let nome = document.getElementById('nome')
 let sobrenome = document.getElementById('sobrenome')
let matricula = document.getElementById('matricula')
let telefone = document.getElementById('telefone')
let email = document.getElementById('email')

consultar.addEventListener('click', (e) => {
    e.preventDefault()
    id = Number(document.getElementById('id').value)

    res2.innerHTML = ' '

    fetch(`http://localhost:8081/professor/${id}`)
        .then(resp => resp.json())
        .then(dado => {
            console.log(dado)
                nome.value = dado.nome
           sobrenome.value = dado.sobrenome
              matricula.value = dado.matricula
          telefone.value = dado.telefone
         email.value = dado.email
            
        })
        .catch((err) => {
            console.error('Erro ao listar os dados!', err)
        })

    
})

atualizar.addEventListener('click', (e)=>{
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

    fetch(`http://localhost:8081/professor/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dadosGrav => {
        console.log(dadosGrav)
        res.innerHTML += `Nome: ${dadosGrav.nome} <br>`
        res.innerHTML += `Sobrenome: ${dadosGrav.sobrenome} <br>`
        res.innerHTML += `Matricula: ${dadosGrav.matricula} <br>`
        res.innerHTML += `Telefone: ${dadosGrav.telefone} <br>`
        res.innerHTML += `E-mail: ${dadosGrav.email} <br>`
    })
    .catch((err)=>{
        console.err('Erro ao gravar os dados no banco de dados!',err)
    })

})
