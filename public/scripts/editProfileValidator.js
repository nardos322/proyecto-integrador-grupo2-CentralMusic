window.addEventListener('load', () => {

const $name = document.querySelector('#name');
const $nameError = document.querySelector('#nameError');
const $lastname = document.querySelector('#lastname');
const $lastnameError = document.querySelector('#lastnameError');
const $profileContainer = document.querySelector('.profile-container');
const $avatar = document.querySelector('#avatar');
const $avatarError = document.querySelector('#avatarError');
const $inputs = document.querySelectorAll('.inputs-container1 input');
const $submitError = document.querySelector('#submitError');
const $formEditProfile = document.querySelector('#form-editProfile');
const regEx = {
    name: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/,
    lastname: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/,
    avatar: /jpg|JPG|gif|GIF|png|PNG|jpeg|JPEG/
}

console.log($profileContainer)

$name.addEventListener('blur', e => {
    switch(true){
        case !$name.value.trim():
            $nameError.innerHTML = 'Ingrese un nombre';
            $nameError.classList.add('text-danger');
            $name.classList.add('is-invalid');
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
});


$lastname.addEventListener('blur', e => {
    switch(true){
        case !$lastname.value.trim():
            $lastnameError.innerHTML = 'Ingrese su apellido';
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
        let imgOld = document.querySelector('.profile-container img')
       
        let img = `${URL.createObjectURL($avatar.files[0])}`
        let $img = document.createElement('img');
        $img.src = img;
        $profileContainer.replaceChild($img, imgOld);
        $avatarError.innerHTML = ''
        console.log($avatar.files)
    }
});


console.log($inputs)

$formEditProfile.addEventListener('submit', e => {
    e.preventDefault();
    for(let i = 0; i < $inputs.length; i++){
        if($inputs[i].value == '' && $inputs[i].name !== 'avatar'){
            $inputs[i].classList.add('is-invalid');
            $submitError.innerHTML = 'Ingrese sus datos';
            $submitError.classList.add('text-danger');
        }

    }

    let errors = [];
    $inputs.forEach(input => {
        
        if(input.classList.contains('is-invalid')){
            errors.push(input)
            
        }


   })

    if(errors.length == 0){
        $formEditProfile.submit()
    }else{
        console.log( `hay ${errors.length} errores`);
        $submitError.innerHTML = 'Hay errores';
    }

})





})