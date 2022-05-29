import html from '../core.js'


export default function TodoItem(item) {
    return html`
        <li class= ${item.completed ? 'completed' : 'view'}>
            <div class="view">
                <input 
                class="toggle" 
                type="checkbox" 
                ${item.completed ? 'checked' : ''}
                onchange="dispatch('toggle', event.target)"
                >
                <label>${item.title}</label> 
                <button 
                class="destroy" 
                onclick="dispatch('cancel', event.target)">
                </button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>           
    `
}