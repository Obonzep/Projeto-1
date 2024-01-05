function toggleMode() {
const html = document.documentElement
html.classList.toggle('light')

// pegar a tag
const img = document.querySelector("#profile img")

// substituir a imagem
if (html.classList.contains("light")) {
// se tiver light mode vai adicionar a imagem light
img.setAttribute("src", "./assets/Bruce Wayne.jpg")


} else{
// se estiver sem light mode manter a imagem normal
img.setAttribute("src", "./assets/Batman.jpg")
}


}