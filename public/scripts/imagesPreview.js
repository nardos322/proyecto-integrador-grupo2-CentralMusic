
const $imagesPreview = document.querySelector('#images-preview');


let createImagePreview = function($image, i){

    let imagePreview = document.createElement('div');
    imagePreview.classList.add('image-preview', );
    let img = `${URL.createObjectURL($image.files[i])}`
    let $img = document.createElement('img');
    $img.src = img;
    imagePreview.appendChild($img);
    $imagesPreview.appendChild(imagePreview);
    

       
}







export {createImagePreview}