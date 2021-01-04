const initialNotes = localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [];
function render(notes){
    const noteList = document.querySelector('.note-list');
    const buttonSave = document.querySelector('.editor__save');
    
    noteList.innerHTML = null;
    for(let idx = 0; idx < notes.length; idx++){
        const listItem = renderNote(notes[idx].title, notes[idx].text);
        listItem.onclick = () => {
            openCloseEditor(notes[idx]);
            buttonSave.onclick = () => saveNote(notes, idx);
        };
        noteList.append(listItem);
    }
}


function renderNote(newTitle, newText){
    const listItem = document.createElement('li');
    listItem.classList.add('note');
    const title = document.createElement('h2');
    title.classList.add('note__title');
    title.innerText = newTitle;
    const text = document.createElement('p');
    text.classList.add('note__preview');
    text.innerText = newText;
    listItem.append(title);
    listItem.append(text);
    return listItem;
}
/*
const initialNotes = [
    {
        title: 'Пример заголовка 1',
        text: 'Текст11111111111'
    },
    {
        title: 'Пример заголовка 2',
        text: 'Текст222222222222'
    },
    {
        title: 'Пример заголовка 3',
        text: 'Текст33333333'
    }
];
*/
render(initialNotes);

function openCloseEditor(note = {title: 'Введите заголовок', text: 'Введите текст заметки'}){
    
    const editorTitle = document.querySelector('.editor__title');
    const editorContent = document.querySelector('.editor__content');
    editorTitle.innerText = note.title;
    editorContent.innerText = note.text;
    editor.classList.toggle('editor__show');
    buttonAdd.classList.toggle('add-close');
}

function saveNote(notes = [], idx = -1){
    const editorTitle = document.querySelector('.editor__title');
    const editorContent = document.querySelector('.editor__content');
    if(idx >= 0){
        notes[idx].title = editorTitle.textContent; 
        notes[idx].text = editorContent.textContent;
    }else{
        notes.push({
            title: editorTitle.textContent, 
            text: editorContent.textContent
        });
    }
    localStorage.setItem('notes', JSON.stringify(notes))
    render(notes);
    openCloseEditor();
}

const buttonAdd = document.querySelector('.add');
const editor = document.querySelector('.editor');


buttonAdd.onclick = () => {
    openCloseEditor();
    const buttonSave = document.querySelector('.editor__save');
    buttonSave.onclick = () => saveNote(initialNotes);
};
//





//noteList.append(listItem);
