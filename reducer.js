import storage from "./util/storage.js"

const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: todo => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed
    }  
}

const actions = {
    add({ todos }, value) {
        if (value) {
            todos.push(
                {  
                    title: value,
                    completed: false,
                    edit: false
                })
        }
        storage.set(todos)
    },
    toggle({todos}, item){
        const childElements  = Array.from(item.parentElement.children)
        for(const todo of todos) {
            if(todo.title === childElements[1].innerText) {
                todo.completed = item.checked
                break
            }
        }
        storage.set(todos)
    },
    cancel({ todos }, item) {
        const childElements = Array.from(item.parentElement.children)
        const idx = todos.findIndex(todo => todo.title === childElements[1].innerText)
        if(idx !== -1) {
            todos.splice(idx, 1)
        }
        storage.set(todos)
    },
    toggle_all({todos}){
        todos.forEach(todo => {  
            todo.completed = !todo.completed
        })
        storage.set(todos)
    },
    switchTab(state, tab) {
        state.filter = tab
    },
    clearCompleted({ todos }) {
        todos.forEach(todo => {
            todo.completed = false
        })
        storage.set(todos)
    },
    editStart({ todos }, oldTitle) {
        const idx = todos.findIndex(todo => todo.title === oldTitle)
        todos[idx].edit = true
    },
    editEnd({ todos }, newTitle) {
        const idx = todos.findIndex(todo => todo.edit === true)
        if (idx !== -1) {
            todos[idx].edit = false
            if(newTitle) 
                todos[idx].title = newTitle
        }
        storage.set(todos)
    }
}

export default function reducer (state = init, action, value) {
    actions[action] && actions[action](state,value);
    return state;
}