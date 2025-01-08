import { useState } from "react";

function TaskForm({addTask}) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState("Medium");
    const [category, setCategory] = useState("General");
    
    // React automatically provides the event object to event handler functions.
    // You don’t need to pass the event explicitly.
    const handleSubmit = (e) => {
        e.preventDefault();

        //When you write { priority, category },
        //it's equivalent to writing { priority: priority, category: category }
        //because the key is the same as the variable name.
        //This is known as property shorthand.
        addTask({text:task, priority, category, completed:false}); //send data to addTask method;
        setPriority("Medium");
        setCategory("General");
        setTask("");
    }

    //The primary role of the <form> tag is to enable form submission.
    //When a user clicks a <button type="submit"> 
    //the browser automatically submits the form to the specified action URL.
    

    //also,Forms allow you to listen to specific events like onSubmit
    //and handle them programmatically in JavaScript.
    return(
        <form onSubmit={handleSubmit} className='task-form'>
            <div>
                <input
                type='text'
                value={task} 
                required
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter your task"></input>

                <button type="submit">ADD TASK</button>
            </div>

            <div id="btns">
                <select onChange={(e)=>setPriority(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <select onChange={(e)=>setCategory(e.target.value)}>
                    <option value="General">General</option>
                    <option value="Work">Work</option>
                    <option value="personal">Personal</option>
                </select>
            </div>
        </form>
    )
}


export default TaskForm;