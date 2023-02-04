import './App.css';
import { Routes, Route } from "react-router-dom";


// import Sidebar from './components/navigation/Sidebar'
import Navbar from './components/navigation/Navbar'
import Footer from "./components/footer/Footer";

import Home from "./screens/Home";
import MyPets from "./screens/MyPets";
import Prescreening from './screens/Prescreening';
import AdoptionContract from './screens/AdoptionContract';
import AdoptionManagement from './screens/AdoptionManagement'
import AboutUs from './screens/AboutUs';
import Landing from './screens/Landing';
import Quiz from './screens/Quiz';
import PetCare from './screens/PetCare';



function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Navbar2/> */}
      {/* <Home/> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/OurPets" element={<MyPets />} />
        <Route path="/Prescreening" element={<Prescreening />} />
        <Route path="/AdoptionContract" element={<AdoptionContract />} />
        <Route path="/AdoptionManagement" element={<AdoptionManagement />} />
        <Route path="/AboutUs" element ={<AboutUs/>} />
        <Route path="/Quiz" element ={<Quiz/>} />
        <Route path="/PetCare" element ={<PetCare/>} />
        <Route path = "/" element = {<Landing/>}/>

      </Routes> 
      {/* <Footer/> */}
    </div>
  );
}

export default App;
