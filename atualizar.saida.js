// Seleciona todos os elementos necessários da página
const atualizar = document.getElementById('atualizar')
const consultar = document.getElementById('consultar')
const res2 = document.getElementById('res2')
const res = document.getElementById('res')

const idInput = document.getElementById('id')
const dataSolicitacao = document.getElementById('dataSolicitacao')
const horaSaida = document.getElementById('horaSaida')
const horaRetorno = document.getElementById('horaRetorno')
const motivo = document.getElementById('motivo')
const localDestino = document.getElementById('localDestino')
const status = document.getElementById('status')
const nomeAluno = document.getElementById('nomeAluno')
const nomeProfessor = document.getElementById('nomeProfessor')
const aluno_id = document.getElementById('aluno_id')
const professor_id = document.getElementById('professor_id')

// CONSULTAR
consultar.addEventListener('click', (e) => {
    e.preventDefault()

    const id = Number(idInput.value.trim())

    if (!id) {
        res2.innerHTML = 'Digite um ID válido.'
        return
    }

    res2.innerHTML = 'Buscando dados...'

    fetch(`http://localhost:8081/saida/${id}`)
        .then(resp => {
            if (!resp.ok) throw new Error('ID não encontrado.')
            return resp.json()
        })
        .then(dado => {
            dataSolicitacao.value = dado.dataSolicitacao
            horaSaida.value = dado.horaSaida
            horaRetorno.value = dado.horaRetorno
            motivo.value = dado.motivo
            localDestino.value = dado.localDestino
            status.value = dado.status
            nomeAluno.value = dado.nomeAluno
            nomeProfessor.value = dado.nomeProfessor
            aluno_id.value = dado.aluno_cod
            professor_id.value = dado.professor_cod

            res2.innerHTML = 'Dados carregados com sucesso.'
        })
        .catch(err => {
            console.error('Erro ao consultar os dados:', err)
            res2.innerHTML = 'Erro ao consultar os dados. Verifique o ID.'
        })
})

// ATUALIZAR
atualizar.addEventListener('click', (e) => {
    e.preventDefault()

    const id = Number(idInput.value.trim())

    if (!id) {
        res.innerHTML = 'Digite um ID válido antes de atualizar.'
        return
    }

    const valores = {
        dataSolicitacao: dataSolicitacao.value,
        horaSaida: horaSaida.value,
        horaRetorno: horaRetorno.value,
        motivo: motivo.value,
        localDestino: localDestino.value,
        status: status.value,
        nomeAluno: nomeAluno.value,
        nomeProfessor: nomeProfessor.value,
        aluno_cod: Number(aluno_id.value),
        professor_cod: Number(professor_id.value)
    }

    res.innerHTML = 'Enviando atualização...'

    fetch(`http://localhost:8081/saida/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(valores)
    })
        .then(resp => {
            if (!resp.ok) throw new Error('Erro ao atualizar')
            return resp.json()
        })
        .then(dadosGrav => {
            res.innerHTML = `
                <strong>Saída Atualizada com Sucesso:</strong><br>
                Data de Solicitação: ${dadosGrav.dataSolicitacao} <br>
                Hora da Saída: ${dadosGrav.horaSaida} <br>
                Hora do Retorno: ${dadosGrav.horaRetorno} <br>
                Motivo: ${dadosGrav.motivo} <br>
                Local do Destino: ${dadosGrav.localDestino} <br>
                Status: ${dadosGrav.status} <br>
                Nome do Aluno: ${dadosGrav.nomeAluno} <br>
                Nome do Professor: ${dadosGrav.nomeProfessor} <br>

            `
        })
        .catch(err => {
            console.error('Erro ao atualizar os dados:', err)
            res.innerHTML = 'Erro ao atualizar os dados. Verifique o preenchimento e o ID.'
        })
})
