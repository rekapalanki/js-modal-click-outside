// Change modal-outer classlist and add photo and description to modal-inner
// Grab elements

const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');
const button = document.querySelectorAll('.card button');

const clickHandler = (event) => {
    event.stopPropagation();
    modalOuter.classList.add('open');
    // Add photo and description to modal-inner
    const card = event.target.closest('.card');
    const { src, alt } = card.querySelector('img');
    const description = card.dataset.description;
    const newInfoHTML = `
    <img src="${ src.replace("200", "400") }" alt="${ alt }">
    <p>${description}</p>
    `;
    modalInner.innerHTML = newInfoHTML;
}

button.forEach(element => {
    element.addEventListener('click', clickHandler);
});

// Close modal on clicking outside of the element

const closeModalHandler = (event) => {
    event.stopPropagation();
    const outside = !event.target.closest('.modal-inner');
    if (outside) {
        modalOuter.classList.remove('open');
    }
}

const escapeModalHandler = (event) => {
    event.stopPropagation();
    const escapeButton = (event.key === 'Escape');
    if (escapeButton) {
        modalOuter.classList.remove('open');
    }
}

window.addEventListener('click', closeModalHandler);
window.addEventListener('keydown', escapeModalHandler);