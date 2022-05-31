const TODOLIST_STORAGE_KEY = 'TODOS'

export default {
    get() {
        return JSON.parse(localStorage.getItem(TODOLIST_STORAGE_KEY)) || []
    },
    set(todos) {
        localStorage.setItem(TODOLIST_STORAGE_KEY, JSON.stringify(todos))
    }
}           