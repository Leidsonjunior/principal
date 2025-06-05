let img = document.getElementById("img")
let fotos = [
 "fotos/prato (1).jpg",
 "fotos/prato (3).jpg",
"fotos/prato.jpg",
"fotos/prato(2).jpg"
]
let indiceAtual = 0 



function trocafoto(){

indiceAtual = (indiceAtual+ 1) %fotos.length

    img.src = fotos[indiceAtual]
}