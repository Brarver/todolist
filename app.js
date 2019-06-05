 const todos = getSavedTodos() 

 renderTodos(todos)

document.querySelector('#new-todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        title: e.target.elements.text.value,
        completed: false
    })
    e.target.elements.text.value = ''
    saveTodos(todos)
    renderTodos(todos)
})

// document.querySelector('#hide-checkbox').addEventListener('change', () => {

// })
