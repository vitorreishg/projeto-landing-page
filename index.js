var SetaDireita = window.document.getElementById("seta-direita-carrossel")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var SetaEsquerda = window.document.getElementById("seta-esquerda-carrossel")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    SetaEsquerda.style = "display:flex"
    SetaDireita.style = "opacity:0%"

}

function RolarParaEsquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    SetaDireita.style = "display:flex"
    SetaEsquerda.style = "opacity:0%"
}