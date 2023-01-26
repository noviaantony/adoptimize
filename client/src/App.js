import './App.css';
import { Routes, Route } from "react-router-dom";

import Sidebar from './components/navigation/Sidebar'
import Footer from "./components/footer/Footer";

import Home from "./screens/Home";
import MyPets from "./screens/MyPets";



function App() {
  return (
    <div className="App">
      <Sidebar/>
      {/* <Home/> */}
      <MyPets/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyPets" element={<MyPets />} />
      </Routes> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
