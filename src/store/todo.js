const ADD_TODO = 'ADD_TODO';
let idCounter = 0

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                id: idCounter++,
                text: action.text
            }
            return [
                ...state,
                newTodo
            ]
        default:
            return state
    }
}

export default todoReducer
