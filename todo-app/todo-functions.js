//Fetch existing todos from localStorage
const getSaveTodos = function () {
    const todosJSON = localStorage.getItem('todos');
    
    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else{
        return [];
    }
}

//Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Remove todo by id
const removeTodo = function (id) {
    const todoIndex = todos.findIndex((todo) => {
        return todo.id === id;
    });
    if(todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
}

//Toggle the completed value for a given todo
const toggleTodo = function (id) {
    const todo = todos.find((todo) => {
        return todo.id === id;
    });

    if (todo !== undefined) {
        todo.completed = !todo.completed;
    }
};

//Render application todos based on filters
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
        return searchTextMatch && hideCompletedMatch;
    });

    const incompleteTodos = filteredTodos.filter((todo) => {
        return !todo.completed;
    });

    document.querySelector('#todos').innerHTML = '';
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));
    
    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo));
    });
};

//Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    const todoElement = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');

    //Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.completed;
    todoElement.appendChild(checkbox);
    checkbox.addEventListener('change', () =>{
        toggleTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    });

    //Setup todo text
    todoText.textContent = todo.text;
    todoElement.appendChild(todoText);

    //Setup todo remove button
    removeButton.textContent = 'x';
    todoElement.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    });

    return todoElement;
};

//Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    return summary;
};