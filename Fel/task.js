var b1 = []

function f(e) {
    b1.push(e.value)
    b1.sort()
    e.value = ''
    document.querySelector('#output').innerHTML =
        b1.map((elem, i) =>
            `<div class="x${i % 2}">${elem}</div>`).join('')
}