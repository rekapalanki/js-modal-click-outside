// Change modal-outer classlist and add photo and description to modal-inner
// Grab elements

const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');
const button = document.querySelectorAll('.card button');

const clickHandler = (event) => {
    modalOuter.classList.add('open');
    modalInner.innerHTML = `
    <p>It works!</p>
    `
}

button.forEach(element => {
    element.addEventListener('click', clickHandler);
});