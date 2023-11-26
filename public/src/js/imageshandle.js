const imagesInput = document.getElementById('images');
const previewContainer = document.getElementById('preview');

imagesInput.addEventListener('change', function() {
    previewContainer.innerHTML = '';
    const files = Array.from(this.files);

    files.forEach(file => {
        const reader = new FileReader();

        reader.onloadend = function() {
            const imgElement = document.createElement('img');
            imgElement.src = reader.result;
            imgElement.className = 'w-32 h-32 object-cover rounded mr-2 mb-2';
            previewContainer.appendChild(imgElement);
        }

        reader.readAsDataURL(file);
    });
});