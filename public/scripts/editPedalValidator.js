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
    const $typeEfect = document.querySelector('#typeEfect');
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
    const $inputs = document.querySelectorAll('#formEditPedal input');
    const $formEditPedal = document.querySelector('#formEditPedal');
    
    const regEx = {
        textAndNumber : /^[A-Za-z0-9\s]+$/g,
        text: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/,
        price: /^\d*\.\d+$/,
        image: /jpg|JPG|gif|GIF|png|PNG|jpeg|JPEG/,
        descripton: /^(.|\s)*[a-zA-Z]+(.|\s)*$/,
        numbers: /^[0-9,$]*$/,
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
            break;
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
            break;
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
            $price.classList.add('is-valid');
            break;
    }

});

$vocal.addEventListener('blur', e => {
    switch(true){
        case !$vocal.value.trim():
            $vocalError.innerHTML = 'Este campo no puede estar vacio';
            $vocalError.classList.add('text-danger');
            $vocal.classList.add('is-invalid');
            $vocal.classList.remove('is-valid');
            break;
        case !regEx.text.test($vocal.value):
            $vocalError.innerHTML = 'Ingrese un formato valido';
            $vocalError.classList.add('text-danger');
            $vocal.classList.add('is-invalid');
            $vocal.classList.remove('is-valid');
            break;
        default:
            $vocalError.innerHTML = '';
            $vocalError.classList.remove('text-danger');
            $vocal.classList.remove('is-invalid');
            $vocal.classList.add('is-valid');
            break;    
          
    }
});

$efects.addEventListener('blur', e => {
    switch(true){
        case !$efects.value.trim():
            $efectsError.innerHTML = 'Este campo no puede estar vacio';
            $efectsError.classList.add('text-danger');
            $efects.classList.add('is-invalid');
            $efects.classList.remove('is-valid');
            break;
        case !regEx.numbers.test($efects.value):
            $efectsError.innerHTML = 'Ingrese un formato valido, solo numeros';
            $efectsError.classList.add('text-danger');
            $efects.classList.add('is-invalid');
            $efects.classList.remove('is-valid');
            break;
        default:
            $efectsError.innerHTML = '';
            $efectsError.classList.remove('text-danger');
            $efects.classList.remove('is-invalid');
            $efects.classList.add('is-valid');
            break;        
    }
});

$instruments.addEventListener('blur', e => {
    switch(true){
        case !$instruments.value.trim():
            $instrumentsError.innerHTML = 'Este campo no puede estar vacio';
            $instrumentsError.classList.add('text-danger');
            $instruments.classList.add('is-invalid');
            $instruments.classList.remove('is-valid');
            break;
        case !regEx.text.test($instruments.value) || $instruments.value.length < 4:
            $instrumentsError.innerHTML = 'instroduzca un formato valido, minimo 4 caracteres';
            $instrumentsError.classList.add('text-danger');
            $instruments.classList.add('is-invalid');
            $instruments.classList.remove('is-valid');
            break;
        default: 
            $instrumentsError.innerHTML = '';
            $instrumentsError.classList.remove('text-danger');
            $instruments.classList.remove('is-invalid');
            $instruments.classList.add('is-valid');
            break;        
    }
});

$typeEfect.addEventListener('blur', e => {
    switch(true){
        case !$typeEfect.value.trim():
            $typeEfectError.innerHTML = 'Este campo no puede estar vacio';
            $typeEfectError.classList.add('text-danger');
            $typeEfect.classList.add('is-invalid');
            $typeEfect.classList.remove('is-valid');
            break;
        case !regEx.text.test($typeEfect.value) || $typeEfect.value.length < 4:
            $typeEfectError.innerHTML = 'Ingrese un formato valido, minimo 4 caracteres';
            $typeEfectError.classList.add('text-danger');
            $typeEfect.classList.add('is-invalid');
            $typeEfect.classList.remove('is-valid');
            break;
        default:
            $typeEfectError.innerHTML = '';
            $typeEfectError.classList.remove('text-danger');
            $typeEfect.classList.add('is-valid');
            $typeEfect.classList.remove('is-invalid');
            break;

    }

});

$voltaje.addEventListener('change', e => {
    switch(true){
        case !regEx.textAndNumber.test($voltaje.value) || $voltaje.value.length < 2:
            $voltajeError.innerHTML = 'Ingrese un formato valido, minimo 2 caracteres'
            $voltajeError.classList.add('text-danger');
            $voltaje.classList.add('is-invalid');
            $voltaje.classList.remove('is-valid');
            break;
        default:
            $voltajeError.innerHTML = ''
            $voltajeError.classList.remove('text-danger');
            $voltaje.classList.remove('is-invalid');
            $voltaje.classList.add('is-valid');
            break;    


    }
})

$voltaje.addEventListener('blur', () => {
    switch(true){
        case !$voltaje.value.trim():
            $voltajeError.innerHTML = 'Este campo no puede estar vacio';
            $voltajeError.classList.add('text-danger');
            $voltaje.classList.remove('is-valid')
            $voltaje.classList.add('is-invalid');
            break;
    
    }
});

$technology.addEventListener('blur', e => {
    switch(true){
        case !$technology.value.trim():
            $technologyError.innerHTML = 'Este campo no puede estar vacio';
            $technologyError.classList.add('text-danger');
            $technology.classList.add('is-invalid');
            $technology.classList.remove('is-valid');
            break;
        case !regEx.text.test($technology.value) || $technology.value.length < 5:
            $technologyError.innerHTML = 'Ingrese un formato valido, minmimo 5 caracteres';
            $technologyError.classList.add('text-danger');
            $technology.classList.add('is-invalid');
            $technology.classList.remove('is-valid');
            break;
        default:
            $technologyError.innerHTML = '';
            $technologyError.classList.remove('text-danger');
            $technology.classList.remove('is-invalid');
            $technology.classList.add('is-valid');
            break;        
    }
});

$feeding.addEventListener('blur', e => {
    switch(true){
        case !$feeding.value.trim():
            $feedingError.innerHTML = 'Este campo no puede estar vacio';
            $feedingError.classList.add('text-danger');
            $feeding.classList.add('is-invalid');
            $feeding.classList.remove('is-valid');
            break;
        case !regEx.text.test($feeding.value) || $feeding.value.length < 5:
            $feedingError.innerHTML = 'Ingrese un formato valido, minimo 5 caracteres';
            $feedingError.classList.add('text-danger');
            $feeding.classList.add('is-invalid');
            $feeding.classList.remove('is-valid');
            break;
        default:
            $feedingError.innerHTML = '';
            $feedingError.classList.remove('text-danger');
            $feeding.classList.remove('is-invalid');
            $feeding.classList.add('is-valid');
            break;        
    }
});


$image.addEventListener('blur', () => {
    let imagesPreview = document.querySelectorAll('.image-preview')
    switch(true){
        case $image.files.length === 0:
            $imageError.innerHTML = 'Debes agregar una imagen';
            $imageError.classList.add('text-danger');
            $image.classList.add('is-invalid');
            $image.classList.remove('is-valid');
            break;
        case imagesPreview.length > 0:
            console.log('holaa')
            imagesPreview.forEach(images => {
                    images.remove()
            })
            break;    
    }        
})


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
});

$formEditPedal.addEventListener('submit', e => {
    
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
        $formEditPedal.submit();
        $submitError.innerHTML = '';
   }else{
        console.log( `hay ${errors.length} errores`);
        $submitError.innerHTML = 'Hay errores';
}

});









































})