import ToDoCardComponent from "../todocard/ToDoCardComponent";
import ToDo from "../todoobject/ToDo";
import styles from "./todolist.module.css";

interface TodoListComponentProps {
  todosList: ToDo[];
  setToDosList: (todosList: ToDo[]) => void;
}

function TodoListComponent({
  todosList,
  setToDosList,
}: TodoListComponentProps) {

  const sortedByCompleted = todosList.slice().sort((a, b) => Number(a.complete)-Number(b.complete));

  return todosList.length != 0 ? (
    <div className={styles.todoList}>
      {sortedByCompleted.map((todo) => (
        <ToDoCardComponent
          key={todo.name}
          todo={todo}
          todosList={todosList}
          setToDosList={setToDosList}
        />
      ))}
    </div>
  ) : (
    <div></div>
  );
}

export default TodoListComponent;
