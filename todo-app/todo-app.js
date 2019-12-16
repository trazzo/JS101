const todos = 
[
    {
        text: 'Order cat food',
        completed: false 
    },
    {
        text: 'Clean kitchen',
        completed: true
    },
    {
        text: 'Buy food',
        completed: true
    },
    {
        text: 'Do work',
        completed: false
    },
    {
        text: 'Exercise',
        completed: true
    }
]

const filters = {
    searchText: ''
}

const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    const incompleteTodos = filteredTodos.filter((todo) => {
        return !todo.completed;
    });

    document.querySelector('#todos').innerHTML = '';
    
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    document.querySelector('#todos').appendChild(summary);
    
    filteredTodos.forEach((todo) => {
        const p = document.createElement('p');
        p.textContent = todo.text;
        document.querySelector('#todos').appendChild(p);
    });
};

const hideCompleted = (todos) => {
    const completedTodos = todos.filter((todo) => {
        return todo.completed == false;
    });
    
    document.querySelector('#todos').innerHTML = '';

    completedTodos.forEach((todo) => {
        const p = document.createElement('p');
        p.textContent = todo.text;
        document.querySelector('#todos').appendChild(p);
    });
}

renderTodos(todos, filters);


document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
});

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault();
    todos.push({
        text: e.target.elements.text.value, 
        completed: false
    });
    renderTodos(todos, filters);
    e.target.elements.text.value = '';
});

/*
1. Create a checkbox and setup event listener -> "Hide completed"
2. Create new hideCompleted filter (default false)
3. Update hideCompleted and rerender list on checkbox change
4. Setup renderTodos to remove completed items
*/

document.querySelector('#checkbox').addEventListener('change', (e) => {
    if(e.target.checked == true){
        hideCompleted(todos);
    }
});