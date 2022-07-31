window.addEventListener('load', () => {

    const $imgContainer = document.querySelector('#image-container');
    const $imagesPreview = document.querySelector('#images-preview');
    const $imagePreview = document.querySelectorAll('.image-preview img');
    const $img = document.querySelectorAll('.image-preview img');



    console.log($imagePreview[0].src)

    for(let i = 0; i < $imagePreview.length; i ++){
        $imagePreview[i].src.addEventListener('mouseover', e => {
            alert('holaaaaa')
        })
    
    }
    


})