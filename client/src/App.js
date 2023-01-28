import './App.css';
import { Routes, Route } from "react-router-dom";

// import Sidebar from './components/navigation/Sidebar'
import Navbar from './components/navigation/Navbar'
import Footer from "./components/footer/Footer";

import Home from "./screens/Home";
import MyPets from "./screens/MyPets";



function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurPets" element={<MyPets />} />
      </Routes> 
      <Footer/>
    </div>
  );
}

export default App;
