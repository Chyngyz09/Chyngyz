import logo from './logo.svg';
import './App.css';

import AboutUs from "./pages/About Us/AboutUs";
import Services from "./pages/Services/Services";
import Ourprojects from "./pages/Our projects/Ourprojects";
import Knowledgebase from "./pages/Knowledge base/Knowledgebase";
import Contacts from "./pages/Contacts/Contacts";

import Header from "./Components/Header/header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";




function App() {
  return (
    <div className='App'>
      <Header />
      <Footer />
      <Main />
    </div>
  );
}

export default App;
