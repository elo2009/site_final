let apagar = document.getElementById('apagar')
let res = document.getElementById('res')

apagar.addEventListener('click', () => {
    let codigo = Number(document.getElementById('codigo').value)

    res.innerHTML = ' '

    fetch(`http://localhost:8081/professor/${codigo}`, {
        method: 'DELETE'
    })
    .then(resp => {
        console.log(resp)
        console.log(resp.status)
        if(resp.status == 204){
            res.innerHTML += `─ ⋆⋅☆⋅⋆ ─ Dados excluidos com sucesso! ─ ⋆⋅☆⋅⋆ ─ <br>`
        }else{
            resp.innerHTML += `Produto inexistente. Os dados não foram excluídos! <br>`
        }
    })
    .catch((err) => {
        console.error('Erro ao listar os dados!', err)
    })
})


