const notes = 
[
    {
        title: 'my next trip',
        body: 'I would like to go to Spain'
    },
    {
        title: 'Habits to work on',
        body: 'Exercise. Eating a bit better.'
    },
    {
        title: 'Office modification',
        body: 'Get a new seat'
    }
]

const filters = {
    searchText: ''
}

const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    });
    
    document.querySelector('#notes').innerHTML='';

    filteredNotes.forEach((note) => {
        const noteElement = document.createElement('p');
        noteElement.textContent = note.title;
        document.querySelector('#notes').appendChild(noteElement);
    });
}

renderNotes(notes, filters);

//e.target is used to make something in the same element we are working on
document.querySelector('#create-note').addEventListener('click', (e) => {
    e.target.textContent = 'The button was clicked';
});


document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#for-fun').addEventListener('change', (e) => {
    e.target.checked;
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