import { Fragment } from 'react/jsx-runtime';
import Header from  './components/Header';
import { TodoForm } from  './components/TodoForm';
import { useState } from "react";


const App = () => {
    const [task, setTask] = useState([]);
    
    function getTaskInfo(newTask) {
            setTask(newTask);
        }
    
    function deleteItem (id: string) {
        console.log(id);
    }

    return (
        <>
            <Header />
            <TodoForm getTaskInfo={getTaskInfo}/>

            <h1>List</h1>   
            <div className="todo">
                    {task.map(task =>
                    <div key={task.id}>
                        
                        <input type="checkbox" id="toggle"></input>
                        
                        <p>{task.taskName}</p> <p>{task.taskDate}</p>
                            <button onClick={deleteItem}>x</button>
                    </div>)}
            </div>
         

        </>
    );
}; 

export default App;

