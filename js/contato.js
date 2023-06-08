
//Uma função confirme Email
function confirmeEmail(){
    //Há um laço de repetição (verdadeiro)
    while(true){
        //Aqui há um pote com um prompt confirmando Email
        var email= prompt("confirme seu email")
        //se email, fuxiqueiro (receber@) com o valor maior que 0
        if (email.indexOf('@') >0){
            //Gera um Alerta dizendo "Obrigado, nós entraremos em contato"
            alert("Obrigado, nós entraremos em contato")
            //Laço de repetição para.
            break
        }   
            //Aqui caso email Não conter (@) ou for -1 ele informa o alert (Email inválido)
            alert("Email inválido")
    }
}