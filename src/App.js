import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import ToDo from './Components/ToDo';


function App() {
  return (
    <div>
      <Navbar />
     <Routes>
      <Route path='/' element={<Dashboard />}>
      <Route index element={<ToDo />}></Route>
      </Route>
      
     </Routes>
    </div>
  );
}

export default App;
