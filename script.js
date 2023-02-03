// variaveis um espaço dre memoria do computador7

let chave = "cb3f7e2262d6e2a795b7ecde3d7e3904"


function colocaNatela(dados){
    console.log(dados)
     document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
     document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
      document.querySelector(".descricao").innerHTML = dados.weather[0].description
      document.querySelector(".umidade").innerHTML = "Umidade:" + dados.main.humidity + "%"
      document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}
 async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric").then( resposta => resposta.json())

       colocaNatela(dados)
        
}



function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value
    
    buscarCidade(cidade)
}

