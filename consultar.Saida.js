let consultar = document.getElementById('consultar')
let res = document.getElementById('res')

consultar.addEventListener('click', () => {
    let codigo = Number(document.getElementById('codigo').value)

    res.innerHTML = ' '

    fetch(`http://localhost:8081/saida/${codigo}`)
        .then(resp => resp.json())
        .then(dado => {
            console.log(dado)
            res.innerHTML += `─ ⋆⋅☆⋅⋆ ─ Consulta realizada com sucesso! ─ ⋆⋅☆⋅⋆ ─ <br><br>`
            res.innerHTML += `Data pedido: ${dado.dataSolicitacao} <br>`
            res.innerHTML += `Hora da saída: R$ ${dado.horaSaida} <br>`
            res.innerHTML += `Hora do retorno: ${dado.horaRetorno} <br>`
            res.innerHTML += `Motivo pra saída: ${dado.motivo} <br>`
            res.innerHTML += `Local do destino: ${dado.localDestino} <br>`
            res.innerHTML += `Statud: ${dado.status} <br>`
            res.innerHTML += `Nome do professor: ${dado.nomeProfessor} <br>`

        })
        .catch((err) => {
            console.error('Erro ao listar os dados!', err)
        })
})


