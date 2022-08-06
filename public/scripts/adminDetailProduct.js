window.addEventListener('load', () => {

    const $img = document.querySelector('#img-container img');
    const $imagesPreview = document.querySelector('#images-preview');
    const $imagePreview = document.querySelectorAll('.image-preview img');
    const $productViewContainer = document.querySelector('.product-view-container')
    const $imgContainer = document.querySelector('#img-container')
    const $productView = document.querySelector('.product-view')
    
    console.log($imagePreview)

    
    for(let i = 0; i < $imagePreview.length; i ++){
        $imagePreview[i].addEventListener('mouseover', e => {
            console.log($imagePreview[i])
            $img.src = $imagePreview[i].src
            
        })
    
    }
    
    

})