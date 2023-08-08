// Variables

let btnStart = document.getElementById('btn-start');
let bgImg = document.getElementById('bg-img');
let header = document.querySelector('.header');
let helpBtn = document.getElementById('help-btn');
let modalContainer = document.getElementById('modal-help');

let openBtn2 = document.getElementById('modal-btn');
let modalContainer2 = document.getElementById('modal-help-2');

let btnWaldoFound = document.querySelector('.btn-waldo-found');
let btnWaldoFoundClicked = document.querySelector('.btn-waldo-found-clicked');
let modalWaldoFound = document.getElementById('modal-waldo-found');
let btnReset = document.getElementById('btn-reset');

// Event Listeners

btnStart.addEventListener('click', function() {
    header.style.display = 'none';
    bgImg.style.width = '100%';
    helpBtn.style.display = 'block';
});

helpBtn.addEventListener('click', function() {

    modalContainer.style.display = 'block';
    header.style.display = 'none';
    helpBtn.style.display = 'none';

});

openBtn2.addEventListener('click', function() {

    modalContainer2.style.display = 'block';

});

btnWaldoFound.addEventListener('click', function() {

    modalWaldoFound.style.display = 'block';
    btnWaldoFoundClicked.style.display = 'block';
    modalContainer.style.display = 'none';
    header.style.display = 'none';
    helpBtn.style.display = 'none';
    modalContainer2.style.display = 'none';

});

btnReset.addEventListener('click', function() {

    modalWaldoFound.style.display = 'none';
    btnWaldoFoundClicked.style.display = 'none';
    modalContainer.style.display = 'none';
    header.style.display = 'block';
    modalContainer2.style.display = 'none';
    bgImg.style.width = '0%';

});