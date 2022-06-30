import React, { useState } from 'react';

const CreateToDo = ({refetch}) => {
    const createToDo = (event) =>{
        event.preventDefault();
        const task = event.target.task.value;
        const category = event.target.category.value;
        const date = new Date();
        const today = date.getDate();
        const toDoDetail = {task,category,today}
        fetch('http://localhost:5000/createToDo',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(toDoDetail)
        })
        .then(res=>res.json())
        .then(data=>{
            event.target.reset()
            refetch()
            console.log(data)
        })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <p className='font-bold text-2xl'>Add Task</p>
                    <form onSubmit={createToDo} className='w-3/4 mx-auto mt-6'>
                        <div>
                            <label class="label">
                                <span class="label-text-alt">What are you upto?</span>
                            </label>
                            <input name='task' type="text" placeholder="Type your Task" class="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <div>
                            <label class="label">
                                <span class="label-text-alt">Select Category</span>
                            </label>
                            <select name='category' class="select select-primary w-full max-w-xs">
                                <option disabled selected>Select Category</option>
                                <option>Home</option>
                                <option>personal</option>
                                <option>Office</option>
                            </select>
                        </div>
                       <div className='w-3/4 mx-auto'>
                         <input class="btn btn-outline btn-primary w-full mt-4" type='submit' value='Add Task' />
                       </div>

                    </form>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateToDo;