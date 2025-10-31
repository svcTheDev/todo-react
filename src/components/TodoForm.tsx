import { useState } from "react";


export const TodoForm = ({getTaskInfo}) => {
    const [userTask, setUserTask] = useState([]);
    const [inputTask, setInputTask] = useState([]);
    const [inputDate, setInputDate] = useState([]);
    const [nextId, setNextId] = useState(0);

    function deleteItem () {
      
    }

    function getTask (e) {

      setInputTask(e.target.value);

    }

    function getDate (e) {
      
      setInputDate(e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefault(); 
      setNextId(nextId + 1)

      const newTask = [...userTask,
        { taskName: inputTask, taskDate: inputDate, id: setNextId }]
    
      setUserTask(newTask);

      getTaskInfo(newTask);

      setInputTask('');
      setInputDate('');
    }

 
    return (
      <form onSubmit={handleSubmit} action="">

            <label htmlFor="task"></label>
            <input onChange={getTask} id="task" type="text" value={inputTask} placeholder="Escribe la tarea"></input>
            <label htmlFor="date"></label>
            <input onChange={getDate} id="date" type="text" value={inputDate} placeholder="Tiempo"></input>
            <input type="submit"></input>

      </form>
    );
};