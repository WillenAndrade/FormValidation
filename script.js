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
    //get the values of the inputs
    const usernameValue     = username.value.trim()
    const emailValue        = email.value.trim()
    const passwordValue     =password.value.trim()
    const password2Value    = password2.value.trim()

    if(usernameValue === '') {
        //show error
        //add the error class
        setErrorFor(username, 'Username cannot be blank')
    } else {
        //add success class
        setSuccessFor(username)
    }

    if( emailValue === '') {
        //show error
        //add the error class
        setErrorFor(email, 'Email cannot be blank')
    } else {
        //add success class
        setSuccessFor(email)
    }

    if( passwordValue === '') {
        //show error
        //add the error class
        setErrorFor(password, 'Password cannot be blank')
    } else {
        //add success class
        setSuccessFor(password)
    }

    if( password2Value === '') {
        //show error
        //add the error class
        setErrorFor(password2, 'Second password cannot be blank')
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'The password does not match!')
    } else {
        //add success class
        setSuccessFor(password2)
    }



}

function setErrorFor(input, message) {
    const formControl = input.parentElement  //.form-control
    const small  = formControl.querySelector('small')

    //add error message inside the small tag
    small.innerText = message

    //add error class

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement //.form-control
    formControl.className = 'form-control success'
}
