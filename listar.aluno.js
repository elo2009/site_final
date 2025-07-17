let listar = document.getElementById('listar')
let res = document.getElementById('res')

listar.addEventListener('click', ()=>{


    fetch(`http://localhost:8081/aluno`)
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados)
         res.innerHTML += `─ ⋆⋅☆⋅⋆ ─ Listagem realizada com sucesso! ─ ⋆⋅☆⋅⋆ ─ <br><br>`
        dados.forEach(dad => {
            
            res.innerHTML += `Nome: ${dad.nome} <br>`
            res.innerHTML += `Sobrenome: ${dad.sobrenome} <br>`
            res.innerHTML += `Matrícula: ${dad.matricula} <br>`
            res.innerHTML += `Telefone: ${dad.telefone} <br>`
            res.innerHTML += `Email: ${dad.email} <br>`
            res.innerHTML += `Código do Aluno: ${dad.codAluno} <br>`
            res.innerHTML += `<hr>`
            res.innerHTML += `<br>`
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar os dados!',err)
    })
})