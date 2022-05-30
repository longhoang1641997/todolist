import html from '../core.js'

export default function Footer(todos, filter, filters) {
   return html`
     <footer class="footer">
				<span class="todo-count"><strong>
            ${todos.reduce((leftItemNum, todo) => {
               if(!todo.completed) leftItemNum++;
               return leftItemNum
            }, 0)}
            </strong> item left</span>
            
				<ul class="filters">

               ${Object.keys(filters).map(tab => html `
               <li>
                  <a class="${filter === tab ? 'selected': ''}" 
                  href="#"
                  onclick="dispatch('switchTab', '${tab}')";
                  >${tab[0].toUpperCase() + tab.slice(1)}
                  </a>
               </li>
               `)}
				</ul>
				<!-- Hidden if no completed items are left ↓ -->
				<button class="clear-completed"
            onclick="dispatch('clearCompleted', '')"
            >${todos.filter(filters[filter]).some(todo => todo.completed === true) ? "Clear completed" : ''}
            </button>
      </footer>
    `
}