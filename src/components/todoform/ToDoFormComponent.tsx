import { BaseSyntheticEvent, useState } from "react";
import styles from "./form.module.css";
import ToDo from "../todoobject/ToDo";

interface ToDoFormComponentProps {
  todosList: ToDo[];
  setToDosList: (todosList: ToDo[]) => void;
}

function ToDoFormComponent({
  todosList,
  setToDosList,
}: ToDoFormComponentProps) {
  const [todo, setToDo] = useState({ name: "", complete: false });
  function handleSubmit(e: BaseSyntheticEvent) {
    e.preventDefault();
    console.log(todo);
    if (!todo.name) return;
    setToDosList([...todosList, todo]);
    setToDo({ name: "", complete: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          // arrow function to eassily get key press and update input value and set to do value.
          onChange={(e) => setToDo({ name: e.target.value, complete: false })}
          type="text"
          placeholder="Enter To Do Item..."
          value={todo.name}
          required
        ></input>
        <button className={styles.modernButton}>Add Task</button>
      </div>
    </form>
  );
}

export default ToDoFormComponent;
