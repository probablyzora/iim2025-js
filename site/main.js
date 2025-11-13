let title = document.getElementById("title")
let imageTitle =document.getElementById("imageTitle")
let boutonIMG = document.getElementById("boutonIMG")
let changeCSS = document.getElementById("changeCSS")
let bloc = document.querySelector(".bloc")

title.innerHTML = "nouveau nice"

function changerImage()
{
    imageTitle.src = "logo.png"
}
function changeText()
{
    title.innerHTML = "changed text"
}
boutonIMG.addEventListener('click', function(){
    changerImage()
})

changeCSS.addEventListener('click', function()
{
    bloc.classList.toggle('dark')
})