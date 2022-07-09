let $user = document.querySelector('#user');
let $userError = document.querySelector('#userError')
let $name = document.querySelector('#name');
let $nameError = document.querySelector('#nameError')
let $lastname = document.querySelector('#lastname');
let $lastnameError = document.querySelector('#lastnameError')
let $email = document.querySelector('#email');
let $emailError = document.querySelector('#emailError')
let $password = document.querySelector('#password');
let $passwordError = document.querySelector('#passwordError')
let $repassword = document.querySelector('#password2');
let $repasswordError = document.querySelector('#repasswordError')
let $avatar = document.querySelector('#avatar');
let $terms = document.querySelector('#terms');
let $termsError = document.querySelector('#termsError')
let $btnRegister = document.querySelector('.btn-register');


$user.addEventListener('focus', e => {
    $userError.innerHTML = 'Minimo 5 caracteres'
    $userError.style.color = 'red'
    $user.style.borderBottom = '1px solid orange'
    if($user.value.length >= 5){
        $userError.innerHTML = ''
        $user.style.border = '1px solid green'
    }else{
        $user.style.border = '1px solid red'
    }
    
    //console.log($user.value)
    
});

$user.addEventListener('change', e => {
    console.log(e.target.value)
    if(e.target.value.length >= 5){
        $userError.innerHTML = ''
    }
})

