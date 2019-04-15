function logo() {
    console.log("Logo Clicado!");
}

function ulList1() {
    el = document.getElementById('1').innerHTML
    alert(`Lista desordenada com texto ${el}`)
}

function ulList2() {
    el = document.getElementById('2').innerHTML
    alert(`Lista desordenada com texto ${el}`)
}

function ulList3() {
    el = document.getElementById('3').innerHTML
    alert(`Lista desordenada com texto ${el}`)
}

function ulList4() {
    el = document.getElementById('4').innerHTML
    alert(`Lista desordenada com texto ${el}`)
}

function olList1() {
    el = document.getElementById('1').innerHTML
    alert(`Lista ordenada com texto ${el}`)
}

function olList2() {
    el = document.getElementById('2').innerHTML
    alert(`Lista ordenada com texto ${el}`)
}

function olList3() {
    el = document.getElementById('3').innerHTML
    alert(`Lista ordenada com texto ${el}`)
}

function olList4() {
    el = document.getElementById('4').innerHTML
    alert(`Lista ordenada com texto ${el}`)
}

function deleta(id) {
    document.getElementById('tbl').deleteRow(id);
}