import './App.css';
import Navbar from './Components/Sheard/Navbar/Navbar';
import UserLogin from './Components/Sheard/UserLogin/UserLogin';
import { Routes, Route } from "react-router-dom";
import Carosule from './Components/Sheard/Carosule/Carosule';
import LiveCard from './Components/LiveCard/LiveCard';
import LiveMatch from './Components/LiveMatch/LiveMatch';
import PlanCard from './Components/PlanCard/PlanCard';
import Footer from './Components/Sheard/Footer/Footer';
import Movie from './Components/Movie/Movie';


function App() {
  return (
    <div className="App ">
      <Navbar />
      <Carosule />
      <LiveCard />
      <LiveMatch />
      <PlanCard />
      <div className=' mt-16'>
        <LiveMatch />
      </div>
      <Footer />
      <Movie />

      <Routes>
        <Route path='/signup' element={<UserLogin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
