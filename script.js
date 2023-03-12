const form = document.getElementById('form')
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")   

form.addEventListener("submit", (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    
    const usernameValue     = username.value.trim()
    const emailValue        = email.value.trim()
    const passwordValue     =password.value.trim()
    const password2Value    = password2.value.trim()



    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank')
    } else {
        setSuccessFor(username)
    }

    if( emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else if (!validateEmail(emailValue)) {
        setErrorFor(email, 'This is not a valid email')
    } else {
        setSuccessFor(email)
    }


    if( passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank')
    } else if (!validatePassword(passwordValue)) {
        setErrorFor(password, 'This is not a valid Password')
    } else {
        setSuccessFor(password)
    }

    if( password2Value === '') {
        setErrorFor(password2, 'Second password cannot be blank')
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'The password does not match!')
    } else {
        setSuccessFor(password2)
    }

}

function validatePassword(senha) {
    var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
    if(reg.test(senha)) {
        return true
    } else {
        return false
    }
}

function validateEmail(email) {
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (reg.test(email)){
    return true
    } else {
    return false
           }
    } 

function setErrorFor(input, message) {
    const formControl = input.parentElement  //.form-control
    const small  = formControl.querySelector('small')

    
    small.innerText = message

    

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement //.form-control
    formControl.className = 'form-control success'
}
