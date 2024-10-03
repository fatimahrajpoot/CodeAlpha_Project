function setProminent(image) {
    const prominentImage = document.getElementById('prominentImage');
    const closeButton = document.querySelector('.close-button');
    prominentImage.src = image.src;  // Set the prominent image source
    prominentImage.style.display = 'block';  // Show the prominent image
    closeButton.style.display = 'block';  // Show the close button
}

function closeImage() {
    const prominentImage = document.getElementById('prominentImage');
    const closeButton = document.querySelector('.close-button');
    prominentImage.style.display = 'none';  // Hide the prominent image
    closeButton.style.display = 'none';  // Hide the close button
}
