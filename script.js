let no = document.querySelector('#no')
let sim = document.querySelector('#yes')

function ola(){
    no.style.position = 'absolute'
    no.style.bottom = (Math.random() * (90-10) + 10) + "%";
    no.style.left = (Math.random() * (70-10) + 10) + "%";
}

no.onclick = function(){
    ola()
}

yes.onclick = function(){
    let h1 = document.querySelector('.ola h1')
    h1.textContent = 'COM MAIOR PRAZER!'
    h1.style.textAlign = 'center'
}


