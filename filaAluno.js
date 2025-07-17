let btnAdicionar = document.getElementById('adicionar')

btnAdicionar.addEventListener('click', () => {
  let nome = document.getElementById('nome').value
  let motivo = document.getElementById('motivo').value

  if (nome && motivo) {
    let fila = JSON.parse(localStorage.getItem('fila')) || []
    fila.push({ nome: nome, motivo: motivo, status: 'Aguardando aprovação' })
    localStorage.setItem('fila', JSON.stringify(fila))
    alert('Solicitação enviada!')
    document.getElementById('nome').value = ''
    document.getElementById('motivo').value = ''
  } else {
    alert('Preencha nome e motivo!')
  }
})