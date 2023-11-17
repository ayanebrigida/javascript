function gerar() {
    var nume = document.getElementById('num')
    var res = document.getElementById('res')
    if (nume.value.length == 0) {
        window.alert('Por favor, digiteum número!')
    } else {
        var num = Number(nume.value)
        res.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${num} X ${c} = ${num * c}`
            item.value = `res${c}`
            res.appendChild(item)
        }
    }
    }

    