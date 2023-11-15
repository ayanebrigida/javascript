function gerar() {
    var nume = document.getElementById('num')
    var num = Number(nume.value)
    var res = document.getElementById('res')

    for (var c = 1; c = 10; c++) {
        res.innerHTML = `${num} X ${c} = ${x}`
        var x = num * c
    }
}