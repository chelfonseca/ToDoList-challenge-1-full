import styles from "./Header.module.css"
import { PlusCircle } from "phosphor-react";
import toDoLogo from "../assets/Logo.png";
import { ChangeEvent, ChangeEventHandler } from "react";


interface HeaderProps {
    onNewTaskChange: (newTaskChange: string ) => void;
    onNewTaskCreate: () => void;
    inputValue: string;
    isTaskEmpty:boolean;
}


export function Header({ onNewTaskChange, onNewTaskCreate, inputValue, isTaskEmpty}: HeaderProps) {

    function handleNewChange(event: ChangeEvent<HTMLInputElement>) {
        onNewTaskChange(event.target.value)
    }

    return (
        <header className={styles.header}>
            <img src={toDoLogo} alt="To do Logo" />
            <div className={styles.search}>
                <input type="text" placeholder="Add a new task"
                    onChange={handleNewChange}
                    value={inputValue} />
                <button disabled={isTaskEmpty}
                    onClick={onNewTaskCreate}
                >Add
                    <PlusCircle size={20} />
                </button>
            </div>
        </header>
    )
}