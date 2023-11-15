function contar() {
    var inicio1 = document.getElementById('inicio')
    var fim1 = document.getElementById('fim')
    var passo1 = document.getElementById('passo')
    var res = document.getElementById('res')

    var inicio = Number(inicio1.value)
    var fim = Number(fim1.value)
    var passo = Number(passo1.value)

    res.innerHTML = '<p>Contando:</p>'
    for (var c = inicio; c <= fim; c = c + passo) {
        res.innerHTML += `${c} 👉 `
    }
}