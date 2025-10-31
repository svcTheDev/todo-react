import { Fragment } from 'react/jsx-runtime';
import Header from  './components/Header';
import { TodoForm, NewTask} from  './components/TodoForm';
import { useState } from "react";


const App = () => {
    const [task, setTask] = useState([{}]);
    
    function getTaskInfo(t : NewTask[]) {
            setTask(t);
   
        }
    
    function deleteItem (id: number) {

        const result = task.filter(task => task.id !== id);
        setTask(result)
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
            <TodoForm getTaskInfo={getTaskInfo} task={task}/>

            <h1>Lista</h1>   
            <div>{taskList}</div>

        </>
    );
}; 

export default App;

