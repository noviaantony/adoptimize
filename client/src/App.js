import './App.css';
import { Routes, Route } from "react-router-dom";


// import Sidebar from './components/navigation/Sidebar'
import AuthNavbar from './components/navigation/AuthNavbar'
import Navbar from './components/navigation/Navbar';
import Footer from "./components/footer/Footer";

import MyPets from "./screens/MyPets";
import Prescreening from './screens/Prescreening';
import AdoptionContract from './screens/AdoptionContract';
import AdoptionManagement from './screens/AdoptionManagement'
import AboutUs from './screens/AboutUs';
import Landing from './screens/Landing';
import Quiz from './screens/Quiz';
import PetCare from './screens/PetCare';
import AdopterLogIn from './screens/AdopterLogIn';
import AdopterSignUp from './screens/AdopterSignUp';
import ShelterSignUp from './screens/ShelterSignUp'
import ShelterLogIn from './screens/ShelterLogIn';



function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <AuthNavbar/>
 

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/OurPets" element={<MyPets />} />
        <Route path="/Prescreening" element={<Prescreening />} />
        <Route path="/AdoptionContract" element={<AdoptionContract />} />
        <Route path="/AdoptionManagement" element={<AdoptionManagement />} />
        <Route path="/AboutUs" element ={<AboutUs/>} />
        <Route path="/Quiz" element ={<Quiz/>} />
        <Route path="/PetCare" element ={<PetCare/>} />
        <Route path="/LogIn" element ={<AdopterLogIn/>} />
        <Route path="/SignUp" element ={<AdopterSignUp/>} />
        <Route path="/ShelterSignUp" element ={<ShelterSignUp/>} />
        <Route path="/ShelterLogIn" element ={<ShelterLogIn/>} />
        <Route path = "/" element = {<Landing/>}/>
      

      </Routes> 
      {/* <Footer/> */}
    </div>
  );
}

export default App;
