import { useState } from "react";

const TodoInput = ({ createTodoItem }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (value === "") {
            return console.log("Adicione alguma coisa seu preguiçoso");
        }

        createTodoItem(value);
        setValue("");
    };

    return (
        <form>
            <input
                type="text"
                placeholder="Digite uma tarefa aqui"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button onClick={handleSubmit}>Criar</button>
        </form>
    );
};

export default TodoInput;
