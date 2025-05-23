function filterImages(category) {
    let images = document.querySelectorAll('.image');
    
    images.forEach(image => {
        if (category === 'all') {
            image.classList.remove('hidden');
        } else {
            if (image.classList.contains(category)) {
                image.classList.remove('hidden');
            } else {
                image.classList.add('hidden');
            }
        }
    });
}
