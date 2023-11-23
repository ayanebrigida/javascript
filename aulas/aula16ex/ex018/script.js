let num = document.getElementById('txtn')
let valores = document.getElementById('valores')
let res = document.getElementById('res')

function adicionar() {
    n = Number(num.value)
    if (n<1 || n>100) {
        window.alert('Número INVÁLIDO!')
    } else {
        let valor = document.createElement('option')
        valor.text = `Valor ${n} adicionado.`
        valores.appendChild(valor)
    }
}