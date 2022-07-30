import {createImagePreview} from './imagesPreview.js'

window.addEventListener('load', e => {

const $nameProduct = document.querySelector('#nameProduct');
const $nameProductError = document.querySelector('#nameProductError');
const $marca = document.querySelector('#marca');
const $marcaError = document.querySelector('#marcaError');
const $strings = document.querySelector('#strings');
const $stringsError = document.querySelector('#stringsError');
const $price = document.querySelector('#price');
const $priceError = document.querySelector('#priceError');
const $material = document.querySelector('#material');
const $materialError = document.querySelector('#materialError');
const $calibre = document.querySelector('#calibre');
const $calibreError = document.querySelector('#calibreError');
const $labelImage = document.querySelector('#labelImage');
const $labelError = document.querySelector('#labelError')
const $image = document.querySelector('#image');
const $imagesPreview = document.querySelector('#images-preview');
const $imageError = document.querySelector('#imageError');
const $stock = document.querySelector('#stock');
const $description = document.querySelector('#description');
const $descriptionError = document.querySelector('#descriptionError');
const $formAddAccesory = document.querySelector('#formAddAccesory');
const $submitError = document.querySelector('#submitError');
const $inputs = document.querySelectorAll('#formAddAccesory input');

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

$strings.addEventListener('blur', e => {
    switch(true){
        case !$strings.value.trim():
            $stringsError.innerHTML = 'Este campo no puede estar vacio';
            $stringsError.classList.add('text-danger');
            $strings.classList.add('is-invalid');
            $strings.classList.remove('is-valid');
            break;
        case !regEx.numbers.test($strings.value) || $strings.value == 0: 
            $stringsError.innerHTML = 'Introduzca un formato valido, solo numeros';
            $stringsError.classList.add('text-danger');
            $strings.classList.add('is-invalid');
            $strings.classList.remove('is-valid');
            break;
        default:
            $stringsError.innerHTML = '';
            $stringsError.classList.remove('text-danger');
            $strings.classList.remove('is-invalid');
            $strings.classList.add('is-valid');
            break;       
    }
})

$material.addEventListener('blur', e => {
    switch(true){
        case !$material.value.trim():
            $materialError.innerHTML = 'Este campo no puede estar vacio';
            $materialError.classList.add('text-danger');
            $material.classList.add('is-invalid');
            $material.classList.remove('is-valid');
            break;
        case !regEx.text.test($material.value) || $material.value.length < 4:
            $materialError.innerHTML = 'Introduzca un formato valido, minimo 4 caracteres';
            $materialError.classList.add('text-danger');
            $material.classList.add('is-invalid');
            $material.classList.remove('is-valid');
            break;
        default:
            $materialError.innerHTML = '';
            $materialError.classList.remove('text-danger');
            $material.classList.add('is-valid');
            $material.classList.remove('is-invalid');
            break;        
    }


});

$calibre.addEventListener('blur', e => {
    switch(true){
        case !$calibre.value.trim():
            $calibreError.innerHTML = 'Este campo no puede estar vacio';
            $calibreError.classList.add('text-danger');
            $calibre.classList.add('is-invalid');
            $calibre.classList.remove('is-valid');
            break;
        case !regEx.price.test($calibre.value):
            $calibreError.innerHTML = 'Introduzca un formato valido';
            $calibre.classList.add('text-danger');
            $calibre.classList.remove('is-valid');
            $calibre.classList.add('is-invalid');
            break;
        default:
            $calibreError.innerHTML = '';
            $calibreError.classList.remove('text-danger');
            $calibre.classList.remove('is-invalid');
            $calibre.classList.add('is-valid');
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




$formAddAccesory.addEventListener('submit', e => {
    
    e.preventDefault();
    let errors = [];
    for(let i = 0; i < $inputs.length; i++){
        if($inputs[i].value == '' && $inputs[i].name !== 'stock' && ($description.value == '' || $description.value.length > 0 ) && $image.files.length == 0 && ($marca.value.length == 0 || $marca.value.length !== 0)) {
            $inputs[i].classList.add('is-invalid');
            $description.classList.toggle('is-invalid', $description.value == '' || $description.classList.contains('is-invalid'));
            $labelImage.classList.add('is-invalid');
            $marca.classList.toggle('is-invalid', $marca.value == 0);
            $submitError.innerHTML = 'Los campos señalados son obligatorios';
            $submitError.classList.add('text-danger');
            
        }

    }

    
    $inputs.forEach(input => {
        if(input.classList.contains('is-invalid')){
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
        $formAddGuitar.submit()
   }else{
        console.log( `hay ${errors.length} errores`);
        $submitError.innerHTML = 'Hay errores';
}


})






























})