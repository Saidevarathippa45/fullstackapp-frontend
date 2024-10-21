import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Navbar/Navbar';
import UsersList from './UserTable/UsersList';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Register from './RegisterPage/Register';
import DeleteUser from './DeleteUser/DeleteUser';
import Login from "./LoginPage/Login"

function App() {
  return (
    <div className="App">
      
      <Navbar/>
        <Routes>
          
          <Route path="getAll" element={<UsersList/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="delete" element={<DeleteUser/>}/>
          <Route path="login" element={<Login/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
