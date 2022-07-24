import {createImagePreview} from './imagesPreview.js'

window.addEventListener('load', () => {
    const $nameProduct = document.querySelector('#nameProduct');
    const $nameProductError = document.querySelector('#nameProductError');
    const $marca = document.querySelector('#marca');
    const $marcaError = document.querySelector('#marcaError');
    const $vocal = document.querySelector('#vocal');
    const $vocalError = document.querySelector('#vocalError');
    const $efects = document.querySelector('#efects');
    const $efectsError = document.querySelector('#efectsError');
    const $price = document.querySelector('#price');
    const $priceError = document.querySelector('#priceError');
    const $instruments = document.querySelector('#instruments');
    const $instrumentsError = document.querySelector('#instrumentsError');
    const $typeEfect = document.querySelector('#efect');
    const $typeEfectError = document.querySelector('#typeEfectError');
    const $voltaje = document.querySelector('#voltaje');
    const $voltajeError = document.querySelector('#voltajeError');
    const $technology = document.querySelector('#technology');
    const $technologyError = document.querySelector('#technologyError');
    const $feeding = document.querySelector('#feeding');
    const $feedingError = document.querySelector('#feedingError');
    const $labelImage = document.querySelector('#labelImage');
    const $labelError = document.querySelector('#labelError')
    const $image = document.querySelector('#image');
    const $imagesPreview = document.querySelector('#images-preview');
    const $imageError = document.querySelector('#imageError');
    const $description = document.querySelector('#description');
    const $descriptionError = document.querySelector('#descriptionError');
    const $submitError = document.querySelector('#submitError');
    const $inputs = document.querySelectorAll('#formAddPedal input');
    const $formAddPedal = document.querySelector('#formAddPedal');
    
    const regEx = {
        textAndNumber : /^[A-Za-z0-9\s]+$/g,
        text: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/,
        price: /^\d*\.\d+$/,
        image: /jpg|JPG|gif|GIF|png|PNG|jpeg|JPEG/,
        descripton: /^(.|\s)*[a-zA-Z]+(.|\s)*$/,
    };


$nameProduct.addEventListener('blur', e => {
    switch(true){
        case !$nameProduct.value.trim():
            $nameProductError.innerHTML = 'Este campo no puede estar vacio';
            $nameProductError.classList.add('text-danger');
            $nameProduct.classList.add('is-invalid');
            $nameProduct.classList.remove('is-valid');
            break;
        case !regEx.textAndNumber.test($nameProduct.value) || $nameProduct.value.length < 10:
            $nameProductError.innerHTML = 'Ingrese un nombre de producto valido, tiene que tener 10 caracteres minimo';
            $nameProductError.classList.add('text-danger');
            $nameProduct.classList.remove('is-valid');
            $nameProduct.classList.add('is-invalid');
            console.log(!regEx.textAndNumber.test($nameProduct.value) || $nameProduct.value.length < 10)
            console.log($nameProduct.value.length)
            break;
        case !regEx.textAndNumber.test($nameProduct.value) && $nameProduct.value.length > 10:
            $nameProductError.innerHTML = ''
            $nameProductError.classList.remove('text-danger');
            $nameProduct.classList.remove('is-invalid');
            $nameProduct.classList.add('is-valid');
            break;    
    }
});

$marca.addEventListener('change', e => {
    
    console.log($marca.value.length)
    switch(true){
        case $marca.value.length == 0:
            $marcaError.innerHTML = 'Seleccione la marca del producto';
            $marcaError.classList.add('text-danger');
            $marca.classList.add('is-invalid');
            break;
        case $marca.value.length == 1:
            $marcaError.innerHTML = '';
            $marcaError.classList.remove('text-danger');
            $marca.classList.remove('is-invalid');
            $marca.classList.add('is-valid');        

    }
});

$marca.addEventListener('blur', e => {
    
    
    switch(true){
        case $marca.value.length == 0:
            $marcaError.innerHTML = 'Seleccione la marca del producto';
            $marcaError.classList.add('text-danger');
            $marca.classList.add('is-invalid');
            break;
        case $marca.value.length == 1:
            $marcaError.innerHTML = '';
            $marcaError.classList.remove('text-danger');
            $marca.classList.remove('is-invalid');
            $marca.classList.add('is-valid');    

    }
});

$price.addEventListener('blur', e => {
    
    switch(true){
        case $price.value.length == 0:
            $priceError.innerHTML = 'Ingresa un precio';
            $priceError.classList.add('text-danger');
            $price.classList.add('is-invalid');
            break;
        case !regEx.price.test($price.value):
            console.log(regEx.price.test($price.value))
            $priceError.innerHTML = 'Ingrese un formato de precio valido';
            $priceError.classList.add('text-danger');
            $price.classList.add('is-invalid');
            break;
        default:
            $priceError.innerHTML = '';
            $priceError.classList.remove('text-danger');
            $price.classList.remove('is-invalid');
            $price.classList.add('is-valid')
    }

});

$vocal.addEventListener('blur', e => {

});





































})