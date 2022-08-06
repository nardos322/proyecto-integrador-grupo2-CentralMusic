import {createImagePreview} from './imagesPreview.js'

window.addEventListener('load', e => {

const $nameProduct = document.querySelector('#nameProduct');
const $nameProductError = document.querySelector('#nameProductError');
const $marca = document.querySelector('#marca');
const $marcaError = document.querySelector('#marcaError');
const $inputIn = document.querySelector('#inputIn');
const $inputInError = document.querySelector('#inputInError');
const $price = document.querySelector('#price');
const $priceError = document.querySelector('#priceError');
const $inputOut = document.querySelector('#inputOut');
const $inputOutError = document.querySelector('#inputOutError');
const $large = document.querySelector('#large');
const $largeError = document.querySelector('#largeError');
const $labelImage = document.querySelector('#labelImage');
const $labelError = document.querySelector('#labelError')
const $image = document.querySelector('#image');
const $imagesPreview = document.querySelector('#images-preview');
const $imageError = document.querySelector('#imageError');
const $stock = document.querySelector('#stock');
const $description = document.querySelector('#description');
const $descriptionError = document.querySelector('#descriptionError');
const $formEditCable = document.querySelector('#formEditCable');
const $submitError = document.querySelector('#submitError');
const $inputs = document.querySelectorAll('#formEditCable input');

const regEx = {
    textAndNumber : /^[A-Za-z0-9\s]+$/g,
    text: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/,
    price: /^\d*\.\d+$/,
    image: /jpg|JPG|gif|GIF|png|PNG|jpeg|JPEG/,
    descripton: /^(.|\s)*[a-zA-Z]+(.|\s)*$/,
    numbers: /^\d+$/,
    
    
    
};


$nameProduct.addEventListener('blur', () => {
    switch(true){
        case $nameProduct.value.length === 0:
            $nameProductError.innerHTML = 'Este campo no puede estar vacio'
            $nameProductError.classList.add('text-danger');
            $nameProduct.classList.remove('is-valid');
            $nameProduct.classList.add('is-invalid');
            break;
        case !regEx.descripton.test($nameProduct.value)  || $nameProduct.value.length < 10:
            $nameProductError.innerHTML = 'Ingrese un nombre de producto valido, tiene que tener 10 caracteres minimo';
            $nameProductError.classList.add('text-danger');
            $nameProduct.classList.remove('is-valid');
            $nameProduct.classList.add('is-invalid');
            break;
         default:
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

$inputIn.addEventListener('blur', e => {
    switch(true){
        case !$inputIn.value.trim():
            $inputInError.innerHTML = 'Este campo no puede estar vacio';
            $inputInError.classList.add('text-danger');
            $inputIn.classList.add('is-invalid');
            $inputIn.classList.remove('is-valid');
            break;
        case !regEx.text.test($inputIn.value) || $inputIn.value.length < 4: 
            $inputInError.innerHTML = 'Introduzca un formato valido, minimo 4 caracteres';
            $inputInError.classList.add('text-danger');
            $inputIn.classList.add('is-invalid');
            $inputIn.classList.remove('is-valid');
            break;
        default:
            $inputInError.innerHTML = '';
            $inputInError.classList.remove('text-danger');
            $inputIn.classList.remove('is-invalid');
            $inputIn.classList.add('is-valid');
            break;       
    }
})

$inputOut.addEventListener('blur', e => {
    switch(true){
        case !$inputOut.value.trim():
            $inputOutError.innerHTML = 'Este campo no puede estar vacio';
            $inputOutError.classList.add('text-danger');
            $inputOut.classList.add('is-invalid');
            $inputOut.classList.remove('is-valid');
            break;
        case !regEx.text.test($inputOut.value) || $inputOut.value.length < 4:
            $inputOutError.innerHTML = 'Introduzca un formato valido, minimo 4 caracteres';
            $inputOutError.classList.add('text-danger');
            $inputOut.classList.add('is-invalid');
            $inputOut.classList.remove('is-valid');
            break;
        default:
            $inputOutError.innerHTML = '';
            $inputOutError.classList.remove('text-danger');
            $inputOut.classList.add('is-valid');
            $inputOut.classList.remove('is-invalid');
            break;        
    }


});

$large.addEventListener('blur', e => {
    switch(true){
        case !$large.value.trim():
            $largeError.innerHTML = 'Este campo no puede estar vacio';
            $largeError.classList.add('text-danger');
            $large.classList.add('is-invalid');
            $large.classList.remove('is-valid');
            break;
        case !regEx.descripton.test($large.value):
            $largeError.innerHTML = 'Introduzca un formato valido';
            $largeError.classList.add('text-danger');
            $large.classList.remove('is-valid');
            $large.classList.add('is-invalid');
            break;
        default:
            $largeError.innerHTML = '';
            $largeError.classList.remove('text-danger');
            $large.classList.remove('is-invalid');
            $large.classList.add('is-valid');
            break;      
    }
});

$image.addEventListener('change', (e) => {
    let imagesPreview = document.querySelectorAll('.image-preview')
    switch(true){
        case $image.files.length === 0:
            $imageError.innerHTML = 'Debes agregar una imagen';
            $imageError.classList.add('text-danger');
            $image.classList.add('is-invalid');
            $image.classList.remove('is-valid');
            imagesPreview.forEach(images => {
                images.remove()
            })
            break;
        case !regEx.image.test($image.value):
            alert('Solo archivos con estas extensiones .jpeg/.jpg/.png/.gif only.');
            $image.classList.add('is-invalid');
            $image.classList.remove('is-valid');
            imagesPreview.forEach(images => {
                images.remove()
            })
            $image.value = '';
            break;
        case imagesPreview.length > 0:
            imagesPreview.forEach(images => {
                images.remove()
            })
            if($image.files.length){
                for(let i in $image.files){
                    if($image.files[i] instanceof File){
                        createImagePreview($image, i);
                        
                        

                    }
          
                }
            }
            $labelError.innerHTML = ''  
            break;
            
        default:
            if($image.files.length){
                for(let i in $image.files){
                    if($image.files[i] instanceof File){
                        createImagePreview($image, i);
                        
                    }
          
                }
            }
            $image.classList.remove('is-invalid');
            $image.classList.add('is-valid');
            $imageError.innerHTML = ''
            $labelError.innerHTML = ''  
            break;
    }
     

    
});

$labelImage.addEventListener('mouseover', () => {
    let imagesPreview = document.querySelectorAll('.image-preview')
    switch(true){
        case imagesPreview.length == 0:
            $labelError.innerHTML = 'Para agregar varias imagenes las tenes que preseleccionar todas a la vez, maximo 4 imagenes'
            $labelError.classList.add('text-information');
            break;
        default:
            $labelError.innerHTML = ''    
    }
    
})

$labelImage.addEventListener('mouseout', () => {
    $labelError.innerHTML = ''
})


$description.addEventListener('blur', e => {
    switch(true){
        case !$description.value.trim():
            $descriptionError.innerHTML = 'Este campo no puede quedar vacio, minimo 20 caracteres'
            $descriptionError.classList.add('text-danger');
            $description.classList.add('is-invalid');
            $description.classList.remove('is-valid');
            break;
        case !regEx.descripton.test($description.value) || $description.value.length < 20:
            $descriptionError.innerHTML = 'Ingrese una description valida, minimo 20 caracteres';
            $descriptionError.classList.add('text-danger');
            $description.classList.add('is-invalid');
            $description.classList.remove('is-valid');
            console.log($description.value.length)
            break; 
        default:
            $descriptionError.innerHTML = '';
            $descriptionError.classList.remove('text-danger');
            $description.classList.remove('is-invalid');
            $description.classList.add('is-valid');
            break;

    }
})




$formEditCable.addEventListener('submit', e => {
    
    e.preventDefault();
    let errors = [];
    for(let i = 0; i < $inputs.length; i++){
        if($inputs[i].value == '' && $inputs[i].name !== 'stock' && ($description.value == '' || $description.value.length > 0 )) {
            $inputs[i].classList.add('is-invalid');
            $description.classList.toggle('is-invalid', $description.value == '' || $description.classList.contains('is-invalid'));
            $submitError.innerHTML = 'Los campos señalados son obligatorios';
            $submitError.classList.add('text-danger');
            
        }

    }

    
    $inputs.forEach(input => {
        if(input.classList.contains('is-invalid') && input.name !== 'image'){
            errors.push(input)
        }

    });
   if($marca.classList.contains('is-invalid')){
        errors.push($marca)
   };

   if($description.classList.contains('is-invalid')){
        errors.push($description)
   }
   console.log(errors)
   if(errors.length == 0){
        $formEditCable.submit()
        $submitError.innerHTML = '';
   }else{
        console.log( `hay ${errors.length} errores`);
        $submitError.innerHTML = 'Hay errores';
}


})






























})