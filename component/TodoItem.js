import html from '../core.js'


export default function TodoItem(item) {
    return html`
        <li class= ${item.edit ? 'editing' : item.completed ? 'completed' : 'view'}>
            <div class="view" >
                <input 
                class="toggle" 
                type="checkbox" 
                ${item.completed ? 'checked' : ''}
                onchange="dispatch('toggle', event.target)"
                >
                <label ondblclick="dispatch('editStart', '${item.title}')">${item.title}</label> 
                <button 
                class="destroy" 
                onclick="dispatch('cancel', event.target)">
                </button>
            </div>
            <input class="edit" 
            placeholder="Edit your task"
            onkeyup="event.keyCode === 13 && dispatch('editEnd', this.value.trim())"
            onblur="dispatch('editEnd', this.value.trim())"
            >
        </li>           
    `
}