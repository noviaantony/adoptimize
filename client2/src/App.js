import './App.css';
import Sidebar from './components/navigation/Sidebar';
import Footer from './components/navigation/Footer';
import Header from './components/navigation/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="SideMenuAndPageContent">
        <Sidebar/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
