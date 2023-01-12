import React, { useState } from "react";
import './TodoForm.css'


function TodoForm({
    addTodo,
    setOpenModal
}){
    const [newTodoValue, setNewTodoValue] = useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        console.log("cancel")
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return(
        <form onSubmit={onSubmit}>

            <label>Escribe tú nuevo TODO</label>
            <textarea 
                placeholder="Terminar el curso de React"
                value={newTodoValue}
                onChange={onChange}
            />
            <div>
                <button
                type="button"
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel"
                >
                    Cancelar
                </button>
                <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm }