import './App.css';
import { Routes, Route } from "react-router-dom";


import AuthShelterNavbar from "./components/common/navigation/AuthShelterNavbar";
import AuthAdopterNavbar from "./components/common/navigation/AuthAdopterNavbar";
import Navbar from './components/common/navigation/Navbar';
import Footer from "./components/common/footer/Footer";

import MyPets from "./screens/shelter/MyPets";
import Prescreening from './screens/shelter/Prescreening';
import DocumentUpload from './screens/shelter/DocumentUpload';
import AdoptionManagement from './screens/shelter/AdoptionManagement'
import AboutUs from './screens/shelter/AboutUs';
import PetQuiz from './screens/shelter/PetQuiz';
import PetCare from './screens/shelter/PetCare';
import AdopterLogIn from './screens/common/AdopterLogIn';
import AdopterSignUp from './screens/common/AdopterSignUp';
import ShelterSignUp from './screens/common/ShelterSignUp'
import ShelterLogIn from './screens/common/ShelterLogIn';
import Article from './screens/shelter/Article';
import Landing from './screens/common/Landing';
import Tutorial from './screens/shelter/Tutorial';

import MyApplications from './screens/adopter/MyApplications';
import UserProfile from './screens/adopter/UserProfile';
import AllPets from './screens/adopter/AllPets'

function App() {
  return (
    <div className="App">
      
      {/* <Navbar/> */}
      {/* <AuthShelterNavbar /> */}
      <AuthAdopterNavbar />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/OurPets" element={<MyPets />} />
        <Route path="/Prescreening" element={<Prescreening />} />
        <Route path="/DocumentUpload" element={<DocumentUpload />} />
        <Route path="/AdoptionManagement" element={<AdoptionManagement />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Quiz" element={<PetQuiz />} />
        <Route path="/PetCare" element={<PetCare />} />
        <Route path="/LogIn" element={<AdopterLogIn />} />
        <Route path="/SignUp" element={<AdopterSignUp />} />
        <Route path="/ShelterSignUp" element={<ShelterSignUp />} />
        <Route path="/ShelterLogIn" element={<ShelterLogIn />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/Tutorial" element={<Tutorial />} />
        <Route path="/MyApplications" element={<MyApplications />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/AllPets" element={<AllPets/>} />
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
