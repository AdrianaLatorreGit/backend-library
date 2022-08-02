const TodoItem = ({
    index,
    item,
    deleteTodoItem,
    completeTodoItem,
    updateTodoItem,
}) => {
    return (
        <div className="todo-list">
            <li
                style={{
                    textDecoration:
                        item.complete === true ? "line-through" : "",
                }}
            >
                {item.todo}
            </li>
            <div className="btns">
                <button onClick={() => deleteTodoItem(index)}>✖️</button>
                <button onClick={() => completeTodoItem(index)}>✔️</button>
                <button onClick={() => updateTodoItem(index)}>➖</button>
            </div>
        </div>
    );
};

export default TodoItem;
