function Carregar(){
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date() 
    var hora =  data.getHours()
    msg.innerHTML = `Agora São ${hora} horas.`

    if(hora >= 0 && hora < 12){
           // Bom dia//
        img.src = `manha.jpg`
        document.body.style.background = `#ffe64f`
    }else if(hora >= 12 && hora < 18){
        img.src = `tarde.jpg`
        document.body.style.background =  `#abdff7`
    }else{
        img.src = `noite.jpg`
        document.body.style.background = `#0e0847`
    }

}
