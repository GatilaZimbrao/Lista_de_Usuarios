const axios = require("axios")

function cadastrar(){

    // NOME
    var inputNome = document.getElementById("cad_n1")
    var nome = inputNome.value.toUpperCase()
    // SOBRENOME
    var inputSnome =document.getElementById("cad_n2")
    var snome = inputSnome.value.toUpperCase()

    // EMAIL
    var inputEmail = document.getElementById("cad_e")
    var eMail = inputEmail.value.toLowerCase()

    // FUNÇÃO
    var inputFunc = document.getElementById("cad_f")
    var func = inputFunc.value.toUpperCase()

    // CELULAR
    var cel = document.getElementById("cad_c").value

    var dados = 
    {
        name: `${nome}\n`,
        lastName: `${snome}\n`,
        email: `${eMail}\n`,
        funcao: `${func}\n`,
        phone: `${cel}\n`,
    }
    
    axios.post('localhost:3000/user', dados)
        .then(function(resposta){
            console.log(resposta.data)
        })
        .catch(function(error){
            console.log(error.data)
        })

}