
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
//import bcrypt from 'bcryptjs';


function App() {

  const gettoken = document.cookie.split("=")[1];
  return (
    <div className="App">
      
      <Routes>
        <Route path='/Login'element={<Login/>}/>
        <Route path = '/'element={<Register/>}/>
        <Route path = '/Home'element={<Home/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
