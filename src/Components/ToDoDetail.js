import React from 'react';

const ToDoDetail = ({ toDo, refetch }) => {
    const finishTask = (id) => {
        const detail = 'task Complete';
        const finishTask = { detail }
        fetch(`http://localhost:5000/finishTask/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(finishTask)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)
            })

    }
    const deleteToDo = (id) =>{
        fetch(`http://localhost:5000/deleteToDo/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)
            })
    }
    return (
        <div>
            <p className='flex items-center mt-6'> <div class="form-control">
                <label class="label cursor-pointer">
                    <input type="checkbox" checked={toDo.finishTask} onClick={() => finishTask(toDo._id)} class="checkbox checkbox-primary" />
                </label>
            </div><span className='text-2xl ml-4'>{toDo.task}</span>

                <button onClick={()=>deleteToDo(toDo._id)} class="btn btn-circle btn-outline hover:bg-red-500 hover:border-red-500 ml-8">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </p>
        </div>
    );
};

export default ToDoDetail;