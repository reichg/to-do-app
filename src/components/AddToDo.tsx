import { useState } from "react";
import ToDoFormComponent from "./todoform/ToDoFormComponent";
import TodoListComponent from "./todolist/TodoListComponent";
import ToDo from "./todoobject/ToDo";
import FooterComponent from "./footer/FooterComponent";
import styles from "./addtodo.module.css";

function AddToDo() {
  const [todosList, setToDosList] = useState<ToDo[]>([]);
  const completedTodos = todosList.filter((todo) => todo.complete).length;
  const todosLeft = todosList.filter((todo) => !todo.complete).length;

  return (
    <div className={styles.todoCardArea}>
      
      <ToDoFormComponent todosList={todosList} setToDosList={setToDosList} />
      <TodoListComponent todosList={todosList} setToDosList={setToDosList} />
      <FooterComponent
        totalTasksCompleted={completedTodos}
        totalTasksLeft={todosLeft}
      />
    </div>
  );
}

export default AddToDo;
