import React from 'react';

const ToDoDetail = ({ toDo }) => {
    const finishTask = (id) =>{
        const detail = 'task Complete';
        const finishTask = {detail}
        fetch(`http://localhost:5000/finishTask/${id}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(finishTask)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
        
    }
    return (
        <div>
            <p className='flex items-center'> <div class="form-control">
                <label class="label cursor-pointer">
                    <input type="checkbox" checked={toDo.finishTask} onClick={()=>finishTask(toDo._id)} class="checkbox checkbox-primary" />
                </label>
            </div><span className='text-2xl ml-4'>{toDo.task}</span></p>
        </div>
    );
};

export default ToDoDetail;