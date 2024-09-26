t = []

f = e => {
    e = document.getElementById("i1")
    t.push(e.value)
    e.value = ''
    document.getElementById("x").innerHTML = t.sort().join("<br>")
}