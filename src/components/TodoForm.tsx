import { useState } from "react";

export interface NewTask { 
  taskName: string
  taskDate: string;
  id: number;
} 

interface TodoFormProps {
  getTaskInfo: (newTask: NewTask[]) => void;  
  task: NewTask[];                         
}

export const TodoForm = ({getTaskInfo, task} : TodoFormProps) => {
    const [inputTask, setInputTask]  = useState('');
    const [inputDate, setInputDate] = useState('');
    const [nextId, setNextId] = useState(0);

    function getTask (e : React.ChangeEvent<HTMLInputElement>) {
      setInputTask(e.target.value);

    }

    function getDate (e : React.ChangeEvent<HTMLInputElement>) {
    
        setInputDate(e.target.value);
    }

    function handleSubmit(e : React.FormEvent<HTMLFormElement>) {
      e.preventDefault(); 
      setNextId(nextId + 1)

      const newTask : NewTask[] = [ ...task,
        { taskName: inputTask, taskDate: inputDate, id: nextId } ];
    
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
            <input type="submit" value="Enviar"></input>

      </form>
    );
};