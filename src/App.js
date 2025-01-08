import { useEffect, useState } from "react";
import ProgressTracker from "./components/ProgressTracker";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./style.css"

export default function App(){
  const [tasks, setTasks] = useState([]);

  //The second argument to useEffect, [tasks], is a dependency array. 
  //This tells React that the effect should run whenever the tasks state changes.

  //So, each time tasks is updated, React will implicitly call useEffect again 
  //and run the effect,which in this case updates localStorage with the new value of tasks.
  useEffect( () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task)=>{
    setTasks([...tasks,task])
  };

  const updateTask = (index, updatedTask) => {
    const newTasks = [...tasks];
    //Q: why to declare a new variable and use spread opertor 
    //Q: why not direct , tasks[index] = updateTask

    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

 
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTask = () => {
    setTasks([]);
  }

  
  return(
    <div className="App">
      <header className="bg-gray-900 py-6 px-4 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-4xl font-bold text-white">
          Task<span className="text-yellow-400">Buddy</span>
          </h1>
          <p className="text-gray-400 italic">Your friendly task manager</p>
        </div>
      </header>
      <TaskForm addTask={addTask} />
      <ProgressTracker tasks={tasks} />
      <TaskList tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}/>

        {tasks.length > 0 && (
          <button className="clear-btn" onClick={clearTask}> 
          Clear All Tasks
          </button>
        )}
    </div>
  )
}