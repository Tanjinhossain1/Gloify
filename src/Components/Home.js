import React from 'react';
import useTask from './hooks/useTask';
import ToDoDetail from './ToDoDetail';

const Home = () => {
    const {allToDo,refetch} = useTask()
    const completeTask = allToDo.filter(t=>t.category==='Home')
    return (
        <div>
            {
                completeTask.map(toDo => <ToDoDetail refetch={refetch} toDo={toDo} key={toDo._id} />)
            }
        </div>
    );
};

export default Home;