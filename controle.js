const popup1 = document.getElementById('botaoAgradecimento');
const mens = document.getElementById('text')
const fechar = document.getElementById('close1')
const popup2 = document.getElementById('botaoLavar')
const img = document.getElementById('imagem')
const fechar2 = document.getElementById('close2')

popup1.onclick = function (){
    mens.showModal()
}
fechar.onclick = function (){
    mens.close()
}
popup2.onclick = function (){
    img.showModal()
}
fechar2.onclick = function(){
    img.close()
}