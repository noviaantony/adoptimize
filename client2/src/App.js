import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from './components/navigation/Sidebar';
import Footer from './components/navigation/Footer';
import Header from './components/navigation/Header';
import PageContent from "./components/content/PageContent";

import Adoptions from './screens/Adoptions';




function App() {
  return (
    <div className="App">
      <Header />
      <div className="SideMenuAndPageContent">
        <Sidebar />
        <PageContent />
      </div>
 

      {/* <Footer /> */}
    </div>
  );
}

export default App;
