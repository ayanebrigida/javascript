function contar() {
    var inicio1 = document.getElementById('inicio')
    var fim1 = document.getElementById('fim')
    var passo1 = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio1.value.length == 0 || fim1.value.length == 0 || passo1.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else  {  
        res.innerHTML = 'Contando:<br>' 
        var inicio = Number(inicio1.value)
        var fim = Number(fim1.value)
        var passo = Number(passo1.value)
        if (passo <=0) {
            window.alert('Passo inválido! Considerar PASSO 1')
            passo = 1
        }
        if(inicio < fim) {
            //Contagem crescente
            for (var c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c} 👉 `
            }
        } else {
            //Contagem regressiva
            for (var c = inicio; c >= fim; c -= passo) {
            res.innerHTML += `${c} 👉 `
            }
        }
        res.innerHTML += `\u{1F3C1} `
    }
}