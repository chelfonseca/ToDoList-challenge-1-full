import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { Empty } from "./Empty";
import { useState } from "react";


export function App() {

  interface Task {
    id: number,
    content: string;
    isChecked: boolean;
  }

  const [tasks, setTasks] = useState<Task[]>([]);

  const [newTaskText, setNewTaskText] = useState<string>("");

  function handleNewTaskChange(newTaskChange: string) {
    setNewTaskText(newTaskChange);
  }

  function handleCreateNewTask() {
    const newTask: Task = {
      id: Math.random(),
      content: newTaskText!,
      isChecked: false
    }
    setTasks([...tasks, newTask]);
    setNewTaskText('');
  }

  function handleDeleteTask(taskToDelete: string) {
    const updatedTasks = tasks.filter(task => {
      return task.content != taskToDelete;
    })
    setTasks(updatedTasks);
  }

  function handleToggleTask(id: number) {
    const toggledTasks = tasks.map(task => task.id === id ?
      { ...task, isChecked: !task.isChecked }
      : task);

    setTasks(toggledTasks);

  }
  const isTasksEmpty = tasks.length === 0;
  const isNewTaskTextEmpty = newTaskText === "";
  const tasksDone = tasks.filter(task => task.isChecked === true);

  return (
    <div className={styles.container}>
      <Header
        onNewTaskChange={handleNewTaskChange}
        onNewTaskCreate={handleCreateNewTask}
        inputValue={newTaskText!}
        isTaskEmpty={isNewTaskTextEmpty}
      />
      <main className={styles.main}>
        <div className={styles.tasksContainer}>
          <div className={styles.counter}>
            <div className={styles.tasksToDo}>
              Created
              <span>{tasks.length}</span>
            </div>
            <div className={styles.tasksDone}>
              Done
              <span>{tasksDone.length} de {tasks.length}</span>

            </div>
          </div>
          <div className={styles.tasks}>

            <span hidden={!isTasksEmpty}>
              <Empty />
            </span>
            {

              tasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    taskId={task.id}
                    taskContent={task.content}
                    isChecked={task.isChecked}
                    onDeleteTask={handleDeleteTask}
                    onToggleTask={handleToggleTask} />
                )
              })
            }



          </div>
        </div>
      </main>
    </div>
  )
}


