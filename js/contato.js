function confirmeEmail(){
    while(true){
        var email= prompt("confirme seu email")
        if (email.indexOf('@') >0){
            alert("Obrigado, nós entraremos em contato")
            break
        }
            alert("Email inválido")
    }
}