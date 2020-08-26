let body = document.querySelector('body')
body.onload = function() {
    let res = document.querySelector('time')
    var date = new Date()
    var days_of_the_week = new Array(
        'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
    )
    alert(`Bem-vindo! hoje é ${days_of_the_week[date.getDay()]}.`)
    
    var day = date.getDate()
    var hours = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds() 
    var year = date.getFullYear()
    var month = date.getMonth()
    
    var str_date = day + '/0' + (month + 1) + '/' + year
    var str_hours = hours + ':' + min + ':' + sec
    res.innerHTML = `Hoje é ${str_date} às ${str_hours}`
}
let btnButton = document.querySelector('button')
btnButton.onclick = function() {
    let res = document.querySelector('#show-screen')
    let error = document.querySelector('#error')
    let inputAge = document.getElementById('input-age')
    if(inputAge.value == 0) {
        alert('[ERRO NO SISTEMA!]')
        error.style.background = '#f00'
        error.style.color = '#fff'
        error.style.margin = '10px 15px'
        error.style.padding = '50px 20px'
        res.style.background = '#f00'
        res.style.color = '#fff'
        res.style.padding = '50px 20px'
        res.innerHTML = `Erro no sistema. Tente novamente.`
        error.innerHTML = `Erro no sistema. Tente novamente.`
        error.style.borderRadius = '2rem 1rem'
    }else{
        error.style.background = ``
        res.style.background = ``
        error.innerHTML = ``
        res.innerHTML = ``
        let age = Number(inputAge.value)
        if(age <= 12) {
            res.innerHTML = `Você é uma criança. \u{1F9D2}`
        }else if(age > 12 && age <= 18) {
            res.innerHTML = `Você é um adolescente. \u{1F471}`
            res.style.padding = '50px 20px'
        }else if(age > 18 && age <= 50) {
            res.innerHTML = `Você é um adulto. \u{1F468}`
        }else{
            res.innerHTML = `Você é idoso. \u{1F468}`
        }
    }
}