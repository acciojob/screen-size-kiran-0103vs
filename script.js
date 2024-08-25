//your JS code here. If required.
// Function to update the size information
function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const sizeInfo = document.getElementById('windowSize');
    sizeInfo.textContent = `Width: ${width} and Height: ${height}`;
}

// Add event listener for window resize
window.addEventListener('resize', updateSize);

// Call updateSize initially to set the size on page load
updateSize();
