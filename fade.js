function fadeInElements() {
    const elementsToFadeIn = document.querySelectorAll('.fade-in');
    elementsToFadeIn.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fade-in-animation');
        }, index * 300); 
    });
}
window.addEventListener('load', () => {
    fadeInElements();
});