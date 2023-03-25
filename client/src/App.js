import './App.css';
import Sidebar from './components/navigation/Sidebar';
import Footer from './components/navigation/Footer';
import Header from './components/navigation/Header';
import PageContent from "./components/content/PageContent";
import Landing from './screens/Landing';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Adoptions from './screens/Adoptions';
import AdopterLogIn from "./screens/AdopterLogIn";
import ShelterSignUp from "./screens/ShelterSignUp";
import ShelterLogIn from "./screens/ShelterLogin";
import PetListing from './screens/PetListing';
import AdoptionForm from "./screens/AdoptionForm";
import CatProfile from "./screens/CatProfile";
import PaymentForm from './screens/PaymentForm';

function App() {

  const auth = false;
  // const auth = true;

  return (
    <div className="App">
      {auth ? (
        <>
          <Header />
          <div className="SideMenuAndPageContent">
            <Sidebar />
            <PageContent />
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/AdopterLogIn" element={<AdopterLogIn />} />
          <Route path="/ShelterSignUp" element={<ShelterSignUp />} />
          <Route path="/ShelterLogIn" element={<ShelterLogIn />} />
          <Route path="/PetListing" element={<PetListing />} />
          <Route path="/AdoptionForm" element={<AdoptionForm />} />
          <Route path="/CatProfile" element={<CatProfile />} />
          <Route path="/PaymentForm" element={<PaymentForm />} />
        </Routes>
      )}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
