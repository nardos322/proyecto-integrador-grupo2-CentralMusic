window.addEventListener('load', () => {

const $email = document.querySelector('#email');
const $emailError = document.querySelector('#emailError');
const $password = document.querySelector('#password');
const $passwordError = document.querySelector('#passwordError');
const $inputs = document.querySelectorAll('.inputs-container1 input');
const $formLogin = document.querySelector('#form-login');
const regEx = {
    password: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
    email: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
};

$email.addEventListener('click', (e) => {
    $email.classList.remove('login-is-valid');
    $email.classList.remove('login-is-invalid');
    $email.classList.add('login-information');
    

})

$email.addEventListener('blur', e => {
    switch(true){
        case !$email.value.trim():
            $emailError.innerHTML = 'Ingrese su email';
            $email.classList.add('login-is-invalid');
            $emailError.classList.add('text-danger');
            break;
        case !regEx.email.test($email.value):
            $emailError.innerHTML = 'Email invalido';
            $emailError.classList.add('text-danger');
            $email.classList.add('login-is-invalid');
            break;    
        default:
            $email.classList.remove('login-is-invalid');
            $email.classList.add('login-is-valid');
            $emailError.innerHTML = '';
            break;
    }
});

$password.addEventListener('click', (e) => {
    $password.classList.remove('login-is-valid');
    $password.classList.remove('login-is-invalid');
    $password.classList.add('login-information');
    

});

$password.addEventListener('blur', e => {
    switch(true){
        case !$password.value.trim():
            $passwordError.innerHTML = 'Ingrese su contraseña';
            $password.classList.add('login-is-invalid');
            $passwordError.classList.add('text-danger');
            break;
        case !regEx.password.test($password.value):
            $passwordError.innerHTML = 'Ingrese una contraseña valida';
            $passwordError.classList.add('text-danger');
            $password.classList.add('login-is-invalid');
            break;
        default:
            $password.classList.remove('login-is-invalid');
            $password.classList.add('login-is-valid');
            $passwordError.innerHTML = '';
            break;            
    }        
})



$formLogin.addEventListener('submit', e => {
    e.preventDefault();
    for(let i = 0; i < $inputs.length; i++){
        if($inputs[i].value == ''){
            $inputs[i].classList.add('login-is-invalid');
            submitErrors.innerHTML = 'Debe ingresar sus credenciales';
            submitErrors.classList.add('text-danger');
        }

    }
    let errors = []
    $inputs.forEach(input => {
        
        if(input.classList.contains('login-is-invalid')){
            errors.push(input)
            
        }

   });

    if(errors.length == 0){
        $formLogin.submit()
    }else{
        console.log( `hay ${errors.length} errores`);
    }

    
});







})




