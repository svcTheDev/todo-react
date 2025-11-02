import { Fragment } from 'react/jsx-runtime';
import Header from  './components/Header';
import { TodoForm, NewTask} from  './components/TodoForm';
import { useState, useEffect} from "react";



const App = () => {
    const [task, setTask] = useState<NewTask[]>(() => {
        const saved = localStorage.getItem("objectProduct");
        return saved ? JSON.parse(saved) : [];
      });
 

    function savedInLocalStorage () { 
        localStorage.setItem('objectProduct', JSON.stringify(task)) 
        console.log('saving'); 
    }

    useEffect(() => { 
        console.log('use effect de save se esta ejectuando'); 
        savedInLocalStorage(); 
    }, [task])

    function getTaskInfo(t : NewTask[]) {
            setTask(t);
    }
    
    function deleteItem (id: number) {

        const result = task.filter(t => t.id !== id);
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

    const noTaskList = 
    <div className="todo">
        <p>No hay tareas pendientes</p>
    </div>

    return (
        <>
            <Header />
            <TodoForm getTaskInfo={getTaskInfo} task={task}/>

            <h1>Lista</h1>
            <div>{task.length > 0 ? taskList : noTaskList}</div>

        </>
    );
}; 

export default App;

