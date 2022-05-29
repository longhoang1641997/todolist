import html from '../core.js'

export default function Footer(todos) {
   console.log(todos)
   return html`
     <footer class="footer">
				<span class="todo-count"><strong>
            ${todos.reduce((leftItemNum, todo) => {
               if(!todo.completed) leftItemNum++;
               return leftItemNum
            }, 0)}
            </strong> item left</span>
            
				<ul class="filters">
					<li>
						<a class="selected" 
                  href="#/"
                  onclick="console.log('Clicked on Selected Tab')";
                  >All</a>
					</li>
					<li>
						<a href="#/active"
                  onclick="event.target.classList.add('selected')";
                  >Active</a>
					</li>
					<li> 
						<a href="#/completed"
                  onclick="console.log('Clicked on Completed Tab')";
                  >Completed</a>
					</li>
				</ul>
				<!-- Hidden if no completed items are left ↓ -->
				<button class="clear-completed">${todos.some(todo => todo.completed === true) ? "Clear completed" : ''}</button>
      </footer>
    `
}