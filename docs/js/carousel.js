document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel', {
        type: 'loop',        
        autoplay: true,      
        interval: 3000,     
        speed: 1500, 
        pauseOnHover: true, 
        pauseOnFocus: false  
    }).mount();
});
