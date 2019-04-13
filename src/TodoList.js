import React from 'react'
import { connect } from 'react-redux'

import { loadTodos, deleteTodo } from './store/todo'

class TodoList extends React.Component {

    componentDidMount() {
        this.props.loadTodos()
    }
    render() {
        return (
            <div>
                {
                    this.props.todos &&
                    this.props.todos.map(todo => (
                        <div key={todo.id}>
                            <span>{todo.text}</span>
                            <button type="button" onClick={() => this.props.deleteTodo(todo.id)}>X</button>
                        </div>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.mySweetReducer
})

const mapDispatchToProps = dispatch => ({
    loadTodos: () => dispatch(loadTodos()),
    deleteTodo: id => dispatch(deleteTodo(id))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
