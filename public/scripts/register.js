let $user = document.querySelector('#user');
let $userError = document.querySelector('#userError')
let $name = document.querySelector('#name');
let $nameError = document.querySelector('#nameError');
let $lastname = document.querySelector('#lastname');
let $lastnameError = document.querySelector('#lastnameError');
let $email = document.querySelector('#email');
let $emailError = document.querySelector('#emailError');
let $password = document.querySelector('#password');
let $passwordError = document.querySelector('#passwordError');
let $repassword = document.querySelector('#password2');
let $repasswordError = document.querySelector('#repasswordError');
let $avatar = document.querySelector('#avatar');
let $terms = document.querySelector('#terms');
let $termsError = document.querySelector('#termsError');
let $btnRegister = document.querySelector('.btn-register');
let $inputs = document.querySelectorAll('.inputs-container1 input');
const regEx = {
    user: /^[a-z0-9_-]{4,16}$/,
    name: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/,
    lastname: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/,
    password: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
    email: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
}


$user.addEventListener('blur', e => {

    switch(true){
        case !$user.value.trim():
            $userError.innerHTML = 'Este campo no puede estar vacio';
            $user.classList.add('is-invalid');
            $userError.classList.add('text-danger')
            break;
        case !regEx.user.test($user.value):
            $userError.innerHTML = 'Usuario invalido';
            $userError.classList.add('text-danger');
            $user.classList.add('is-invalid');
            break;
        default:
            $user.classList.remove('is-invalid')
            $user.classList.add('is-valid')
            $userError.innerHTML = ''
            break;
    }

});


$name.addEventListener('blur', e => {
    switch(true){
        case !$name.value.trim():
            $nameError.innerHTML = 'Este campo no puede estar vacio';
            $name.classList.add('is-invalid');
            $nameError.classList.add('text-danger');
            break;
        case !regEx.name.test($name.value) || $name.value.length < 2:
            $nameError.innerHTML = 'Nombre invalido';
            $nameError.classList.add('text-danger');
            $name.classList.add('is-invalid');
            break;    
        default:
            $name.classList.remove('is-invalid');
            $name.classList.add('is-valid');
            $nameError.innerHTML = '';
            break;
    }
})



$lastname.addEventListener('blur', e => {
    switch(true){
        case !$lastname.value.trim():
            $lastnameError.innerHTML = 'Este campo no puede estar vacio';
            $lastname.classList.add('is-invalid');
            $lastnameError.classList.add('text-danger');
            break;
        case !regEx.lastname.test($lastname.value) || $lastname.value.length < 2:
            $lastnameError.innerHTML = 'Apellido invalido';
            $lastnameError.classList.add('text-danger');
            $lastname.classList.add('is-invalid');
            break;    
        default:
            $lastname.classList.remove('is-invalid');
            $lastname.classList.add('is-valid');
            $lastnameError.innerHTML = '';
            break;
    }
});


$email.addEventListener('blur', e => {
    switch(true){
        case !$email.value.trim():
            $emailError.innerHTML = 'Este campo no puede estar vacio';
            $email.classList.add('is-invalid');
            $emailError.classList.add('text-danger');
            break;
        case !regEx.email.test($email.value):
            $emailError.innerHTML = 'Email invalido';
            $emailError.classList.add('text-danger');
            $email.classList.add('is-invalid');
            break;    
        default:
            $email.classList.remove('is-invalid');
            $email.classList.add('is-valid');
            $emailError.innerHTML = '';
            break;
    }
});

$password.addEventListener('blur', e => {
    switch(true){
        case $password.value.length == '':
            $passwordError.innerHTML = 'Este campo no puede estar vacio';
            $password.classList.add('is-invalid');
            $passwordError.classList.add('text-danger');
            console.log($password.value)
            break;
        case !regEx.password.test($password.value):
            $passwordError.innerHTML = 'La contrasena  debe tener una letra minúscula, una letra mayúscula, un número, un carácter especial y mínimo 8 dígitos '
            $passwordError.classList.add('text-danger');
            $password.classList.add('is-invalid');
            break;
        case $password.value !== $repassword.value && $repassword.value != '':
            $repasswordError.innerHTML = 'Las contraseñas deben ser iguales'
            $repasswordError.classList.add('text-danger'); 
            $repassword.classList.add('is-invalid'); 
            break; 
        case $password.value === $repassword.value && $repassword.value != '':
            $repassword.classList.remove('is-invalid');
            $repassword.classList.add('is-valid');
            $repasswordError.innerHTML = '';
            break;       
        case $password.value === $repassword.value:
            $password.classList.remove('is-invalid');
            $password.classList.add('is-valid');
            $passwordError.innerHTML = '';
            break;                     
        default:
            $password.classList.remove('is-invalid');
            $password.classList.add('is-valid');
            $passwordError.innerHTML = '';
            break;    
    }
});

