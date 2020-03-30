import * as axios from 'axios'

function logar(){

    let inputE = document.getElementById("login_e")

    let logE = inputE.value.toLowerCase()

    let logS = document.getElementById("login_s").value
   
    var email = logE
    var senha = logS
    var senhaF = btoa(senha)
    var tok = btoa(`${email}|${senhaF}`)
    



    post('http://localhost:300/user/auth', {'token': `${tok}`})
        .then(function(resposta){
            console.log(resposta.data)
        })
        .catch(function (error){
            if(erro){
                console.log(error.data)
            }
            
        })

}

