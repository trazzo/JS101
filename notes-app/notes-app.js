let notes = getSavedNotes();

const filters = {
    searchText: ''
}

renderNotes(notes, filters);

//e.target is used to make something in the same element we are working on
document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4();
    notes.push({
        id: id,
        title: '',
        body: ''
    });
    saveNotes(notes);
    location.assign(`/edit.html#${id}`);
});

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', (e) => {
    console.log(e.target.value);
});

window.addEventListener('storage', (e) => {
    if(e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    }
});

/*  -- Single --
    p
    #replace
    .item

    -- Multiple --
    p#order -> a paragraph with the id='order'
    button.inventory -> all the buttons with the class='inventory'
    h1#title.application -> an h1 that has an id='title' and a class='application'
    h1.application#title -> same, the other does not matter, the only thing is put the tag
    at the beginning.
/*

//DOM - DOCUMENT OBJECT MODEL

//const p = document.querySelector('p');
//p.remove();

const ps = document.querySelectorAll('p');
ps.forEach((p) => {
    p.textContent = '*****'; //updating value
    //console.log(p.textContent); // getting the value
    //p.remove(); // removing the value
});

//Add a new element
const newParagraph = document.createElement('p');
//Give to the element some content
newParagraph.textContent = 'This is a new element from JavaScript'
//Place the info somewhere
document.querySelector('body').appendChild(newParagraph);
*/