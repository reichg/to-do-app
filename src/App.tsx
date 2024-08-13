import HeaderComponent from "./components/header/HeaderComponent";
import AddToDo from "./components/AddToDo";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.mainContainer}>
      <HeaderComponent />
      <AddToDo />
    </div>
  );
}

export default App;
