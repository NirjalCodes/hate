document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const closeBtn = document.querySelector('.close');

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('read-more')) {
            popupText.textContent = event.target.getAttribute('data-content');
            popup.style.display = 'block';
            popup.setAttribute('aria-hidden', 'false');
        } else if (event.target === closeBtn || event.target === popup) {
            popup.style.display = 'none';
            popup.setAttribute('aria-hidden', 'true');
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && popup.style.display === 'block') {
            popup.style.display = 'none';
            popup.setAttribute('aria-hidden', 'true');
        }
    });
});
