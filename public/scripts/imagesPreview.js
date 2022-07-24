
const $imagesPreview = document.querySelector('#images-preview')


let createImagePreview = function($image, i,){

    let imagePreview = document.createElement('div');
    imagePreview.classList.add('image-preview', );
   
    imagePreview.setAttribute('style', `background-image: url(${URL.createObjectURL($image.files[i])})`);
    $imagesPreview.appendChild(imagePreview);
    

       
}







export {createImagePreview}