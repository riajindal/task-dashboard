import React, {useState} from 'react';
import {PlusSmallIcon} from '@heroicons/react/24/solid';
import Task from './Task';

function TaskColumn(props) {

    const [Tasks, setTasks] = useState([
        {
            title: "", 
            description: "", 
            status: "",
        }
    ]);

    const [isOpen, setIsOpen] = useState(false);
    const tasks = Tasks.filter(task => task.status === props.columnName);
    const [newTask, setNewTask] = useState({
        title: "", 
        description: "", 
        status: props.columnName
    });
    
    function createTask(){
        console.log("button being clicked");
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false)
    }

    function handleChange(event){
        const {name, value} = event.target;
        setNewTask((prevValue) => {
            return {
                ...prevValue, 
                [name]: value
            };
        })
    }

    function addTask(){
        setTasks((prevValue) => {
            return [
                ...prevValue, 
                newTask
            ]
        });
        setIsOpen(false);
    }

    function deleteTask(id){
        setTasks((prevValue) => {
            return Tasks.filter((task, index) => {
                return index !== id
            });
        })
    }

    return <div className="flex flex-col w-full bg-slate-400 rounded-md p-4">
    <div className='flex'>
        <h2>{props.columnName}</h2>
        <span className='bg-slate-100 rounded-lg px-2 mx-2 text-black'>{tasks.length}</span>
        <PlusSmallIcon className='text-slate-900 cursor-pointer ml-auto w-6 h-6' onClick={createTask}/>
        {isOpen && <div class="h-100 w-full absolute left-10 top-4 text-black flex items-center justify-center bg-teal-lightest">
        <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div class="mb-4">
                <h1 class="text-grey-darkest items-start">Add Task</h1>
                <div class="flex mt-4">
                    <input type="text" name="title" value={newTask.title} onChange={handleChange} class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Title" />
                    <input type="textarea" name="description" value={newTask.description} onChange={handleChange} class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Description" />
                    <button class="flex-no-shrink p-2 border-2 rounded text-teal border-teal-200 hover:text-white hover:bg-teal-100" onClick={addTask}>Add</button>
                </div>
                <button class="flex-no-shrink p-2 border-2 rounded text-teal m-3 border-red-200 hover:text-white hover:bg-red-100" onClick={closeModal}>Close</button>
            </div>
        </div>
    </div>}
    </div>
    <div>
        {Tasks.filter(task => task.status === props.columnName).map((task, key) => {
            return <Task id={key} title={task.title} description={task.description} onDelete={deleteTask} />
        })}
    </div>
</div>
};

export default TaskColumn;