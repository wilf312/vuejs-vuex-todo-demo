export const addTodo = makeAction('ADD_TODO')

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
