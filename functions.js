const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

const renderTodos = (todos, searchText) => {

    const filteredTodos = todos.filter((todo) => {
        return todo.title.toLowerCase().includes(searchText.toLowerCase())
    }) 

    document.querySelector('#todo-list').innerHTML = ''

    filteredTodos.forEach((todo) => {
        document.querySelector('#todo-list').appendChild(generateTodoDOM(todo))
    })
}

const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    const timeStamp = document.createElement('span')
    
    //Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', (e) => {
        toggleTodo(todo.title)
        saveTodos(todos)
        renderTodos(todos, searchText)
    })

    //Setup todo text
    todoText.textContent = todo.title
    todoEl.appendChild(todoText)

    //Setup the remove button
    removeButton.textContent = 'remove'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.title)
        saveTodos(todos)
        renderTodos(todos, searchText)
    })

    //Setup time stamp
    timeStamp.textContent = `created ${moment(todo.created).fromNow()}` 
    todoEl.appendChild(timeStamp)

    return todoEl
}

const removeTodo = (title) => {
    const todoIndex = todos.findIndex((todo) => todo.title === title)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const toggleTodo = (title) => {
    const todo = todos.find((todo) => todo.title === title)

    if (todo) {
        todo.completed = !todo.completed
    }
}

const compare = function(a, b) {
    const titleA = a.title.toLowerCase()
    const titleB = b.title.toLowerCase()

    let comparison = 0
    if (titleA > titleB) {
        comparison = 1
    } else if (titleA < titleB) {
        comparison = -1
    }

    return comparison
}

const sortTime = function(a, b) {
    const titleA = a.created
    const titleB = b.created

    let comparison = 0
    if (titleA < titleB) {
        comparison = 1
    } else if (titleA > titleB) {
        comparison = -1
    }

    return comparison
}


