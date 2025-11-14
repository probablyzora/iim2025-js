let title = document.getElementById("title")
let imageTitle =document.getElementById("imageTitle")
let boutonIMG = document.getElementById("boutonIMG")
let changeCSS = document.getElementById("changeCSS")
let bloc = document.querySelector(".bloc")
let body = document.querySelector('body')

title.innerHTML = "nouveau nice"

imageTitle.style.visibility = 'hidden'
imageTitle.style.transition = '0.4s'
function hideImage()
{
    if (imageTitle.style.visibility = 'hidden') {
        
    }
}
function changeText()
{
    title.innerHTML = "changed text"
}
boutonIMG.addEventListener('click', function(){
    hideImage()
})

changeCSS.addEventListener('click', function()
{
    body.classList.toggle('dark')
})