$repassword.addEventListener('blur', e => {
    switch(true){
        case !$repassword.value.trim():
            $repasswordError.innerHTML = 'Reingresa tu contraseña';
            $repassword.classList.add('is-invalid');
            $repasswordError.classList.add('text-danger');
            break;
        case $password.value !== $repassword.value:
            $repasswordError.innerHTML = 'Las contraseñas deben ser iguales'
            $repasswordError.classList.add('text-danger'); 
            $repassword.classList.add('is-invalid'); 
            console.log($repassword.value)
            console.log($password.value)
            break; 
        case $password.value === $repassword.value:
            $repassword.classList.remove('is-invalid');
            $repassword.classList.add('is-valid');
            $repasswordError.innerHTML = '';
            break;  
           
    }
})




/*
$user.addEventListener('focus', e => {
    
    $userError.innerHTML = 'Minimo 5 caracteres'
    $userError.style.color = '#ff753a'
    
    if($user.value.length >= 5){
        $userError.innerHTML = ''
        $user.style.border = '1px solid green'
    }else{
        $user.style.border = '1px solid red'
    }
    
    
    
});

$user.addEventListener('change', e => {
    
    if(e.target.value.length >= 5){
        $userError.innerHTML = ''
        $user.style.border = '1px solid green'
    }else{
        $user.style.border = '1px solid red'
    }
})

$user.addEventListener('blur', e => {
    if($user.value == ''){
        $userError.innerHTML = 'Este campo no puede estar vacio'
        $userError.style.color = 'red'
    }
})

$name.addEventListener('focus', e => {
    
 
    
    if($name.value.length >= 2){
        $nameError.innerHTML = ''
        $name.style.border = '1px solid green'
    }else{
        $nameError.innerHTML = 'Introduzca su nombre'
        $nameError.classList.add('text-information')
        $nameError.classList.remove('text-danger')
        $name.style.border = '1px solid red'
        console.log($nameError)
    }
    
    
    
});

$name.addEventListener('change', e => {
    
    if($name.value.length >= 2){
        $userError.innerHTML = ''
        $name.style.border = '1px solid green'
    }else{
        $nameError.innerHTML = 'Ingrese un nombre valido'
        $nameError.classList.remove('text-information')
        $nameError.classList.add('text-danger')
        $name.style.border = '1px solid red'
    }
})

$name.addEventListener('blur', e => {
    if($name.value == ''){
        $nameError.innerHTML = 'Este campo no puede estar vacio'
        $nameError.classList.remove('text-information')
        $name.classList.add('is-invalid')
        $nameError.classList.add('text-danger')
        console.log($nameError)
        
    }else if($name.value.length >= 2){
        $nameError.innerHTML = ''
    }
})

$lastname.addEventListener('focus', e => {
    if($lastname.value.length > 2) {


    }else{
        $lastnameError.innerHTML = 'Introduzca su apellido'
        $lastnameError.classList.remove('text-danger')
        $lastnameError.classList.add('text-information')
    }
    
})

$lastname.addEventListener('blur', e => {
    if($lastname.value == ''){
        $lastnameError.innerHTML = 'Este campo no puede estar vacio'
        $lastnameError.classList.add('text-danger')
        $lastname.classList.add('is-invalid')
        $lastnameError.classList.remove('text-information')
    }
})

$lastname.addEventListener('change', e => {
    if($lastname.value.length >= 2){
        $lastname.classList.remove('is-invalid')
        $lastname.classList.add('is-valid');
        $lastnameError.innerHTML = ''
    }else{
        $lastnameError.innerHTML = 'Ingrese un apellido valido'
        $lastnameError.classList.remove('text-information')
        $lastnameError.classList.add('text-danger')
    }
}) */