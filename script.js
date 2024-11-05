document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const toggleButton = document.createElement('button');
    toggleButton.classList.add('menu-toggle');
    toggleButton.innerHTML = '☰'; 

    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});
