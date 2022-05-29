import html from '../core.js'
import TodoItem from './TodoItem.js'

export default function Todolist(listItems) {
     return html`
     <section class="main">
     <input 
     id="toggle-all" 
     class="toggle-all" 
     type="checkbox"
     onchange="dispatch('toggle_all', event.target)"
     >
     <label for="toggle-all">Mark all as complete</label>
     <ul class="todo-list">   
        ${listItems.map(item => TodoItem(item)).join(' ')}
     </ul>
 </section>
    `
}