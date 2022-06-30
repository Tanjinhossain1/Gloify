import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content  ">
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Dashboard</label>
    <Outlet />
  </div> 
  <div class="drawer-side ">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content bg-transparent">
    
      <li><Link to='/'>today Task</Link></li>
      <li><Link to='/tomorrow list'>Sidebar Item 2</Link></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;