import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllTask from './Components/AllTask';
import CompleteTask from './Components/CompleteTask';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import useTask from './Components/hooks/useTask';
import Navbar from './Components/Navbar';
import Office from './Components/Office';
import Personal from './Components/Personal';
import Profile from './Components/Profile';
import ToDo from './Components/ToDo';


function App() {
  const {allToDo,refetch} = useTask();
if(allToDo){
  return (
    <div>
      <Navbar />
     <Routes>
      <Route path='/profilePage' element={<Profile />} />
      <Route path='/' element={<Dashboard />}>
      <Route index element={<ToDo />}></Route>
      <Route path='/complete' element={<CompleteTask />}></Route>
      <Route path='/allTask' element={<AllTask />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/office' element={<Office />}></Route>
      <Route path='/personal' element={<Personal />}></Route>
      </Route>
      
     </Routes>
    </div>
  );
}
 
}

export default App;
