import {createImagePreview, clearFormData} from './imagesPreview.js'


window.addEventListener('load', () => {
const $nameProduct = document.querySelector('#nameProduct');
const $nameProductError = document.querySelector('#nameProductError');
const $marca = document.querySelector('#marca');
const $marcaError = document.querySelector('#marcaError');
const $price = document.querySelector('#price');
const $priceError = document.querySelector('#priceError');
const $line = document.querySelector('#line');
const $lineError = document.querySelector('#lineError');
const $model = document.querySelector('#model');
const $modelError = document.querySelector('#modelError');
const $hand = document.querySelector('#hand');
const $handError = document.querySelector('#handError');
const $color = document.querySelector('#color');
const $colorError = document.querySelector('#colorError');
const $materialBody = document.querySelector('#materialBody');
const $materialBodyError = document.querySelector('#materialBodyError');
const $materialFretboard = document.querySelector('#materialFretboard');
const $materialFretboardError = document.querySelector('#materialFretboardError');
const $bodyFinish = document.querySelector('#bodyFinish');
const $bodyFinishError = document.querySelector('#bodyFinishError');
const $image = document.querySelector('#image');
const $imagesPreview = document.querySelector('#images-preview');
const $imageError = document.querySelector('#imageError');
const $stock = document.querySelector('#stock')
const $description = document.querySelector('#description');
const $descriptionError = document.querySelector('#descriptionError');
const $formAddGuitar = document.querySelector('#formAddGuitar');
const $submitError = document.querySelector('#submitError');
const $inputs = document.querySelectorAll('#formAddGuitar input');
const formData = new FormData()

const regEx = {
    textAndNumber : /^[A-Za-z0-9\s]+$/g,
    text: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/,
    price: /^\d*\.\d+$/,
    image: /jpg|JPG|gif|GIF|png|PNG|jpeg|JPEG/,
};



/*

$nameProduct.addEventListener('blur', () => {
    switch(true){
        case $nameProduct.value.length === 0:
            $nameProductError.innerHTML = 'Este campo no puede estar vacio'
            $nameProductError.classList.add('text-danger');
            $nameProduct.classList.remove('is-valid');
            $nameProduct.classList.add('is-invalid');
            break;
        case !regEx.textAndNumber.test($nameProduct.value) || $nameProduct.value.length < 10:
            $nameProductError.innerHTML = 'Ingrese un nombre de producto valido, tiene que tener 10 caracteres minimo';
            $nameProductError.classList.add('text-danger');
            $nameProduct.classList.add('is-invalid');
            console.log(!regEx.textAndNumber.test($nameProduct.value) || $nameProduct.value.length < 10)
            console.log($nameProduct.value.length)
            break;
        case !regEx.textAndNumber.test($nameProduct.value) && $nameProduct.value.length > 10:
            $nameProductError.innerHTML = ''
            $nameProductError.classList.remove('text-danger');
            $nameProduct.classList.remove('is-invalid');
            $nameProduct.classList.add('is-valid');

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

$line.addEventListener('blur', () => {
    switch(true){
        case !$line.value.trim():
            $lineError.innerHTML = 'Agregue la linea de la guitarra';
            $lineError.classList.add('text-danger');
            $line.classList.add('is-invalid');
            break;
        case !regEx.text.test($line.value) || $line.value.length < 5:
            $lineError.innerHTML = 'Ingrese un formato valido, debe tener almenos 5 caracteres';
            $lineError.classList.add('text-danger');
            $line.classList.add('is-invalid');
            break;
        default:
            $lineError.innerHTML = '';
            $lineError.classList.remove('text-danger');
            $line.classList.remove('is-invalid');
            $line.classList.add('is-valid');       

    }
});

$model.addEventListener('change', () => {
    switch(true){
        case !regEx.textAndNumber.test($model.value):
            console.log($model.value)
            $modelError.innerHTML = 'Ingrese un formato valido, solo letras';
            $modelError.classList.add('text-danger');
            $model.classList.remove('is-valid')
            $model.classList.add('is-invalid');
            break;
        default:
            $modelError.innerHTML = '';
            $modelError.classList.remove('text-danger');
            $model.classList.remove('is-invalid');
            $model.classList.add('is-valid');
            break;    
    }
});

$model.addEventListener('blur', () => {
    switch(true){
        case !$model.value.trim():
            $modelError.innerHTML = 'Agregue el modelo';
            $modelError.classList.add('text-danger');
            $model.classList.remove('is-valid')
            $model.classList.add('is-invalid');
            break;
    }
});

$hand.addEventListener('blur', () => {
    switch(true){
        case !$hand.value.trim():
            $handError.innerHTML = 'Este campo no puede estar vacio';
            $handError.classList.add('text-danger');
            $hand.classList.add('is-invalid');
            $hand.classList.remove('is-valid');
            break;
        case !regEx.text.test($hand.value):
            $handError.innerHTML = 'Ingrese un formato valido, solo letras';
            $handError.classList.add('text-danger');
            $hand.classList.add('is-invalid');
            $hand.classList.remove('is-valid');
            break;
        default:
            $handError.innerHTML = '';
            $handError.classList.remove('text-danger');
            $hand.classList.remove('is-invalid');
            $hand.classList.add('is-valid');
            break;        
    }
});

$color.addEventListener('blur', () => {
    switch(true){
        case !$color.value.trim():
            $colorError.innerHTML = 'Este campo no puede estar vacio';
            $colorError.classList.add('text-danger');
            $color.classList.remove('is-valid');
            $color.classList.add('is-invalid');
            break;
        case !regEx.text.test($color.value) || $color.value.length < 3:
            $colorError.innerHTML = 'Ingrese un formato valido, minimo 3 caracteres';
            $colorError.classList.add('text-danger');
            $color.classList.add('is-invalid');
            $color.classList.remove('is-valid');
            break;
        default:
            $colorError.innerHTML = '';
            $colorError.classList.remove('text-danger');
            $color.classList.remove('is-invalid');
            $color.classList.add('is-valid');
            break;        
    }
});

$materialBody.addEventListener('blur', () => {
    switch(true){
        case !$materialBody.value.trim():
            $materialBodyError.innerHTML = 'Este campo no puede estar vacio';
            $materialBodyError.classList.add('text-danger');
            $materialBody.classList.remove('is-valid');
            $materialBody.classList.add('is-invalid');
            break;
        case !(regEx.text.test($materialBody.value)) || ($materialBody.value.length < 5):
            $materialBodyError.innerHTML = 'Ingrese un formato valido, minimo 5 caracteres';
            $materialBodyError.classList.add('text-danger');
            $materialBody.classList.remove('is-valid');
            $materialBody.classList.add('is-invalid');
            break;
        default:
            $materialBodyError.innerHTML = '';
            $materialBodyError.classList.remove('text-danger');
            $materialBody.classList.remove('is-invalid');
            $materialBody.classList.add('is-valid');
            break;        
    }
});

$materialFretboard.addEventListener('blur', () => {
    switch(true){
        case !$materialFretboard.value.trim():
            $materialFretboardError.innerHTML = 'Este campo no puede estar vacio';
            $materialFretboardError.classList.add('text-danger');
            $materialFretboard.classList.remove('is-valid');
            $materialFretboard.classList.add('is-invalid');
            break;
        case !regEx.text.test($materialFretboard.value) || $materialFretboard.value.length < 5:
            $materialFretboardError.innerHTML = 'Ingrese un formato valido, minimo 5 caracteres';
            $materialFretboardError.classList.add('text-danger');
            $materialFretboard.classList.remove('is-valid');
            $materialFretboard.classList.add('is-invalid');
            break;
        default:
            $materialFretboardError.innerHTML = '';
            $materialFretboardError.classList.remove('text-danger');
            $materialFretboard.classList.remove('is-invalid');
            $materialFretboard.classList.add('is-valid');
            break;        
    }
});

$bodyFinish.addEventListener('blur', () => {
    switch(true){
        case !$bodyFinish.value.trim():
            $bodyFinishError.innerHTML = 'Este campo no puede estar vacio';
            $bodyFinishError.classList.add('text-danger');
            $bodyFinish.classList.remove('is-valid');
            $bodyFinish.classList.add('is-invalid');
            break;
        case !regEx.text.test($bodyFinish.value) || $bodyFinish.value.length < 5:
            $bodyFinishError.innerHTML = 'Introduzca un formato valido, minimo 5 caracteres';
            $bodyFinishError.classList.add('text-danger');
            $bodyFinish.classList.remove('is-valid');
            $bodyFinish.classList.add('is-invalid');
            break;
        default:
            $bodyFinishError.innerHTML = '';
            $bodyFinishError.classList.remove('text-danger');
            $bodyFinish.classList.remove('is-invalid');
            $bodyFinish.classList.add('is-valid');
            break        
    }
})*/
$image.addEventListener('blur', () => {
    switch(true){
        case $image.files.length === 0:
            $imageError.innerHTML = 'Debes agregar una imagen';
            $imageError.classList.add('text-danger');
            $image.classList.add('is-invalid');
            $image.classList.remove('is-valid');
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
                        let imagePreview_id = Math.floor(Math.random() * 3000) + '_' + Date.now();
                        createImagePreview($image, i, imagePreview_id);
                        
                        formData.append(imagePreview_id, $image.files[i]);
                       
         
                    }
          
                }
            }
            $image.classList.remove('is-invalid');
            $image.classList.add('is-valid');
            $imageError.innerHTML = ''
            $image.value = ''
            break;     
    }
    console.log($image.files)
    for(let pair of formData.entries()){
        console.log(pair[0]);
        console.log(pair[1]);
    }

    

    
});

$imagesPreview.addEventListener('change', e => {
    console.log($imagesPreview)
})



document.body.addEventListener('click', function (e) {
    let imagesPreview = document.querySelectorAll('.image-preview')
    if (e.target.classList.contains('close-button') ) {
        e.target.parentNode.remove();
        formData.delete(e.target.parentNode.dataset.id)
        console.log(imagesPreview)
       
    }
    /*
    for(let pair of formData.entries()){
        console.log(pair[0]);
        console.log(pair[1]);
    }*/

    

});    


const $upload = document.querySelector('#upload')
const form = new FormData($formAddGuitar)

$upload.addEventListener('click', e => {
    
    e.preventDefault();
    fetch('http://localhost:3000/admin/guitars', {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error))

})


console.log(formData.get('marca'))

$formAddGuitar.addEventListener('submit', e => {
    
    e.preventDefault()
    fetch('http://localhost:3000/admin/guitars', {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error))
})















})