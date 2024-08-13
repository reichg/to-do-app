import ToDo from "../todoobject/ToDo";
import styles from "./todocardcomponent.module.css";

interface ToDoCardProps {
  todo: ToDo;
  todosList: ToDo[];
  setToDosList: (todosList: ToDo[]) => void;
}

function ToDoCardComponent({ todo, todosList, setToDosList }: ToDoCardProps) {
  function handleDelete(todo: ToDo) {
    setToDosList(todosList.filter((todoItem) => todo.name !== todoItem.name));
    console.log("deleting todo", todo);
  }
  function handleCompleteTodo(name: string) {
    setToDosList(
      todosList.map((todo) =>
        todo.name === name ? { ...todo, complete: !todo.complete } : todo
      )
    );
  }
  const completedTaskClassName = todo.complete
    ? styles.completed
    : styles.toDoCardText;
  const complete = todo.complete ? "incomplete" : "complete";

  return (
    <div className={styles.todoItem}>
      <div className={styles.todoItemName}>
        <span
          className={completedTaskClassName}
          onClick={() => handleCompleteTodo(todo.name)}
          data-title={`Click to mark as ${complete}!`}
        >
          {todo.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(todo)}
            className={styles.todoDeleteButton}
          >
            x
          </button>
        </span>
      </div>
    </div>
  );
}

export default ToDoCardComponent;
