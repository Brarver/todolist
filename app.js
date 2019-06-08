 let todos = getSavedTodos() 

 let searchText = '';

 renderTodos(todos, searchText)

document.querySelector('#new-todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        title: e.target.elements.text.value,
        completed: false
    })
    e.target.elements.text.value = ''
    saveTodos(todos)
    renderTodos(todos, searchText)
})

document.querySelector('#search-todos').addEventListener('input', (e) => {
    searchText = e.target.value
    renderTodos(todos, searchText)
})


document.querySelector('#alpha-checkbox').addEventListener('change', (e) => {

    const alphaTodos = todos.sort(compare)
    todos = getSavedTodos()
    

    if (e.target.checked) {
        renderTodos(alphaTodos, searchText)
    } else {
        renderTodos(todos, searchText)
     }
    
})

console.log(todos)








//Sort alphabetically even when filtered
//sort by date created
//sort by completed