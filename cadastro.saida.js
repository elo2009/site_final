let cadastrar = document.getElementById('cadastrar')
let res = document.getElementById('res')


let dataSolicitacao = document.getElementById('dataSolicitacao')
let horaSaida = document.getElementById('horaSaida')
let horaRetorno = document.getElementById('horaRetorno')
let motivo = document.getElementById('motivo')
let localDestino = document.getElementById('localDestino')
let statusInput = document.getElementById('status')
let nomeAluno = document.getElementById('nomeAluno')
let nomeProfessor = document.getElementById('nomeProfessor')
let aluno_cod = document.getElementById('aluno_cod')
let professor_cod = document.getElementById('professor_cod')

cadastrar.addEventListener('click', (e) => {
    e.preventDefault()

    const valores = {
        dataSolicitacao: dataSolicitacao.value,
        horaSaida: horaSaida.value,
        horaRetorno: horaRetorno.value,
        motivo: motivo.value,
        localDestino: localDestino.value,
        status: statusInput.value,
        nomeAluno: nomeAluno.value,
        nomeProfessor: nomeProfessor.value,
        aluno_cod: Number(aluno_cod.value),
        professor_cod: Number(professor_cod.value)
    }

    console.log("[ENVIANDO PARA BACKEND]", valores)

    res.innerHTML = '' 

    fetch("http://localhost:8081/saida", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => {
        if (!resp.ok) {
            throw new Error(`Erro HTTP ${resp.status}`)
        }
        return resp.json()
    })
    .then(dadosGrav => {
        console.log("[RESPOSTA DO BACKEND]", dadosGrav)
        res.innerHTML += `─ ⋆⋅☆⋅⋆ ─ Cadastro realizado com sucesso! ─ ⋆⋅☆⋅⋆ ─ <br>`
        res.innerHTML += `Data de Solicitação: ${dadosGrav.dataSolicitacao} <br>`
        res.innerHTML += `Hora da Saída: ${dadosGrav.horaSaida} <br>`
        res.innerHTML += `Hora do Retorno: ${dadosGrav.horaRetorno} <br>`
        res.innerHTML += `Motivo: ${dadosGrav.motivo} <br>`
        res.innerHTML += `Local do Destino: ${dadosGrav.localDestino} <br>`
        res.innerHTML += `Status: ${dadosGrav.status} <br>`
        res.innerHTML += `Nome do Aluno: ${dadosGrav.nomeAluno} <br>`
        res.innerHTML += `Nome do Professor: ${dadosGrav.nomeProfessor} <br>`
        res.innerHTML += `Código do Aluno: ${valores.aluno_cod} <br>`
        res.innerHTML += `Código do Professor: ${valores.professor_cod} <br>`
        
    })
    .catch((err) => {
        console.err('Erro ao cadastrar a saída:', err)
        res.innerHTML = `❌ Erro ao cadastrar a saída. Verifique os dados e tente novamente.`
    })
})
