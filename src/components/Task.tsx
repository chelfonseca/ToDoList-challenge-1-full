import React from "react";
import styles from "./Task.module.css"
import { CheckBox } from "./CheckBox";
import { Trash } from "phosphor-react";

interface TaskProps {
    taskId:number,
    taskContent: string;
    isChecked: boolean;
    onDeleteTask: (taskToDelete:string) => void;
    onToggleTask: (id:number) => void
}

export function Task({taskId, taskContent, isChecked, onDeleteTask, onToggleTask}:TaskProps) {

    function handleDelete(){
        onDeleteTask(taskContent)
    }

    const check = isChecked? styles.checkedTaskContent : styles.unCheckedTaskContent;
    
    return (
        <div className={styles.taskContainer}>
            <CheckBox
                taskIdCheckBox={taskId}
                isChecked={isChecked}
                onClickTask={onToggleTask}
                
            />
            <text className={check}>
                {taskContent}
            </text>
            <div className={styles.taskDelete}>
                <Trash 
                    size={20}
                    onClick={handleDelete}
                />
            </div>
        </div>
    )
}