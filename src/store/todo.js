const ADD_TODO = 'ADD_TODO';
const SET_TODOS = 'SET_TODOS'
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
        case SET_TODOS:
            return action.todos
        default:
            return state
    }
}

const mapFbObjectToArray = data => Object.entries(data).map(item => ({
    id: item[0],
    ...item[1]
}))

export const loadTodos = () => {
    return dispatch => {
        fetch('https://isajfdzl2.firebaseio.com/todos.json')
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: SET_TODOS,
                    todos: mapFbObjectToArray(data)
                })
            })
    }
}

export default todoReducer
