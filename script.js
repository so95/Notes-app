

const notesEl = document.querySelector('.notes')
const editBtn =  document.querySelector('.edit');
const deleteBtn = document.querySelector('.delete');

const main = notesEl.querySelector('.main');
const textArea = notesEl.querySelector('textarea');


editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
});

textArea.addEventListener('input', (event) => {
    const { value } = event.target;
    
    main.innerHTML = marked(value);
});







