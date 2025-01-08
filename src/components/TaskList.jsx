import React from "react";

function TaskList({ tasks, updateTask, deleteTask }) {

  const toggleComplete = (index) => {
    //Q: why we used spread operator here , that is "...tasks[index]" ? why not directly tasks[index]
    //   
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(index, updatedTask);

  };

  return (

    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? "completed" : ""}>
          <div>
            <span>{task.text}</span>
            <small>({task.priority}, {task.category})</small>
          </div>

          <div>

            <button onClick={() => toggleComplete(index)}>

              {task.completed ? "Undo" : "Complete"}

            </button>

            <button onClick={() => deleteTask(index)}>Delete</button> 

          </div>

        </li>

      ))}
      
    </ul>

  );

}

 

export default TaskList;