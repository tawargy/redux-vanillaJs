// Store
const state = {count: 0}
const store = Redux.createStore(counter, state) //(reducer , state)

// Subscribe ( listen to any change in the state when make action)
const counterEl = document.getElementById('counter')
function render() {
  const state = store.getState()
  counterEl.innerHTML = state.count.toString()
}
store.subscribe(render)

// Reducer
function counter(state, action) {
  const nextState = {count: state.count}

  switch (action.type) {
    case 'ADD':
      nextState.count = state.count + 1
      return nextState
      break
    case 'MINUS':
      if (state.count <= 0) {
        return nextState
      }
      nextState.count = state.count - 1
      return nextState
      break
    case 'RESET':
      nextState.count = 0
      return nextState
      break
    default:
      return state
  }
}

// Action
document.getElementById('add').addEventListener('click', function () {
  store.dispatch({type: 'ADD'})
})
document.getElementById('minus').addEventListener('click', function () {
  store.dispatch({type: 'MINUS'})
})
document.getElementById('reset').addEventListener('click', function () {
  store.dispatch({type: 'RESET'})
})
