import styles from "./footer.module.css";

interface FooterProps {
  totalTasksLeft: number;
  totalTasksCompleted: number;
}

function FooterComponent({ totalTasksLeft, totalTasksCompleted }: FooterProps) {
  return (
    <div className={styles.footer}>
      <span className={styles.footerItems}>Tasks Left: {totalTasksLeft}</span>
      <span className={styles.footerItems}>
        Tasks Completed: {totalTasksCompleted}
      </span>
    </div>
  );
}

export default FooterComponent;
