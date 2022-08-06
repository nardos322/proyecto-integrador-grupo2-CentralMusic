window.addEventListener('load', () => {

const $user = document.querySelector('#user');
const $userError = document.querySelector('#userError');
const $name = document.querySelector('#name');
const $nameError = document.querySelector('#nameError');
const $lastname = document.querySelector('#lastname');
const $lastnameError = document.querySelector('#lastnameError');
const $email = document.querySelector('#email');
const $emailError = document.querySelector('#emailError');
const $password = document.querySelector('#password');
const $passwordError = document.querySelector('#passwordError');
const $repassword = document.querySelector('#password2');
const $repasswordError = document.querySelector('#repasswordError');
const $avatar = document.querySelector('#avatar');
const $avatarError = document.querySelector('#avatarError')
const $terms = document.querySelector('#terms');
const $termsError = document.querySelector('#termsError');
const $formRegister = document.querySelector('#form-register');
const $btnRegister = document.querySelector('.btn-register');
const $inputs = document.querySelectorAll('.inputs-container1 input');
const regEx = {
    user: /^[a-z0-9_-]{4,16}$/,
    name: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/,
    lastname: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/,
    password: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
    email: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
    avatar: /jpg|JPG|gif|GIF|png|PNG|jpeg|JPEG/

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


$user.addEventListener('blur', () => {
    fetch('http://localhost:3000/apis/users')
    .then(response => response.json())
    .then(result => {
        result.data.forEach(element => {
            if($user.value === element.user){
                $userError.innerHTML = "Usuario ya registrado";
                $user.classList.add('is-invalid');
                
            }
        });
    })
})


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

$email.addEventListener('blur', () => {
    fetch('http://localhost:3000/apis/users')
    .then(response => response.json())
    .then(result => {
        result.data.forEach(element => {
            if($email.value === element.email){
                $emailError.innerHTML = "email ya registrado";
                $email.classList.add('is-invalid');
                
            }
        });
    })
})

$password.addEventListener('focus', e => {
    $passwordError.innerHTML ='Debe tener una letra minúscula, una letra mayúscula, un número, un carácter especial y mínimo 8 dígitos';
    $passwordError.classList.add('text-information')
    
})

$password.addEventListener('blur', e => {
    switch(true){
        case !$password.value.trim():
            $passwordError.innerHTML = 'Este campo no puede estar vacio';
            $passwordError.classList.remove('text-information')
            $password.classList.add('is-invalid');
            $passwordError.classList.add('text-danger');
            break;
        case !regEx.password.test($password.value):
            $passwordError.innerHTML = 'La contrasena  debe tener una letra minúscula, una letra mayúscula, un número, un carácter especial y mínimo 8 dígitos '
            $passwordError.classList.remove('text-information')
            $passwordError.classList.add('text-danger');
            $password.classList.add('is-invalid');
            console.log($password)
            break;
        case $password.value !== $repassword.value && $repassword.value !== '':
            $repasswordError.innerHTML = 'Las contraseñas deben ser iguales'
            $passwordError.classList.remove('text-information')
            $repasswordError.classList.add('text-danger'); 
            $repassword.classList.add('is-invalid'); 
            break; 
        case $password.value === $repassword.value && $repassword.value !== '':
            $repassword.classList.remove('is-invalid');
            $passwordError.classList.remove('text-information')
            $repassword.classList.add('is-valid');
            $repasswordError.innerHTML = '';
            $passwordError.innerHTML = '';
            break;       
        case $password.value === $repassword.value:
            $passwordError.classList.remove('text-information')
            $password.classList.remove('is-invalid');
            $password.classList.add('is-valid');
            $passwordError.innerHTML = '';
            break;
        case !regEx.password.test($password.value) && $password.classList.contains('is-valid') && $repassword.classList.contains('is-valid'):
            $passwordError.classList.remove('text-information')
            $password.classList.remove('is-invalid');
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
            $repasswordError.innerHTML = 'Las contraseñas deben ser iguales';
            $repasswordError.classList.add('text-danger'); 
            $repassword.classList.add('is-invalid'); 
            break; 
        case $password.value === $repassword.value:
            $repassword.classList.remove('is-invalid');
            $repassword.classList.add('is-valid');
            $repasswordError.innerHTML = '';
            break;  
           
    }
});

$terms.addEventListener('click', () => {
    $terms.value = 'on';
    $terms.classList.toggle('is-valid');
    $terms.classList.remove('is-invalid');
    $termsError.innerHTML = '';
});

$avatar.addEventListener('change', e => {
    if(!regEx.avatar.exec($avatar.value)){
        $avatarError.innerHTML = 'El archivo que intenta subir no es  valido, extensiones permitidas: png, jpeg, jpg, gif, este campo no es obligatorio'
        $avatarError.classList.add('text-information')
        
        $avatar.value = ''
        console.log($avatar.files)
        console.log(e.target)
        
    }else if($avatar.files[0].size > 2097152){
        $avatarError.innerHTML = 'La imagen no puede pesar mas de 2mb'
        $avatarError.classList.add('text-information')
        $avatar.value = ''
        

    }else{
        $avatarError.innerHTML = ''
        console.log($avatar.files)
    }
});




$formRegister.addEventListener('submit', e => {
    e.preventDefault();

    for(let i = 0; i < $inputs.length; i++){
        if($inputs[i].value == '' && $inputs[i].name !== 'avatar'){
            $inputs[i].classList.add('is-invalid');
            submitErrors.innerHTML = 'Los campos señalados son obligatorios';
            submitErrors.classList.add('text-danger');
        }

    }

    if(!$terms.checked){
        $termsError.innerHTML = 'Debes aceptar los terminos y condiciones';
        $termsError.classList.add('text-danger');
        $terms.classList.add('is-invalid');

    }
    let errors = [];
    $inputs.forEach(input => {
        
        if(input.classList.contains('is-invalid')){
            errors.push(input)
            
        }
        

   })
   
    if(errors.length == 0){
        $formRegister.submit()
    }else{
        console.log( `hay ${errors.length} errores`);
        submitErrors.innerHTML = 'Hay errores';
    }
   
});

});





