import React from "react";
import styles from "./CheckBox.module.css"
import {Check, Checks} from "phosphor-react";

interface CheckBoxProps {
    taskIdCheckBox: number,
    isChecked:boolean,
    onClickTask: (id:number) => void
}

export function CheckBox({taskIdCheckBox, isChecked = false, onClickTask}:CheckBoxProps){
    
    function handleClick(){
        onClickTask(taskIdCheckBox);
    };

    const check = isChecked? styles.checkedTask : styles.unCheckedTask;

    return(
        <div className={`${styles.checkBox} ${check}`} 
        onClick={handleClick}>
            <Check size={10}/>
        </div>
    )
}