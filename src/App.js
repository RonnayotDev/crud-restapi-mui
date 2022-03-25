import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Users from './components/users'
import CreateUser from './components/CreateUser'
import Updateuser from './components/Updateuser'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Users/>} />
        <Route path="create" element={<CreateUser />} />
        <Route path="update/:id" element={<Updateuser/>} />
      </Routes>
    </div>
  );
}

export default App;
