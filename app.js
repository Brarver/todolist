 let todos = getSavedTodos() 

 let searchText = '';

 renderTodos(todos, searchText)

document.querySelector('#new-todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    const timestamp = moment().valueOf()
    todos.push({
        title: e.target.elements.text.value,
        completed: false,
        created: timestamp
    })
    e.target.elements.text.value = ''
    saveTodos(todos)
    renderTodos(todos, searchText)
    console.log(todos)
})

document.querySelector('#search-todos').addEventListener('input', (e) => {
    searchText = e.target.value
    renderTodos(todos, searchText)
})


document.querySelector('#alpha-checkbox').addEventListener('change', (e) => {
    const newTodos = todos.slice()
    const alphaTodos = newTodos.sort(compare)

    if (e.target.checked) {
        renderTodos(alphaTodos, searchText)
    } else {
        renderTodos(todos, searchText)
     }
})

document.querySelector('#time-checkbox').addEventListener('change', (e) => {
    const newTodos = todos.slice()
    const byTimeTodos = newTodos.sort(sortTime)

    if (e.target.checked) {
        renderTodos(byTimeTodos, searchText)
    } else {
        renderTodos(todos, searchText)
     }
})









//sort by completed