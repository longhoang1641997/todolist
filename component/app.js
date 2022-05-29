import {connect} from '../store.js'
import html from '../core.js'
import Header from './Header.js'
import Todolist from './Todolist_main.js'
import Footer from './Footer.js'

const connector = connect()

function App (props) {  
    return html `
    <section class="todoapp">
    ${Header()}
    ${props.todos.length > 0 && Todolist(props.todos)}
    ${props.todos.length > 0 && Footer(props.todos)}
    </section>
    `
}

export default connector(App)