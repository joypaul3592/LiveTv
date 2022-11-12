import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Sheard/Navbar/Navbar';
import UserLogin from './Components/Sheard/UserLogin/UserLogin';
import { Routes, Route } from "react-router-dom";
import Carosule from './Components/Sheard/Carosule/Carosule';
import LiveCard from './Components/LiveCard/LiveCard';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Carosule />
      <LiveCard />

      <Routes>
        <Route path='/signup' element={<UserLogin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
