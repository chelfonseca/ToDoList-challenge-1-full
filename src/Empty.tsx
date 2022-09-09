import Clipboard from "./assets/Clipboard.png";
import styles from "./Empty.module.css";

export function Empty() {
    return (
        <div className={styles.tasks}>
            <img src={Clipboard} alt="Clipboad image" />
            <p className={styles.textBold}>You don't have tasks created yet</p>
            <p>Create and organize your tasks to do</p>
        </div>
    )
}