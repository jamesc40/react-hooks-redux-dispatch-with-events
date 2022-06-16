let state;

const reducer = (state = { count: 0 }, action) => {
  switch(action.type){
    case('counter/increment'):
      return { count: state.count + 1 }
    default:
      return state
   }
}

const dispatch = (action) => {
  state = reducer(state, action)
  render()
}

const render = () => {
  const container = document.querySelector('#container')
  container.textContent = state.count
}

const button = document.querySelector('#button')

button.addEventListener('click', () => {
  dispatch({ type: 'counter/increment' })
})

dispatch({ type: '@@INIT' })
