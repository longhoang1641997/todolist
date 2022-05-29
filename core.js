// Method 1
// export default function html([first, ...nonTemplateStr], ...str) {
//     let result
//     result = str.reduce((initial, cur) => {
//         return [...initial, Array.isArray(cur) ? cur.join(' ') : (cur === false ? '' : cur), nonTemplateStr.shift()]
//     }, [first])
//     return result.join('')
// }

// Method 2
export default function html([first, ...nonTemplateStr], ...str) {
    return str.reduce(
        (initial, cur) => initial.concat(cur, nonTemplateStr.shift()), [first]
    )
    .filter(x => x && x !== true || x === 0)
    .join('')
} 

export function createStorage(reducer) {
    let state = reducer();
    const roots = new Map();
    function render() {
        for(const [root, component] of roots) {
            const output = component()
            root.innerHTML = output
        }   
    }

    return {
        attach(component, root) {
            roots.set(root, component)
            render()
        },
        connect(selector = state => state) {
            return component => (props, ...args) => 
                component(Object.assign({}, props, selector(state), ...args))
        },
        dispatch(action, args) {
            state = reducer(state, action, args)
            render()
        }
    }
}

