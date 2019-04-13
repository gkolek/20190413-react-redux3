import React from 'react'
import { connect } from 'react-redux'

import { loadTodos } from './store/todo'

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
                        <div>
                            {todo.text}
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
    loadTodos: () => dispatch(loadTodos())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
