// Change modal-outer classlist and add photo and description to modal-inner
// Grab elements

const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');
const button = document.querySelectorAll('.card button');

const clickHandler = (event) => {
    modalOuter.classList.add('open');
    // Add photo and description to modal-inner
    const card = event.target.closest('.card');
    const { src, alt } = card.querySelector('img');
    const description = card.dataset.description;
    modalInner.innerHTML = `
    <img src="${ src.replace("200", "400") }" alt="${ alt }">
    <p>${description}</p>
    `
}

button.forEach(element => {
    element.addEventListener('click', clickHandler);
});