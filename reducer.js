const init = {
    todos: [

    ]
}

const actions = {
    add({ todos }, value) {
        if (value) {
            todos.push(
                {  
                    title: value,
                    completed: false
                })
        }
    },
    toggle({todos}, item){
        const childElements  = Array.from(item.parentElement.children)
        for(const todo of todos) {
            if(todo.title === childElements[1].innerText) {
                console.log(item.checked)
                todo.completed = item.checked
                break
            }
        }
    },
    cancel({ todos }, item) {
        const childElements = Array.from(item.parentElement.children)
        const idx = todos.findIndex(todo => todo.title === childElements[1].innerText)
        if(idx !== -1) {
            todos.splice(idx, 1)
        }
    },
    toggle_all({todos}, toggleAll){
        console.log([toggleAll])
        todos.forEach(todo => {
            todo.completed = !todo.completed
        })
    }
}

export default function reducer (state = init, action, value) {
    actions[action] && actions[action](state,value);
    return state;
}