import React from 'react'
import { connect } from 'react-redux'

class TodoList extends React.Component {
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

export default connect(
    mapStateToProps
)(TodoList)
