let changeTheme = document.getElementById("changeTheme")
let body = document.querySelectorAll('body')
let isDarkTheme = false

changeTheme.addEventListener('click', function(){
        body.forEach(body => body.classList.toggle('dark'))
        changeTheme.classList.toggle(`dark`)
        if(!isDarkTheme){
            changeTheme.innerHTML = "Light Mode"
            isDarkTheme = true
        }
        else{
            changeTheme.innerHTML = "Dark Mode"
            isDarkTheme = false
        }
        })