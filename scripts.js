// Variables

let openBtn = document.getElementById('help-btn');
let modalContainer = document.getElementById('modal-help');
let header = document.querySelector('.header');
let openBtn2 = document.getElementById('modal-btn');
let modalContainer2 = document.getElementById('modal-help-2');
let closeBtn = document.getElementById('close-btn');

// Event Listeners

openBtn.addEventListener('click', function() {

    modalContainer.style.display = 'block';
    header.style.display = 'none';
    openBtn.style.display = 'none';

});

openBtn2.addEventListener('click', function() {

    modalContainer2.style.display = 'block';
    // openBtn2.style.display = 'none';

});

closeBtn.addEventListener('click', function() {

    modalContainer.style.display = 'none';

});

window.addEventListener('click', function(e) {

    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});