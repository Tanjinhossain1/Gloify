import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useTask from './hooks/useTask';

const Dashboard = () => {
  const date = new Date();
  const today = date.getDate();
  const {allToDo} = useTask();

    
    const  homeTask = allToDo.filter(t => t.category === 'Home');
    const  personalTask = allToDo.filter(t => t.category === 'personal');
     const completeTask = allToDo.filter(t => t.finishTask === 'saved');
    const  officeTask = allToDo.filter(t => t.category === 'Office');
     const allTodayToDo = allToDo.filter(t => t.today === today);
  

  
  return (
    <div>
      <div class="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content  ">
          <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Dashboard</label>
          <Outlet />
        </div>
        <div class="drawer-side ">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="  menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content bg-transparent">

            <li  >
              <Link to='/'>Today Task <span className='ml-32'> {allTodayToDo?.length}</span> </Link>

            </li>
            <li><Link to='/complete'>Complete Task
              <span className='ml-[110px]'> {completeTask?.length}</span>
            </Link></li>
            <li><Link to='/allTask'>All Task
              <span className='ml-[165px]'> {allTodayToDo?.length}</span>
            </Link></li>
            <hr className='my-8' />
            <li><Link to='/home'>Home Task
              <span className='ml-[140px]'> {homeTask?.length}</span>
            </Link></li>
            <li><Link to='/personal'>Personal
              <span className='ml-[160px]'> {personalTask?.length}</span>
            </Link></li>
            <li><Link to='/office'>Office
              <span className='ml-[180px]'> {officeTask?.length}</span>
            </Link></li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;