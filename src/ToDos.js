

const ToDos = ({ todos, deleteTodo }) => {

    var todosList = todos.length ? (
        todos.map((todo) => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => deleteTodo(todo.id)} >
                        {todo.content}
                    </span>
                </div>
            )
        })
    ) : (
        <p className="center"> You have no todos. Very productive day</p>
    )


    return (
        <div className="todos collection">
            {todosList}
        </div>
    )
}

export default ToDos