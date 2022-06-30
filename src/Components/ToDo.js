import React, { useState } from 'react';
import CreateToDo from './CreateToDo';
import useTask from './hooks/useTask';
import ToDoDetail from './ToDoDetail';

const ToDo = () => {
    const [openModal,setOpenModal] = useState(false);
    const [allToDo,refetch] = useTask()
   const date = new Date();
   const today = date.getDate();

       const allTodayToDo = allToDo.filter(t=>t.today===today)
   
    return (
        <div>
            <h1 className='text-3xl font-bold'>TODAY</h1>
            <div className='w-2/4  mt-4'>
            <label  onClick={()=>setOpenModal(true)} for="my-modal-6" class="btn btn-ghost bg-gray-200 py-2 rounded-md w-3/4  text-start">
     
              <p className='w-full '> <span>+</span> Add New Task</p>
         
            </label>
            </div>
            {
                openModal && <CreateToDo refetch={refetch} />
            }
            <div>
                <div>
                    {
                        allTodayToDo.map(toDo=><ToDoDetail refetch={refetch} toDo={toDo} key={toDo._id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ToDo;