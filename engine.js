const champs = ['Briar', 'Darius', 'Aurora']

function init() {
    document.getElementById('body').innerHTML = champs.map(c =>
        `<div onclick="f('${c}')">${c}</div>`
    ).join("")
}

const f = console.log