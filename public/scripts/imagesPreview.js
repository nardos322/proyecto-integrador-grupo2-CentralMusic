const $image = document.querySelector('#image')
const $imagesPreview = document.querySelector('#images-preview')
const formData = new FormData()

let createImagePreview = function($image, i, imagePreview_id){

 
    let imagePreview = document.createElement('div');
    imagePreview.classList.add('image-preview', imagePreview_id);
    imagePreview.dataset.id = imagePreview_id;
    imagePreview.setAttribute('style', `background-image: url(${URL.createObjectURL($image.files[i])})`);
    $imagesPreview.appendChild(imagePreview);
    createCloseButton(imagePreview_id)

       
  

   
}

let createCloseButton = function(imagePreview_id){
    let closeButton = document.createElement('div');
    closeButton.classList.add('close-button');
    closeButton.innerText = 'x';
    document.getElementsByClassName(imagePreview_id)[0].appendChild(closeButton)
   
}

document.body.addEventListener('click', function (e) {
    if ( e.target.classList.contains('close-button') ) {
        e.target.parentNode.remove();
        formData.delete(e.target.parentNode.dataset.id)
        console.log($image.files)
    }
});



export {createImagePreview}