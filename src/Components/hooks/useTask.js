import React from 'react';
import { useQuery } from 'react-query';

const useTask = () => {
    const { isLoading, data: allToDo, refetch } = useQuery('allToDo', () =>
    fetch('http://localhost:5000/allToDo').then(res =>
        res.json()
    )
)
if (isLoading) {
    return <div className='flex justify-center mt-32'><button class="btn btn-square loading"></button></div>
}

    return [allToDo,refetch]
};

export default useTask;