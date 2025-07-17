let consultar = document.getElementById('consultar')
let res = document.getElementById('res')

consultar.addEventListener('click', () => {
    let codigo = Number(document.getElementById('codigo').value)

    res.innerHTML = ' '

    fetch(`http://localhost:8081/aluno/${codigo}`)
        .then(resp => resp.json())
        .then(dado => {
            console.log(dado)
            res.innerHTML += `─ ⋆⋅☆⋅⋆ ─ Consulta realizada com sucesso! ─ ⋆⋅☆⋅⋆ ─ <br><br>`
            res.innerHTML += `Nome: ${dado.nome} <br>`
            res.innerHTML += `Sobrenome: ${dado.sobrenome} <br>`
            res.innerHTML += `Matricula: ${dado.matricula} <br>`
            res.innerHTML += `Telefone: ${dado.telefone} <br>`
            res.innerHTML += `E-mail: ${dado.email} <br>`
        })
        .catch((err) => {
            console.error('Erro ao listar os dados!', err)
        })
})


