import {createStorage} from './core.js'
import reducer from './reducer.js'
import withLogger from './logger.js'


const {connect, attach, dispatch} = createStorage(withLogger(reducer))
window.dispatch = dispatch
export {
    connect,
    attach
}
