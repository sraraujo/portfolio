var resultado = document.querySelector("#idadeAqui")
var agora = new Date()
var idade;

if(agora.getMonth() + 1 < 10){
    idade = agora.getFullYear() - 1991

} else if(agora.getMonth() + 1 == 10){
    if (agora.getDate() < 6){
        idade = agora.getFullYear() - 1991

    }else{
        idade = agora.getFullYear() - 1990
    }
}else{
    idade = agora.getFullYear() - 1990
}

resultado.innerHTML = `${idade}`