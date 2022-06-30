import React from 'react';
import useTask from './hooks/useTask';
import ToDoDetail from './ToDoDetail';

const Personal = () => {

    const {allToDo,refetch} = useTask();

    
        const completeTask = allToDo.filter(t=>t.category==='personal')
    
    return (
        <div>
            {allToDo &&
            
             
                completeTask.map(toDo => <ToDoDetail refetch={refetch} toDo={toDo} key={toDo._id} />)
            
            }
        </div>
    );
};

export default Personal;