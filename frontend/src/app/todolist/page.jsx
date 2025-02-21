'use client'
import React, { useState } from 'react'

const TodoList = () => {

   const [count, setCount ] = useState(0);

   const [taskList, setTaskList ] = useState([
    { text : 'Coding', completed : false, added: new Date() },
    { text : 'Sona', completed : false, added: new Date() },
    { text : 'Padhna', completed : false, added: new Date() },
    { text : 'Ghoomna', completed : false, added: new Date() },
   ]);


    const addTask = (e) => {

   if (e.code === 'Enter') {
     console.log(e.target.value);

     const newTask = {text : e.target.value, completed: false, added: new Date() };

     setTaskList( [ newTask, ...taskList ] );

     e.target.value = '';
   }
}

const deleteTask = (index) => {
    console.log(index);

    const temp =  taskList;
    temp.splice(index, 1);
    setTaskList([...temp]);
}

const toggleCpmpleted = (index) => {
    const temp  = taskList;

    temp[index].completed = !temp[index].completed;
    setTaskList([...temp]);
}

  return (
    <div className='max-w-5xl mx-auto m5-6'>
        <div className='border shadow rounded-3xl'>
            <div className='p-4 border-b-2'>
                <input 
                onKeyDown={addTask}
                placeholder='Add a new task'
                type="text" 
                className='w-full p-3 bg-gray-300 rounded-xl outline-none'/>
            </div>

            <div className='p-6'>

        {/* <h1 className='text-3xl text-red-500'>{count}</h1>

        <button className='bg-gray-300 p-4'
        onClick={ () => {setCount(count+1); console.log(count);}}
        >Add Count</button> */}

            {
                taskList.map( ( task, index ) => { return (
                    <div key={index} className='rounded-md border mb-5 shadow p-4 bg-gray-200'>
                        { 
                            task.completed ? (
                                <p className='bg-green-500 text-white rounded-full text-sm px-2 w-fit'>COMPLETED</p>
                            ):(
                                <p className='bg-yellow-500 text-white rounded-full text-sm px-2 w-fit'>PENDING</p>
                            )
                        }
                        <p>{task.text}</p>
                        <div className='mt-2 flex justify-end gap-4'>
                            <button
                            onClick={() => {toggleCpmpleted(index)}}
                            className='bg-blue-500 text-white px-2 py-1 rounded-full'>
                                { task.completed ? 'Done' : 'Completed' }
                            </button>
                            <button
                            onClick={() => {deleteTask(index)}}
                            className='bg-red-500 text-white px-2 py-1 rounded-full'
                            >Delete</button>
                        </div>
                        </div>
                ) } )
            }

            </div>
        </div>
    </div>
  )
}

export default TodoList