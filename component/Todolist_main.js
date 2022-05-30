import html from '../core.js'
import TodoItem from './TodoItem.js'

export default function Todolist(listItems, filterTab, filters) {
     return html`
     <section class="main">
     <input 
     id="toggle-all"    
     class="toggle-all" 
     type="checkbox" 
     ${listItems.every(item => item.completed === true) ? 'checked' : ''} 
     onchange="dispatch('toggle_all')"
     >
     <label for="toggle-all">Mark all as complete</label>
     <ul class="todo-list">   
        ${listItems.filter(filters[filterTab]).map(item => TodoItem(item)).join(' ')}
     </ul>
 </section>
    `
}