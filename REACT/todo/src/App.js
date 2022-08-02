import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

function App() {
    const [todoItem, setTodoItem] = useState([
        { todo: "Estudar", complete: false },
        { todo: "Beber 2 litros de água", complete: false },
        { todo: "Entregar trabalho de programação", complete: true },
    ]);

    const createTodoItem = (todo) => {
        const newTodoItems = [...todoItem, { todo, complete: false }];
        setTodoItem(newTodoItems);
    };

    const deleteTodoItem = (index) => {
        const newTodoItems = [...todoItem];
        newTodoItems.splice(index, 1);
        setTodoItem(newTodoItems);
    };

    const completeTodoItem = (index) => {
        const newTodoItems = [...todoItem];
        newTodoItems[index].complete === false
            ? (newTodoItems[index].complete = true)
            : (newTodoItems[index].complete = false);
        setTodoItem(newTodoItems);
    };

    const updateTodoItem = (index) => {
        const newTodoItems = [...todoItem];
        const item = newTodoItems[index];

        let newItem = prompt(`Atualizar item? ${item.todo}`, item.todo);

        if (newItem === null || newItem === "") {
            return;
        } else {
            item.todo = newItem;
        }

        setTodoItem(newTodoItems);
    };

    return (
        <div className="app">
            <TodoInput createTodoItem={createTodoItem} />

            {todoItem.map((item, index) => (
                <TodoItem
                    key={index}
                    index={index}
                    item={item}
                    deleteTodoItem={deleteTodoItem}
                    completeTodoItem={completeTodoItem}
                    updateTodoItem={updateTodoItem}
                />
            ))}
        </div>
    );
}

export default App;
