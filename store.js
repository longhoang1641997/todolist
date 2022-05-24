import {createStorage} from './core.js'
import reducer from './reducer.js'
const {connect, attach, dispatch} = createStorage(reducer)
window.dispatch = dispatch
export {
    connect,
    attach
}
