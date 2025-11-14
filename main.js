let changeTheme = document.getElementById("changeTheme")
let body = document.querySelectorAll('body')
let buttons = document.querySelectorAll('button')
let buttonDropdown = document.getElementById('buttonDropdown')
let dropdown = document.getElementById('dropdown')
let isDarkTheme = false


changeTheme.addEventListener('click', function(){
    // Change le body et les boutons separement
        body.forEach(body => body.classList.toggle('dark'))
        buttons.forEach(button => button.classList.toggle('dark'))
        // Seulement utile pour changer le texte.
        if(!isDarkTheme){
            changeTheme.innerHTML = "Light Mode"
            isDarkTheme = true
        }
        else{
            changeTheme.innerHTML = "Dark Mode"
            isDarkTheme = false
        }
        })
    
buttonDropdown.addEventListener('click', function(){
    dropdown.classList.toggle('hidden')

}) 
