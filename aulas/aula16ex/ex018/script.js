let num = document.getElementById('txtn')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function numeros(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function adicionados(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    n = Number(num.value)
        if (numeros(num.value) && !adicionados(num.value, valores)) {
            valores.push(n)
            let item = document.createElement('option')
            item.text = `valor ${n} adicionado.`
            lista.appendChild(item)
            res.innerHTML = ''
            
        } else {
            window.alert('Número INVÁLIDO ou já encontrado na lista.')
        }
        num.value = ''
        num.focus()
    }

    function finalizar() {
        if (valores.length == 0) {
            window.alert('Adicione valores antes de finalizar')
        } else {
            valores.sort()
        res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
        //res.innerHTML += `<p>O maior valor informado foi ${}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${valores[0]}.</p>`
        //res.innerHTML += `<p>Somando todos os valores, temos${x}.</p>`
        //res.innerHTML += `<p>A média dos valores é ${x}.</p>`
        }
        
    }

