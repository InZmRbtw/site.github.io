var loginButtons = [document.querySelector('.login-wrapper'),
    document.querySelector('.register-wrapper'),
    document.querySelector('.forgot-password-wrapper')
]

var loginForms = [document.querySelector('.logining'),
    document.querySelector('.registration'),
    document.querySelector('.recovering-password')
]

for (var i = 0; i < loginButtons.length; i++) {

    let button = loginButtons[i];
    button.addEventListener('click', function() {
        let active = document.querySelector('.login-active');
        active.classList.remove('login-active');

        for (var i = 0; i < loginForms.length; i++) {
            loginForms[i].classList.add('invisible');
        }

        button.classList.add('login-active');
        if (button.className === "login-wrapper login-active") {
            loginForms[0].classList.remove('invisible');
        } else if (button.className === "register-wrapper login-active") {
            loginForms[1].classList.remove('invisible');
        } else if (button.className === "forgot-password-wrapper login-active"){
            loginForms[2].classList.remove('invisible');
        } else {
            console.log("fatal error");
        }
    })
}
