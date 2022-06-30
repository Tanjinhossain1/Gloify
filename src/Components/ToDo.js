import React, { useState } from 'react';
import { useQuery } from 'react-query';
import CreateToDo from './CreateToDo';
import ToDoDetail from './ToDoDetail';

const ToDo = () => {
    const [openModal,setOpenModal] = useState(false);
    const { isLoading, error, data: allToDo } = useQuery('allToDo', () =>
     fetch('http://localhost:5000/allToDo').then(res =>
       res.json()
     )
   )
   if(isLoading){
    return <div className='flex justify-center mt-32'><button class="btn btn-square loading"></button></div>
   }
   const date = new Date();
   const today = date.getDate();
   const allTodayToDo = allToDo.filter(t=>t.date.include(today))
    return (
        <div>
            <h1 className='text-3xl font-bold'>TODAY</h1>
            <div className='w-2/4  mt-4'>
            <label  onClick={()=>setOpenModal(true)} for="my-modal-6" class="btn btn-ghost bg-gray-200 py-2 rounded-md w-3/4  text-start">
     
              <p className='w-full '> <span>+</span> Add New Task</p>
         
            </label>
            </div>
            {
                openModal && <CreateToDo />
            }
            <div>
                <div>
                    {
                        allTodayToDo.map(toDo=><ToDoDetail toDo={toDo} key={toDo._id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ToDo;