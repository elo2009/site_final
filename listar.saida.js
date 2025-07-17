let listar = document.getElementById('listar')
let res = document.getElementById('res')

listar.addEventListener('click', ()=>{


    fetch(`http://localhost:8081/saida`)
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados)
        res.innerHTML += `─ ⋆⋅☆⋅⋆ ─ Listagem realizada com sucesso! ─ ⋆⋅☆⋅⋆ ─ <br><br>`

        dados.forEach(dad => {
           
            res.innerHTML += `Data da Solicitação: ${dad.dataSolicitacao} <br>`
            res.innerHTML += `Hora da Saída:${dad.horaSaida} <br>`
            res.innerHTML += `Hora do Retorno: ${dad.horaRetorno} <br>`
           res.innerHTML += `Motivo: ${dad.motivo} <br>`
           res.innerHTML += `Destino: ${dad.localDestino} <br>`
           res.innerHTML += `Status: ${dad.status} <br>`
            res.innerHTML += `Nome do Aluno: ${dad.nomeAluno} <br>`
            res.innerHTML += `Nome do Professor: ${dad.nomeProfessor} <br>`
           res.innerHTML += `Código da saida: ${dad.codSaida} <br>`
            res.innerHTML += `<hr>`
            res.innerHTML += `<br>`
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar os dados!',err)
    })
})





