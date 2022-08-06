let letras = document.getElementById('qtdAlfa')
let numeros = document.getElementById('qtdNum')
let simbolos = document.getElementById('qtdSimb')


letras.addEventListener('change', () =>{
    let textLetras = document.getElementById('textAlfa')

    textLetras.innerHTML = letras.value

})

numeros.addEventListener('change', () =>{
    let textNumeros = document.getElementById('textNum')

    textNumeros.innerHTML = numeros.value

})

simbolos.addEventListener('change', () =>{
    let textSimbolos = document.getElementById('textSimb')

    textSimbolos.innerHTML = simbolos.value

})

newPassword = document.getElementById('resultSenha')



function gerarPassword(){
    let alfa = _.shuffle(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])
    let numerico = _.shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    let simbol = _.shuffle(['!', '@', '#', '$', '%', '&', '*', '(', ')', '{', '}', '^', ':', '?', ';', '/', '=', '+', '-', '[', ']'])    

    let letras = document.getElementById('qtdAlfa').value
    let numeros = document.getElementById('qtdNum').value
    let simbolos = document.getElementById('qtdSimb').value

    let qtdAlfa = letras - 1
    let qtdNum = numeros - 1
    let qtdSimb = simbolos - 1

    let password = []
    
    for(i = 0; i <= qtdAlfa; i++){
        password.push(alfa[i])
    }
    
    for(i = 0; i <= qtdNum; i++){
        password.push(numerico[i])
    }
    
    for(i = 0; i <= qtdSimb; i++){
        password.push(simbol[i])
    }
   

    newPassword.classList.toggle("tracking-in-expand")

    newPassword.innerHTML =_.shuffle(password).toString().replaceAll(',', '')
    
    
}

newPassword.addEventListener('animationend', () => {
    newPassword.classList.remove("tracking-in-expand")
})




