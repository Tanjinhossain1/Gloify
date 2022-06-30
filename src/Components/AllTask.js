import React from 'react';
import useTask from './hooks/useTask';
import ToDoDetail from './ToDoDetail';

const AllTask = () => {
   const [allToDo,refetch] = useTask()
    return (
        <div>
            {
                allToDo.map(toDo => <ToDoDetail refetch={refetch} toDo={toDo} key={toDo._id} />)
            }
        </div>
    );
};

export default AllTask;