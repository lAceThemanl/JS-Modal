// Variables

let openBtn = document.getElementById('help-btn');
let modalContainer = document.getElementById('modal-help');
let closeBtn = document.getElementById('close-btn');

// Event Listeners

openBtn.addEventListener('click', function() {

    modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function() {

    modalContainer.style.display = 'none';
});

window.addEventListener('click', function(e) {

    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});