import { Fragment } from 'react/jsx-runtime';
import Header from  './components/Header';
import { TodoForm } from  './components/TodoForm';
import { useState } from "react";


const App = () => {
    const [task, setTask] = useState([]);
    // let newTask = [];

    
    function getTaskInfo(t) {
            setTask(t);
   
        }
    
    function deleteItem (id: number) {
        console.log(id);
    }

    const taskList =  
    <div className="todo">
        {task.map(task => 
        <div key={task.id}>
            
            <input type="checkbox" id="toggle"/>
            <p>{task.taskName}</p> 
            <p>{task.taskDate}</p>
            <button onClick={() => deleteItem(task.id)}>x</button>
        </div>
        )}  
</div>

    return (
        <>
            <Header />
            <TodoForm getTaskInfo={getTaskInfo}/>

            <h1>List</h1>   
            <div>{taskList}</div>

        </>
    );
}; 

export default App;

