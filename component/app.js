import {connect} from '../store.js'
import html from '../core.js'

const connector = connect()

function App () {
    return html `<h1>Hello Everyone</h1>`
}

export default connector(App)